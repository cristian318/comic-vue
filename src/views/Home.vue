<template>
  <div class="home">
    <Comic />
  </div>
</template>

<script>
// @ is an alias to /src
import Comic from '@/components/Comic.vue';

export default {
  name: 'Home',
  components: {
    Comic,
  },
};
</script>
