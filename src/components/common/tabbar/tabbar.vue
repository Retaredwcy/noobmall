<template>

  <div id="tab-bar">
      <slot></slot>
    </div> 

</template>

<script>

export default {
    name:'tabbar'
}
</script>

<style>
  #tab-bar {
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -0.27vw 0.27w rgba(100,100,100,.2);
    z-index: 9999;
    
  } 
  
</style>