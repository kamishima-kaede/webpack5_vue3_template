<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script setup>
  defineProps({
    iconClass: {
      type: String,
      required: true,
      default: ''
    },
    className: {
      type: String,
      default: ''
    }
  })
  const iconName = computed(() => {
    return `#icon-${iconClass}`
  })
  const svgClass = computed(() => {
    return className ? `svg-icon${className}` : 'svg-icon'
  })
</script>

<style scoped>
  .svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
