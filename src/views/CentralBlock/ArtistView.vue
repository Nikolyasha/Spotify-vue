<script lang="ts" setup>

import {onMounted} from "vue";

const emit = defineEmits<{
  (e: 'is-transparent-header', value: boolean): void;
}>();
onMounted(() => {
  emit('is-transparent-header',true)
})
</script>
<template>
  <div class="block-artist">
    <div class="block-artist__header">
      <div class="block-artist__header-bg">
        <img src="@/assets/images/artists/depeche_mode/Depeche_mode_bg.jpg" alt="">
      </div>

      <div class="block-artist__header-content">
        <span class="block-artist__header-content__verified">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_2)">
            <rect x="6" y="7" width="12" height="10" fill="white"/>
            <path d="M10.814 0.5C10.9684 0.341921 11.1529 0.216308 11.3566 0.130547C11.5602 0.0447856 11.779 0.000606537 12 0.000606537C12.221 0.000606537 12.4398 0.0447856 12.6434 0.130547C12.8471 0.216308 13.0316 0.341921 13.186 0.5L15.698 3.072L19.293 3.029C19.5141 3.02632 19.7335 3.06789 19.9383 3.15126C20.1431 3.23464 20.3292 3.35814 20.4855 3.5145C20.6419 3.67085 20.7654 3.8569 20.8487 4.0617C20.9321 4.26649 20.9737 4.4859 20.971 4.707L20.928 8.302L23.5 10.814C24.167 11.464 24.167 12.536 23.5 13.186L20.928 15.698L20.971 19.293C20.9737 19.5141 20.9321 19.7335 20.8487 19.9383C20.7654 20.1431 20.6419 20.3292 20.4855 20.4855C20.3292 20.6419 20.1431 20.7654 19.9383 20.8487C19.7335 20.9321 19.5141 20.9737 19.293 20.971L15.698 20.928L13.186 23.5C13.0316 23.6581 12.8471 23.7837 12.6434 23.8695C12.4398 23.9552 12.221 23.9994 12 23.9994C11.779 23.9994 11.5602 23.9552 11.3566 23.8695C11.1529 23.7837 10.9684 23.6581 10.814 23.5L8.302 20.928L4.707 20.971C4.4859 20.9737 4.26649 20.9321 4.0617 20.8487C3.8569 20.7654 3.67085 20.6419 3.51449 20.4855C3.35814 20.3292 3.23464 20.1431 3.15126 19.9383C3.06789 19.7335 3.02632 19.5141 3.029 19.293L3.072 15.698L0.5 13.186C0.34192 13.0316 0.216307 12.8471 0.130546 12.6434C0.0447847 12.4398 0.000605583 12.221 0.000605583 12C0.000605583 11.779 0.0447847 11.5602 0.130546 11.3566C0.216307 11.1529 0.34192 10.9684 0.5 10.814L3.072 8.302L3.029 4.707C3.02632 4.4859 3.06789 4.26649 3.15126 4.0617C3.23464 3.8569 3.35814 3.67085 3.51449 3.5145C3.67085 3.35814 3.8569 3.23464 4.0617 3.15126C4.26649 3.06789 4.4859 3.02632 4.707 3.029L8.302 3.072L10.814 0.5ZM17.398 9.62C17.5757 9.43055 17.6726 9.17941 17.6684 8.91973C17.6642 8.66005 17.5591 8.41219 17.3754 8.22861C17.1917 8.04503 16.9438 7.94012 16.6841 7.93609C16.4244 7.93205 16.1733 8.02921 15.984 8.207L9.973 14.217L8.079 12.324C7.8904 12.1418 7.6378 12.041 7.3756 12.0433C7.1134 12.0456 6.86259 12.1508 6.67718 12.3362C6.49177 12.5216 6.3866 12.7724 6.38433 13.0346C6.38205 13.2968 6.48284 13.5494 6.665 13.738L9.973 17.046L17.398 9.621V9.62Z" fill="#4CB3FF"/>
            </g>
            <defs>
            <clipPath id="clip0_1_2">
            <rect width="24" height="24" fill="white"/>
            </clipPath>
            </defs>
          </svg>
          <p>Verified Artist</p>
        </span>
        <h1 class="block-artist__header-content__artist">
          Depeche Mode
        </h1>
        <span class="block-artist__header-content__listeners">
          <span>16,175,375</span><span> monthly listeners</span>
        </span>
      </div>
    </div>
    <div class="block-artist__follow">
      <div class="block-artist__follow-button-play">
        <div>
          <img src="@/assets/images/central/artists/play.svg">
        </div>
      </div>
      <div class="block-artist__follow-button-follow">
        <span>Follow</span>
      </div>
      <div class="block-artist__follow-button-more">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="block-artist__popular-songs">
      <h3 class="block-artist__popular-songs__title">
        Popular
      </h3>
      <div class="block-artist__popular-songs__list">
        <div class="block-artist__popular-songs__list-item">
          <p>1</p>
          <div><img src="@/assets/images/central/mixes/Daily-mix-1.png" alt=""></div>
          <p>Enjoy the Silence</p>
          <p> 687,296,370 </p>
          <p>4:14</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.block-artist{
  position: relative;
  &__header{
    height: 40vh;
    //border: 1px solid red;
    position: relative;
    overflow: hidden;
    &-bg{
      position: absolute;
      width: 100%;
      img{
        width: 100%;
      }
    }
    &-content{
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: end;
      position: relative;
      padding: 24px;
      &__verified{
        height: 24px;
        display: flex;
        align-items: center;
        gap: 7px;
        svg{
          height: 100%;
        }
      }
      &__artist{
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        line-height: normal;
        overflow: hidden;
        text-align: left;
        width: 100%;
        word-break: break-word;
        user-select: none;
        font-size: 6rem;
        white-space: nowrap;
        font-weight: 900;
      }
      &__listeners{
        margin-top: 4px;
        font-size: 1rem;
        line-height: 2;
      }
    }
  }
  &__follow{
    padding: 24px;
    display: flex;
    align-items: center;
    &-button-play{
      border-radius: 9999px;
      background-color: var(--main-color);
      width: 56px;
      aspect-ratio: 1;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 32px;
      div{
        width: 24px;
        transform: translateX(12%) translateY(8%);
        img{
          width: 100%;
        }
      }
      &:hover{
        transform: scale(1.05);
      }
    }
    &-button-follow{
      cursor: pointer;
      border-radius: 9999px;
      padding: 3px 15px;
      border: 1px solid #7c7c7c;
      margin-right: 24px;
      span{
        font-weight: 700;
        font-size: 0.875rem;
        user-select: none;
      }
      &:hover{
        transform: scale(1.05);
        border: 1px solid #fff;
      }
    }
    &-button-more{
      cursor: pointer;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 32px;
      aspect-ratio: 1;
      span{
        height: 5px;
        border-radius: 9999px;
        aspect-ratio: 1;
        background-color: #7c7c7c;
      }
      &:hover span{
        background-color: #fff;
      }
    }
  }
  &__popular-songs{
    margin-top: 12px;
    padding: 0 24px;
    &__title{
      font-weight: 700;
      font-size: 1.5rem;
      margin-bottom: 16px;
    }
    &__list{
      &-item{
        display: grid;
        width: fit-content;
        align-items: center;
        grid-template-columns: auto auto auto auto auto auto auto;
        width: 100%;
      }
    }
  }
}
</style>