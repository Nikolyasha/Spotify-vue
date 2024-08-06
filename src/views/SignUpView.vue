<script lang="ts" setup>
import InputText from "@/components/Tools/InputText.vue";
import Button from "@/components/Tools/Button.vue";
import {ref} from "vue";
import ButtonLogInSocial from "@/components/Tools/ButtonLogInSocial.vue";

const socialLinks = ref([
  {title: 'Google' , icon:'/src/assets/images/tools/google.ico' , text: 'Sign up with Google'},
  {title: 'Facebook' , icon:'/src/assets/images/tools/facebook.ico' , text: 'Sign up with Facebook'},
  {title: 'Apple' , icon:'/src/assets/images/tools/apple.ico' , text: 'log in with Apple'},
])
</script>
<template>
  <div class="wrapper">
    <header>
      <div class="logo">
        <img src="@/assets/images/logo/Spotify_Primary_Logo_RGB_White.png" alt="">
      </div>
    </header>
    <section>
      <div class="wrapper-sign-up">
        <h1>Sign up and get into music</h1>
        <form action="" class="form-sign-up">
          <input-text name="email-sign-up" placeholder="name@domain.com" title="Email"></input-text>
          <div class="form-sign-up__button">
            <Button size="large" link="/" title="Continue" color="green"></Button>
          </div>
        </form>
        <div class="block-delimiter">
          <span>or</span>
        </div>
        <div class="buttons-sign-up-social">
          <button-log-in-social
              v-for="( button,index ) in socialLinks"
              :key="index"
              :text="button.text"
              :icon="button.icon"
              :title="button.title"
          ></button-log-in-social>
        </div>
        <div class="line-delimiter"></div>
        <div class="link-log-in">
          <span>Already have an account? <a href="">Log in.</a></span>
        </div>
      </div>
    </section>
    <footer>
      <span>
        This site is protected by reCAPTCHA and the Google <a href="">Privacy Policy</a> and <a href="">Terms of Service</a> apply.
      </span>
    </footer>
  </div>
</template>
<style lang="scss" scoped>
.wrapper{
  width: 100vw;
  height: 100vh;
  background-color: #121212;
  header{
    padding: 32px 0 24px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    .logo{
      width: 40px;
      height: 40px;
      img{
        height: 100%;
      }
    }
  }
  section{
    .wrapper-sign-up{
      margin: 0 auto;
      width: 324px;
      box-sizing: content-box;
      padding: 0 32px;
      h1{
        text-align: center;
        overflow-wrap: break-word;
        font-size: 3rem;
        font-weight: 700;
        color: inherit;
        line-height: 1.4;
        margin-bottom: 40px;
      }
      .form-sign-up{
        &__button{
          margin-top: 20px;
          width: 100%;
        }
      }
      .block-delimiter{
        margin-top: 32px;
        display: flex;
        justify-content: center;
        position: relative;
        span{
          color: inherit;
          background-color: #121212;
          display: inline-block;
          padding: 0px 12px;
          position: relative;
        }
        &:before{
          content: " ";
          height: 1px;
          background-color: #878787;
          display: block;
          position: absolute;
          top: 50%;
          left: 0px;
          right: 0px;
        }
      }
      .buttons-sign-up-social{
        margin-top: 32px;
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .line-delimiter{
        width: 100%;
        margin-top: 32px;
        height: 1px;
        background-color: #292929;
      }
      .link-log-in{
        margin-top: 32px;
        display: flex;
        justify-content: center;
        span{
          color: #a7a7a7;
          font-size: 1rem;
          a{
            color: white;
          }
        }
      }
    }
  }
  footer{
    width: 324px;
    padding: 24px 32px;
    box-sizing: content-box;
    margin: 0 auto;
    text-align: center;
    span{
      font-size: 0.75rem;
      color: #a7a7a7;
      a{
        color: #a7a7a7;
      }
    }
  }
}
</style>