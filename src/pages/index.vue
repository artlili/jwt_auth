<script setup>
import { useUserStore } from '../stores/user'

import Card from 'primevue/card'

import AppMessage from '../components/AppMessage.vue'
import AppLoader from '../components/AppLoader.vue'

const store = useUserStore()

store.getUserInfo()
</script>

<template>
  <div>
    <h2>User page</h2>
    <div class="flex flex-column gap-3">
      <Card v-if="store.userInfo">
        <template #title> {{ store.userInfo.username }} </template>
        <template #content> {{ store.userInfo.about }} </template>
      </Card>
      <AppMessage
        v-else-if="store.message"
        :severity="store.message.type"
        :text="store.message.text"
      />

      <AppLoader class="mt-8" v-else />
    </div>
  </div>
</template>
