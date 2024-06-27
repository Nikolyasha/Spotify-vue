<script lang="ts" setup>
import LeftMenu from "@/components/LeftMenu/LeftMenu.vue"
import RightMenu from "@/components/RightMenu/RightMenu.vue"
import CentralBlock from "@/components/CentralBlock/CentralBlock.vue"
import {ref} from "vue";
import Button from "@/components/Tools/Button.vue";

const isAuth = ref<boolean>(false);
</script>
<template>
  <div class="wrapper" :class="!isAuth ? 'withoutAuth' : 'authorized'" >
    <div class="left-side">
      <LeftMenu></LeftMenu>
    </div>
    <div class="central block-element">
      <CentralBlock></CentralBlock>
    </div>
    <div class="bottom-info">
      <div class="bottom-info__text">
        <h4>Preview of Spotify</h4>
        <p>Sign up to get unlimited songs with occasional ads. No credit card needed.</p>
      </div>
      <div class="bottom-info__button">
        <Button
            title="Sign up free"
            size="large"></Button>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.withoutAuth{
  display: grid;
  grid-template-columns: 22% auto ;
  grid-template-rows: auto 1fr;
  gap: 8px;
  height: 100vh;
  .central{
    height: calc(100vh - 16px - 75px);
  }
  .bottom-info{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    height: calc(75px - 8px);
    grid-column: 1 / span 2;
    grid-row: 2;
    background: linear-gradient(90deg, rgba(174,41,151,1) 0%, rgba(132,92,192,1) 50%, rgba(80,154,244,1) 100%);
    &__text{
      h4{
        font-size: 14px;
        font-weight: 700;
      }
      p{
        font-size: 16px;
        font-weight: 400;
      }
    }
    &__button{
      display: flex;
    }
  }
}
//#AE2997 #509AF4
.authorized{
  .left-side{
    height: calc(100vh - 16px);
  }
  .central{
    height: calc(100vh - 16px);
  }
}
.wrapper{
  padding: 8px;
  .central{
    overflow-y: scroll;
    scrollbar-width: none;
    overflow-x: hidden;
  }
}
</style>