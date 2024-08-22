<script setup lang="ts">
const props = defineProps([ "nickname" , "avatar" , "id" ])
</script>
<template>
  <router-link :to="'artist/'+props.id" class="non-style">
    <div class="artist">
      <div class="artist-avatar">
        <div class="artist-avatar__button-play">
          <img src="@/assets/images/central/artists/play.svg">
        </div>
        <div class="artist-avatar__image">
          <img :src="props.avatar" alt="">
        </div>
      </div>
      <p class="artist-nickname">{{ props.nickname }}</p>
      <p class="artist-status">Artist</p>
    </div>
  </router-link>
</template>
<style lang="scss" scoped>
.artist{
  width: 100%;
  padding: 10px;
  border-radius: var(--border-radius-card);
  &-avatar{
    position: relative;
    &__image{
      display: flex;
      justify-content: center;
      aspect-ratio: 1;
      border-radius: 50% ;
      overflow: hidden;
      width: 100%;
      img{
        height: 100%;
      }
    }
    &__button-play{
      transform: translateY(25px);
      opacity: 0;
      position: absolute;
      width: 50px;
      aspect-ratio: 1;
      border-radius: 50%;
      background-color: var(--main-color);
      right: 8px;
      bottom: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.2s ease-in-out;
      img{
        width: 45%;
        aspect-ratio: 1;
        transform: translateX(10%);
      }
    }
  }
  &-nickname{
    margin-top: 14px;
    font-weight: 400;
    font-size: 16px;
  }
  &-status{
    margin-top: 10px;
    font-size: 14px;
    color: #B3B3B3;
  }
  &:hover{
    cursor: pointer;
    background-color: var(--color-card-hover);
  }
  &:hover .artist-avatar__image{
      box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.45);
  }
  &:hover .artist-avatar__button-play{
    opacity: 1;
    transform: translateY(0);
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.45);
  }
}
.non-style{
  color: white;
  text-decoration: none;
}
</style>
