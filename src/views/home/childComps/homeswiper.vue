<template>
  <swiper>
        <swiper-item v-for="(item,i) in banners" :key="i">
            <a :href="item.link">
                 <img :src="item.image" alt="">
                </a>
            </swiper-item>
        </swiper>
</template>

<script>
    import{Swiper,SwiperItem} from '../../../components/common/swiper/index'
export default {
    name:'homeswiper',
    components:{
        Swiper,
        SwiperItem
    },
    // 要让子组件使用父组件的数据，需要通过子组件的 props 选项。
    props:{
        banners:{
            type:Array,
            default(){
                return[]
            }
        }
    }
}
</script>

<style>

</style>