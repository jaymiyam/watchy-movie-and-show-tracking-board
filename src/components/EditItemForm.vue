<template>
  <BaseModal @close-modal="handleCloseModal">
    <div class="flex gap-2 items-center mb-4">
      <h2 class="text-xl font-bold dark:text-white">Edit watcher</h2>
      <button
        @click="handleDeleteItem"
        class="inline-flex items-center justify-center cursor-pointer text-neutral-400 hover:text-neutral-800"
      >
        <Icon icon="material-symbols:delete-outline" width="28" height="28" />
      </button>
    </div>
    <FormKit
      type="form"
      submit-label="Confirm"
      @submit="handleEditItem"
      v-model="editingItem"
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
          :disabled="editingItem.isFinished"
          type="checkbox"
          label="Currently updating?"
          name="isUpdating"
        />
        <FormKit
          :disabled="editingItem.isUpdating"
          type="checkbox"
          label="Finished?"
          name="isFinished"
        />
      </div>
      <FormKit
        v-if="editingItem.isUpdating"
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
        v-if="editingItem.isFinished"
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
import BaseModal from './BaseModal.vue';
import { ref } from 'vue';
import { FormKit } from '@formkit/vue';
import { Icon } from '@iconify/vue/dist/iconify.js';
import { useWatchyStore } from '@/stores/watchy';
const watchyStore = useWatchyStore();

const editingItem = ref();

const emits = defineEmits(['close-modal']);
editingItem.value = watchyStore.editingItem;

function handleCloseModal() {
  emits('close-modal');
}

function handleEditItem() {
  watchyStore.updateWatchyItem(editingItem);
  emits('close-modal');
}

function handleDeleteItem() {
  if (confirm('Do you wish to delete this item?')) {
    watchyStore.deleteWatchyItem(editingItem.id);
    emits('close-modal');
  } else {
    return;
  }
}
</script>
