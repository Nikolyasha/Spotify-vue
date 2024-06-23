<script lang="ts" setup>
import CardMix from "@/components/CentralBlock/CardMix.vue";

const props = defineProps(["title", "mixes"]);
</script>

<template>
  <div class="mix-recommendation">
    <h4> {{ props.title }} </h4>
    <div class="mixes">
      <div class="mixes-item" v-for="(mix,index) in  props.mixes">
        <CardMix
            :title = "mix.title"
            :artists = "mix.artists"
            :preview = "mix.preview"
            :type="'vertical'"></CardMix>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.mix-recommendation{
  h4{
    font-size: 30px;
    font-weight: 700;
  }
  .mixes{
    margin-top: 26px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 31px;
  }
}
</style>