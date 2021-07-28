<template>
  <div>
    <StarRating v-model="starModel" />
  </div>
</template>

<script>
import StarRating from '@/components/StarRating.vue';

export default {
  name: 'Comic',
  components: {
    StarRating,
  },
  data() {
    return {
      starModel: 0,
    };
  },
  methods: {
    validateRoute() {
      if (this.$route?.params?.comic) {
        console.log('Comic route', this.$route.params.comic);
      }
    },
  },
  mounted() {
    this.validateRoute();
  },
};
</script>
