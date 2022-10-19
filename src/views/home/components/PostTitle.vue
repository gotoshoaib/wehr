<template>
  <div class="inner_wrap">
    <h4>{{ title }}</h4>
    <span>{{ duration }}</span>
    <a href="javascript:;" class="meatball_menu"></a>
    <a href="javascript:;" class="pin_icon"></a>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    duration: {
      type: String,
    },
  },
};
</script>

<style>
</style>