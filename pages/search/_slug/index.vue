<template>
  <main-block :query-type="queryType" />
</template>

<script>
import MainBlock from '@/components/blocks/MainBlock'

export default {
  components: {
    MainBlock,
  },
  data() {
    return {
      queryType: 'search',
    }
  },
}
</script>
