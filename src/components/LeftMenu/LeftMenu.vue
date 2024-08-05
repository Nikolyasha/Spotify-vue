<script lang="ts" setup>
import LinkItem from "@/components/LeftMenu/LinkItem.vue"
import {ref} from "vue"
import MixLink from "@/components/LeftMenu/Link.vue"
import {useMixesStore} from "@/stores/mixes";
import InfoMixes from "@/components/LeftMenu/InfoMixes.vue";
import Link from "@/components/LeftMenu/Link.vue";

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
  // {
  //   title: 'Liked Songs',
  //   link: 'Liked Songs',
  //   icon: '/src/assets/images/left-menu/Liked Songs_S.png',
  // },
])
const infoMixes = ref<{title:string,subtitle:string,buttonText:string}[]>([
  {title : 'Create your first playlist' , subtitle: 'It`s easy,we`ll help you' , buttonText: 'Create playlist'},
  {title : 'Let`s find some podcasts to follow' , subtitle: 'We`ll keep you updated on new episodes' , buttonText: 'Browse podcasts'},
])
const footerLinks = ref<{title:string }[]>([
  { title : 'Legal' },
  { title : 'Safety & Privacy Center' },
  { title : 'Privacy Policy' },
  { title : 'Cookies' },
  { title : 'About Us' },
  { title : 'Accessibility' },
  { title : 'Cookies' },
])
</script>

<template>
  <div class="left-menu-wrapper">
    <div class="menu-main block-element">
      <div class="menu-main__logo-full">
        <img src="@/assets/images/logo/Spotify_Full_Logo_RGB_White.png" alt="">
      </div>
      <div class="menu_item"
           v-for = "(link,index) in links.slice(0,2)"
           :key = "index">
        <link-item
            :title = "link.title"
            :icon = "link.icon"
        ></link-item>
      </div>
    </div>
    <div class="mixes block-element">
      <div class="mixes-header">
        <link-item
            :title = "links[links.length-2].title"
            :icon = "links[links.length-2].icon"
        ></link-item>
        <span>
          <img src="@/assets/images/left-menu/plus.svg" alt="">
        </span>
      </div>
      <div class="mixes-content">
        <div class="mixes-content__item" v-for="(info,index) in infoMixes" :key="index">
          <InfoMixes
              :title="info.title"
              :subtitle="info.subtitle"
              :button-text="info.buttonText">
          </InfoMixes>
        </div>
      </div>
      <div class="mixes-footer">
        <div class="mixes-footer__links">
          <div class="mixes-footer__links-item"
               v-for="(link,index) in footerLinks"
               :key="index" >
            <Link :title="link.title"></Link>
          </div>
        </div>
        <div class="mixes-footer__button-lang">
          <span> <img src="@/assets/images/left-menu/language.svg" alt=""> </span>
          <p>English</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.left-menu-wrapper{
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  .menu-main{
    padding: 20px 25px;
    margin-bottom: 9px;
    .menu_item{
      margin-top: 20px;
      font-size: 16px;
      font-weight: 700;
      &:first-child{
        margin-top: 0;
      }
    }
    &__logo-full{
      height: 24px;
      img{
        height: 100%;
        width: auto;
      }
    }
  }
  .mixes{
    padding: 20px 25px 40px 25px;
    display: flex;
    flex-direction: column;
    &-header{
      display: flex;
      align-items: center;
      justify-content: space-between;
      span{
        opacity: 0.7;
        display: flex;
        padding: 5px;
        border-radius: 50%;
        transition: all 0.2s ease-in-out;
        img{
          width: 20px;
          height: 20px;
        }
        &:hover{
          opacity: 1;
          cursor: pointer;
          background-color: var( --color-hover);
        }
      }
    }

    &-content{
      margin: 30px -15px;
      &__item{
        margin-top: 20px;
        &:first-child{
          margin-top: 0;
        }
      }
    }

    &-footer{
      margin-top: auto;
      &__links{
        display: grid;
        grid-template-columns: auto auto auto auto;
        grid-template-rows: auto auto auto ;
        gap: 6px;
        margin-bottom: 30px;
        &-item{
          &:nth-child(-n+4) {
            grid-row: 1;
          }
          &:nth-child(n+5):nth-child(-n+6) {
            grid-row: 2;
          }
          &:nth-child(n+7):nth-child(-n+7) {
            grid-row: 3;
          }
        }
      }
      &__button-lang{
        width: fit-content;
        padding: 8px 14px;
        border: 1px solid rgba( 255 , 255 , 255 , 0.7);
        border-radius: 40px;
        display: flex;
        align-items: center;
        span{
          display: flex;
          img{
            width: 18px;
            height: 18px;
          }
        }
        p{
          margin-left: 7px;
          font-size: 14px;
        }
      }
    }
  }

}
</style>