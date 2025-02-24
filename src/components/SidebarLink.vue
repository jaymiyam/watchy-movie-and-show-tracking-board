<template>
  <li
    class="pl-6 py-2 mr-6 rounded-r-full text-neutral-600 dark:text-neutral-100 cursor-pointer"
    :class="{ 'bg-red-500 rounded-r-full text-white': active }"
  >
    <button class="cursor-pointer tracking-wide">
      <slot></slot>
    </button>
  </li>
</template>

<script setup lang="ts">
const { active } = defineProps<{
  active: boolean;
}>();
</script>
