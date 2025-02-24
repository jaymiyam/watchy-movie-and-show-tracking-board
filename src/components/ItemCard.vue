<template>
  <BaseCard>
    <div>
      <!-- card header -->
      <div class="flex justify-between items-start gap-1 mb-2">
        <h3
          class="text-md font-bold"
          :class="{ 'text-emerald-400': item.isFinished }"
        >
          {{ item.title }}
        </h3>
        <span class="text-md">{{ countryFlags(item.country) }}</span>
      </div>
      <!-- pill tags -->
      <div class="flex items-center gap-2">
        <BasePill :pill-type="item.category">{{ item.category }}</BasePill>
        <BasePill :pill-type="item.genre">{{ item.genre }}</BasePill>
      </div>
    </div>
    <!-- on air indicator -->
    <div v-if="item.isUpdating" class="flex gap-2 items-center text-sm">
      <div class="size-2 bg-red-500 rounded-full"></div>
      <span>On air - </span>
      <span class="text-blue-500 font-bold">{{ item.updateWeekday }}</span>
    </div>
    <!-- star rating if finished -->
    <div v-else-if="item.isFinished">
      Rating -
      <StarRating :rating="parseInt(item.rating)" />
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from './BaseCard.vue';
import BasePill from './BasePill.vue';
import StarRating from './StarRating.vue';

const { item } = defineProps({
  item: Object,
  required: true,
});

const countryFlags = (country) => {
  return {
    US: '🇺🇸',
    JP: '🇯🇵',
    KR: '🇰🇷',
    TW: '🇹🇼',
    Other: '🌎',
  }[country];
};
</script>
