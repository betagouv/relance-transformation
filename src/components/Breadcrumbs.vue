<template>
  <div class="rf-container">
    <nav class="rf-breadcrumb" aria-label="vous êtes ici :">
      <ul class="rf-breadcrumb__list">
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

        <li v-if="current_page_title" aria-current="page” class="rf-breadcrumb__item rf-breadcrumb__item--current">
            {{ current_page_title }}
        </li>
      </ul>
    </nav>
  </div>
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

<style>
</style>
