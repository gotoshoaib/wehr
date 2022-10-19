<template>
  <div class="inner_wrap">
    <div>
      <h4>{{ title }}</h4>
      <span class="number">{{ value }}</span>
      <ul>
        <li>{{ men }} Men</li>
        <li>{{ women }} Women</li>
      </ul>
    </div>
    <div>
      <img src="@/assets/images/graph_thumb.svg" alt="" />
      <span>{{ increament }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "history-card",
  props: {
    title: {
      type: String,
    },
    value: {
      type: Number,
    },
    men: {
      type: Number,
    },
    women: {
      type: Number,
    },
    increament: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.graph_sec_wrap {
  .inner_wrap {
    padding: 20px;
    background: $white-color;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    h4 {
      font-size: $font-size-h4;
      color: $tertiary-color;
    }
    .number {
      font-size: $font-size-l;
      color: $tertiary-color;
      display: block;
      font-weight: $font-weight-medium;
      line-height: 1;
      margin-bottom: 10px;
    }
    ul {
      li {
        font-family: $secondary-font-family;
        color: $primary-subtitle-color;
      }
    }
    & > :last-child {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      img {
      }
      span {
        padding: 0px 10px;
        background: #ffefe7;
        border-radius: 4px;
        width: 107px;
        height: 24px;
        font-family: $secondary-font-family;
        font-size: $font-size-h6;
        display: flex;
        align-items: center;
        justify-content: center;
        color: $primary-color;
      }
    }
  }
}
</style>