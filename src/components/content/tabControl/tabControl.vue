<template>
  <div class="tab-control">
      <!-- 如果在内容是只有文字组成的情况下，是没有必要使用vue插槽的 -->
      <div v-for="(item,index) in titles" :key="index" 
      :class="{active:index === currentIndex}" 
      @click="itemClick(index)">
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name:'tabControl',
    props:{
        titles:{
            type:Array,
            default(){
                return
            }
        }
    },
    data(){
        return{
            currentIndex:0
        }
    },
    methods:{
        itemClick(index){
            this.currentIndex = index
            // 由内部向外部传送数据index
            this.$emit('tabClick',index)
        }
    }
}
</script>

<style>
    .tab-control{
        display: flex;
        background-color: #fff;
        text-align: center;
    }
    .tab-control div{
        flex: 1;
        line-height: 12vw;
        justify-content:space-around;
    }
    .active{
        color: var(--color-high-text);
    }
</style>