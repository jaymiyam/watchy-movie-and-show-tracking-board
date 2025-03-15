<template>
  <!-- modal background -->
  <Teleport to="body">
    <div class="fixed inset-0 bg-black/50 flex justify-center items-center">
      <!-- modal container -->
      <div
        class="relative bg-white dark:bg-neutral-800 rounded-md p-6 mx-6 w-full sm:w-[408px] flex flex-col items-between"
        ref="modalRef"
      >
        <!-- close button -->
        <button
          @click="$emit('close-modal')"
          class="absolute right-6 top-6 cursor-pointer"
        >
          <Icon
            icon="material-symbols:close-rounded"
            width="24"
            height="24"
            class="text-neutral-900 dark:text-white"
          />
        </button>
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js';
import { useTemplateRef } from 'vue';
import { onClickOutside } from '@vueuse/core';

const emits = defineEmits(['close-modal']);

const modalRef = useTemplateRef<HTMLElement>('modalRef');

onClickOutside(modalRef, (e) => {
  emits('close-modal');
});
</script>
