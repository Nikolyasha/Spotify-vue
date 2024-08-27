<script lang="ts" setup>
import InputText from "@/components/Tools/InputText.vue";
import Button from "@/components/Tools/Button.vue";
import {ref} from "vue";

const rules = ref(
    ['1 letter','1 digit or special character (eg # ? ! &)','10 characters']
)
</script>
<template>
  <section>
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
      <div class="form-sign-up__button">
        <Button size="large" link="/" title="Continue" color="green"></Button>
      </div>
    </form>
  </section>
</template>
<style lang="scss" scoped>
section{
  //border: 1px solid red;
  width: 324px;
  margin: 0 auto;
  .form-sign-up{
    margin-top: 16px;
  }
  .form-sign-up__rules{
    margin-top: 16px;
    margin-bottom: 32px;
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
</style>