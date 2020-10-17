import YoCol from './src/main';

/* istanbul ignore next */
YoCol.install = function(Vue) {
  Vue.component(YoCol.name, YoCol);
};

export default YoCol;

