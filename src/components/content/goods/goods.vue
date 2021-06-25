<template>
  <div class="goods">
    <goods-list-item v-for="(item,i) in goods" :key="i" :goods-item="item"/>
  </div>
</template>

<script>
import goodsListItem from './goodsItem'
import BScroll from 'better-scroll'
export default {
    name:'GoodsList',
    components:{
      goodsListItem
    },
    props:{
      goods:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    created(){

    }
}
</script>

<style>
  .goods{
   display: flex;
   flex-wrap: wrap;
    justify-content: space-around;
    background-color: var(--color-background);
    padding: 2px;
  }
</style>