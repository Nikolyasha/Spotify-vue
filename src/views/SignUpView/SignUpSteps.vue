<script lang="ts" setup>
import Button from "@/components/Tools/Button.vue";
import InputText from "@/components/Tools/InputText.vue";
import {useRoute} from "vue-router";
import {ref} from "vue";
import AcceptRules from "@/components/Tools/AcceptRules.vue";

const route = useRoute()

const rules = ref(
    ['1 letter','1 digit or special character (eg # ? ! &)','10 characters']
)
</script>
<template>
  <div class="progress-bar">
    <div class="progress-bar-inner"></div>
  </div>
  <div class="steps-counter">
    <button class="steps-counter__button-back">
      <span>
        <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24" class="Svg-sc-ytk21e-0 dDkLMK"><path d="M15.957 2.793a1 1 0 0 1 0 1.414L8.164 12l7.793 7.793a1 1 0 1 1-1.414 1.414L5.336 12l9.207-9.207a1 1 0 0 1 1.414 0z"></path></svg>
      </span>
    </button>
    <div class="steps-counter__text">
      <p class="steps-counter__text-count">Step <span>1</span> of 3</p>
      <p class="steps-counter__text-rule">Think of a password</p>
    </div>
  </div>

  <section v-if="route.params.id == '1'" class="step-1" >
    <form action="" class="form-sign-up">
      <input-text name="email-sign-up" type="password" title="Password"></input-text>
      <div class="form-sign-up__rules">
        <p>The password must contain at least:</p>
        <div class="form-sign-up__rules-item" v-for="(rule, index) in rules" :key="index">
          <div class="form-sign-up__rules-item__radiobutton">
            <svg data-encore-id="icon" role="img" aria-hidden="true" data-testid="password_requirement_one_letter-true" class="rule-accept" viewBox="0 0 16 16"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm11.748-1.97a.75.75 0 0 0-1.06-1.06l-4.47 4.47-1.405-1.406a.75.75 0 1 0-1.061 1.06l2.466 2.467 5.53-5.53z" fill="var(--main-color)"></path></svg>
            <svg aria-hidden="true" width="12" height="12" data-testid="rule-not-accept"><ellipse cx="6" cy="6" rx="5.5" ry="5.5" stroke="#A7A7A7" stroke-width="1" fill="none"></ellipse></svg>
          </div>
          <div class="form-sign-up__rules-item__text">
            <span>{{ rule }}</span>
          </div>
        </div>
      </div>

    </form>
  </section>
  <section v-if="route.params.id == '2'" class="step-2">
    <form class="step-2__form">
      <input-text name="email-sign-up" type="text" title="Name" subtitle="Your name will appear on your profile."></input-text>
      <div class="step-2__form-date">
        <input-text type="date" title="Date of birth" subtitle="Why specify date of birth?"></input-text>
      </div>
      <div class="step-2__form-sex">
        <input-text name="sex" type="sex" title="Gender" subtitle="We take gender into account when selecting personalized recommendations and advertising."></input-text>
      </div>
    </form>
  </section>
  <section v-if="route.params.id == '3'" class="step-3">
    <form class="step-3__form">
      <accept-rules text="I do not want to receive promotional messages from Spotify."></accept-rules>
    </form>
  </section>

  <div class="form-sign-up__button">
    <Button size="large" link="/" title="Continue" color="green"></Button>
  </div>
</template>
<style lang="scss" scoped>
section{
  width: 324px;
  margin: 0 auto;
}
.progress-bar{
  height: 2px;
  width: 436px;
  margin: 0 auto;
  background-color: #7c7c7c;
  block-size: 2px;
  display: flex;
  &-inner{
    height: 100%;
    width: 33.333%;
    background-color: var(--main-color);
  }
}
.steps-counter{
  width: 436px;
  margin: 0 auto;
  display: flex;
  &__button-back{
    background-color: transparent;
    border: none;
    padding: 16px;
    opacity: 0.7;
    transition: opacity 0.2s ease-in-out;
    span{
      display: flex;
      align-items: center;
      justify-content: center;
      svg{
        width: 24px;
        height: 24px;
        fill: #fff;
      }
    }
    &:hover{
      opacity: 1;
      cursor: pointer;
    }
  }
  &__text{
    padding: 16px 0;
    user-select: none;
    &-count{
      color: #b3b3b3;
      margin-bottom: 4px;
    }
    &-rule{
      font-weight: 700;
    }
  }
}
.step-1{
  .form-sign-up{
    margin-top: 16px;
  }
  .form-sign-up__rules{
    margin-top: 16px;

    p{
      font-size: 0.875rem;
    }
    &-item{
      display: flex;
      margin-top: 8px;
      &__radiobutton{
        .rule-accept{
          display: none;
        }
      }
      &__text{
        margin-left: 8px;
        font-size: 0.875rem;
      }
    }
  }
}
.step-2{
  &__form{
    &-date,&-sex{
      margin-top: 16px;
    }
  }
}
.step-3{
  &__form{

  }
}
.form-sign-up__button{
  padding-top: 32px;
  width: 324px;
  margin: 0 auto;
  user-select: none;
}
</style>