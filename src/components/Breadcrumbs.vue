<template>
  <div class="rf-container">
    <nav class="rf-breadcrumb" aria-labelledby="system-breadcrumb">
      <h2 id="system-breadcrumb" class="sr-only">Fil d'Ariane</h2>
      <ul class="rf-breadcrumb__list">
        <li class="rf-breadcrumb__item">
          <a href="https://www.transformation.gouv.fr/"> Accueil </a>
        </li>

        <li
          v-for="crumb in breadcrumbs"
          class="rf-breadcrumb__item"
          v-bind:class="{ 'rf-breadcrumb__item--current': !crumb.url }"
        >
          <a v-bind:href="crumb.url ? crumb.url : '#'">{{ crumb.name }}</a>
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
  created() {
    this.breadcrumbs = this.$route.meta.breadcrumbs;
  },
};
</script>

<style>
</style>
