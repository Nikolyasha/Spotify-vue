<script lang="ts" setup>
import CardMix from "@/components/CentralBlock/CardMix.vue";

const props = defineProps(["title", "mixes"]);
</script>

<template>
  <div class="mix-recommendation" v-if="props.mixes.length > 0">
    <h4> {{ props.title }} </h4>
    <div class="mixes">
      <div class="mixes-item" v-for="(mix,index) in  props.mixes">
        <CardMix
            :title = "mix.title"
            :artists = "mix.artists"
            :preview = "mix.releasePreview"
            :data = "mix.releaseDate"
            :type-release = "mix.releaseType"
            :id-release = "mix.id"
            :type="'vertical'"></CardMix>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.mix-recommendation{
  h4{
    font-size: 24px;
    font-weight: 700;
  }
  .mixes{
    margin: 18px -10px 0 -10px;
    display: grid;
    justify-content: space-between;
    justify-items: stretch;
    grid-template-columns: repeat(7, 1fr);
  }
}
</style>