<script lang="ts" setup>

</script>
<template>
  <div class="wrapper">
    <header>
      <div class="logo">
        <img src="../../assets/images/logo/Spotify_Primary_Logo_RGB_White.png" alt="">
      </div>
    </header>
    <router-view>
    </router-view>
    <footer>
      <span>
        This site is protected by reCAPTCHA and the Google <a href="">Privacy Policy</a> and <a href="">Terms of Service</a> apply.
      </span>
    </footer>
  </div>
</template>
<style lang="scss" scoped>
.wrapper{
  width: 100%;
  min-height: 100vh;
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