<template>

    <nav class="rf-breadcrumb" aria-label="Vous êtes ici :">
      <ol class="rf-breadcrumb__list">
        <li v-for="crumb in previous_pages" :key="crumb.name" class="rf-breadcrumb__item">
          <a v-bind:href="crumb.url">{{ crumb.name }}</a>
        </li>
        <li class="rf-breadcrumb__item rf-breadcrumb__item--current" aria-current="page">
          {{ current_page_title }}
        </li>
      </ol>
    </nav>

</template>

<script>
export default {
  name: "Breadcrumbs",
  data() {
    return {
      breadcrumbs: [],
    };
  },
  props: {
    dynamic_page_title: String,
  },
  computed: {
    current_page_title: function() {
      const latest_crumb = this.breadcrumbs[this.breadcrumbs.length - 1];
      return this.dynamic_page_title || latest_crumb.name;
    },
    previous_pages: function() {
      return this.breadcrumbs.slice(0, -1);
    },
  },
  created() {
    this.breadcrumbs = this.$route.meta.breadcrumbs;
  },
};
</script>

<style>
    .rf-breadcrumb {
        z-index: -1;
    }
</style>
