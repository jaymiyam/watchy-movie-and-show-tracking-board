<template>
  <BaseColumn class="grid gap-4">
    <h2
      class="uppercase text-sm dark:text-neutral-100 tracking-wider"
      :class="
        isCurrentMonth
          ? 'text-black font-bold underline'
          : 'text-neutral-600 font-medium'
      "
    >
      {{ month }}
    </h2>
    <div v-if="filteredItems.length != 0" class="grid gap-4">
      <ItemCard
        v-for="item in filteredItems"
        :key="item.id"
        :item="item"
        @click="handleOpenEditModal(item.id)"
      />
    </div>
    <div v-else class="w-[280px] min-h-[140px] text-neutral-400">
      No watcher!
    </div>
  </BaseColumn>
</template>

<script setup>
import { computed } from 'vue';
import BaseColumn from './BaseColumn.vue';
import ItemCard from './ItemCard.vue';
import { useWatchyStore } from '@/stores/watchy';
import { useLayoutStore } from '@/stores/layout';

const watchyStore = useWatchyStore();
const layoutStore = useLayoutStore();

const { month, isCurrentMonth } = defineProps({
  month: {
    type: String,
    required: true,
  },
  isCurrentMonth: {
    type: Boolean,
    required: true,
  },
});

const emits = defineEmits(['open-modal']);

const filteredItems = computed(() => {
  return watchyStore.filteredWatchyItems
    .filter((item) => item.month === month)
    .sort((a, b) => Number(a.isFinished) - Number(b.isFinished));
});

const handleOpenEditModal = (id) => {
  watchyStore.setEditingItem(id);
  layoutStore.toggleEditItemModal();
};
</script>
