<template>
    <div id="home" class="wrapper">
        <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
        <scroll class="content"  
        ref="Scroll" 
        :probe-type="3" 
        @scroll="contentScroll"
        :pull-up-load="true"
        @pullingUp="loadMore">
        <home-swiper :banners="banners"/>
        <recommend-view :recommends = "recommends"/>
        <feature/>
        <tab-control class="tab-control"
        :titles="['流行','新款','精选']" @tabClick='tabClick'/>
        <goods-list :goods="goods[currentType].list" />
        </scroll>
        <!-- 组件中的.native修饰符，是在监听一个组件的原生事件的时候，给对应的事件加上这个修饰符，才能进行监听 -->
        <back-top @click.native ='backClick()' v-show="isShowBackTop"/>
    </div>
</template>

<script>
    import navBar from '../../components/common/navbar/navBar'
    import {getHomeMultidata,getHomeGoods} from '../../network/home'
    import tabControl from '../../components/content/tabControl/tabControl'
    import Feature from './childComps/Feature.vue'
    import homeSwiper from './childComps/homeswiper'
    import recommendView from './childComps/RecommendView'
    import GoodsList from '../../components/content/goods/goods'

  import Scroll from '../../components/common/scroll/Scroll'
    import BackTop from '../../components/content/backTop/backTop'
export default {
    name:'home',
    components:{
        navBar, 
        homeSwiper, 
        recommendView,   
        Feature,
        tabControl,
        GoodsList,
        Scroll,
        BackTop
    },
    // 请求并保存对应的数据
    data(){
        return{
            banners:[],
            recommends:[],
            // 构建数据请求的模型，在这个对象中保存这些数据
            goods:{
                'pop': {page:0,list:[]},
                'new':{page:0,list:[]},
                'sell':{page:0,list:[]},
            },
            currentType:'pop',
            isShowBackTop:false
        }
    },
    // 创建生命周期函数
    created(){
        // 1.请求多个数据
        this.getHomeMultidata()
        // 请求商品数据
        this.getHomeGoods('pop',1)
        this.getHomeGoods('new',1)
        this.getHomeGoods('sell',1)
    },
    methods:{
        contentScroll(position){
           
            this.isShowBackTop = -position.y > 1000
        },
        // $refs访问对应子组件的内容
        backClick(){
            this.$refs.Scroll.scroll.scrollTo(0,0,500)
        },
        // 上拉加载的相关方法
        loadMore(){
            this.getHomeGoods(this.currentType)
            this.$refs.Scroll.scroll.refresh()
        },
        /*
            事件监听的相关方法
        */
    //    tabClick方法负责监听点击时间，并切换相应的页面
       tabClick(index){
           switch(index){
               case 0:
                    this.currentType='pop'
                    break
                case 1:
                    this.currentType='new'  
                    break
                case 2:
                    this.currentType = 'sell'
                    break
           }
       },
        /*网络请求的相关方法 */
        getHomeMultidata(){
            getHomeMultidata().then(res =>{
           this.banners = res.data.banner.list
           this.recommends = res.data.recommend.list
        })
        },
        getHomeGoods(type){
            // 修改得到的type对象,给页码+1
            const page = this.goods[type].page +1
            getHomeGoods(type,1).then(res=>{
                 // pop的前30条数据 
           this.goods[type].list.push(...res.data.list)
           this.goods[type].list.page += 1
           this.$refs.Scroll.finishPullUp()
        })
        }
    }
   
}
</script>

<style scoped>
/* scoped关键字 样式只会在这个文件中起到效果 */
    #home{  
        padding: 12vw 0 10vw;
        height: 100vh;
}
    .home-nav{
        background-color: var(--color-tint);
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9999;       
    }
    .tab-control{
        /* position: sticky; */
        z-index: 999;
        top:12vw
    }
    .content{
        position: absolute;
        top: 13.19vw;
        bottom: 13vw;
    }
</style>