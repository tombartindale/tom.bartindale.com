<template>
  <div>
    <div v-for="index in sorted" :key="index" class="project-item">
      <h2>{{ index }}</h2>
      <div v-for="paper in items[index]">
        <a target="_BLANK" :href="`https://doi.org/${paper.entryTags.doi}`"
          ><h4>{{ paper.entryTags.title }}</h4></a
        >
        <p>{{ paper.entryTags.author }}</p>
        <i>{{ paper.entryTags.journal }}</i>
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
    console.log(reverse(Object.keys(this.items)));
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
