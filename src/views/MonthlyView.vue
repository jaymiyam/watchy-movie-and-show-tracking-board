<template>
  <div
    class="relative bg-neutral-50 dark:bg-neutral-900 w-full h-full p-6 flex items-start gap-5 overflow-auto"
  >
    <MonthlyAppColumn
      v-for="(month, index) in months"
      :key="month"
      :month="month"
      :isCurrentMonth="index === currentMonthIndex"
    />
  </div>
</template>

<script setup>
import MonthlyAppColumn from '@/components/MonthlyAppColumn.vue';
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
</script>
