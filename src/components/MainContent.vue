<template>
  <div class="main_content">
    <slot />
  </div>
</template>

<script>
</script>


<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.main_content {
  background-color: #fff;
  padding: 30px 50px;
  padding-top: 102px;

  h1 {
    color: $tertiary-color;
    font-weight: $font-weight-medium;
    font-size: $font-size-h3;
    margin-bottom: 20px;
  }

  @media (min-width: 767px) {
    margin-left: 250px;
  }

  @media (max-width: 766px) {
    padding: 30px 25px;
    padding-top: 102px;
  }
}
</style>
