<template>
  <div>
    <p>Example Index Page</p>
    <button @click="redirect" class="bg-gray-100">Next</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, useRouter } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'ExampleIndex',

  components: {},
  layout: 'example',
  props: {},

  setup(props, { emit }) {
    // render page at last
    console.log('example-index')

    const router = useRouter()
    const redirect = () => router.push({ name: 'example-another' })

    return { redirect }
  },
})
</script>

<style scoped></style>
