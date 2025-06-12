<template>
  <div>
    <!-- {{ items }} -->
    <div v-for="(group, index) in items" :key="index" class="project-item">
      <p class="year">
        {{ index }}
      </p>
      <div v-for="item in group" :key="item.title" class="role">
        <div class="rotate" :class="item.type.toLowerCase()">
          <div>{{ item.type }}</div>
        </div>
        <p class="title">{{ item.title }}</p>
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

<style lang="css" scoped>
.year {
  text-align: center;
  font-size: 3rem;
  padding: 0;
  margin: 0;
}

.title {
  font-weight: 500;
}

p {
  margin: 0;
}

.role {
  background: white;
  border-radius: 0.4rem;
  position: relative;
  border: 1px solid #eee;
  overflow: hidden;
  padding: 12px;
  padding-left: 50px;
  margin-bottom: 18px;
}

.rotate {
  position: absolute;
  left: 0;
  bottom: 0;
  display: block;

  color: white;
  padding: 5px;
  height: 100%;
  width: 24px;
}

.teaching {
  background: #af3e65;
}

.research {
  background-color: #3eaf7c;
}

.rotate div {
  margin-top: 260%;
  transform: rotate(-90deg);
  font-size: 0.9rem;
}
</style>
