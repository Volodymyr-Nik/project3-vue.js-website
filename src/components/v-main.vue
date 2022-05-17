<template>
  <div class="swiper-bg">
    <swiper
      :modules="[EffectFade]"
      effect="fade"
      :slides-per-view="1"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        ><img src="../assets/bg_swiper/f1.jpg" alt="img1"
      /></swiper-slide>
      <swiper-slide
        ><img src="../assets/bg_swiper/f2.jpg" alt="img2"
      /></swiper-slide>
      <swiper-slide
        ><img src="../assets/bg_swiper/f3.jpg" alt="img3"
      /></swiper-slide>
      <swiper-slide
        ><img src="../assets/bg_swiper/f4.jpg" alt="img4"
      /></swiper-slide>
      <swiper-slide
        ><img src="../assets/bg_swiper/f5.jpg" alt="img5"
      /></swiper-slide>
      <swiper-slide
        ><img src="../assets/bg_swiper/f6.jpg" alt="img6"
      /></swiper-slide>
    </swiper>
    <div class="stage">
      <p>STAGE ANYWERE</p>
      <button class="btn btn-join">JOIN</button>
    </div>
  </div>

  <div class="description">
    <div class="description-item">
      <div class="description-item__img"></div>
      <div class="description-block">
        <p class="description-block__title">YOU MAY ALSO YOU</p>
        <p class="description-block__text">
          We created liWe created LiveStreaming to share emotions not only
          during events but also outside them. If you did not miss a concert
          from your favorite stars, you could get on an important theatrical
          premiere . So that the artists opened themselves to the audience, and
          the organizers - created the events, which will be said "we want
          more".veviber to share emotions not only during events but also
          outside them. If you did not miss a concert .
        </p>
        <a href="#" class="btn btn-seeall">SEE ALL</a>
      </div>
    </div>

    <div class="description-item">
      <div class="description-block">
        <p class="description-block__title">WATCH ON YOUR DEVICES</p>
        <p class="description-block__text">
          After all, the events are passing fast, and the exciting holiday feast
          and pleasant memories remain forever. Therefore, our goal is to
          multiply these moments of happiness and share them with you. did not
          miss a concert .
        </p>
        <a href="#" class="btn btn-seeall">SEE ALL</a>
      </div>
      <div class="description-item__img2"></div>
    </div>

    <div class="description-item">
      <div class="description-item__img3"></div>
      <div class="description-block">
        <p class="description-block__title">
          LIVESTREAMING - YOU START TO LIVE AN EVENT ALREADY DURING THE PURCHASE
        </p>
        <p class="description-block__text">
          Any event is not just a way to see an artist or a long-awaited
          performance, sing a favorite song or meet friends. These are emotions
          that inspire six months before and recharge for many days after. It's
          a reason to smile at an endless overshot, because the same speaker is
          being emitted from the speakers, or dressed like Lady Gaga, why not.
        </p>
        <a href="#" class="btn btn-seeall">SEE ALL</a>
      </div>
    </div>
  </div>

  <div class="question">
    <p class="question__title">FREQUENTLY ASKED QUESTIONS</p>
    <p class="question__update">Last Update: April 29, 2020</p>
    <p class="question__ask">HAT IS THE PLAY STORE?</p>
    <p class="question__answer">
      The Play Store is a curated digital storefront for PC and Mac, designed
      with both players and creators in mind. It’s focused on providing great
      games for gamers, and a fair deal for game developers. When you buy a game
      on the Epic Games Store, 88% of the price goes directly to developers,
      versus only 70% on many other stores. This helps developers invest into
      building bigger and better games.
    </p>
    <p class="question__ask">WHERE CAN I DOWNLOAD THE PLAY STORE?</p>
    <p class="question__answer">
      Visit the Play Store page at PlayStore.com, go to the upper right corner,
      and click “Get Epic Games.” This is the only place to safely download the
      installer for the Play Store. Do not trust other sources, as they are
      likely unsafe.
    </p>

    <p class="question__ask">WHICH PLATFORMS DOES THE PLAY STORE SUPPORT?</p>
    <p class="question__answer">
      The Play Store currently offers PC and Mac support. You can check platform
      compatibility for individual titles by referring to the “About Game”
      section of any product page.
    </p>

    <p class="question__ask">WHAT ARE THE FUTURE PLANS FOR THE PLAY STORE?</p>
    <p class="question__answer">
      You can find upcoming features, developer updates, and major known issues
      on our Play Store Roadmap on Trello. We’ll also share significant updates
      with you on our news feed and social media pages such as Facebook,
      Twitter, Instagram, and YouTube.
    </p>

    <p class="question__ask">WHY DOES THE PLAY STORE MAKE EXCLUSIVITY DEALS?</p>
    <p class="question__answer">
      Exclusives are a part of the growth of many successful platforms for games
      and for other forms of digital entertainment, such as streaming video and
      music.Epic works in partnership with developers and publishers to offer
      games exclusively on the store. In exchange for exclusivity, provides them
      with financial support for development and marketing, which enables them
      to build more polished games with significantly less uncertainty for the
      creators. In addition, creators will earn 88% of all the revenue from
      their game, while most stores only offer 70%.
    </p>
  </div>
</template>

<script>
import { EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";


import "swiper/css";
import "swiper/css/effect-fade";

export default {
  name: "v-main",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      EffectFade,
    };
  },
};
</script>
