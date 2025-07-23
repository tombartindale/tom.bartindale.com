<template>
  <div class="side-panel">
    <img class="img" :src="info.frontmatter.image" />
    <div class="text">
      <h4>When</h4>
      <div>~{{ simpleDate(info.frontmatter.date) }}</div>

      <h4 v-if="info.frontmatter.links?.length">Links</h4>
      <!-- <VPIcon icon="link" /> -->

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
          <br />
          <span class="author">{{ pub.author }} &middot;</span>
          <span class="year">{{ pub.year }}</span>
          <!-- <div class="venue">{{ pub.booktitle }}</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var bibtexParse = require("@orcid/bibtex-parse-js");
import bibText from "/references.bib";
import find from "lodash/find";
export default {
  mounted() {
    this.info = this.$page;
    // console.log(this.info.frontmatter.publications);

    if (this.info.frontmatter.publications) {
      //load publications from main file:
      const allRefs = bibtexParse.toJSON(bibText);
      // console.log(allRefs);
      for (const paper of this.info.frontmatter.publications) {
        try {
          const pp = find(allRefs, { citationKey: paper });
          // console.log(pp);
          if (pp) this.pubs.push(pp.entryTags);
          //find the paper in the main biblist based on the reference:
          // console.log(paper);
          // const bibJSON = bibtexParse.toJSON(paper);
          // console.log(bibJSON);
          // if (bibJSON.length) this.pubs.push(bibJSON[0].entryTags);
        } catch (e) {
          console.error(e);
        }
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

  /* height: 50vh; */
}

.text {
  padding: 8px;
  background: #fff;
  border-radius: 6px;
  margin-top: 4px;
  /* padding-top: 2.5rem; */
}

.img {
  border-radius: 6px;
}

.pub div,
.pub a {
  /* font-size: 0.8rem !important; */
}
.author {
  color: #aaa;
  font-size: 0.8rem;
}
.year {
  color: #aaa;
  font-size: 0.8rem;
}
.venue {
  color: #aaa;
}

h4 {
  margin: 0;
  padding: 0;
  margin-top: 0.8rem;
  font-weight: 300;
  font-size: 0.8rem;
  /* line-height: 1px !important; */
}
</style>
