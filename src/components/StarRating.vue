<template>
  <div @mouseleave="onMouseLeave" class="star-rating">
    <span
      v-for="n in 5"
      :key="n"
      @mouseover="onMouseOver(n)"
      :class="['star-rating__star', { 'star-rating__star--disabled': disabled }]"
    >
      <img :src="getImage(n)" alt="star" @click="selectStar(n)" />
    </span>
  </div>
</template>

<script>
import ImageStar from '@/assets/img/icons/star.svg';
import ImageStarFill from '@/assets/img/icons/star-fill.svg';

export default {
  props: {
    stars: {
      type: Number,
      default: () => 5,
    },
    value: {
      type: Number,
      default: () => 0,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    value(newVal) {
      this.star = newVal;
    },
  },
  data() {
    return {
      star: 0,
    };
  },
  methods: {
    selectStar(star) {
      if (!this.disabled) {
        this.star = star;
        this.$emit('input', star);
      }
    },
    onMouseOver(star) {
      if (!this.disabled) {
        this.star = star;
      }
    },
    onMouseLeave() {
      this.star = this.value;
    },
    getImage(star) {
      let srcImage;
      if (star > this.star) {
        srcImage = ImageStar;
      } else {
        srcImage = ImageStarFill;
      }
      return srcImage;
    },
  },
  mounted() {
    this.onMouseLeave();
  },
};
</script>
