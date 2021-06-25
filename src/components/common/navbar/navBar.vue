<template>
  <div class="nav-bar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>

export default {
    name:'navBar'
}
</script>

<style>
/* 1vw = 3.75px in i8 */
    .nav-bar{
        display: flex;
        line-height: 13.09vw;
        text-align: center;
    }   
    .left,.right{
        width: 17vw;
    }
    .center{
        font-size: 4.2vw;
        /* 这里的样式设定是把剩余的部分全部占据 */
        flex: 1;
    }
</style>
