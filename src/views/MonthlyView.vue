<template>
  <div
    ref="boardContainer"
    class="relative bg-neutral-50 dark:bg-neutral-900 w-full h-full p-6 flex items-start gap-5 overflow-auto scroll-smooth"
  >
    <MonthlyAppColumn
      v-for="(month, index) in months"
      :key="month"
      :month="month"
      :isCurrentMonth="index === currentMonthIndex"
      :ref="(el) => (monthRefs[index] = el)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import MonthlyAppColumn from '@/components/MonthlyAppColumn.vue';

// Refs
const boardContainer = ref<HTMLElement | null>(null);
const monthRefs = ref<any[]>([]);

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const currentMonthIndex = new Date().getMonth();

onMounted(async () => {
  await nextTick();
  const container = boardContainer.value;
  const targetMonth =
    monthRefs.value[currentMonthIndex]?.$el ||
    monthRefs.value[currentMonthIndex];

  if (container && targetMonth) {
    // scroll to current month column
    const offset = targetMonth.offsetLeft - container.offsetLeft;
    container.scrollTo({ left: offset, behavior: 'smooth' });
  }
});
</script>
