<template>
  <div class="goods-item">

        <img :src="goodsItem.show.img" alt="">
      <div class="goods-info">
          <p>{{goodsItem.title}}</p>
          <span class="price">价格：{{goodsItem.price}}</span>
          <br/>
          <span class="collect">收藏：{{goodsItem.cfav}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name:'goodsItem',
    props:{
        goodsItem:{
            type:Object,
            default(){
                return{}
            }
        }
    }
}
</script>

<style>
     .goods-item {
    padding-bottom: 12vw;
    position: relative;
    width: 40%;
  }
  .goods-item img {
    width: 100%;
    border-radius: 1.33vw;
    border:3px solid var(--color-tint);
  }
  .goods-info {
    font-size: 3.2vw;
    position: absolute;
    bottom: 1.33vw;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 0.77vw;
  }
  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 5vw;
  }
  .goods-info .collect {
    position: relative;
  }
  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -4vw;
    top: -0.267vw;
    width: 3.74vw;
    height: 3.74vw;
  }
</style>