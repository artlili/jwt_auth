<script setup>
import Message from 'primevue/message'
import { isString } from '../validators'

defineProps({
  text: {
    required: true,
    type: String,
    validator: isString
  },
  severity: {
    required: true,
    type: String,
    validator: isString
  },
  closable: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <transition name="p-message">
    <Message :closable="closable" :severity="severity">
      {{ text }}
    </Message>
  </transition>
</template>
