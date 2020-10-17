import YoHeader from './src/main';

/* istanbul ignore next */
YoHeader.install = function(Vue) {
  Vue.component(YoHeader.name, YoHeader);
};

export default YoHeader;
