<template>
  <div class="selector-language">
    <button
      :class="[
        'selector-language__item',
        { 'selector-language__item--active': item.id === currentSelected },
      ]"
      v-for="(item, i) of languages"
      :key="i"
      @click="selectLanguage(item.id)"
    >
      {{ item.label }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      languages: [
        {
          label: 'EN',
          id: 'en',
        },
        {
          label: 'ES',
          id: 'es',
        },
        {
          label: 'PT',
          id: 'pt',
        },
      ],
      currentSelected: 'en',
    };
  },
  methods: {
    selectLanguage(language) {
      this.$i18n.locale = language;
      this.currentSelected = language;
    },
  },
};
</script>
