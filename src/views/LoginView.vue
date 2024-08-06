<script lang="ts" setup>
import ButtonLogInSocial from "@/components/Tools/ButtonLogInSocial.vue";
import {ref} from "vue";
import InputText from "@/components/Tools/InputText.vue";
import Button from "@/components/Tools/Button.vue";
const socialLinks = ref([
  {title: 'Google' , icon:'/src/assets/images/tools/google.ico' , text: 'log in with Google'},
  {title: 'Facebook' , icon:'/src/assets/images/tools/facebook.ico' , text: 'log in with Facebook'},
  {title: 'Apple' , icon:'/src/assets/images/tools/apple.ico' , text: 'log in with Apple'},
])
</script>
<template>
  <div class="wrapper-log-in">
    <div class="block-central">
      <div class="block-central__header">
          <div class="block-central__header-logo">
            <img src="@/assets/images/logo/Spotify_Primary_Logo_RGB_White.png" alt="">
          </div>
        </div>
      <h1 class="block-central__title">Login to Spotify</h1>
      <div class="block-central__social block-central__wrapper">
          <button-log-in-social
              v-for="( button,index ) in socialLinks"
              :key="index"
              :text="button.text"
              :icon="button.icon"
              :title="button.title"
          ></button-log-in-social>
        </div>
      <hr class="block-central__delimiter" role="presentation">
      <form action="" class="block-central__form block-central__wrapper">
        <div class="block-central__form-inputs">
          <input-text
              type="text"
              placeholder="Email or nickname"
              title="Email or nickname">
          </input-text>
          <input-text
              type="password"
              placeholder="Password"
              title="Password">
          </input-text>
        </div>
        <span class="block-central__form-radiobutton">Remember me</span>
        <div class="block-central__form-button">
          <Button size="large" link="/" title="Login" color="green"></Button>
        </div>
      </form>
      <div class="block-central__forgot">
        <a href="">Forgot your password?</a>
      </div>
      <hr class="block-central__delimiter" role="presentation">
      <div class="block-central__register">
        <h2>
          <span>Don't have an account? </span>
          <a href="">Register with Spotify</a>
        </h2>
      </div>
    </div>
  </div>
  <footer>
      <span>
        This site is protected by reCAPTCHA and the Google <a href="">Privacy Policy</a> and <a href="">Terms of Service</a> apply.
      </span>
  </footer>
</template>
<style lang="scss" scoped>
.wrapper-log-in{
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.1) 0%, rgb(0, 0, 0) 100%);
  padding: 32px;
  .block-central{
    margin: 0 auto;
    max-width: 734px;
    width: 100%;
    background-color: #121212;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &__wrapper{
      width: 324px;
    }
    &__header{
      display: flex;
      justify-content: center;
      padding: 32px 0 24px 0;
      &-logo{
        width: 36px;
        aspect-ratio: 1;
        display: flex;
        img{
          width: 100%;
        }
      }
    }
    &__title{
      text-align: center;
      font-weight: 700;
      margin-bottom: 32px;
    }
    &__social{
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    &__delimiter{
      margin: 32px 0px;
      height: 1px;
      width: 70%;
      border-width: 1px medium medium;
      border-style: solid none none;
      border-color: rgb(41, 41, 41) ;
      border-image: none;
    }
    &__form{
      &-inputs{
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin-bottom: 16px;
      }
      &-radiobutton{

        font-size: 0.6875rem;
        font-weight: 400;
      }
      &-button{
        margin: 32px 0;
      }
    }
    &__forgot{
      a{
        color: white;
        transition: color 0.2s ease-in-out;
        &:hover{
          color: var(--background-base);
        }
      }
    }
    &__register{
      padding: 16px 0;
      margin-bottom: 32px;
      h2{
        margin: 20px 0;
        color: #a7a7a7;
        font-size: 1rem;
        a{
          color: white;
          transition: color 0.2s ease-in-out;
          &:hover{
            color: var(--background-base);
          }
        }
      }
    }
  }
}
footer{
  background-color: #121212;
  display: flex;
  align-items: center;
  justify-content: center;
  span{
    padding: 32px;
    font-size: 0.75rem;
    color: #a7a7a7;
    a{
      color: #a7a7a7;
    }
  }
}
</style>