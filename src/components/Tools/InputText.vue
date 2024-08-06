<script lang="ts" setup>
const props = defineProps([
    'title','placeholder','value','type','name',
])
</script>
<template>
  <div class="wrapper-input">
    <label :for="props.name">{{ props.title }}</label>
    <div class="wrapper-input__container-input">
      <input :name="props.name" :type="props.type" :placeholder="props.placeholder">
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wrapper-input{
  display: flex;
  flex-direction: column;
  gap: 8px;
  label{
    font-weight: 700;
    color: inherit;
    font-size: 0.875rem;
  }
  &__container-input{
    width: 100%;
    input{
      width: 100%;
      box-shadow: inset 0 0 0 1px #878787;
      background-color: transparent;
      border: none;
      color: inherit;
      font-size: 1rem;
      padding: 12px 16px;
      border-radius: 4px;
      transition: box-shadow 0.1s ease-in-out;
      &:focus{
        outline: none;
      }
      &:hover{
        box-shadow: inset 0 0 0 1px white;
      }
    }
  }
}
</style>