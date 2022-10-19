<template>
  <div class="inner_wrap" :class="variant">
    <h4>{{ title }}</h4>
    <span>{{ value }}</span>
    <p>{{ desc }}</p>
  </div>
</template>

<script>
export default {
  name: "stats-card",
  props: {
    title: {
      type: String,
    },
    value: {
      type: Number,
    },
    desc: {
      type: String,
    },
    variant: {
      type: String,
      description: "primary | info | danger",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.positions_wrap {
  .inner_wrap {
    padding: 12px 12px 12px 20px;
    border-radius: 10px;

    height: 100%;
    h4 {
      font-size: $font-size-h4;
      color: $tertiary-color;
    }
    span {
      font-size: $font-size-h1;
      color: $tertiary-color;
      display: block;
      font-weight: $font-weight-medium;
      line-height: 1;
      margin-bottom: 10px;
    }
    p {
      color: $tertiary-color;
    }
  }

  .inner_wrap.primary {
    background: #ffefe7;
    p {
      color: #ff5151;
    }
  }

  .inner_wrap.info {
    background: #e8f0fb;
    p {
      color: #3786f1;
    }
  }

  .inner_wrap.danger {
    background: #fdebf9;
    p {
      color: #ee61cf;
    }
  }
}
</style>