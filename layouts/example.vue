<template>
  <div>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  components: {},

  setup() {
    // render layout at 1st
    // will log once only if another page is using this same layout
    console.log('example-layout')

    return {}
  },
})
</script>

<style></style>
