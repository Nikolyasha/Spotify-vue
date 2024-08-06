<script lang="ts" setup>
const props = defineProps([
    'title',
    'icon',
    'text'
])
</script>
<template>
  <div class="wrapper-button">
    <a href="">
      <span class="image-button">
        <img :src="props.icon" alt="">
      </span>
      <span class="text-button"> {{ props.text }} </span>
    </a>
  </div>
</template>
<style lang="scss" scoped>
.wrapper-button{
  width: 100%;
  a{
    display: flex;
    align-items: center;
    color: inherit;
    text-decoration: none;
    border: 1px solid #878787;
    padding: 7px 0 7px 0px;
    border-radius: 9999px;
    min-block-size: 48px;

    .image-button{
      width: 20%;
      display: flex;
      align-items: center;
      justify-content: center;
      img{
        width: 24px;
        aspect-ratio: 1;
      }
    }
    .text-button{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80%;
      font-size: 1rem;
      font-weight: 700;
      padding: 0 10px;
    }
    &:hover{
      border: 1px solid white;
    }
  }
}
</style>