import {
    Dimensions
  } from 'react-native';
import CustomToolbar from './CustomToolbar.js';
import CustomText from './CustomText.js';
export {CustomToolbar,CustomText}
export default {CustomToolbar,CustomText}

const {height, width} = Dimensions.get('window');
  
export const ResHeight = (h) => {
  return height*(h/100);
};

export const ResWidth = (w) => {
  return width*(w/100);
};

export const ResFontSizes = (f) => {
  return Math.sqrt((height*height)+(width*width))*(f/100);
};