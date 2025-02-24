<template>
  <header
    class="row-span-full relative border-r border-neutral-200 flex flex-col gap-6 overflow-hidden transition-all"
    :class="showSidebar ? 'translate-x-0 w-[240px]' : 'translate-x-[-100%] w-0'"
  >
    <!-- app logo -->
    <div class="p-6 text-3xl font-bold">👀 watchy</div>
    <!-- sidebar nav -->
    <nav class="h-full flex flex-col justify-between">
      <ul>
        <SidebarLink
          :active="watchyStore.filterFlag === ''"
          @click="filterItems('')"
          ><span class="inline-block mr-2">🏠</span>All</SidebarLink
        >
        <SidebarLink
          :active="watchyStore.filterFlag === 'Movie'"
          @click="filterItems('Movie')"
          ><span class="inline-block mr-2">🍿</span>Movies</SidebarLink
        >
        <SidebarLink
          :active="watchyStore.filterFlag === 'Drama'"
          @click="filterItems('Drama')"
          ><span class="inline-block mr-2">📺</span>Dramas</SidebarLink
        >
        <SidebarLink
          :active="watchyStore.filterFlag === 'Show'"
          @click="filterItems('Show')"
          ><span class="inline-block mr-2">🎙️</span>Shows</SidebarLink
        >
        <SidebarLink
          :active="watchyStore.filterFlag === 'Anime'"
          @click="filterItems('Anime')"
          ><span class="inline-block mr-2">🐱</span>Anime</SidebarLink
        >
      </ul>
      <button
        @click="handleResetBoard"
        class="text-xs text-neutral-400 font-bold px-6 flex gap-1 justify-center items-center hover:underline hover:text-neutral-700 cursor-pointer"
      >
        <Icon icon="material-symbols:delete-outline" width="20" height="20" />
        <span>Reset Watchy Board</span>
      </button>
    </nav>
    <DarkModeToggle />
  </header>
</template>

<script setup lang="ts">
import DarkModeToggle from './DarkModeToggle.vue';
import SidebarLink from './SidebarLink.vue';
import { Icon } from '@iconify/vue/dist/iconify.js';
import { useWatchyStore } from '@/stores/watchy';
const watchyStore = useWatchyStore();

const { showSidebar } = defineProps<{
  showSidebar: boolean;
}>();

function filterItems(flag: string) {
  watchyStore.filterWatchyItems(flag);
}

function handleResetBoard() {
  if (
    confirm(
      'This will clear out the entire watchy board, do you wish to continue?'
    )
  ) {
    watchyStore.resetWatchyBoard();
  } else {
    return;
  }
}
</script>
