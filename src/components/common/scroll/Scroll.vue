<template>
<!-- 
    ref -/children -> --
    ref如果是绑定在组件中的，那么通过·this.$refs.refname·获取到的是一个组件对象
 -->
 
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>

import ObserveDom from '@better-scroll/observe-dom'
import BScroll from 'better-scroll'
BScroll.use(ObserveDom)
export default {
    name:"Scroll",
    props:{
       probeType:{
           type:Number,
           default:0
       },
       pullUpLoad:{
           type:Boolean,
           default:false
       }
    },
    data(){
        return{
            scroll:null
        }
    },
    // 创建生命周期函数
    mounted(){
        // 1.创建bs对象
        this.scroll =  new BScroll(this.$refs.wrapper,{
            observeDOM:true,
            click:true,
            probeType:this.probeType,
            pullUpLoad:this.pullUpLoad,
        })
        // 2.Probetype=3的时候，可以监听滚动的位置
        this.scroll.on('scroll',(position) => {
            // console.log(position)
            // 自定义事件，传入父组件
            this.$emit('scroll',position)
        })
        // 3.监听上拉事件
        this.scroll.on('pullingUp', () => {
            this.$emit('pullingUp')
        })
    },
    // 完成加载更多
    methods:{
        finishPullUp(){
            this.scroll.finishPullUp()
        }
    }
}
</script>

<style>

</style>