<template>
  <main
    class="home"
    :aria-labelledby="data.heroText !== null ? 'main-title' : null"
  >
    <header class="hero">
      <div class="img-top" v-if="data.heroImage">
        <img
          v-if="data.heroImage"
          :src="$withBase(data.heroImage)"
          :alt="data.heroAlt || 'hero'"
        />
        <Content slot-key="hero-left" class="img-top-text" />
      </div>
      <div class="hero-flex">
        <div class="img-left" v-if="data.heroImage">
          <img
            v-if="data.heroImage"
            :src="$withBase(data.heroImage)"
            :alt="data.heroAlt || 'hero'"
          />
          <Content slot-key="hero-left" />
        </div>
        <div class="hero-right">
          <h1
            v-if="data.heroText !== null"
            id="main-title"
            style="font-weight: 400"
          >
            {{ data.heroText }}
            <div v-if="!data.heroText">
              Hi. I'm
              <strong>Tom Bartindale</strong>
            </div>
          </h1>

          <p v-if="data.tagline !== null" class="description">
            {{ data.tagline || $description || "" }}
          </p>

          <p v-if="data.actionText && data.actionLink" class="action">
            <NavLink class="action-button" :item="actionLink" />
          </p>
          <Content slot-key="hero-bottom" class="hero-bottom" />
        </div>
      </div>
    </header>

    <div v-if="data.features && data.features.length" class="features">
      <div
        v-for="(feature, index) in data.features"
        :key="index"
        class="feature"
      >
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>
    <Content slot-key="position" class="theme-default-content" />
    <Content class="theme-default-content custom" />

    <div v-if="data.footer" class="footer">
      {{ data.footer }}
    </div>

    <Content v-else slot-key="footer" class="footer" />
  </main>
</template>

<script>
import NavLink from "@theme/components/NavLink.vue";

export default {
  name: "Home",

  components: { NavLink },

  computed: {
    data() {
      return this.$page.frontmatter;
    },

    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText,
      };
    },
  },
};
</script>

<style lang="stylus">
.hero
  margin-bottom 2.7rem

.hero-flex
  display flex
  align-items flex-start
  justify-content center
  margin-top 100px


.hero-flex .img-left
  flex-basis 30%
  aspect-ratio 1 / 1
  text-align center
  padding-left 2.7rem
  padding-right 2.7rem

.hero-flex div

.hero-right
  max-width:900px

.hero-bottom
  margin-bottom 3rem


.img-top
  display none
  align-items flex-start
  justify-content between

  margin-top 1.5rem
  img
    width 100px
    margin 0 !important
    padding 0 !important
    margin-top .3rem !important
  .img-top-text
    text-align right
    flex-grow 1







@media (max-width: $MQMobile)
  .img-left
    display none
  .img-top
    display flex
  .hero-flex
    margin-top 0

.home

  margin 0px auto
  display block
  .hero
    padding $navbarHeight 2rem 0
    text-align left
    img
      max-width: 100%
      padding-left 20px
      padding-right 20px
      display block
      margin 3rem auto 1.5rem
    h1
      font-size 3rem


    .description

      line-height 1.75em
      color #888
      font-weight 300
      font-size 1.5em

    .action-button
      display inline-block
      font-size 1.2rem
      color #fff
      background-color $accentColor
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($accentColor, 10%)
      &:hover
        background-color lighten($accentColor, 10%)
  .features
    border-top 1px solid $borderColor
    padding 1.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)
  .footer
    padding 2.5rem

    text-align center
    color lighten($textColor, 25%)

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  .home

    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>
