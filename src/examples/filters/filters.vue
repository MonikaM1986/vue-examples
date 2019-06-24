<template>
<h1>
  {{ 'ojepse' | reverse }}
  {{ '5540500001000004' | mask(12, '#')}}
</h1>
</template>
<script>
import {mask} from './mask';
import {reverse} from './reverse';
export default {
  filters: {
    reverse,
    mask
  }
}
</script>
