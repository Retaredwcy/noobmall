<template>
    <div id="category">
        <nav-bar class="home-nav"><div slot="center">分类</div></nav-bar>
    </div>
</template>

<script>
import navBar from '../../components/common/navbar/navBar'
export default {
    name:'category',
    components:{
        navBar
    },
}
</script>

<style>
    .home-nav{
        background-color: var(--color-tint);
    }
</style>