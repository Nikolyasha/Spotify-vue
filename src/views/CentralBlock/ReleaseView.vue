<script lang="ts" setup>
import Button from "@/components/Tools/Button.vue";
import {useSongsStore} from "@/stores/songs";
import {onMounted} from "vue";
import {useRoute} from "vue-router";
import {useReleasesStore} from "@/stores/releases";
import Footer from "@/components/CentralBlock/Footer.vue";
import LinearBackground from "@/components/CentralBlock/LinearBackground.vue";

const bankSongs = useSongsStore()
const bankRelease = useReleasesStore()

const route = useRoute()
onMounted(()=>{
  bankSongs.fetchSongsByRelease( route.params.id )
  bankRelease.fetchReleaseById( route.params.id )
})
</script>
<template>
  <div class="release-block">
    <section class="header-release">
      <div class="header-release__content">
        <div class="header-release__content-preview">
          <img :src="bankRelease.release?.releasePreview" alt="">
        </div>
        <div class="header-release__content-info">
          <p class="header-release__content-info__type"> {{ bankRelease.release?.releaseType }} </p>
          <h4 class="header-release__content-info__name">{{ bankRelease.release?.title }}</h4>
          <div class="header-release__content-info_artist">
            <div class="header-release__content-info_artist-photo">
              <img src="@/assets/images/central/artists/Depeche_Mode.jpeg" alt="">
            </div>
            <span class="header-release__content-info_artist-name">Depeche Mode</span>
            <span class="header-release__content-info_artist-date">2022</span>
            <span class="header-release__content-info_artist-songs">29 songs, 2 hr 59 min</span>
          </div>
        </div>
      </div>
    </section>
    <LinearBackground is-release="true" color="rgb(168, 24, 40)"></LinearBackground>
    <section class="menu-play">
      <div class="menu-play__content">
        <div class="menu-play__content__buttons">
          <div class="menu-play__content__buttons__button-play">
            <div>
              <img src="@/assets/images/central/artists/play.svg">
            </div>
          </div>
          <div class="menu-play__content__buttons__button-like">
            <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24" class="Svg-sc-ytk21e-0 cqasRA"><path d="M5.21 1.57a6.757 6.757 0 0 1 6.708 1.545.124.124 0 0 0 .165 0 6.741 6.741 0 0 1 5.715-1.78l.004.001a6.802 6.802 0 0 1 5.571 5.376v.003a6.689 6.689 0 0 1-1.49 5.655l-7.954 9.48a2.518 2.518 0 0 1-3.857 0L2.12 12.37A6.683 6.683 0 0 1 .627 6.714 6.757 6.757 0 0 1 5.21 1.57zm3.12 1.803a4.757 4.757 0 0 0-5.74 3.725l-.001.002a4.684 4.684 0 0 0 1.049 3.969l.009.01 7.958 9.485a.518.518 0 0 0 .79 0l7.968-9.495a4.688 4.688 0 0 0 1.049-3.965 4.803 4.803 0 0 0-3.931-3.794 4.74 4.74 0 0 0-4.023 1.256l-.008.008a2.123 2.123 0 0 1-2.9 0l-.007-.007a4.757 4.757 0 0 0-2.214-1.194z"></path></svg>
          </div>
          <div class="menu-play__content__buttons__button-more">
            <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24" class="Svg-sc-ytk21e-0 cqasRA"><path d="M4.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm15 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-7.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path></svg>
          </div>
        </div>
        <div class="menu-play__content__button-list">
          <span>List</span>
          <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 cAMMLk"><path d="M15 14.5H5V13h10v1.5zm0-5.75H5v-1.5h10v1.5zM15 3H5V1.5h10V3zM3 3H1V1.5h2V3zm0 11.5H1V13h2v1.5zm0-5.75H1v-1.5h2v1.5z"></path></svg>
        </div>
      </div>
    </section>
    <section class="list-songs">
      <div class="list-songs__header">
        <div class="list-songs__header-wrapper">
          <span class="list-songs__header-wrapper__number">#</span>
          <span class="list-songs__header-wrapper__title">Title</span>
          <div class="list-songs__header-wrapper__time">
            <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path><path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"></path></svg>
          </div>
        </div>
      </div>
      <div class="list-songs__content">
      </div>
      <div>
      </div>
      <div class="list-songs__content">
        <div class="list-songs__content__list" ref="popularSongs">
          <div v-for="(song,index) in bankSongs.songs" key="index" class="list-songs__content__list-item">
            <div class="list-songs__content__list-item__number">
              <p>{{ index + 1 }}</p>
              <button>
                <svg data-encore-id="icon" role="img" aria-hidden="true" class="Svg-sc-ytk21e-0 bneLcE zOsKPnD_9x3KJqQCSmAq" viewBox="0 0 24 24"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg>
              </button>
            </div>
            <div class="list-songs__content__list-item__song">
              <p>{{ song.title }}</p>
              <div v-for="(artist,index) in song.artists" :key="index">
                <span> {{ artist }} </span>
              </div>
            </div>
            <div class="list-songs__content__list-item__listens">
              <p> {{ song.listeners.toLocaleString('en-US') }} </p>
            </div>
            <div class="list-songs__content__list-item__time">
              <button class="button-like">
                <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI"><path d="M1.69 2A4.582 4.582 0 0 1 8 2.023 4.583 4.583 0 0 1 11.88.817h.002a4.618 4.618 0 0 1 3.782 3.65v.003a4.543 4.543 0 0 1-1.011 3.84L9.35 14.629a1.765 1.765 0 0 1-2.093.464 1.762 1.762 0 0 1-.605-.463L1.348 8.309A4.582 4.582 0 0 1 1.689 2zm3.158.252A3.082 3.082 0 0 0 2.49 7.337l.005.005L7.8 13.664a.264.264 0 0 0 .311.069.262.262 0 0 0 .09-.069l5.312-6.33a3.043 3.043 0 0 0 .68-2.573 3.118 3.118 0 0 0-2.551-2.463 3.079 3.079 0 0 0-2.612.816l-.007.007a1.501 1.501 0 0 1-2.045 0l-.009-.008a3.082 3.082 0 0 0-2.121-.861z"></path></svg>
              </button>
              <p> {{ song.duration.split(':').slice(0, 2).join(':') }} </p>
              <button class="button-more">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="footer">
      <Footer></Footer>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.release-block{
  position: relative;
}
.header-release{
  width: 100%;
  height: 30vh;
  max-height: 400px;
  min-height: 320px;
  position: relative;
  background-color: rgb(168, 24, 40);
  &__content{
    height: 100%;
    display: flex;
    align-items: end;
    padding: 89px 24px 24px 24px ;
    background: linear-gradient(transparent 0,rgba(0,0,0,.5) 100%);
    &-preview{
      box-shadow: 0 4px 60px rgba(0,0,0,.5);
      border-radius: 4px;
      margin-right: 24px;
      height: 100%;
      width: fit-content;
      overflow: hidden;
      display: flex;
    }
    &-info{
      &__type{
        font-size: 0.875rem;
      }
      &__name{
        font-size: 6rem;
        font-weight: 800;
        text-wrap: balance;
      }
      &_artist{
        display: flex;
        align-items: center;
        &-photo{
          width: 24px;
          height: 24px;
          display: flex;
          border-radius: 9999px;
          overflow: hidden;
          img{
            width: 100%;
          }
        }
        &-name{
          font-weight: 700;
          font-size: 0.875rem;
          margin-left: 4px;
          &:hover{
            text-decoration: underline;
            cursor: pointer;
          }
        }
        &-date , &-songs{
          font-size: 0.875rem;
          &::before{
            content: "•";
            margin: 0 4px;
          }

        }
      }
    }
  }
}
.menu-play{
  position: relative;
  z-index: 2;
  &__content{
    padding: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &__buttons{
      display: flex;
      align-items: center;
      &__button-play{
        border-radius: 9999px;
        background-color: var(--main-color);
        width: 56px;
        aspect-ratio: 1;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 32px;
        div{
          width: 24px;
          transform: translateX(12%) translateY(8%);
          img{
            width: 100%;
          }
        }
        &:hover{
          transform: scale(1.05);
        }
      }
      &__button-like{
        width: 32px;
        height: 32px;
        margin-right: 24px;
        svg{
          fill: #b3b3b3;
        }
        &:hover{
          cursor: pointer;
        }
        &:hover svg{
          fill: #fff;
        }
      }
      &__button-more{
        width: 32px;
        height: 32px;
        margin-right: 24px;
        svg{
          fill: #b3b3b3;
        }
        &:hover{
          cursor: pointer;
        }
        &:hover svg{
          fill: #fff;
        }
      }
    }
    &__button-list{
      padding: 8px;
      cursor: pointer;
      font-size: 0.875rem;
      color: #fff;
      opacity: 0.7;
      display: flex;
      gap: 8px;
      transition: opacity 0.2s ease-in-out;
      svg{
        width: 16px;
        height: 16px;
        fill: #fff;
      }
      &:hover{
        opacity: 1;
      }
    }
  }
}
.list-songs{
  position: relative;
  z-index: 2;
  &__header{
    margin: 0 24px 15px 24px;
    &-wrapper{
      height: 36px;
      color: white;
      opacity: 0.7;
      border-bottom: 1px solid hsla(0,0%,100%,.1);
      padding: 0 16px;
      display: grid;
      grid-gap: 16px;
      grid-template-columns: [index] var(--tracklist-index-column-width,16px) [first] minmax(120px,var(--col1,4fr)) [last] minmax(120px,var(--col2,1fr));
      &__number{
        display: flex;
        align-items: center;
      }
      &__title{
        display: flex;
        align-items: center;
      }
      &__time{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        svg{
          margin-right: 32px;
          width: 16px;
          height: 16px;
          fill: #fff;
        }
      }
    }
  }
  &__content{
    margin-top: 12px;
    padding: 0 24px;
    &__title{
      font-weight: 700;
      font-size: 1.5rem;
      margin-bottom: 16px;
    }
    &__list{
      &-item{
        border-radius: 4px;
        height: 56px;
        display: grid;
        grid-template-columns: [index] var(--tracklist-index-column-width,16px) [first] minmax(120px,var(--col1,4fr)) [var1] minmax(120px,var(--col2,2fr)) [last] minmax(120px,var(--col3,1fr));
        align-items: center;
        grid-gap: 16px;
        padding: 0 16px;
        &__number{
          position: relative;
          p{
            font-variant: tabular-nums;
            font-size: 1rem;
            color: #fff;
            opacity: 0.7;
          }
          button{
            background-color: transparent;
            border: none;
            width: 16px;
            height: 16px;
            padding: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            cursor: pointer;
            opacity: 0;
            svg{
              width: 16px;
              height: 16px;
              fill: white;
            }
          }
        }
        &__song{
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          user-select: none;
          p{
            cursor: pointer;
            &:hover{
              text-decoration: underline;
            }
          }
          span{
            opacity: 0.7;
            font-weight: 200;
            font-size: 0.875rem;
            transition: opacity 0.2s ease-in-out;
            &:hover{
              cursor: pointer;
              opacity: 1;
              text-decoration: underline;
            }
          }
          .wrapper-image{
            margin-right: 12px;
            display: flex;
            border-radius: 4px;
            overflow: hidden;
            img{
              height: 40px;
              width: 40px;
            }
          }
        }
        &__listens , &__time p{
          font-size: 0.875rem;
          font-variant-numeric: tabular-nums;
          color: #fff;
          opacity: 0.7;
          user-select: none;
        }
        &__time{
          display: flex;
          width: 100%;
          justify-content: end;
          align-items: center;
          p{
            margin: 0 12px;
          }
          button{
            background-color: transparent;
            border: none;
            padding: 0;
            cursor: pointer;
          }
          .button-more{
            display: flex;
            width: 16px;
            height: 32px;
            justify-content: space-between;
            align-items: center;
            opacity: 0;
            span{
              height: 3px;
              width: 3px;
              background-color: white;
              border-radius: 9999px;
            }
            &:hover{
              opacity: 1 !important;
            }
          }
          .button-like{
            width: 16px;
            height: 16px;
            margin-right: 12px;
            opacity: 0;
            svg{
              width: 16px;
              height: 16px;
              fill: #fff;
            }
            &:hover{
              opacity: 1 !important;
            }
          }
        }
        &:hover{
          background-color: rgba(255, 255, 255, 0.1);
        }
        &:hover &__number button{
          opacity: 1;
        }
        &:hover &__number p{
          opacity: 0;
        }
        &:hover &__listens{
          opacity: 1;
        }
        &:hover .button-like, &:hover .button-more{
          opacity: 0.7;
        }
      }
    }
    &__button-more{
      button{
        background: none;
        border: none;
        color: hsla(0, 0%, 100%, .7);
        padding: 16px;
        font-weight: 700;
        font-size: 0.875rem;
        cursor: pointer;
        &:hover{
          color: hsla(0, 0%, 100%, 1);
        }
      }
    }
  }
}
.footer{
  margin-top: 40px;
}
</style>