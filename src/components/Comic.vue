<template>
  <section class="comic">
    <History v-model="showHistory" />
    <div class="comic__title">
      <h1 v-if="existsComic">{{ currentComic.safe_title }}</h1>
      <Skeleton v-else :width="300" :height="67" />
    </div>
    <div class="comic__img">
      <img :src="currentComic.img" alt="comic" v-if="existsComic" />
      <Skeleton v-else type="block" :width="600" />
    </div>
    <StarRating v-model="starModel" />
    <div class="comic__buttons">
      <button class="comic__button" @click="openHistory">
        {{ $t('openHistory') }}
      </button>
      <button
        :class="['comic__button', { 'comic__button--loading': !existsComic }]"
        @click="updateCurrentComic()"
      >
        {{ $t('loadRandomComic') }}
      </button>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';
import StarRating from '@/components/StarRating.vue';
import Skeleton from '@/components/Skeleton.vue';
import History from '@/components/History.vue';
import { typesComic as types } from '@/store/modules/comic/types';
import { typesComic as typesHistory } from '@/store/modules/history/types';

export default {
  name: 'Comic',
  components: {
    StarRating,
    Skeleton,
    History,
  },
  data() {
    return {
      starModel: 0,
      showHistory: false,
    };
  },
  computed: {
    ...mapState(types.PATH, ['currentComic']),
    ...mapGetters(types.PATH, {
      existsComic: types.getters.GET_EXISTS_CURRENT_COMIC,
    }),
  },
  methods: {
    ...mapActions(types.PATH, {
      updateComic: types.actions.UPDATE_CURRENT_COMIC,
      updateInitialData: types.actions.UPDATE_INITIAL_DATA,
    }),
    ...mapActions(typesHistory.PATH, {
      updateComics: typesHistory.actions.UPDATE_COMICS,
    }),
    validateRoute() {
      return this.$route?.params?.comic ? this.$route.params.comic : '';
    },
    updateCurrentComic() {
      this.updateComics({
        img: this.currentComic.img,
        title: this.currentComic.safe_title,
        stars: this.starModel,
      });
      this.updateComic();
      this.starModel = 0;
    },
    openHistory() {
      this.showHistory = true;
    },
  },
  mounted() {
    this.updateInitialData(this.validateRoute());
  },
};
</script>
