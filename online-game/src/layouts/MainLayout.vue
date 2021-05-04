<template>
  <q-layout view="hHh lpr fFr">
    <q-header v-if="isAuthenticated">
      <q-toolbar>
        <!-- <q-btn
          flat
          dense
          icon="eva-menu-outline"
          aria-label="Menu"
          class="q-mr-sm"
          @click="leftDrawerOpen = !leftDrawerOpen"
        /> -->
        <q-toolbar-title>
          <q-btn
            flat
            class="q-px-md"
            label="HiKoDo"
            dense
            :to="{name: 'Home'}" />
        </q-toolbar-title>
        <q-btn
          flat
          class="q-px-md"
          label="Endkampf"
          dense
          :to="{name: 'BossFight'}"
          />
        <q-btn
          flat
          class="q-px-md"
          label="Logout"
          dense
          @click="logout()"
          />
      </q-toolbar>
    </q-header>
    <q-drawer
      v-if="drawerVisible"
      side="right"
      v-model="drawerOpen"
      show-if-above
      bordered
      content-class="bg-white"
    >
      <activity-list />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import ActivityList from '../components/ActivityList.vue'
import useAuth from '../use/useAuth'

export default defineComponent({
  name: 'MainLayout',
  components: { ActivityList },
  setup () {
    const { currentRoute } = useRouter()
    const { isAuthenticated, logout } = useAuth()
    const drawerVisible = computed(() => {
      console.log('compute', currentRoute.value.name)
      if (currentRoute.value.name === 'Home') {
        return true
      } else {
        return false
      }
    })
    const drawerOpen = ref(false)

    return {
      drawerVisible,
      drawerOpen,
      toggleRightDrawer () {
        drawerOpen.value = !drawerOpen.value
      },
      isAuthenticated,
      logout
    }
  }
})
</script>
