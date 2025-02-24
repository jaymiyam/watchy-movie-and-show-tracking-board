<template>
  <div
    class="m-6 p-2 bg-neutral-100 dark:bg-neutral-900 rounded-md flex gap-1 items-center justify-center"
  >
    <Icon
      icon="tabler:sun-filled"
      width="20"
      height="20"
      class="text-neutral-500"
    />
    <label
      for="darkmode-toggle"
      class="inline-block relative w-8 h-4 rounded-full bg-neutral-200 cursor-pointer transition-colors duration-200 has-checked:bg-red-500"
    >
      <input
        type="checkbox"
        name="darkmode-toggle"
        id="darkmode-toggle"
        class="peer appearance-none"
        @change="layoutStore.toggleDark()"
      />
      <div
        class="size-4 rounded-full bg-white absolute top-0 left-0 shadow-sm transition-transform duration-200 peer-checked:translate-x-4"
      ></div>
    </label>
    <Icon
      icon="tabler:moon-filled"
      width="20"
      height="20"
      class="text-neutral-500"
    />
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useLayoutStore } from '@/stores/layout';
const layoutStore = useLayoutStore();
</script>
