

<template>
  <div class="header">
    <div class="row">
      <div class="col-6">
        <div class="header_left">
          <a
            class="side_menu_toogle"
            href="javascript:;"
            @click="toggleSidebar()"
            ref="menuToggle"
          >
            <span></span>
          </a>
          <div class="search_wrap">
            <span>
              <input type="text" class="form-control" />
            </span>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="header_actions">
          <div class="notification_dropdown">
            <span></span>
          </div>
          <div class="messages_dropdown"></div>
          <div class="profile_dropdown">
            <img src="@/assets/images/profile_thumb.jpg" alt="" />
            <span>Admirra John</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-header",
  methods: {
    toggleSidebar() {
      const menuToggleElement = this.$refs.menuToggle;
      const layoutWrapperElement = document.querySelector("#layout_wrapper");

      menuToggleElement.classList.toggle("active");
      layoutWrapperElement.classList.toggle("menuOpen");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.header {
  border-bottom: 1px solid $border-gray-color;
  padding: 15px 50px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: $white-color;
  z-index: 250;
  .side_menu_toogle {
    width: 28px;
    height: 25px;
    margin: 0;
    margin-right: spacing(1.5);
    display: block;
    position: relative;
    top: 8px;
    @media (min-width: 767px) {
      display: none;
    }
  }
  .side_menu_toogle span:after,
  .side_menu_toogle span:before {
    content: "";
    position: absolute;
    left: 0;
    top: -9px;
  }
  .side_menu_toogle span:after {
    top: 9px;
  }
  .side_menu_toogle span {
    position: relative;
    display: block;
  }
  .side_menu_toogle span,
  .side_menu_toogle span:after,
  .side_menu_toogle span:before {
    width: 100%;
    height: 3px;
    background-color: #b2b2b2;
    transition: all 0.3s;
    backface-visibility: hidden;
    display: inline-block;
  }

  /* on activation */
  .side_menu_toogle.active span {
    background-color: transparent;
  }

  .side_menu_toogle.active span:before {
    transform: rotate(45deg) translate(5px, 5px);
    -webkit-transform: rotate(45deg) translate(5px, 5px);
    -moz-transform: rotate(45deg) translate(5px, 5px);
  }
  .side_menu_toogle.active span:after {
    transform: rotate(-45deg) translate(7px, -8px);
    -webkit-transform: rotate(-45deg) translate(7px, -8px);
    -moz-transform: rotate(-45deg) translate(7px, -8px);
  }
  .side_menu_toogle.active {
    opacity: 1;
    visibility: visible;
  }
  .header_left {
    display: flex;
    justify-content: flex-start;
  }
  .header_actions {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .profile_dropdown {
      display: flex;
      align-items: center;
      position: relative;
      cursor: pointer;
      padding-right: spacing(3);
      img {
        border-radius: 50%;
      }
      span {
        color: $tertiary-color;
        margin-left: spacing(2);
        font-weight: $font-weight-medium;
        font-size: $font-size-h5;
      }
      &::after {
        content: "";
        background: url(/src/assets/images/arrow_down.svg) no-repeat;
        width: 15px;
        height: 7px;
        position: absolute;
        right: 0;
      }
      @media (max-width: 766px) {
        span {
          font-size: 12px;
        }
      }
    }

    .messages_dropdown {
      background: url(/src/assets/images/message_icon.svg) no-repeat;
      width: 19px;
      height: 18px;
      margin: 0px spacing(3.5);
      cursor: pointer;
      @media (max-width: 766px) {
        margin: 0px spacing(1.7);
      }
    }

    .notification_dropdown {
      background: url(/src/assets/images/notification_icon.svg) no-repeat;
      width: 19px;
      height: 20px;
      cursor: pointer;
      position: relative;
      background-size: contain;
      span {
        background: $main-color;
        border: 1px solid #ffffff;
        width: 10px;
        height: 10px;
        position: absolute;
        top: -1px;
        right: -1px;
        border-radius: 50%;
      }
    }
  }
  @media (min-width: 767px) {
    margin-left: 250px;
    width: calc(100% - 250px);
  }

  @media (max-width: 766px) {
    padding: 15px 25px;

    .col-6:nth-child(1) {
      flex: 0 0 40%;
      max-width: 40%;
    }
    .col-6:nth-child(2) {
      flex: 0 0 60%;
      max-width: 60%;
    }
  }
}

.search_wrap {
  width: 343px;

  span {
    display: flex;
    align-items: center;
    position: relative;
    &::after {
      content: "";
      background: url(/src/assets/images/search_icon.svg) no-repeat;
      width: 18px;
      height: 18px;
      position: absolute;
      right: 20px;
      background-size: contain;
    }
    .form-control {
      padding-right: 45px;
    }
  }
  @media (max-width: 766px) {
    width: 50px;
    .form-control {
      background: transparent;
      border: none;
      cursor: pointer;
    }
  }
}
</style>