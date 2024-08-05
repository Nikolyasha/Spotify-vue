<script lang="ts" setup>
import Button from "@/components/Tools/Button.vue";

const props = defineProps([
    'title',
    'subtitle',
    'buttonText',
])
</script>
<template>
  <div class="info">
    <h4 class="info-title">{{ props.title }}</h4>
    <p class="info-subtitle">{{ props.subtitle }}</p>
    <div class="info-button">
      <Button :title="props.buttonText" :size="'small'"></Button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.info{
  background-color: rgba(36, 36, 36, 0.68);
  padding: 20px 15px;
  border-radius: 8px;
  &-title{
    font-size: 16px;
    font-weight: 700;
  }
  &-subtitle{
    margin-top: 12px;
    font-size: 14px;
    font-weight: 400;
  }
  &-button{
    margin-top: 20px;
    display: flex;
  }
}
</style>