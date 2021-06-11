<template>
  <div class="tab-bar-item" @click="itemClick()">
      <div v-if="!isActive">

      <slot name="item-icon"></slot>
      </div>
      <div v-else>
          
      <slot name="item-active"></slot>
      </div>
      <div :style="activeStyle"><slot name="item-text"></slot></div>
      
      <!-- 这里所有的item都展示了同一个图片，同样的文字 -->
  </div>
</template>

<script>
export default {
    name:'TabbarItem',
    props:{
        path:String,
        activeColor:{
            type:String,
            default:'red'
        }
    },
    data(){
        return{
            // isActive:false
        }
    },
    methods:{
        itemClick(){
            this.$router.push(this.path)
        }
    },
    computed:{
        isActive(){
            // 举例子，比如当前活跃的是/home，那么这里的path就是home
            return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle(){
            return this.isActive ? {color:this.activeColor}:{}
        }
    },

}
</script>

<style>
.tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
    color:black;
  }
  .tab-bar-item img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin: 4px 0 2px 0;
  }
  .actived {
    color:coral;
    font-weight: bolder;
  }
</style>