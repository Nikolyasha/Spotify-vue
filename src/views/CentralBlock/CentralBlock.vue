<script lang="ts" setup>
import ButtonArrow from "@/components/Tools/ButtonArrow.vue"
import Profile from "@/components/CentralBlock/Profile.vue";
import CardMix from "@/components/CentralBlock/CardMix.vue";
import {useMixesStore} from "@/stores/mixes";
import MixRecommendation from "@/components/CentralBlock/MixRecommendation/MixRecommendation.vue";
import {onUpdated, ref} from "vue";
import Button from "@/components/Tools/Button.vue";
import {useArtistsStore} from "@/stores/artists";
import Artist from "@/components/CentralBlock/Artist.vue";
import {useRouter} from "vue-router";
const isAuth = ref<boolean>(false)
const isTransparentHeader = ref<boolean>(false)
const header = ref()
const content = ref()
const router = useRouter()

function isScroll(){
  if (content.value.scrollTop >= 96) {
    header.value.style.background="#121212";
  }
  if (content.value.scrollTop === 0 && !isTransparentHeader.value) {
    header.value.style.background="rgba(0,0,0,.5)";
  }else if (content.value.scrollTop === 0 && isTransparentHeader.value){
    header.value.style.background="transparent";
  }

}
function isTrans(value:boolean){
  isTransparentHeader.value = value
  isTransparentHeader.value == value ? header.value.style.background="transparent" : ''
}
function goBack(){
  router.go(-1)
}
function goNext(){
  router.go(1)
}
</script>

<template>
  <div class="central-block">
    <div class="header" ref="header" >
      <div class="buttons">
        <ButtonArrow :orientation="'left'" @on-click-arrow="goBack"></ButtonArrow>
        <ButtonArrow :orientation="'right'" style="margin-left: 10px" @on-click-arrow="goNext"></ButtonArrow>
      </div>
      <div class="profile" v-if="isAuth">
        <Profile :nickname="'Nikolyasha'"></Profile>
      </div>
      <div class="login-buttons">
        <router-link to="/signup" class="sign-up-button">Sign up</router-link>
        <Button size="large" title="Log in" link="/login"></Button>
      </div>
    </div>
    <div class="main-content"  >
      <div class="main-content__wrapper" @scroll="isScroll" ref="content">
        <router-view @is-transparent-header="isTrans"></router-view>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.central-block{
  width: 100%;
  height: 100%;
  //scroll-behavior: smooth;
  position: relative;
  .header{
    height: 65px;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    background-color: rgba(0,0,0,.5);
    position: absolute;
    z-index: 1000;
    transition: background-color 0.4s ease;
    .buttons{
      display: flex;
      z-index: 0;
    }
    .login-buttons{
      display: flex;
      align-items: center;
      .sign-up-button{
        text-decoration: none;
        color: #fff;
        opacity: 0.7;
        margin-right: 18px;
        transition: opacity 0.2s ease-in-out;
        &:hover{
          opacity: 1;
        }
      }
    }
  }
  .main-content{
    height: 100%;
    &__wrapper{
      height: 100%;
      overflow-y: scroll;
      scrollbar-width: none;
    }
  }

}
</style>