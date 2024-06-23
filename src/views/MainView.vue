<script lang="ts" setup>
import LeftMenu from "@/components/LeftMenu/LeftMenu.vue"
import RightMenu from "@/components/RightMenu/RightMenu.vue"
import CentralBlock from "@/components/CentralBlock/CentralBlock.vue"
</script>
<template>
  <div class="wrapper">
    <div class="left-side">
      <LeftMenu></LeftMenu>
    </div>
    <div class="central">
      <CentralBlock></CentralBlock>
    </div>
    <div class="right-side">
      <RightMenu></RightMenu>
    </div>
  </div>
</template>
<style scoped lang="scss">
.wrapper{
  display: grid;
  grid-template-columns: 310px auto 346px;
  .central{
    display: flex;
  }
}
</style>