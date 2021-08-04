<template>
  <div class="card">
    <div class="card__header">
      <slot name="header">header</slot>
    </div>
    <div class="card__body">
      <slot name="body"> body</slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>
