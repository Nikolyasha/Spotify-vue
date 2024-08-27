<script lang="ts" setup>
</script>
<template>
  <div class="progress-bar">
    <div class="progress-bar-inner"></div>
  </div>
  <div class="steps-counter">
    <button class="steps-counter__button-back">
      <span>
        <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24" class="Svg-sc-ytk21e-0 dDkLMK"><path d="M15.957 2.793a1 1 0 0 1 0 1.414L8.164 12l7.793 7.793a1 1 0 1 1-1.414 1.414L5.336 12l9.207-9.207a1 1 0 0 1 1.414 0z"></path></svg>
      </span>
    </button>
    <div class="steps-counter__text">
      <p class="steps-counter__text-count">Step <span>1</span> of 3</p>
      <p class="steps-counter__text-rule">Think of a password</p>
    </div>
  </div>
  <router-view></router-view>
</template>
<style lang="scss" scoped>
.progress-bar{
  height: 2px;
  width: 436px;
  margin: 0 auto;
  background-color: #7c7c7c;
  block-size: 2px;
  display: flex;
  &-inner{
    height: 100%;
    width: 33.333%;
    background-color: var(--main-color);
  }
}
.steps-counter{
  width: 436px;
  margin: 0 auto;
  display: flex;
  &__button-back{
    background-color: transparent;
    border: none;
    padding: 16px;
    opacity: 0.7;
    transition: opacity 0.2s ease-in-out;
    span{
      display: flex;
      align-items: center;
      justify-content: center;
      svg{
        width: 24px;
        height: 24px;
        fill: #fff;
      }
    }
    &:hover{
      opacity: 1;
      cursor: pointer;
    }
  }
  &__text{
    padding: 16px 0;
    user-select: none;
    &-count{
      color: #b3b3b3;
      margin-bottom: 4px;
    }
    &-rule{
      font-weight: 700;
    }
  }
}
</style>