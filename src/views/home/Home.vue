<template>
  <main-content>
    <h1>Dashboard</h1>
    <div class="row">
      <div class="col-sm-7">
        <div class="positions_wrap">
          <div class="row">
            <div class="col-sm-4" v-for="(item, index) in stats" :key="index">
              <stats-card
                :title="item.title"
                :value="item.value"
                :desc="item.desc"
                :variant="item.variant"
              ></stats-card>
            </div>
          </div>
        </div>

        <div class="graph_sec_wrap">
          <div class="row">
            <div class="col-sm-6" v-for="(item, index) in history" :key="index">
              <history-card
                :title="item.title"
                :value="item.value"
                :men="item.men"
                :women="item.women"
                :increament="item.increament"
              ></history-card>
            </div>
          </div>
        </div>

        <!-- <div class="annoucement_sec">
          <div class="top_bar">
            <h3>Announcement</h3>
            <div class="date_filter">
              <select>
                <option>Today, 13 Sep 2021</option>
              </select>
            </div>
          </div>
          <div class="inner_wrap">
            <h4>Outing schedule for every departement</h4>
            <span>5 Minutes ago</span>
            <a href="javascript:;" class="meatball_menu"></a>
            <a href="javascript:;" class="pin_icon"></a>
          </div>
          <div class="inner_wrap">
            <h4>Outing schedule for every departement</h4>
            <span>5 Minutes ago</span>
            <a href="javascript:;" class="meatball_menu"></a>
            <a href="javascript:;" class="pin_icon"></a>
          </div>
          <div class="inner_wrap">
            <h4>Outing schedule for every departement</h4>
            <span>5 Minutes ago</span>
            <a href="javascript:;" class="meatball_menu"></a>
            <a href="javascript:;" class="pin_icon"></a>
          </div>

          <a href="javascript:;" class="see_all_btn">See All Announcement</a>
        </div> -->
        <annoucement-box>
          <template v-slot:header>
            <h3>Announcement</h3>
            <div class="date_filter">
              <select>
                <option>Today, 13 Sep 2021</option>
              </select>
            </div>
          </template>
          <template v-slot:body>
            <post-title
              v-for="(item, index) in annoucements"
              :key="index"
              :title="item.title"
              :duration="item.duration"
            ></post-title>
          </template>
          <template v-slot:footer>
            <a href="javascript:;" class="see_all_btn">See All Announcement</a>
          </template>
        </annoucement-box>
      </div>
      <div class="col-sm-5">
        <recent-activity :activity-count="activityCount"></recent-activity>

        <annoucement-box>
          <template v-slot:header>
            <h3>Announcement</h3>
            <div class="date_filter">
              <select>
                <option>Today, 13 Sep 2021</option>
              </select>
            </div>
          </template>
          <template v-slot:body>
            <h5>Priority</h5>
            <post-title
              v-for="(item, index) in otherAnnoucements.priority"
              :key="'priority' + index"
              :title="item.title"
              :duration="item.duration"
            ></post-title>

            <h5>Other</h5>
            <post-title
              v-for="(item, index) in otherAnnoucements.other"
              :key="'other' + index"
              :title="item.title"
              :duration="item.duration"
            ></post-title>
          </template>
          <template v-slot:footer>
            <a href="javascript:;" class="see_all_btn">Creat a New Schedule</a>
          </template>
        </annoucement-box>
      </div>
    </div>
  </main-content>
</template>

<script>
import MainContent from "@/components/MainContent.vue";
import HistoryCard from "@/components/HistoryCard.vue";
import RecentActivity from "@/views/home/components/RecentActivity.vue";
import PostTitle from "@/views/home/components/PostTitle.vue";
import AnnoucementBox from "@/views/home/components/AnnoucementBox.vue";

export default {
  name: "app-home",
  components: {
    MainContent,
    RecentActivity,
    HistoryCard,
    PostTitle,
    AnnoucementBox,
  },
  data() {
    return {
      stats: [
        {
          title: "Available Position",
          value: 24,
          desc: "4 Urgently needed",
          variant: "primary",
        },
        {
          title: "Job Open",
          value: 10,
          desc: "4 Active hiring",
          variant: "info",
        },
        {
          title: "New Employees",
          value: 24,
          desc: "4 Department",
          variant: "danger",
        },
      ],
      history: [
        {
          title: "Total Employees",
          value: 216,
          men: 120,
          women: 96,
          increament: "+2% Past month",
        },
        {
          title: "Talent Request",
          value: 16,
          men: 6,
          women: 10,
          increament: "+5% Past month",
        },
      ],
      annoucements: [
        {
          title: "Outing schedule for every departement",
          duration: "5 Minutes ago",
        },
        {
          title: "Meeting HR Department",
          duration: "7 Minutes ago",
        },
        {
          title: "IT Department need two more talents",
          duration: "5 Minutes ago",
        },
      ],
      otherAnnoucements: {
        priority: [
          {
            title: "Outing schedule for",
            duration: "5 Minutes ago",
          },
        ],
        other: [
          {
            title: "Outing schedule for every departement",
            duration: "5 Minutes ago",
          },
          {
            title: "Lorem lipsum dummy text",
            duration: "25 Minutes ago",
          },
        ],
      },
      activityCount: 12,
    };
  },
};
</script>

<style>
</style>