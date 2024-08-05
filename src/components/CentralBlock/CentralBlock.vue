<script lang="ts" setup>
import ButtonArrow from "@/components/Tools/ButtonArrow.vue"
import Profile from "@/components/CentralBlock/Profile.vue";
import CardMix from "@/components/CentralBlock/CardMix.vue";
import {useMixesStore} from "@/stores/mixes";
import MixRecommendation from "@/components/CentralBlock/MixRecommendation/MixRecommendation.vue";
import {ref} from "vue";
import Button from "@/components/Tools/Button.vue";
import {useArtistsStore} from "@/stores/artists";
import Artist from "@/components/CentralBlock/Artist.vue";

const mixesBank = useMixesStore()
const artistsBank = useArtistsStore()
const isAuth = ref<boolean>(false)

const welcomeMixes = mixesBank.recommended.slice(0,6)
const yourTopMixes = mixesBank.recommended.slice(0,6)
const popularArtists = artistsBank.artists.slice(0,6)
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
    <div class="linear" v-if="isAuth"></div>
    <div class="linear-gray" v-if="!isAuth"></div>
    <div class="header">
      <div class="buttons">
        <ButtonArrow :orientation="'left'"></ButtonArrow>
        <ButtonArrow :orientation="'right'" style="margin-left: 10px"></ButtonArrow>
      </div>
      <div class="profile" v-if="isAuth">
        <Profile :nickname="'Nikolyasha'"></Profile>
      </div>
      <div class="login-buttons">
        <a href="" class="sign-up-button">Sign up</a>
        <Button size="large" title="Log in"></Button>
      </div>
    </div>
    <div class="main-content">
      <div class="popular-artists">
        <h4 class="popular-artists__title">Popular artists</h4>
        <div class="popular-artists__content">
          <artist v-for="(artist,index) in popularArtists"
                  :key="index"
                  :nickname="artist.nickname"
                  :avatar="artist.avatar" style="width: 16.66%">
          </artist>
        </div>
      </div>
<!--      <div class="welcome">-->
<!--        <h4 class="welcome-title">-->
<!--          Good afternoon-->
<!--        </h4>-->
<!--        <div class="welcome-mixes">-->
<!--          <div class="welcome-mixes__item"-->
<!--               v-for="(mix,index) in welcomeMixes"-->
<!--               :key="index">-->
<!--            <CardMix-->
<!--                :title="mix.title"-->
<!--                :preview="mix.preview"-->
<!--                :type="'horizontal'"></CardMix>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
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
  width: 100%;
  //scroll-behavior: smooth;
  position: relative;
  .linear{
    top: 0;
    z-index: 0;
    position: absolute;
    width: 100%;
    height: 600px;
    background: linear-gradient(#3333A3, #121212);
  }
  .linear-gray{
    top: 0;
    z-index: 0;
    position: absolute;
    width: 100%;
    height: 300px;
    background: linear-gradient(#282828, #121212);
  }
  .header{
    height: 65px;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    background-color: #121212;
    position: sticky;
    z-index: 1000;
    .buttons{
      display: flex;
      z-index: 0;
    }
    .login-buttons{
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
    padding: 30px 24px;
    position: relative;
    min-height: 100vh;
    z-index: 1;
    p{
      z-index: 100;
      height: 1000px;
    }
    .popular-artists{
      &__title{
        font-size: 24px;
        font-weight: 700;
      }
      &__content{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: 18px -10px 0 -10px;
      }
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