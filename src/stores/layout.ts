import { defineStore, acceptHMRUpdate } from 'pinia';
import { useDark, useToggle } from '@vueuse/core';
import { ref } from 'vue';

export const useLayoutStore = defineStore('LayoutStore', () => {
  // sidebar toggle
  const showSidebar = ref(true);
  const toggleSidebar = useToggle(showSidebar);
  // add item form toggle
  const showAddItemModal = ref(false);
  const toggleAddItemModal = useToggle(showAddItemModal);
  // edit item form toggle
  const showEditItemModal = ref(false);
  const toggleEditItemModal = useToggle(showEditItemModal);
  // toggle interface dark mode
  const isDark = useDark({ disableTransition: false });
  const toggleDark = useToggle(isDark);
  // toggle header views menu
  const showViewsMenu = ref(false);
  const toggleViewsMenu = useToggle(showViewsMenu);

  return {
    showSidebar,
    toggleSidebar,
    showAddItemModal,
    toggleAddItemModal,
    showEditItemModal,
    toggleEditItemModal,
    isDark,
    toggleDark,
    showViewsMenu,
    toggleViewsMenu,
  };
});

// hot module reload fo pinia***
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLayoutStore, import.meta.hot));
}
