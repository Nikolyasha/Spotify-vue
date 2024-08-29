<script lang="ts" setup>
import {ref} from "vue";

const props = defineProps([
    'title','subtitle','placeholder','value','type','name',
])

const months = ref([
    { val : 1 , month : 'January'},
    { val : 2 , month : 'February'},
    { val : 3 , month : 'March'},
    { val : 4 , month : 'April'},
    { val : 5 , month : 'May'},
    { val : 6 , month : 'June'},
    { val : 7 , month : 'July'},
    { val : 8 , month : 'August'},
    { val : 9 , month : 'September'},
    { val : 10 , month : 'October'},
    { val : 11 , month : 'November'},
    { val : 12 , month : 'December'},
])
const genders =ref([
  { val : 'man', gender : 'Man' },
  { val : 'woman', gender : 'Woman' },
  { val : 'other', gender : 'Other' },
  { val : 'nogender', gender : 'I don\'t want to answer' },
])
const password = ref('')
</script>
<template>
  <div class="wrapper-input">
    <label :for="props.name">{{ props.title }}</label>
    <span v-if="props.subtitle && props.type != 'date'"> {{ props.subtitle }} </span>
    <span v-if="props.subtitle  && props.type == 'date'"> {{ props.subtitle }} <button>More</button></span>
    <div class="wrapper-input__container-input" v-if="props.type != 'date' && props.type != 'sex'">
      <input :name="props.name" v-model="password" :type="props.type" :placeholder="props.placeholder" @change="$emit('input', password)">
    </div>
    <div class="wrapper-input__container-input input-date" v-if="props.type == 'date'">
      <input class="input-date-day" placeholder="dd" type="number" >
      <div class="input-date-select">
        <select>
          <option>Month</option>
          <option v-for="(month,index) in months" :key="index">{{ month.month }}</option>
        </select>
        <svg data-encore-id="icon" role="img" aria-hidden="true" class="Svg-sc-ytk21e-0 ZujEm Arrow-sc-1slzr1b-0 eOFMoh" viewBox="0 0 24 24"><path d="M2.793 8.043a1 1 0 0 1 1.414 0L12 15.836l7.793-7.793a1 1 0 1 1 1.414 1.414L12 18.664 2.793 9.457a1 1 0 0 1 0-1.414z"></path></svg>
      </div>
      <input class="input-date-year" placeholder="yyyy">
    </div>
    <div class="wrapper-input__container-input input-sex" v-if="props.type == 'sex'">
      <div class="input-sex__item" v-for="(item,index) in genders" :key="index">
        <div class="input-sex__item-radiobutton">
          <input type="radio" id="gender__option" :value="item.val">
        </div>
        <label for="gender__option">
          <div class="input-sex__item-button "></div>
          <span class="input-sex__item-text">{{ item.gender }}</span>
        </label>
      </div>
    </div>
  </div>
<!--  input-sex__item-button-active-->
</template>
<style lang="scss" scoped>
.wrapper-input{
  display: flex;
  flex-direction: column;
  label{
    font-weight: 700;
    color: inherit;
    font-size: 0.875rem;
    margin-bottom: 8px;
  }
  span{
    color: #b3b3b3;
    font-size: 0.875rem;
    margin-bottom: 8px;
    button{
      padding: 0;
      background: none;
      border: none;
      color: #b3b3b3;
      text-decoration: underline;
      cursor: pointer;
    }
  }
  &__container-input{
    width: 100%;
    input{
      width: 100%;
      box-shadow: inset 0 0 0 1px #878787;
      background-color: transparent;
      border: none;
      color: inherit;
      font-size: 1rem;
      padding: 12px 16px;
      border-radius: 4px;
      transition: box-shadow 0.1s ease-in-out;
      &:focus{
        outline: none;
      }
      &:hover{
        box-shadow: inset 0 0 0 1px white;
      }
    }
  }
  .input-date{
    display: flex;
    gap: 8px;
    &-day{
      -moz-appearance:textfield;
      inline-size: 30%;
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        appearance: none;
      }
    }
    &-select{
      inline-size: 100%;
      display: flex;
      position: relative;
      select{
        appearance: none;
        border: 0px;
        display: block;
        transition: box-shadow 100ms ease-in-out, color 100ms ease-in-out;
        inline-size: 100%;
        text-align: start;
        overflow-wrap: break-word;
        min-block-size: var(--encore-control-size-base, 48px);
        border-radius:  4px;
        background-color: #121212;
        box-shadow: inset 0 0 0 1px var(--essential-subdued, #818181);
        padding: 12px 48px 12px 12px;
        color: #fff;
        font-size: 1rem;
        option{
          padding: 2px 4px;
        }
      }
      svg{
        fill: #818181;
        pointer-events: none;
        position: absolute;
        top: 12px;
        right:  12px;
        width: 24px;
        height: 24px;
      }
    }
    &-year{
      inline-size: 50%;
    }
  }
  .input-sex{
    display: flex;
    flex-wrap: wrap;
    .input-sex__item{
      display: flex;
      user-select: none;
      &-radiobutton{
        input{
          left: -2px;
          position: absolute;
          width: 0;
          height: 0;
          border: none;
          outline: none;
        }
      }
      label{
        cursor: pointer;
        display: flex;
        &:hover .input-sex__item-button{
          border: 1px solid #1ed760;
        }
      }
      &-text{
        padding: 0 24px 0 12px;
        font-size: 1rem;
        color: #fff;
      }
      &-button{
        border-radius: 9999px;
        inline-size: 16px;
        block-size: 16px;
        background: #121212;
        border: 1px solid #7c7c7c;
        position: relative;
      }
      &-button-active{
        background: #1ed760;
        border: none;
        &:before{
          position: absolute;
          width: 8px;
          height: 8px;
          content: '';
          background: #121212;
          border-radius: 9999px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
}
</style>