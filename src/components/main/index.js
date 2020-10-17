import YoMain from './src/main';

/* istanbul ignore next */
YoMain.install = function(Vue) {
  Vue.component(YoMain.name, YoMain);
};

export default YoMain;
