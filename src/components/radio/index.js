import YoRadio from './src/main';

/* istanbul ignore next */
YoRadio.install = function(Vue) {
  Vue.component(YoRadio.name, YoRadio);
};

export default YoRadio;
