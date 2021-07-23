<template>
  <div>
    <nuxt-child />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'ExampleRoot',

  components: {},
  layout: 'example',
  props: {},

  setup(props, { emit }) {
    // render root at 2nd
    // will log once only if another page is using this same root
    console.log('example-root')

    return {}
  },
})
</script>

<style scoped></style>
