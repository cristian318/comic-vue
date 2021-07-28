<template>
  <div>
    <StarRating v-model="starModel" />
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';
import StarRating from '@/components/StarRating.vue';
import { typesComic as types } from '@/store/modules/comic/types';

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
  computed: {
    ...mapState(types.PATH, ['current_comic']),
    ...mapGetters(types.PATH, {
      existsComic: types.getters.GET_EXISTS_CURRENT_COMIC,
    }),
  },
  methods: {
    validateRoute() {
      return this.$route?.params?.comic ? this.$route.params.comic : '';
    },
    ...mapActions(types.PATH, {
      updateComic: types.actions.UPDATE_CURRENT_COMIC,
      updateInitialData: types.actions.UPDATE_INITIAL_DATA,
    }),
  },
  mounted() {
    this.updateInitialData(this.validateRoute());
  },
};
</script>
