<template>
  <div class="home">
    <Comic />
  </div>
</template>

<script>
import Comic from '@/components/Comic.vue';

export default {
  name: 'Home',
  components: {
    Comic,
  },
};
</script>
