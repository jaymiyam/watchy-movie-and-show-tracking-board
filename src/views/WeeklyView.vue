<template>
  <div
    class="relative bg-neutral-50 dark:bg-neutral-900 w-full h-full p-6 flex items-start gap-5 overflow-auto"
  >
    <WeeklyAppColumn
      v-for="(day, index) in weekdays"
      :key="day"
      :day="day"
      :isCurrentDay="index === currentWeekdayIndex"
    />
  </div>
</template>

<script setup lang="ts">
import WeeklyAppColumn from '@/components/WeeklyAppColumn.vue';
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const currentWeekdayIndex = new Date().getDay();
</script>
