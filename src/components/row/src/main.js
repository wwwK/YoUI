export default  {
  name: 'YoRow',
  componentName: 'YoRow',
  props: {
    tag: {
      type:String,
      default: 'div'
    },
    gutter: Number,
    type: String,
    justify: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'top'
    }
  },
  computed:{
    style(){
      const ret = {};
      if (this.gutter) {
        ret.marginRight = ret.marginLeft = `-${this.gutter / 2}px`;
      }
      return ret;
    }
  },
  render( h ){
    return h(this.tag, {
      class:[
        'yo-row',
        this.justify !== 'start' ? `is-justify-${this.justify}` : '',
        this.align !== 'top' ? `is-align-${this.align}` : '',
        { 'yo-row--flex': this.type === 'flex' }
      ],
      style: this.style
    }, this.$slots.default)
  }
}
