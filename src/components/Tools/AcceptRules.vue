<script lang="ts"setup>
const props = defineProps([
    'text','type'
])
</script>
<template>
  <div class="wrapper-accept">
    <input type="checkbox" >
    <label class="wrapper-accept__checkbox">
      <div class="wrapper-accept__text">
        <span>{{ props.text }}</span>
      </div>
    </label>
  </div>
</template>
<style lang="scss" scoped>
.wrapper-accept{
  padding: 16px;
  background-color: hsla(0,0%,100%,.1);
  border-radius: 5px;
  display: flex;
  align-items: start;
  &__text{
    padding: 0 12px;
  }
}
</style>