<template>
  <div
    class="w-[100vw] h-[100vh] grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] overflow-hidden"
  >
    <AppSidebar :showSidebar="layoutStore.showSidebar" />
    <AppHeader @open-modal="layoutStore.toggleAddItemModal()" />
    <RouterView />
    <SidebarToggle
      @click="layoutStore.toggleSidebar()"
      :showSidebar="layoutStore.showSidebar"
    />
  </div>
  <Transition name="modal">
    <AddItemForm
      v-if="layoutStore.showAddItemModal"
      @close-modal="layoutStore.toggleAddItemModal()"
    />
  </Transition>
  <Transition name="modal">
    <EditItemForm
      v-if="layoutStore.showEditItemModal"
      @close-modal="layoutStore.toggleEditItemModal()"
    />
  </Transition>
</template>

<script setup>
import AppSidebar from './components/AppSidebar.vue';
import AppHeader from './components/AppHeader.vue';
import SidebarToggle from './components/SidebarToggle.vue';
import AddItemForm from './components/AddItemForm.vue';
import EditItemForm from './components/EditItemForm.vue';
import { useWatchyStore } from './stores/watchy';
import { useLayoutStore } from './stores/layout';
const watchyStore = useWatchyStore();
const layoutStore = useLayoutStore();
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease-in;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
