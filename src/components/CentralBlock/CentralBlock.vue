<script lang="ts" setup>
import ButtonArrow from "@/components/Tools/ButtonArrow.vue"
import Profile from "@/components/CentralBlock/Profile.vue";
import CardMix from "@/components/CentralBlock/CardMix.vue";
import {useMixesStore} from "@/stores/mixes";
import MixRecommendation from "@/components/CentralBlock/MixRecommendation/MixRecommendation.vue";
import {ref} from "vue";

const mixesBank = useMixesStore()

const welcomeMixes = mixesBank.recommended.slice(0,6)
const yourTopMixes = mixesBank.recommended.slice(0,4)
const mixesBlocks = ref([
  { title: 'Your top mixes' , mixes: yourTopMixes },
  { title: 'Made for you' , mixes: yourTopMixes },
  { title: 'Recently played' , mixes: yourTopMixes },
  { title: 'Jump back in' , mixes: yourTopMixes },
  { title: 'Uniquely yours' , mixes: yourTopMixes },
  { title: 'Just the hits' , mixes: yourTopMixes },
])
</script>

<template>
  <div class="central-block">
    <div class="linear"></div>
    <div class="header">
      <div class="buttons">
        <ButtonArrow :orientation="'left'"></ButtonArrow>
        <ButtonArrow :orientation="'right'" style="margin-left: 22px"></ButtonArrow>
      </div>
      <div class="profile">
        <Profile :nickname="'Nikolyasha'"></Profile>
      </div>
    </div>
    <div class="main-content">
      <div class="welcome">
        <h4 class="welcome-title">
          Good afternoon
        </h4>
        <div class="welcome-mixes">
          <div class="welcome-mixes__item"
               v-for="(mix,index) in welcomeMixes"
               :key="index">
            <CardMix
                :title="mix.title"
                :preview="mix.preview"
                :type="'horizontal'"></CardMix>
          </div>
        </div>
      </div>
      <div class="your-top-mixes recommendation-mixes"
           v-for = "(mixes,index) in mixesBlocks "
           :key = "index">
        <MixRecommendation :title="mixes.title" :mixes="yourTopMixes"></MixRecommendation>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.central-block{
  min-height: 100vh;
  width: 100%;
  background-color: #121212;
  position: relative;
  .linear{
    top: 0;
    z-index: 0;
    position: absolute;
    width: 100%;
    height: 600px;
    background: linear-gradient(#3333A3, #121212);
  }
  .header{
    z-index: 1;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 0 41px;
    .buttons{
      display: flex;
      z-index: 0;
    }
  }
  .main-content{
    padding: 30px 41px;
    position: relative;
    min-height: 100vh;
    z-index: 1;
    p{
      z-index: 100;
      height: 1000px;
    }
    .welcome{
      &-title{
        font-weight: 700;
        font-size: 39px;
      }
      &-mixes{
        margin-top: 29px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px 31px;
      }
    }
    .recommendation-mixes{
      margin-top: 50px;
    }
  }

}

</style>