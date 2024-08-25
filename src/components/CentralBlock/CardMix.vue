<script lang="ts" setup>
const props = defineProps([
  'title',
  'artists',
  'preview',
  'type',
  'data',
  'typeRelease',
  'idRelease'
])
</script>

<template>
  <router-link :to="'/release/' + props.idRelease ">
    <div :class="props.type">
      <div class="mix-card__preview">
        <img :src="props.preview" alt="">
        <div class="mix-card__preview__button-play">
          <img src="@/assets/images/central/artists/play.svg">
        </div>
      </div>
      <div class="mix-card__info">
        <p class="info-title"> {{ props.title }} </p>
        <p class="info-artists" v-if="props.artists"> {{ props.artists }} </p>
        <p class="info-date" v-if="props.data">
          <span class="info-date__text">{{ props.data.split("-")[0] }}</span>
          <span class="info-date__circle"> ● </span>
          <span class="info-date__type">{{ props.typeRelease }} </span>
        </p>
      </div>
    </div>
  </router-link>
</template>

<style scoped lang="scss">

.vertical{
  cursor: pointer;
  //background-color: rgba( 255, 255, 255, 0.04 );
  padding: 12px;
  border-radius: var(--border-radius-card);
  height: 100%;
  transition: background-color 0.2s ease-in-out;
  .mix-card__preview{
    border-radius: 4px;
    display: flex;
    overflow: hidden;
    width: 100%;
    height: auto;
    position: relative;
    img{
      width: 100%;
      height: auto;
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
  .mix-card__info{
    margin-top: 8px;
    .info-title{
      width: 140px;
      font-weight: 700;
      font-size: 1rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      //border: 1px solid red;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .info-artists{
      margin-top: 8px;
      font-size: 0.875rem;
      color: #B3B3B3;
      width: 100%;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .info-date{
      display: flex;
      align-items: center;
      gap: 6px;
      margin-top: 4px;
      font-size: 1rem;
      color: #B3B3B3;
      &__text{}
      &__circle{
        font-size: 5px;
      }
      &__type{
        text-transform: lowercase;
        &:first-letter{
          text-transform: uppercase;
        }
      }
    }
  }
  &:hover{
    background-color: var(--color-card-hover);
  }
  &:hover .mix-card__preview__button-play{
    opacity: 1;
    transform: translateY(0);
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.45);
  }
}
.horizontal{
  display: flex;
  align-items: center;
  border-radius: 6px;
  background-color: rgba( 255, 255, 255, 0.1 );
  overflow: hidden;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
  .mix-card__preview{
    display: flex;
    width: 82px;
    height: 82px;
  }
  .mix-card__info{
    margin-left: 21px;
    .info-title{
      font-weight: 700;
      font-size: 20px;
    }
  }
  &:hover{
    background-color: rgba( 255, 255, 255, 0.12 );
  }
}
</style>