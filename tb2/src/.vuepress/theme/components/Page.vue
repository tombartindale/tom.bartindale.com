<template>
  <main class="page">
    <slot name="top" />

    <div class="theme-default-content bump">
      <SidePanel class="flexi-right" />
      <Content class="flexi-left" />
      <SidePanel class="mini" />
    </div>
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from "@theme/components/PageEdit.vue";
import PageNav from "@theme/components/PageNav.vue";
import SidePanel from "../../components/SidePanel.vue";

export default {
  components: { PageEdit, PageNav, SidePanel },
  props: ["sidebarItems"],
};
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block


.bump
  padding-top 5rem!important




.flexi-right
  float:right
  display block
  max-width 220px
  min-height 20vh

  margin-left 1.5rem

.mini
  display none

@media (max-width: 719px) {
  .mini{
    display block
  }
  .flexi-right {
    display none;
  }
}
</style>
