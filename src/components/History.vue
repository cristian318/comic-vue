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
            <Card>
              <template #header>
                {{ item.title }}
              </template>
              <template #body>
                <div class="history__card-body">
                  <img :src="item.img" alt="image-comic" />
                  <StarRating v-model="item.stars" disabled />
                </div>
              </template>
            </Card>
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
import Card from './Card.vue';
import StarRating from './StarRating.vue';

export default {
  components: {
    Card,
    StarRating,
  },
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
