<template>
  <header
    class="px-6 py-4 border-b border-neutral-200 flex justify-between items-center"
  >
    <div class="relative">
      <button
        @click="layoutStore.toggleViewsMenu()"
        class="cursor-pointer flex gap-2 items-center"
      >
        <h1 class="text-2xl font-bold whitespace-nowrap">
          {{ route.path === '/' ? 'Monthly' : 'Weekly' }} View
        </h1>
        <Icon icon="tabler:chevron-down" width="20" height="20" />
      </button>

      <nav
        v-if="layoutStore.showViewsMenu"
        class="absolute left-0 mt-2 z-10 py-1 bg-white dark:bg-neutral-800 shadow-lg rounded-md w-48"
      >
        <RouterLink
          @click="layoutStore.toggleViewsMenu()"
          to="/"
          class="block p-2 text-sm text-neutral-800 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900"
          >Monthly View</RouterLink
        >
        <RouterLink
          @click="layoutStore.toggleViewsMenu()"
          to="/weekly"
          class="block p-2 text-sm text-neutral-800 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900"
          >Weekly View</RouterLink
        >
      </nav>
    </div>
    <!-- add new item button -->
    <button
      @click="$emit('open-modal')"
      class="bg-red-500 text-white rounded-full px-4 py-3 flex justify-center items-center cursor-pointer hover:bg-red-600"
    >
      <Icon icon="material-symbols:add-rounded" width="20" height="20" />
      <span class="hidden sm:inline"> Add new watcher</span>
    </button>
  </header>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router';
import { Icon } from '@iconify/vue/dist/iconify.js';
import { useLayoutStore } from '@/stores/layout';
const layoutStore = useLayoutStore();

const route = useRoute();
</script>
