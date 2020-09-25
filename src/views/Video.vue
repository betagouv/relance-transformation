<template>
  <div class="france_relance">

    <Header></Header>

    <div class="rf-container">  
      
      <Breadcrumbs></Breadcrumbs>

      <div class="rf-grid-row rf-grid-row--center">
        <div class="rf-col-md-10 rf-col-lg-8">
          <div class="video rf-grid-row rf-margin-bottom-5N">
            <img  class="rf-col-2" src="@/assets/FranceRelance.png" alt="France Relance" />
            <h1  class="rf-col-6 greenTitle">Le mot d'Amélie de Montchalin</h1>
          </div>
        </div>
      </div>
      <div class="rf-grid-row rf-grid-row--center">
            <iframe class="rf-col-10" title="Vidéo : Le mot d'Amélie de Montchalin" class="embed-responsive-item" src="https://www.youtube.com/embed/fTP37ETteOQ" allowfullscreen></iframe>
      </div>
      <div class="rf-grid-row rf-grid-row--center">
          <div class="transcription rf-col-10">
            <p class="rf-text--sm">Transcription de la vidéo</p>
            <h3>Paragraphe 1</h3>
            <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto sed, praesentium quia et voluptatum commodi quam. Voluptates, amet illo, alias harum, unde officia eveniet fugit porro aliquam labore quisquam.</p>
            <h3>Paragraphe 2</h3>
            <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto sed, praesentium quia et voluptatum commodi quam. Voluptates, amet illo, alias harum, unde officia eveniet fugit porro aliquam labore quisquam.</p>
            <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto sed, praesentium quia et voluptatum commodi quam. Voluptates, amet illo, alias harum, unde officia eveniet fugit porro aliquam labore quisquam.</p>
            <h3>Paragraphe 4</h3>
            <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto sed, praesentium quia et voluptatum commodi quam. Voluptates, amet illo, alias harum, unde officia eveniet fugit porro aliquam labore quisquam.</p>
            <h3>Paragraphe 5</h3>
            <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto sed, praesentium quia et voluptatum commodi quam. Voluptates, amet illo, alias harum, unde officia eveniet fugit porro aliquam labore quisquam.</p>
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
         name: "Video",

      components: { Header, Breadcrumbs, Footer, },

      data() {
          return {
              title: "France Relance : le mot d'Amélie de montchalin - Ministère de la Transformation et de la Fonction publiques",
              description: "Amélie de Montchalin présente les financements destinés aux administrations dans le cadre du volet « Mise à niveau numérique de l'État et des territoires » du plan de relance",
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

.video img {
  width: 120px;
}
</style>
