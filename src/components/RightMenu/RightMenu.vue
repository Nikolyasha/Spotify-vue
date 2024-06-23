<script lang="ts" setup>
import UserTemplate from "@/components/RightMenu/UserTemplate.vue"
import Button from "@/components/Tools/Button.vue"
</script>

<template>
  <div class="right-menu-wrapper">
    <div class="header">
      <p>Friend Activity</p>
      <div class="icons">
        <img src="@/assets/images/right-menu/User_Plus_S.png" alt="">
        <img src="@/assets/images/right-menu/Close_S.png" alt="">
      </div>
    </div>
    <div class="content">
      <p class="content-first-text">Let friends and followers on Spotify see what you’re listening to.</p>
      <div class="users" v-for="i in 3" :key="i">
        <UserTemplate :style="i != 1 ? 'margin-top:20px':''"></UserTemplate>
      </div>
      <p class="content-second-text">Go to Settings > Social and enable “Share my listening activity on Spotify.’ You can turn this off at any time.</p>
    </div>
    <div class="button">
      <Button :title="'Settings'"></Button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.right-menu-wrapper{
  position: fixed;
  max-width: 346px;
  height: 100vh;
  background-color: #000000;
  padding: 20px 26px;
  color: #ccc;
  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
      font-weight: 700;
      font-size: 20px;
    }
    .icons{
      display: flex;
      gap: 7px;
    }
  }
  .content{
    p{
      font-size: 18px;
      color: #ccc;
    }
    &-first-text{
      margin-top: 35px;
      margin-bottom: 23px;
    }
    &-second-text{
      margin-top: 21px;
    }
  }
  .button{
    margin-top: 23px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
</style>