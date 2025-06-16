<template>
  <div>
    <div class="nav">
      <span v-for="year in sorted" :key="year">
        <a :href="`#${year}`">{{ year }}</a> &middot;
      </span>
    </div>

    <div v-for="index in sorted" :key="index" class="project-item">
      <a class="year" :name="index">{{ index }}</a>
      <div v-for="paper in items[index]">
        <p>
          <a target="_BLANK" :href="`https://doi.org/${paper.entryTags.doi}`"
            ><h4 style="margin-bottom: 0">
              {{ paper.entryTags.title }}
            </h4></a
          >
        </p>
        <p>
          {{ paper.entryTags.author }}
          <br />
          <i>{{ paper.entryTags.journal }}</i>
        </p>
        <p style="color: #aaa"></p>
        <!-- {{ paper.entryTags.doi }} -->
      </div>
    </div>
  </div>
</template>

<script>
// import { BibtexParser } from "bibtex-js-parser";

var bibtexParse = require("@orcid/bibtex-parse-js");

import bibText from "/references.bib";
import groupBy from "lodash/groupBy";
import reverse from "lodash/reverse";

export default {
  mounted() {
    // console.log(this.$site.pages);
    //input is local:
    // console.log(bibText);

    // const bibJSON = BibtexParser.parseToJSON(bibText);
    const bibJSON = groupBy(bibtexParse.toJSON(bibText), "entryTags.year");

    // console.log(bibJSON);
    this.items = bibJSON;
    // console.log(reverse(Object.keys(this.items)));
  },
  computed: {
    sorted() {
      return reverse(Object.keys(this.items));
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
.year {
  display: block;
  text-align: center;
  font-size: 3rem;
  padding: 0;
  margin: 0;
  color: #ccc;
}

h4 {
  font-weight: 400;
}

.nav {
  text-align: center;
  margin-bottom: 3rem;
  margin-top: -3rem;
}
</style>
