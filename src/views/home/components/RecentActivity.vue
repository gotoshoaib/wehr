<template>
  <div class="recent_activity">
    <h3>Recently Activity</h3>
    <div class="inner_wrap">
      <span class="date">10.40 AM, Fri 10 Sept 2021</span>
      <h4>You Posted a New Job</h4>
      <p>
        Kindly check the requirements and terms of work and make sure everything
        is right.
      </p>
    </div>
    <div class="view_job">
      <span>Today you makes {{ activityCount }} Activity</span>
      <a href="javascript:;" class="btn_1">View Job</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    activityCount: {
      type: Number,
    },
  },
};
</script>

<style>
</style>