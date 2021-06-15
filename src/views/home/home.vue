<template>
    <div id="home">
        <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
        <home-swiper :banners="banners"/>
        <recommend-view :recommends = "recommends"/>
        <feature/>
        <tab-control class="tab-control"
        :titles="['流行','新款','精选']"/>
        <goods-list/>
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

export default {
    name:'home',
    components:{
        navBar, 
        homeSwiper, 
        recommendView,   
        Feature,
        tabControl,
        GoodsList
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
            }
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
        getHomeMultidata(){
            getHomeMultidata().then(res =>{
           this.banners = res.data.banner.list
           this.recommends = res.data.recommend.list
        })
        },
        getHomeGoods(type){
            // 修改得到的type对象
            const page = this.goods[type].page +1
            getHomeGoods(type,1).then(res=>{
                console.log(res)
                 // pop的前30条数据 
           this.goods[type].list.push(...res.data.list)
           this.goods[type].list.page += 1
        })
        }
    }
   
}
</script>

<style>
    #home{  
        padding: 12vw 0 10.4vw;
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
        position: sticky;
        top:12vw
    }
</style>