<template>
  <div>
    <p>Example Index Page</p>
    <p>Store Data:</p>
    <div v-for="example in examples" :key="example.id">
      <p>{{ 'name: ' + example.name + ', role: ' + example.role }}</p>
    </div>
    <p>{{ keywords }}</p>
    <p>{{ anything }}</p>

    <button @click="redirect" class="bg-gray-100">Next</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, useRouter, useStore, computed } from '@nuxtjs/composition-api'
import { AnotherState, RootState } from '~/store/types'

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

    // Example of using Store
    const store = useStore<RootState>()
    store.dispatch('fetchAllExamples') // trigger action
    const examples = computed(() => store.state.examples) // get state
    const keywords = computed(() => store.getters.getAllKeywords) // use getter

    const anotherStore = useStore<AnotherState>()
    const anything = anotherStore.state.another.anything // another Store

    return { redirect, examples, keywords, anything }
  },
})
</script>

<style scoped></style>
