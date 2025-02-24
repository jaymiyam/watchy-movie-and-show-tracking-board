<template>
  <button
    class="absolute bottom-0 mb-6 p-2 rounded-r-md text-white bg-red-500 cursor-pointer transition-all"
    :class="showSidebar ? 'left-[240px]' : 'left-0'"
  >
    <Icon
      :icon="showSidebar ? 'mdi:hide' : 'mdi:show'"
      width="24"
      height="24"
    />
  </button>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

const { showSidebar } = defineProps<{
  showSidebar: boolean;
}>();
</script>
