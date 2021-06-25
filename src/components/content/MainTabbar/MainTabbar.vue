<template>
  <div class="mainTabbar">
    <tabbar><!-- 这里组件中引入了tabbar类，下面的tabbar-item同理 -->
      <tabbar-item path='/home'>
        <img slot="item-icon" src="../../../assets/img/tabbar/auto.svg" alt="">
        <img slot="item-active" src="../../../assets/img/tabbar/logistics-icon-fill.svg" alt="">
        <div slot="item-text">首页</div>
      </tabbar-item>
      <tabbar-item path='/category'>
        <img slot="item-icon" src="../../../assets/img/tabbar/all.svg" alt="">
        <img slot="item-active" src="../../../assets/img/tabbar/all-fill.svg" alt="">
        <div slot="item-text">分类</div>
      </tabbar-item>
      <tabbar-item path='/cart'>
        <img slot="item-icon" src="../../../assets/img/tabbar/cart-Empty.svg" alt="">
        <img slot="item-active" src="../../../assets/img/tabbar/add-cart-fill.svg" alt="">
        <div slot="item-text">购物车</div>
      </tabbar-item>
      <tabbar-item  path='/profile'>
        <img slot="item-icon" src="../../../assets/img/tabbar/bussiness-man.svg" alt="">
        <img slot="item-active" src="../../../assets/img/tabbar/bussiness-man-fill.svg" alt="">
        <div slot="item-text">我的</div>
      </tabbar-item>
    </tabbar>
    </div>
</template>

<script>
  import tabbar from "../../../components/common/tabbar/tabbar"
  import TabbarItem from "../../../components/common/tabbar/TabbarItem"
export default {
  name: 'MainTabbar',
  components:{
    tabbar,
    TabbarItem
  }
}
  
</script>

<style>
</style>