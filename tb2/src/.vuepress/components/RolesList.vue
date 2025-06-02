<template>
  <div>
    <!-- {{ items }} -->
    <div v-for="(group, index) in items" :key="index" class="project-item">
      <h1>
        {{ index }}
      </h1>
      <div v-for="item in group" :key="item.title">
        <div>{{ item.type }}</div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </div>
    </div>
    <!-- {{ items }} -->
  </div>
</template>

<script>
import groupBy from "lodash/groupBy";

export default {
  mounted() {
    // console.log(this.$site.pages);
    this.items = groupBy(
      this.$site.pages
        .filter(
          (page) => page.path.startsWith("/roles/") && !page.path.endsWith("/")
        )
        .map((page) => ({
          title: page.title,
          description: page.frontmatter.description,
          year: page.frontmatter.year,
          type: page.frontmatter.type,
        })),
      (item) => item.year
    );
  },
  data() {
    return {
      items: [],
    };
  },
};
</script>
