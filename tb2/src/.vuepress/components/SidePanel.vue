<template>
  <div class="side-panel">
    <img class="img" :src="info.frontmatter.image" />

    <h4>When</h4>
    <div>~{{ simpleDate(info.frontmatter.date) }}</div>

    <h4 v-if="info.frontmatter.links?.length">Links</h4>
    <a
      target="_BLANK"
      :href="link.url"
      v-for="link of info.frontmatter.links"
      >{{ link.title }}</a
    >

    <div v-if="pubs.length">
      <h4>Related Publications</h4>
      <div v-for="pub of pubs" :key="pub.id" class="pub">
        <a :href="pub.url">{{ pub.title }}</a>
        <div class="author">{{ pub.author }}</div>
        <div class="year">{{ pub.year }}</div>
        <div class="venue">{{ pub.booktitle }}</div>
      </div>
    </div>
  </div>
</template>

<script>
var bibtexParse = require("@orcid/bibtex-parse-js");

export default {
  mounted() {
    this.info = this.$page;
    // console.log(this.info.frontmatter.publications);

    if (this.info.frontmatter.publications)
      for (const paper of this.info.frontmatter.publications) {
        // console.log(paper);
        try {
          // console.log(paper);
          const bibJSON = bibtexParse.toJSON(paper);
          // console.log(bibJSON);
          if (bibJSON.length) this.pubs.push(bibJSON[0].entryTags);
        } catch (e) {
          console.error(e);
        }
      }
  },
  methods: {
    simpleDate(date) {
      if (!date) return "";
      // console.log(date.split("/")[1]);
      const d = new Date(date.split("/")[1], date.split("/")[0] - 1);
      return d.toLocaleDateString("en-GB", {
        month: "long",
        year: "numeric",
      });
    },
  },
  data() {
    return {
      info: {
        frontmatter: {
          date: "",
        },
      },
      pubs: [],
    };
  },
};
</script>

<style lang="css" scoped>
.side-panel {
  overflow: hidden;
  padding-top: 2.5rem;
  /* height: 50vh; */
}

.img {
  border-radius: 5px;
}

.pub div,
.pub a {
  /* font-size: 0.8rem !important; */
}
.author {
  color: #aaa;
}
.year {
  color: #aaa;
}
.venue {
  color: #aaa;
}

h4 {
  margin: 0;
  padding: 0;
  margin-top: 1rem;
  font-weight: 300;
  font-size: 0.8rem;
  /* line-height: 1px !important; */
}
</style>
