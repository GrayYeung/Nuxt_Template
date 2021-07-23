<template>
  <div>
    <div>{{ count }}</div>
    <div>{{ countRef }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, PropType } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'DisplayNumber',

  components: {},
  // layout: '',
  props: {
    count: {
      type: Number,
      default: 0,
      required: false,
      validator: (value: number) => {
        return value >= 0
      },
    },

    // arrayExample: {
    //   type: Array as PropType<string[]>,
    //   required: true,
    // },
  },

  setup(props, { emit }) {
    // to make props be reactive
    const { count } = toRefs(props)

    return { countRef: count }
  },
})
</script>

<style scoped></style>
