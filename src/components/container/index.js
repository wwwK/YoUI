import YoContainer from './src/';
import YoContainer from './src/main';

/* istanbul ignore next */
YoContainer.install = function(Vue) {
  Vue.component(YoContainer.name, YoContainer);
};

export default YoContainer;
