import YoButtonGroup from './src/main';

/* istanbul ignore next */
YoButtonGroup.install = function(Vue) {
  Vue.component(YoButtonGroup.name, YoButtonGroup);
};

export default YoButtonGroup;
