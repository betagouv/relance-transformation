<template>
  <div class="france_relance">
    <Header></Header>
    <div class="rf-container">
      <Breadcrumbs></Breadcrumbs>

      <div class="rf-grid-row rf-grid-row--center">
        <div class="rf-col-md-10 rf-col-lg-8">
          <div class="">
            <div class="aides-title">
              <img src="@/assets/FranceRelance.png" alt="France Relance">
              <h1 class="rf-h2">Erreur 404</h1>
            </div>
            <h2 class="rf-h4">Oups ! Cette page n'existe pas</h2>
            <p>Vous pouvez <a href="./">revenir à l'accueil</a> de l'appel à projet du Ministère de la transformation et de la fonction publiques.</p>


          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
    import Header from "@/components/Header";
    import Breadcrumbs from "@/components/Breadcrumbs";
    import Footer from "@/components/Footer";

    export default {
         name: "404",

      components: { Header, Breadcrumbs, Footer, },

      data() {
          return {
              title: "Erreur 404 - France Relance - Ministère de la Transformation et de la Fonction publiques",
              description: "",
              previewImg: require('@/assets/Preview.png'),
          }
      },

      metaInfo () {
        return {
          title: this.title,
          meta: [{
              name: 'description',
              content: this.description
            },
            {
              property: 'og:title',
              content: this.title
            },
            {
              property: 'og:description',
              content: this.description
            },
              {
              property: 'og:image',
              content: "https://france-relance.transformation.gouv.fr" + this.previewImg
            },
            {
              name: "twitter:card",
              content: "summary_large_image"
            },
            {
              name: "twitter:site",
              content: "@AdeMontchalin"
            },
            {
              name: "twitter:title",
              content: this.title
            },
            {
              name: "twitter:description",
              content: this.description
            },
            {
              name: "twitter:image",
              content: "https://france-relance.transformation.gouv.fr" + this.previewImg
            },
          ],
        }
      },

    }
</script>

<style>



</style>
