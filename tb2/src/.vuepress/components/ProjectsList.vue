<template>
  <div class="container">
    <div v-for="(item, index) in items" :key="index" class="project-item">
      <a :href="item.link" rel="noopener noreferrer">
        <div
          :style="`background-image:url(${
            item.thumbnail || item.image
          });background-color:#eee`"
          class="img"
        ></div>
        <!-- <img v-if="item.image" :src="item.image" alt="" /> -->
        <div class="inner">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <!-- <p>{{ simpleDate(item.date) }}</p> -->
        </div>
      </a>
    </div>
    <!-- {{ items }} -->
  </div>
</template>

<script>
import orderBy from "lodash/orderBy";

export default {
  props: ["dir"],
  mounted() {
    this.items = orderBy(
      this.$site.pages
        .filter(
          (page) =>
            page.path.startsWith(`/${this.dir}/`) && !page.path.endsWith("/")
        )
        .map((page) => ({
          title: page.title,
          image: page.frontmatter.image,
          description: page.frontmatter.description,
          date: page.frontmatter.date,
          link: page.path,
          thumbnail: page.frontmatter.thumbnail,
        })),
      (f) => this.simpleDate(f.date),
      "desc"
    );
    // console.log(this.items);
  },
  methods: {
    simpleDate(date) {
      // console.log(date);
      if (!date) return "";
      const d = new Date(date.split("/")[1], date.split("/")[0] - 1);
      return d.toLocaleDateString("en-GB", {
        year: "numeric",
      });
    },
  },
  data() {
    return {
      items: [],
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.project-item {
  border: 1px solid #eee;
  border-radius: 8px;
  background-color: white;
  flex-basis: calc(94% / 3);
  overflow: hidden;
}

@media (max-width: 719px) {
  .project-item {
    flex-basis: 100%;
  }
}

.project-item .img {
  width: 100%;
  aspect-ratio: 14 / 9;
  background-size: cover;
  background-position: center;
  height: auto;
}

.inner {
  padding: 1rem;
  text-align: center;
}

h3 {
  margin: 0;
  padding: 0;
  margin-bottom: 0.4rem;
  color: #3e3e3e;
  font-weight: 300;
  font-size: 1.6rem;
}

p {
  margin: 0;
  line-height: 1.6rem;
  font-size: 1.1rem;
}
</style>
