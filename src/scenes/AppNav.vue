<template>
<div>
  <div data-collapse="medium" data-animation="default" data-duration="400" class="navbar-2 w-nav">
      <div class="container-24 w-container">
        <div class="w-nav-overlay" :class="{'open': openNav,'close': !openNav}" @click="toggleNav">
          <nav role="navigation" class="w-nav-menu w-open-vue mine-onle-mobille">
            <router-link to="/" class="nav-link-5 top w-nav-link" :class="{'w--current':$route.path=='/'}">Home</router-link>
            <router-link :to="{path:'/about'}" class="nav-link-7 top w-nav-link" :class="{'w--current':$route.path=='/about'}">About us</router-link>
          </nav>
        </div>

        <router-link to="/" class="w-nav-brand w--current">
          <img src="@/assets/images/logo-10.png" width="120" srcset="@/assets/images/logo-10-p-500.png 500w, @/assets/images/logo-10-p-800.png 800w, @/assets/images/logo-10-p-1080.png 1080w, @/assets/images/logo-10.png 2094w" sizes="(max-width: 479px) 83vw, 120px" class="image-28">
        </router-link>
        <nav role="navigation" class="w-nav-menu">
          <router-link to="/" class="nav-link-5 w-nav-link" :class="{'w--current':$route.path=='/'}">Home</router-link>
          <router-link :to="{path:'/about'}" class="nav-link-7 w-nav-link" :class="{'w--current':$route.path=='/about'}">About us</router-link>
        </nav>
        <div class="menu-button-3 w-nav-button" :class="{'w--open': openNav}" @click="toggleNav">
          <div class="w-icon-nav-menu"></div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import { track, after } from "trackpoint-tools";
import Track from "@/track";
export default {
  data() {
    return {
      auth: this.$store.state.auth,
      openNav: false
    };
  },
  methods: {
    @track(
      after(function() {
        Track.eventTrack({
          category: "mob-nav-toggle",
          action: "click",
          optLabel: "toggle",
          page: this.$route.path,
          optValue: {
            openNav: this.openNav
          }
        });
      })
    )
    toggleNav: function() {
      this.openNav = !this.openNav
      console.log(this.openNav,'this.openNav');
      
    }
  },
  mounted() {
    console.log(this.$route,'routersdfsdfsdfsfs');
    
  },
  computed: {
    
  },
   watch: {
    '$route'(to,from) {
      console.log(to,from,'from');
      
    }
  }
};
</script>

<style lang="scss" scoped>
.w-nav {
  z-index: 9999999;
}

.w-nav-menu.w-open-vue {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  overflow: visible;
  min-width: 200px;
}

.nav-link-5.top {
  display: block;
}
.nav-link-7.top {
  display: block;
}
.w-nav-overlay {
  display: block;
  height: 100vh;
}

.w-nav-overlay.close {
  top: -100vh;
  transition: top 400ms;
}

.w-nav-overlay.open {
  top: 100%;
  transition: top 400ms;
}

@media (min-width: 991px) {
  .mine-onle-mobille {
    display: none !important;
  }
}
</style>
