<template>
  <div
    :class="['skeleton skeleton--wave', { 'skeleton--text': type === 'text' }]"
    :style="getStyle"
  ></div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: -1,
    },
    height: {
      type: Number,
      default: -1,
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  computed: {
    getStyle() {
      return {
        height: this.height !== -1 ? `${this.height}px` : '',
        width: this.width !== -1 ? `${this.width}px` : '',
      };
    },
  },
};
</script>
