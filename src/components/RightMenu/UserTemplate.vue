<script lang="ts" setup>
</script>
<template>
  <div class="user">
    <div class="user-avatar">
      <img src="@/assets/images/right-menu/User.png" alt="">
    </div>
    <div class="user-info">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.user{
  display: flex;
  align-items: center;
  &-avatar{
    width: 62px;
    height: 62px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    &::after{
      content: '';
      width: 12px;
      height: 12px;
      background-color: #4077CA;
      border-radius: 50%;
      position: absolute;
      top:4px;
      right: 0;
    }
  }
  &-info{
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    gap: 6px;
    .line{
      width: 79px;
      height: 10px;
      background-color: rgba(255, 255, 255, 0.2);
      border-radius: 10px;
      &:first-child{
        width: 102px;
      }
    }
  }
}
</style>