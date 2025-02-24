<template>
  <BaseModal @close-modal="handleCloseModal">
    <h2 class="text-xl font-bold mb-4 dark:text-white">Add new watcher</h2>
    <FormKit
      type="form"
      submit-label="Add watcher"
      v-model="newItem"
      @submit="handleAddItem"
    >
      <FormKit
        type="text"
        name="title"
        label="Title"
        validation="required:trim"
        placeholder="Back To The Future"
      />
      <div class="grid grid-cols-2 gap-x-6">
        <FormKit
          type="select"
          name="category"
          label="Category"
          validation="required"
          :options="['Movie', 'Drama', 'Anime', 'Show', 'Others']"
        />
        <FormKit
          type="select"
          name="genre"
          label="Genre"
          validation="required"
          :options="[
            'Action',
            'Adventure',
            'Comedy',
            'Documentary',
            'Fantasy',
            'Fiction',
            'Horror',
            'Mystery',
            'Romance',
            'Sports',
            'Thriller',
            'Variety',
            'Others',
          ]"
        />
        <FormKit
          type="select"
          label="Country"
          name="country"
          validation="required"
          :options="['US', 'KR', 'JP', 'TW', 'Other']"
        />
        <FormKit
          type="select"
          name="month"
          label="Month"
          validation="required"
          :options="[
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
          ]"
        />
      </div>
      <div class="flex justify-between">
        <FormKit
          :disabled="newItem.isFinished"
          type="checkbox"
          label="Currently updating?"
          name="isUpdating"
        />
        <FormKit
          :disabled="newItem.isUpdating"
          type="checkbox"
          label="Finished?"
          name="isFinished"
        />
      </div>
      <FormKit
        v-if="newItem.isUpdating"
        preserve
        type="select"
        label="Update Weekday"
        name="updateWeekday"
        :options="[
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ]"
      />
      <FormKit
        v-if="newItem.isFinished"
        preserve
        type="range"
        label="Rate the show!"
        name="rating"
        min="1"
        max="5"
      />
    </FormKit>
  </BaseModal>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { FormKit } from '@formkit/vue';
import BaseModal from './BaseModal.vue';
import type { WatchyItem } from '@/types/watchyItem';
import { useWatchyStore } from '@/stores/watchy';
const watchyStore = useWatchyStore();

const emits = defineEmits(['close-modal']);

const newItem = ref<WatchyItem>({
  id: crypto.randomUUID(),
  title: '',
  category: 'Movie',
  country: 'US',
  month: 'January',
  genre: 'Action',
  isUpdating: false,
  updateWeekday: 'Monday',
  isFinished: false,
  rating: 1,
});

function handleCloseModal() {
  emits('close-modal');
}

function handleAddItem() {
  watchyStore.addWatchyItem(newItem.value);
  handleCloseModal();
}
</script>
