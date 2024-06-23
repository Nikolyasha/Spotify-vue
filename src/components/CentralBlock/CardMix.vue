<script lang="ts" setup>
const props = defineProps([
  'title',
  'artists',
  'preview',
  'type'
])
</script>

<template>
  <div :class="props.type">
    <div class="mix-card__preview">
      <img :src="props.preview" alt="">
    </div>
    <div class="mix-card__info">
      <p class="info-title"> {{ props.title }} </p>
      <p class="info-artists" v-if="props.artists"> {{ props.artists }} </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.vertical{
  cursor: pointer;
  background-color: rgba( 255, 255, 255, 0.04 );
  padding: 20px 21px 18px 21px;
  border-radius: 8px;
  transition: background-color 0.2s ease-in-out;
  .mix-card__preview{
    border-radius: 4px;
    display: flex;
    overflow: hidden;
    width: 100%;
    height: auto;
    img{
      width: 100%;
      height: auto;
    }
  }
  .mix-card__info{
    margin-top: 25px;
    .info-title{
      font-weight: 700;
      font-size: 20px;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .info-artists{
      margin-top: 8px;
      font-size: 18px;
      color: #B3B3B3;
      height: 46px;
      width: 100%;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
  &:hover{
    background-color: rgba( 255, 255, 255, 0.06 );
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