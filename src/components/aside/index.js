import YoAside from './src/main';

/* istanbul ignore next */
YoAside.install = function(Vue) {
  Vue.component(YoAside.name, YoAside);
};

export default YoAside;
