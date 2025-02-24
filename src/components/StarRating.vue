<template>
  <div class="inline-block star-rating">
    <span
      v-for="i in 5"
      :key="i"
      :class="i <= rating ? 'text-amber-500' : 'text-neutral-300'"
    >
      ★
    </span>
  </div>
</template>

<script setup lang="ts">
const { rating } = defineProps({
  rating: {
    type: Number,
    required: true,
  },
});
</script>
