<template>
  <div class="history">
    <transition name="right-fade-in-transtion--small">
      <div v-show="value" class="history__container">
        <div class="history__header">
          Historial de comics
          <em class="history__close" @click="hideHistory">x</em>
        </div>
        <div class="history__body">
          <div v-for="(item, i) of comics" :key="i">
            elment
            {{ item }}
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade-transtion">
      <div v-show="value" class="history__backdrop" @click="hideHistory"></div>
    </transition>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { typesComic as types } from '@/store/modules/history/types';

export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState(types.PATH, ['comics']),
  },
  methods: {
    ...mapActions(types.PATH, {
      updateComics: types.actions.UPDATE_COMICS,
    }),
    hideHistory() {
      this.$emit('input', false);
    },
  },
  mounted() {
    this.updateComics();
  },
};
</script>
