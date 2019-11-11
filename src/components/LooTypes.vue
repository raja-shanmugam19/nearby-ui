<template>
<div >
  <div v-for="item in amenties" :key="item">
    <div v-if="item.toilets">
  <div class="loo-types"  v-for="loo in item.toilets" :key="loo">
  <div class="alt-left" >
    <img src="@/assets/western.png" class="western"/>
    <p id="cls">{{loo}}</p>
    <i class="fa fa-restroom" aria-hidden="true"><i class="fa fa-wheelchair" aria-hidden="true"></i></i>
  </div>
   <div class="right">
    <i class="fa fa-location-arrow" aria-hidden="true">{{constants.DIRECTIONS}}</i><br/>
    <div class="d-flex">
    <i class="fa fa-images" aria-hidden="true"></i>
    <i class="fa fa-edit" aria-hidden="true" style="margin-left:10px;"></i>
    <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
   </div>
  </div>  
  <Amenities></Amenities>
 </div>
    </div>
  </div>
</div>
</template>
<script lang="ts" src="@/controller/LooTypes.ts">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/LooTypes.scss";
</style>