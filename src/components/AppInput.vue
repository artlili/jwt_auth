<script setup>
import InputText from 'primevue/inputtext'
import { isString } from '../validators'

defineProps({
  icon: {
    required: true,
    type: String,
    validator: isString
  },
  type: {
    default: 'text',
    type: String,
    validator: isString
  },
  placeholder: {
    type: String,
    validator: isString
  }
})
</script>

<template>
  <div class="p-inputgroup flex-1">
    <span class="p-inputgroup-addon">
      <i :class="`pi pi-${icon}`"></i>
    </span>
    <InputText :type="type" v-bind="$attrs" :placeholder="placeholder" />
  </div>
</template>
