<template>
  <nav class="rf-breadcrumb" aria-label="Vous êtes ici :">
    <ol class="rf-breadcrumb__list">
      <li class="rf-breadcrumb__item">
        <a href="https://www.transformation.gouv.fr/">Accueil</a>
      </li>

      <li
        v-for="crumb in breadcrumbs" :key="crumb.name"
        class="rf-breadcrumb__item"
        v-bind:class="{ 'rf-breadcrumb__item--current': !crumb.url }"
      >
        <a v-bind:href="crumb.url ? crumb.url : '#'">{{ crumb.name }}</a>
      </li>

      <li v-if="current_page_title" class="rf-breadcrumb__item rf-breadcrumb__item--current" aria-current="page">
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
      current_page_title: String,
  },
  created() {
    this.breadcrumbs = this.$route.meta.breadcrumbs;
  },
};
</script>