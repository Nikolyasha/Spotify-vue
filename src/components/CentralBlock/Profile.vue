<script lang="ts" setup>
const props = defineProps([
    'avatar',
    'nickname'
])
</script>

<template>
  <div class="profile-wrapper">
    <div class="avatar">
      <img src="@/assets/images/central/profile/profile.png" alt="">
    </div>
    <div class="nickname">{{ props.nickname }}</div>
    <div class="arrow-button">
      <img alt="" src="@/assets/images/central/profile/button-arrow-profile.png">
    </div>
  </div>
</template>

<style scoped lang="scss">
.profile-wrapper{
  cursor: pointer;
  display: flex;
  gap: 11px;
  align-items: center;
  background-color: rgba( 0, 0, 0, 0.8 );
  padding: 3px;
  border-radius: 40px;
  .avatar{
    width: 34px;
    height: 34px;
    border-radius: 50%;
    display: flex;
  }
  .nickname{
    font-weight: 700;
    font-size: 18px;
  }
  .arrow-button{
    margin-right: 9px;
  }
}
</style>