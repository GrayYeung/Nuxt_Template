<template>
  <div>
    <p>Example Another Page</p>
    <button @click="addCount">Add Count</button>
    <DisplayNumber :count="count" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import DisplayNumber from '~/components/DisplayNumber.vue'

export default defineComponent({
  name: 'ExampleAnother',

  components: { DisplayNumber },
  layout: 'example',
  props: {},

  setup(props, { emit }) {
    console.log('example-another')

    const count = ref(-1)
    const addCount = () => count.value++

    return { count, addCount }
  },
})
</script>

<style scoped></style>
