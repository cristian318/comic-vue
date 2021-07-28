<template>
  <section class="comic">
    <div class="comic__title">
      <h1>{{ current_comic.safe_title }}</h1>
    </div>
    <div class="comic__img">
      <img :src="current_comic.img" alt="comic" />
    </div>
    <StarRating v-model="starModel" />
    <button
      :class="['comic__button', { 'comic__button--loading': !existsComic }]"
      @click="updateComic()"
    >
      Cargar comic aleatorio
    </button>
  </section>
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
