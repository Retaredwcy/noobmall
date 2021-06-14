<template>
    <div id="home">
        <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
        <home-swiper :banners="banners"/>
        <recommend-view :recommends = "recommends"/>
    </div>
</template>

<script>
    import navBar from '../../components/common/navbar/navBar'
    import {getHomeMultidata} from '../../network/home'

    import homeSwiper from './childComps/homeswiper'
    import recommendView from './childComps/RecommendView'

export default {
    name:'home',
    components:{
        navBar, 
        homeSwiper, 
        recommendView
    },
    // 请求并保存对应的数据
    data(){
        return{
            banners:[],
            recommends:[],
        }
    },
    // 创建生命周期函数
    created(){
        // 1.请求多个数据
        getHomeMultidata().then(res =>{
           this.banners = res.data.banner.list
           this.recommends = res.data.recommend.list
        })
    }
   
}
</script>

<style>
    .home-nav{
        background-color: var(--color-tint);
        
    }
</style>