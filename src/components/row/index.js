import YoRow from './src/main';

/* istanbul ignore next */
YoRow.install = function(Vue) {
  Vue.component(YoRow.name, YoRow);
};

export default YoRow;

