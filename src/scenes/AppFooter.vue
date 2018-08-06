<template>
  <div class="footer accent">
    <div class="w-container">
      <div class="row-3 w-row">
        <div class="column-35 w-col w-col-3"><img src="@/assets/images/logo-10.png" width="120" srcset="@/assets/images/logo-10-p-500.png 500w, @/assets/images/logo-10-p-800.png 800w, @/assets/images/logo-10-p-1080.png 1080w, @/assets/images/logo-10.png 2094w" sizes="(max-width: 479px) 100vw, 120px">
          <p class="paragraph-18"><br>Maximize your profit, Minimize your cost.</p>
        </div>
        <div class="column-18 w-col w-col-5"></div>
        <div class="column-19 w-col w-col-2">
          <!-- <div class="div-block-11">
            <a href="#" class="social-icon-link w-inline-block">
              <img src="@/assets/images/social-03.svg" width="20">
            </a>
            <a href="#" class="social-icon-link w-inline-block">
              <img src="@/assets/images/social-18.svg" width="20">
            </a>
            <a href="#" class="social-icon-link w-inline-block">
              <img src="@/assets/images/social-09.svg" width="20">
            </a>
            <a href="#" class="social-icon-link w-inline-block">
              <img src="@/assets/images/social-06.svg" width="20">
            </a>
          </div> -->
          <a href="https://twitter.com/WeHomeio" target="_blank" class="link-block w-inline-block">
          <img src="@/assets/images/twitter-white.svg" width="34" class="image-38">
          </a>
          <a href="https://www.facebook.com/Wehomeio-1811463875783319/?ref=bookmarks" target="_blank" class="link-block-2 w-inline-block">
          <img src="@/assets/images/facebook-s-white.svg" width="24" class="image-36">
          </a>
          <a href="https://wehome.io/en/blog/" target="_blank" class="link-block-3 w-inline-block">
          <img src="@/assets/images/blog.svg" width="24" class="image-35">
          </a>
          <!-- <h5 class="heading-15">About</h5>
          <a href="#" class="footer-link">Contact us</a>
          <a href="#" class="footer-link">FAQ</a> -->
        </div>
        <div class="column-20 w-col w-col-2">
          <h5 class="heading-16">Copyright © WeHome 2018</h5>
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
      showMiniCode: true,
      category: ''
    };
  },
  methods: {
    @track(
      after(function() {
        Track.eventTrack({
          category: this.category,
          action: "click",
          optLabel: "href",
          page: this.$route.name,
          optValue: {
            showMiniCode: this.showMiniCode
          }
        });
      })
    )
    surfHref: function(cat) {
      this.category = cat
    },
    @track(
      after(function() {
        Track.eventTrack({
          category: 'minicode-close-button',
          action: "click",
          optLabel: "button",
          page: this.$route.name,
          optValue: {
            showMiniCode: this.showMiniCode
          }
        });
      })
    )
    closeMiniCode: function() {
      this.showMiniCode = false;
      localStorage.setItem("sun_sky", new Date().getTime());
    },
    switchLanguage: function() {
      this.$i18n.locale = "en";
    }
  },
  created() {
    const timeStamp = localStorage.getItem("sun_sky");
    if (timeStamp) {
      const deltaTime = (new Date().getTime() - timeStamp) / 1000 / 60 / 60;
      if (deltaTime >= 24) {
        this.showMiniCode = true;
      } else {
        this.showMiniCode = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.div-block-34 {
  z-index: 9999999;
}

.div-block-35 {
  width: 140px !important;
  height: 150px !important;
}

.section-2.black-bg {
  background-color: #333333;
}

@media (max-width: 479px) {
  .footer-copyright-links {
    justify-content: center;
    align-items: center;
  }
  .w-col-tiny-6.first {
    width: 100%;
  }
  .wire-transfer-section {
    padding-top: 0;
  }
}
</style>
