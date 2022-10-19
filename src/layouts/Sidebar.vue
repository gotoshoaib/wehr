<template>
  <div class="sidebar_wrap">
    <div class="logo">
      <router-link to="/" tag="a">
        <img src="../assets/images/logo.svg" alt="" />
      </router-link>
    </div>
    <h6>Main Menu</h6>
    <ul>
      <li>
        <router-link to="/" tag="a">
          <i v-html="dashboardIcon"></i>
          <span>Dashboard</span></router-link
        >
      </li>
      <li>
        <router-link to="/recruitment" tag="a">
          <i v-html="recruitmentIcon"></i>
          <span>Recruitment</span></router-link
        >
      </li>
      <li>
        <router-link to="/schedule" tag="a">
          <i v-html="scheduleIcon"></i>
          <span>Schedule</span></router-link
        >
      </li>
      <li>
        <router-link to="/employee" tag="a">
          <i v-html="employeeIcon"></i>
          <span>Employee</span></router-link
        >
      </li>
      <li>
        <router-link to="/department" tag="a">
          <i v-html="departmentIcon"></i>
          <span>Department</span></router-link
        >
      </li>
    </ul>

    <h6>Other Menu</h6>
    <ul>
      <li>
        <router-link to="/support" tag="a">
          <i v-html="supportIcon"></i>
          <span>Support</span></router-link
        >
      </li>
      <li>
        <router-link to="/settings" tag="a">
          <i v-html="settingIcon"></i>
          <span>Settings</span></router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import {
  dashboardIcon,
  recruitmentIcon,
  scheduleIcon,
  employeeIcon,
  departmentIcon,
  supportIcon,
  settingIcon,
} from "@/icons";
export default {
  name: "app-sidebar",
  data: () => ({
    dashboardIcon,
    recruitmentIcon,
    scheduleIcon,
    employeeIcon,
    departmentIcon,
    supportIcon,
    settingIcon,
  }),
};
</script>


<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.sidebar_wrap {
  width: 250px;
  z-index: 1002;
  bottom: 0;
  margin-top: 0;
  position: fixed;
  padding: 15px 25px;
  background: $sidebar-color;
  border-right: $border-gray-color;
  top: 0;
  -webkit-transition: all 0.1s ease-out;
  transition: all 0.1s ease-out;
  .logo {
    padding: 25px 0;
    text-align: center;

    img {
      margin-bottom: spacing(2);
    }
  }
  h6 {
    opacity: 0.5;
    text-transform: uppercase;
    color: $primary-subtitle-color;
    margin-bottom: spacing(2);
  }

  ul {
    list-style: none;
    margin-bottom: spacing(5);
    li {
      display: block;
      a {
        font-size: $font-size-h5;
        display: block;
        position: relative;
        color: $primary-subtitle-color;
        padding: spacing(1.5) 0px;
        display: flex;
        align-items: center;
        padding-left: spacing(4);
        i {
          position: absolute;
          left: 0;
          line-height: 0.3;
        }
      }
      a.router-link-exact-active {
        color: $main-color;
      }
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  @media (max-width: 766px) {
    width: 90px;
    left: -90px;
    padding: 15px 13px;
    text-align: center;
    .logo {
      img {
        width: 60px;
      }
    }
    ul {
      li {
        padding: 20px 0px;
        display: flex;
        justify-content: center;

        span {
          display: none;
        }
      }
    }
  }
}
</style>