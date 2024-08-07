<script lang="ts" setup>
import MixRecommendation from "@/components/CentralBlock/MixRecommendation/MixRecommendation.vue";
import Artist from "@/components/CentralBlock/Artist.vue";
import {ref} from "vue";
import {useMixesStore} from "@/stores/mixes";
import {useArtistsStore} from "@/stores/artists";

const mixesBank = useMixesStore()
const artistsBank = useArtistsStore()
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
  <div class="main-content">
    <div class="main-content__wrapper">
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
<style lang="scss" scoped>
.main-content{
  position: relative;
  &__wrapper{
    padding: 94px 24px 30px 24px;
  }
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
</style>