<script setup>
import ProgressSpinner from 'primevue/progressspinner'
</script>

<template>
  <div class="flex justify-content-center">
    <ProgressSpinner
      style="width: 50px; height: 50px"
      strokeWidth="2"
      strokeColor="red"
      fill="none"
      animationDuration=".5s"
      aria-label="Loading"
    />
  </div>
</template>
