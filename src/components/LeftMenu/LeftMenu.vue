<script lang="ts" setup>
import LinkItem from "@/components/LeftMenu/LinkItem.vue"
import {ref} from "vue"
import MixLink from "@/components/LeftMenu/MixLink.vue"
import {useMixesStore} from "@/stores/mixes";

const links = ref<{title:string,link:string,icon:string}[]>([
  {
    title: 'Home',
    link: 'home',
    icon: '/src/assets/images/left-menu/Home_S.png',
  },
  {
    title: 'Search',
    link: 'Search',
    icon: '/src/assets/images/left-menu/Search_S.png',
  },
  {
    title: 'Your Library',
    link: 'Your Library',
    icon: '/src/assets/images/left-menu/Library_S.png',
  },
  {
    title: 'Create Playlist',
    link: 'Create Playlist',
    icon: '/src/assets/images/left-menu/+Library_S.png',
  },
  {
    title: 'Liked Songs',
    link: 'Liked Songs',
    icon: '/src/assets/images/left-menu/Liked Songs_S.png',
  },
])

</script>

<template>
  <div class="left-menu-wrapper">
    <div class="menu_item"
         v-for = "(link,index) in links"
         :key = "index">
      <link-item
          :style = "index == 3 ? 'margin-top : 49px' :''"
          :title = "link.title"
          :icon = "link.icon"
      ></link-item>
    </div>
    <div class="line"></div>
    <div class="mix-link"
         v-for="(link,index) in useMixesStore().mixes"
         :key="index">
      <MixLink
          :title="link.title">
      </MixLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.left-menu-wrapper{
  position: fixed;
  padding: 70px 30px 0 30px;
  min-width: 310px;
  min-height: 100vh;
  background-color: #000000;
  .menu_item{
    margin-top: 20px;
    font-size: 18px;
    font-weight: 700;
    &:first-child{
      margin-top: 0;
    }
  }
  .line{
    margin-top: 20px;
    height: 1px;
    background-color: #282828;
    width: 100%;
  }
  .mix-link{
    font-size: 18px;
    margin-top: 18px;
    &:first-child{
      margin-top: 0;
    }
  }
}
</style>