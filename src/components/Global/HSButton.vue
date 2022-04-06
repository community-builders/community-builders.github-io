<template>
  <button v-if="!link" :class="`hs-button${ type && ' ' + assertType(type) }`" role="button">
    <i v-if="icon" class="hs-button__icon" v-html="icon"></i>
    <span v-if="isLabelVisible" class="hs-button__label"><slot></slot></span>
  </button>

  <a v-else :class="`hs-button${ type && ' ' + assertType(type) }`" role="link" :href="link">
    <i v-if="icon" class="hs-button__icon" v-html="icon"></i>
    <span v-if="isLabelVisible" class="hs-button__label"><slot></slot></span>
  </a>
</template>

<script>
import { Comment } from 'vue';

export default {
  name: "HSButton",
  props: {
    icon: String,
    link: String,
    isDisabled: Boolean,
    type: {
      type: String,
      default: ''
    },
  },
  computed: {
    isLabelVisible() {
      return this.$slots.default && this.$slots.default().findIndex(o => o.type !== Comment) !== -1;
    },
  },
  methods: {
    assertType(type) {
      const finalTypes = [];
      type.split(' ').forEach((type) => {
        finalTypes.push('is-' + type);
      });
      return finalTypes.join(' ');
    }
  }
}
</script>

<style scoped>

</style>