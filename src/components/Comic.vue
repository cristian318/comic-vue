<template>
  <section class="comic">
    <div class="comic__title">
      <h1 v-if="existsComic">{{ currentComic.safe_title }}</h1>
      <Skeleton v-else :width="300" :height="67" />
    </div>
    <div class="comic__img">
      <img :src="currentComic.img" alt="comic" v-if="existsComic" />
      <Skeleton v-else type="block" :width="600" />
    </div>
    <StarRating v-model="starModel" />
    <button
      :class="['comic__button', { 'comic__button--loading': !existsComic }]"
      @click="updateComic()"
    >
      {{ $t('loadRandomComic') }}
    </button>
  </section>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';
import StarRating from '@/components/StarRating.vue';
import Skeleton from '@/components/Skeleton.vue';
import { typesComic as types } from '@/store/modules/comic/types';

export default {
  name: 'Comic',
  components: {
    StarRating,
    Skeleton,
  },
  data() {
    return {
      starModel: 0,
    };
  },
  computed: {
    ...mapState(types.PATH, ['currentComic']),
    ...mapGetters(types.PATH, {
      existsComic: types.getters.GET_EXISTS_currentComic,
    }),
  },
  methods: {
    validateRoute() {
      return this.$route?.params?.comic ? this.$route.params.comic : '';
    },
    ...mapActions(types.PATH, {
      updateComic: types.actions.UPDATE_currentComic,
      updateInitialData: types.actions.UPDATE_INITIAL_DATA,
    }),
  },
  mounted() {
    this.updateInitialData(this.validateRoute());
  },
};
</script>
