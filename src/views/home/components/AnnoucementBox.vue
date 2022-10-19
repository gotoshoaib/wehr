<template>
  <div class="annoucement_sec">
    <!-- <div class="top_bar">
      <h3>Announcement</h3>
      <div class="date_filter">
        <select>
          <option>Today, 13 Sep 2021</option>
        </select>
      </div>
    </div> -->
    <div class="top_bar">
      <slot name="header"></slot>
    </div>
    <slot name="body"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "annoucement-box",
};
</script>

<style>
</style>