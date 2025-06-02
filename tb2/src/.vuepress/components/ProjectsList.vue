<template>
  <div>
    <div v-for="(item, index) in items" :key="index" class="project-item">
      <a :href="item.link" rel="noopener noreferrer">
        <h3>{{ item.title }}</h3>
        <img v-if="item.image" :src="item.image" alt="" />
      </a>
    </div>
    <!-- {{ items }} -->
  </div>
</template>

<script>
export default {
  mounted() {
    // console.log(this.$site.pages);
    this.items = this.$site.pages
      .filter(
        (page) => page.path.startsWith("/research/") && !page.path.endsWith("/")
      )
      .map((page) => ({
        title: page.title,
        image: page.frontmatter.image,
        link: page.path,
      }));
  },
  data() {
    return {
      items: [],
    };
  },
};
</script>
