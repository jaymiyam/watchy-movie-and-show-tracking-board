<template>
  <span
    class="py-1 px-3 text-neutral-800 text-sm rounded-full"
    :class="`${pillColor}`"
    ><slot></slot
  ></span>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const { pillType } = defineProps<{
  pillType: string;
}>();

const pillColor = computed(() => {
  return {
    Movie: 'bg-rose-300',
    Drama: 'bg-amber-500',
    Anime: 'bg-orange-300',
    Show: 'bg-yellow-300',
    Others: 'bg-stone-300',
    Action: 'bg-red-400',
    Adventure: 'bg-lime-300',
    Comedy: 'bg-green-300',
    Documentary: 'bg-blue-300',
    Fantasy: 'bg-emerald-300',
    Fiction: 'bg-teal-300',
    Horror: 'bg-slate-300',
    Mystery: 'bg-indigo-300',
    Romance: 'bg-pink-300',
    Sports: 'bg-cyan-300',
    Thriller: 'bg-indigo-400',
    Variety: 'bg-sky-300',
  }[pillType];
});
</script>
