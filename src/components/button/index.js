import YoButton from './src/main';

/* istanbul ignore next */
YoButton.install = function(Vue) {
  Vue.component(YoButton.name, YoButton);
};

export default YoButton;

