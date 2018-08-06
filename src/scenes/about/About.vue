<template>
  <div>
    <div class="section-13">
      <div class="container-15 w-container">
        <div class="section-title-group centered">
          <h1 data-w-id="e4a595f5-106a-a18c-e0cf-12717abc3bf2" class="heading-5" data-ix="fade-in-bottom-scroll-in">We Believe Property Investment <br> Should Be Open To Everybody</h1>
        </div>
      </div>
    </div>
    <div class="section-2 _2">
      <div class="container-9 w-container"><img src="@/assets/images/icon1.png" width="100" class="image-26"><img src="@/assets/images/icon2.png" width="50" class="image-25"><img src="@/assets/images/icon3.png" width="100" class="image-24"><img src="@/assets/images/icon4.png" width="100" class="image-23"><img src="@/assets/images/icon5.png" width="100" class="image-22"><img src="@/assets/images/icon6.png" width="80" class="image-20"><img src="@/assets/images/icon7.png" width="49" class="image-21"></div>
    </div>
    <div class="section-14">
      <div class="container-16 w-container">
        <div>
          <p class="paragraph-24">About us.</p>
          <p class="paragraph-23">Founded in December 2016, WeHome founders and core team are from world-class companies such as Alibaba, Amazon, Airbnb and other well-known international Internet companies. Our advisory team came from Blackrock, the world&#x27;s largest listed investment management group, and Y-Combinator, a well-known international investment institution. We also established a very close partnership with Windmere, John.L.Scott, the largest real estate investment management company in the United States, and Berkshire Hathaway HomeServices. Last but not least, WeHome is invested by Tencent co-founder Zeng Liqing with over tens of millions of yuan.
            <br> WeHome uses big data as system foundation. Through our data and connections with high level brokers and large asset management network, we provide assistance for investors in high return quality real estate investment in the United States. We also work with the most authoritative law firms in the United States and China, including MagStone Law and LLP. co-operate in depth to design a legal process and investment framework to ensure compliance with the legal provisions of both China and the United States.</p>
          <div class="row-11 w-row">
            <div class="column-38 w-col w-col-5">
              <p class="paragraph-24">We are here to answer all your questions,<br>please do not hesitate to contact us.</p>
            </div>
            <div class="column-47 w-col w-col-3">
              <h4 class="heading-23">Email</h4>
              <p class="paragraph-25">hi@wehme.io</p>
              <h4 class="heading-23">Contact</h4>
              <p class="paragraph-25">(206) 923-9188 (United States)</p>
              <p class="paragraph-25">(86) 400-681-3673 (China)</p>
            </div>
            <div class="column-48 w-col w-col-4">
              <h4 class="heading-23">Address</h4>
              <p class="paragraph-25">2155 112th Ave NE, Bellevue, WA 98004 <br> (United States）<br>3rd Floor, Block B, Rongchuang Power Industrial Park, Chaoyang District, Beijing (China) </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { track, after } from "trackpoint-tools";
import Track from "@/track";
export default {
  name: 'about',
  data() {
    return {
  
    };
  },
  methods: {
    @track(
      after(function() {
        Track.eventTrack({
          category: "loginout-dropdown",
          action: "click",
          optLabel: "dropdown",
          page: this.$route.name,
          optValue: {
            tabName: this.tabName
          }
        });
      })
    )
    loginOut: function() {
      this.$auth.logout()
    }
  },
  mounted() {
  
  },
  computed: {
   
  }
};
</script>

<style lang="scss" scoped>

</style>
