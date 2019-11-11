<template>
    <div id="container">
     <div id="alt">Amenties</div>
      <div class="row" >
        <div v-for="item in amenties" :key="item">
          <div class="col-6 d-flex"  v-if="!item.toilets" >
            <img v-if="item.title === constants.AMENITIES.soap" src="../assets/soap.png" class="amenties"/>
            <img v-if="item.title === constants.AMENITIES.wash" src="../assets/wash.png" class="amenties"/>
            <img v-if="item.title === constants.AMENITIES.lock" src="../assets/lock.png" class="amenties"/>
            <img v-if="item.title === constants.AMENITIES.faucet" src="../assets/shower.png" class="amenties"/>
            <img v-if="item.title === constants.AMENITIES.light"  src="../assets/light.png" class="amenties"/>
            <img v-if="item.title === constants.AMENITIES.window"  src="../assets/security.png" style="margin-left:8px;" class="amenties"/>          
          <div class="content">{{item.title}}</div>
         </div>
       </div>
    </div>
   <button class="btn btn-default">{{constants.BUTTON_TEXT.show}}</button>
   <div class="rating">
    <p>{{constants.SECURITY}}</p>
     <div class="col-10" >
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
       </div>
    </div>
    <div class="rating">
    <p>{{constants.HYGIENE}}</p>
     <div class="col-5" >
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
       </div>
    </div>
    </div>
</template>
<script lang="ts" src="@/controller/Amenities.ts">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/Aminities.scss";
</style>