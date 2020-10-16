<template>
  <div class="france_relance">
    <Header></Header>
    <div class="rf-container">
      <div class="rf-grid-row rf-grid-row--center rf-margin-bottom-3N">
        <div class="rf-col-md-10">
          <Breadcrumbs></Breadcrumbs>
          <div class="bientot">
              <h1>Très prochaînement</h1><br/>
              <img src="@/assets/FranceRelance.png" alt="France Relance">
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
         name: "Bientot",

      components: { Header, Breadcrumbs, Footer, },

      data() {
          return {
              title: "Très prochaînement - Ministère de la Transformation et de la Fonction publiques",
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

<style type='scss'>

  .bientot {
    text-align: center;
  }
  .bientot h1 {
    color: #107449;
  }


</style>
