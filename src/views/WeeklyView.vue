<template>
  <div
    ref="boardContainer"
    class="relative bg-neutral-50 dark:bg-neutral-900 w-full h-full p-6 flex items-start gap-5 overflow-auto scroll-smooth"
  >
    <WeeklyAppColumn
      v-for="(day, index) in weekdays"
      :key="day"
      :day="day"
      :isCurrentDay="index === currentWeekdayIndex"
      :ref="(el) => (weekdayRefs[index] = el)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import WeeklyAppColumn from '@/components/WeeklyAppColumn.vue';

// Refs
const boardContainer = ref<HTMLElement | null>();
const weekdayRefs = ref<any[]>([]);

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

onMounted(async () => {
  await nextTick();

  const container = boardContainer.value;
  const targetWeekday =
    weekdayRefs.value[currentWeekdayIndex].$el ||
    weekdayRefs.value[currentWeekdayIndex];

  if (container && targetWeekday) {
    // scroll to current weekday column
    const offset = targetWeekday.offsetLeft - container.offsetLeft;
    container.scrollTo({ left: offset, behavior: 'smooth' });
  }
});
</script>
