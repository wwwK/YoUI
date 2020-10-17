<template>
  <div id="app">
    <div class="demo-button">
      <div class="yo-row">
        <yo-button autofocus native-type="reset">默认按钮</yo-button>
        <yo-button type="primary">主要按钮</yo-button>
        <yo-button type="success">成功按钮</yo-button>
        <yo-button type="info">信息按钮</yo-button>
        <yo-button type="warning">警告按钮</yo-button>
        <yo-button type="danger">危险按钮</yo-button>
      </div>
      <div class="yo-row">
        <yo-button  plain>朴素按钮</yo-button>
        <yo-button type="primary" plain round>主要按钮</yo-button>
        <yo-button type="success" plain round>成功按钮</yo-button>
        <yo-button type="info" plain>信息按钮</yo-button>
        <yo-button type="warning" plain>警告按钮</yo-button>
        <yo-button type="danger" plain>危险按钮</yo-button>
      </div>
      <div class="yo-row">
        <yo-button  circle disabled></yo-button>
        <yo-button type="primary"   icon="yo-icon-star-off" circle></yo-button>
        <yo-button type="success"  icon="yo-icon-star-off"  circle></yo-button>
        <yo-button type="info"  icon="yo-icon-star-off" circle></yo-button>
        <yo-button type="warning"  icon="yo-icon-star-off"  circle></yo-button>
        <yo-button type="danger"  icon="yo-icon-star-off" circle></yo-button>
      </div>
      <div class="yo-row">
          <yo-button type="text"  :loading="true">文字按钮</yo-button>
          <yo-button type="text" disabled>文字按钮</yo-button>
      </div>
      <div class="yo-row">
        <yo-button-group>
          <yo-button type="success">上一页</yo-button>
          <yo-button type="success">首页</yo-button>
          <yo-button type="success">下一页</yo-button>
        </yo-button-group>
        <yo-button-group>
          <yo-button type="primary">首页</yo-button>
        </yo-button-group>
        <yo-button-group>
          <yo-button type="info">上一页</yo-button>
          <yo-button type="info">首页</yo-button>
          <yo-button type="info">下一页</yo-button>
        </yo-button-group>
        <yo-button-group>
          <yo-button type="primary">上一页</yo-button>
          <yo-button type="primary">首页</yo-button>
          <yo-button type="primary">下一页</yo-button>
        </yo-button-group>
      </div>
      <yo-row>
        <yo-button-group>
          <yo-button type="warning">上一页</yo-button>
          <yo-button type="warning">首页</yo-button>
          <yo-button type="warning">下一页</yo-button>
        </yo-button-group>
        <yo-button-group>
          <yo-button type="danger" size="medium" plain>上一页</yo-button>
          <yo-button type="danger" size="medium"  plain>首页</yo-button>
          <yo-button type="danger" size="medium" icon="yo-icon-star-off" plain>下一页 <i class="yo-icon-star-off"></i></yo-button>
        </yo-button-group>
        <yo-button-group>
          <yo-button type="warning" size="mini" plain>上一页</yo-button>
          <yo-button type="warning" size="mini" :loading="true" plain>首页</yo-button>
          <yo-button type="warning" size="mini" icon="yo-icon-star-off yo-icon--right" plain>下一页</yo-button>
        </yo-button-group>
      </yo-row>
    </div>
    <div class="demo-layout">
      <m-row :gutter="20">
        <m-col :span="12">
            <div class="inner">A</div>
        </m-col>
        <m-col :span="12">
          <div class="inner">A</div>
        </m-col>
      </m-row>
      <m-row>
        <m-col :span="6">
          <div class="inner">A</div>
        </m-col>
        <m-col :span="6">
          <div class="inner">A</div>
        </m-col>
        <m-col :span="6">
          <div class="inner">A</div>
        </m-col>
        <m-col :span="6">
          <div class="inner">A</div>
        </m-col>
      </m-row>
      <m-row>
        <m-col :span="8">
          <div class="inner">A</div>
        </m-col>
        <m-col :span="8">
          <div class="inner">A</div>
        </m-col>
        <m-col :span="8">
          <div class="inner">A</div>
        </m-col>
      </m-row>
      <m-row type="flex" justify="space-between">
        <m-col :span="8">
          <div class="inner">flex</div>
        </m-col>
        <m-col :span="8">
          <div class="inner">flex</div>
        </m-col>
        <m-col :span="4">
          <div class="inner">flex</div>
        </m-col>
      </m-row>
      <m-row>
        <m-col :span="4" :xs="24">
          <div class="inner">A</div>
        </m-col>
        <m-col :span="4" :md="16">
          <div class="inner">A</div>
        </m-col>
        <m-col :span="4" :md="4">
          <div class="inner">A</div>
        </m-col>
        <m-col :span="4" :md="0">
          <div class="inner">A</div>
        </m-col>
        <m-col :span="4" :md="0">
          <div class="inner">A</div>
        </m-col>
        <m-col :span="4" :md="0">
          <div class="inner">A</div>
        </m-col>
      </m-row>
      <m-row>
        <m-col :span="6">
          <div class="inner">A</div>
        </m-col>
        <m-col :span="6" :push="6">
          <div class="inner">A</div>
        </m-col>
      </m-row>
    </div>
    <div class="demo-form">
        <yo-row>
            <yo-col :span="24">
                <yo-radio>nice</yo-radio>
            </yo-col>
        </yo-row>
    </div>
  </div>
</template>

<script>
import YoButton from './components/button'
import YoButtonGroup from './components/button-group'
import YoRow from './components/row'
import YoCol from './components/col'
import YoRadio from './components/radio'
export default {
  name: 'App',
  components: {
    YoButton,
    YoButtonGroup,
    YoRow,
    YoCol,
    YoRadio
  }
}
</script>

<style lang="scss">
  .demo-button .yo-row {
    margin-bottom: 10px;
  }
  .demo-button .yo-row  .yo-button + .yo-button {
    margin-left: 10px;
  }
  .demo-button .yo-row .yo-button-group .yo-button + .yo-button {
    margin-left: 0;
  }
  .demo-button .yo-row  .yo-button-group + .yo-button-group {
    margin-left: 10px;
  }
  .demo-layout .yo-row{
    margin-bottom: 10px;
  }
  .demo-layout .yo-col {
    .inner {
      border: 1px solid #FFF;
      background: #409EFF;
    }
  }
</style>
