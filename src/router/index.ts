import MonthlyView from '@/views/MonthlyView.vue';
import WeeklyView from '@/views/WeeklyView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MonthlyView,
    },
    {
      path: '/weekly',
      component: WeeklyView,
    },
  ],
});

export default router;
