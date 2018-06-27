import React, {
    Component
} from "react";
import { Constants } from '../utils/';
export default class Service {
    static instance;

    static getInstance() {
        if (this.instance == undefined) {
            this.instance = new Service();
        }
        return this.instance;
    }

    getDriverDetails = (mobile, successCallback, errorCallback, baseClass) => {

        baseClass._showProgress();
        fetch(Constants.DRIVER_DETAILS, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                phone: mobile,
                api_key: '08f2b96e73a4ebb7d2ba478c3ab1e54e',
            })
        }).then((response) => response.json()).then((responseJson) => {
            baseClass._hideProgress();
            if (responseJson.status.toUpperCase() == 'SUCCESS') {
                successCallback(responseJson);

            } else if (responseJson.status.toUpperCase() == "ERROR") {
                errorCallback(responseJson);
            }
            return responseJson;

        }).catch((error) => {
            console.log("Api call error");
            // alert(error.message);
        });

    }
    sendOTP = (mobile, successCallback, errorCallback, baseClass) => {
        this.callAPI(Constants.OTP_SEND, 'GET', mobile, "/AUTOGEN/veggies", null, successCallback, errorCallback, baseClass);
    }
    verifyOTP = (otp, Details, successCallback, errorCallback, baseClass) => {
        this.callAPI(Constants.OTP, 'GET', "/" + Details, "/" + otp, null, successCallback, errorCallback, baseClass);
    }

    getHome = (id, successCallback, errorCallback, baseClass) => {

        this.callAPIs(Constants.HOME, 'GET', id, '', successCallback, errorCallback, baseClass);
    }

    getPickUp = (bodys, id, successCallback, errorCallback, baseClass) => {

        baseClass._showProgress();
        fetch(Constants.STATUS + id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bodys),
        }).then((response) => {
            return response.json()
        })
            .then(responseData => {
                baseClass._hideProgress();
                successCallback(responseData);
                return responseData;
            })
            .catch((error) => {
                this.log("In error" + error);
            });
    }
    getVerify = (id, successCallback, errorCallback, baseClass) => {

        this.callAPIs(Constants.VERIFY, 'GET', id, '', successCallback, errorCallback, baseClass);
    }

    callAPI = (url, methodType, mobile, urls, data, successCallback, errorCallback, baseClass) => {
        baseClass._showProgress();
        fetch(url + mobile + urls, {
            method: methodType,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: '',
        }).then((response) => {
            return response.json()
        })
            .then(responseData => {
                this.log(responseData);
                if (responseData.Status.toUpperCase() == 'SUCCESS') {
                    successCallback(responseData);
                    baseClass._hideProgress();
                } else if (responseData.Status.toUpperCase() == "ERROR") {
                    errorCallback(responseData);
                    baseClass._hideProgress();
                }
                return responseData;
            })
            .catch((error) => {
                this.log("In error" + error);
            });
    }

    callAPIs = (URL, methodType, id, bodys, successCallback, errorCallback, baseClass) => {
        baseClass._showProgress();
        fetch(URL + id, {
            method: methodType,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: bodys,
        }).then((response) => {
            return response.json()
        })
            .then(responseData => {
                baseClass._hideProgress();
                successCallback(responseData);
                // if (responseData.status.toUpperCase() == 'READY_FOR_DELIVERY') {
                // } else if (responseData.status.toUpperCase() == "ERROR") {
                //     errorCallback(responseData);
                // }
                return responseData;
            })
            .catch((error) => {
                this.log("In error" + error);
            });
    }

    log(response) {
        console.log(response);
    }
}
