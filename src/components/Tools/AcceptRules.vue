<script lang="ts"setup>
import {ref} from "vue";

const props = defineProps([
    'text','type','idName'
])
const checkboxButton = ref();
function onChecked (){
  checkboxButton.value.classList.toggle('checkbox__button-active');
}
</script>
<template>
  <div class="wrapper-accept" >
    <input type="checkbox" :id="props.idName" @change="onChecked">
    <label class="wrapper-accept__checkbox" :for="props.idName">
      <div class="wrapper-accept__checkbox__button" ref="checkboxButton"></div>
      <div class="wrapper-accept__checkbox__text" v-if="props.type != 'user-agreement'">
        <span>{{ props.text }}</span>
      </div>
      <div class="wrapper-accept__checkbox__text" v-if="props.type == 'user-agreement'">
        <span> I agree to Spotify's <button>Terms of Service</button> and <button>Privacy Policy.</button></span>
      </div>
    </label>
  </div>
<!--  <div class="wrapper-accept" v-if="props.type == 'user-agreement' ">-->
<!--    <input type="checkbox" :id="props.idName">-->
<!--    <label class="wrapper-accept__checkbox" :for="props.idName">-->
<!--      <div class="wrapper-accept__checkbox__button"></div>-->
<!--    </label>-->
<!--  </div>-->
</template>
<style lang="scss" scoped>
.wrapper-accept{
  padding: 16px;
  background-color: hsla(0,0%,100%,.1);
  border-radius: 5px;
  display: flex;
  align-items: start;
  position: relative;
  input{
    width: 0;
    height: 0;
    border: 0;
    position: absolute;
    z-index: -1;
  }
  &__checkbox{
    display: grid;
    grid-template-columns:auto 1fr;
    &__button{
      width: 16px;
      height: 16px;
      border: 1px solid #7c7c7c;
      background: #121212;
      border-radius: 3px;
    }
    &__text{
      padding: 0 12px;
      font-size: 0.875rem;
      button{
        padding: 0;
        border: 0;
        background: transparent;
        color: var(--main-color);
        cursor: pointer;
        text-decoration: underline;
      }
    }
    &:hover &__button{
      border: 1px solid var(--main-color);
    }
    .checkbox__button-active{
      position: relative;
      background: var(--main-color);
      border: none;
      &:before{
        box-sizing: border-box;
        background-color: unset;
        border-bottom-width: 2px;
        border-bottom-style: solid;
        border-left-width: 2px;
        border-left-style: solid;
        border-color: #121212;
        display: block;
        content: "";
        block-size: 5px;
        inline-size: 9px;
        position: absolute;
        top: 46%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0px) rotate(-48deg);
      }
    }
  }
}
</style>