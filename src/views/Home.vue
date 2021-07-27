<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <StarRating v-model="starModel" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import StarRating from '@/components/StarRating.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    StarRating,
  },
  data() {
    return {
      starModel: 0,
    };
  },
};
</script>
