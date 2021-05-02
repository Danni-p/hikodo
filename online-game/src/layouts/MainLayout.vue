<template>
  <q-layout view="hHh lpR fff">
    <q-header v-if="isAuthenticated">
      <q-toolbar>
        <q-btn
          flat
          dense
          icon="eva-menu-outline"
          aria-label="Menu"
          class="q-mr-sm"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-toolbar-title>Himmelfahrts-Kop-Do</q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-if="isAuthenticated"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-white"
    >
      <left-menu />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LeftMenu from '../components/LeftMenu.vue'
import useAuth from '../use/useAuth'

export default defineComponent({
  name: 'MainLayout',
  components: { LeftMenu },
  setup () {
    const { isAuthenticated } = useAuth()
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      isAuthenticated
    }
  }
})
</script>
