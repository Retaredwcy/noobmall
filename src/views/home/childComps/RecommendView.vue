<template>
  <div class="recommend">
      <div v-for="(item,i) in recommends" :key="i">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    name:'RecommendView',
    props:{
        recommends:{
            type:Array,
            default(){
                return[]
            }
        }
    }
}
</script>

<style scoped>
    .recommend{
        display: flex;
        width: 100%;
        text-align: center;
        font-size: 3.73vw;
        justify-content:space-around;
        border-bottom: 2.2vw solid #eee;
        padding: 2.4vw 0 2.4vw;
    }
    .recommend a{
        display: block;
        flex:1;
    }
    .recommend img{
        width:20vw;
        flex: 1;
        margin-bottom: 0.7vw;
    }
</style>
