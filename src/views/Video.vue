<template>
  <div class="france_relance">

    <Header></Header>

    <Breadcrumbs></Breadcrumbs>

    <div class="rf-grid-row rf-grid-row--center">
      <div class="rf-col-8">

        <div class="rf-grid-row rf-grid-row--center align-items-center">
                <img src="@/assets/FranceRelance.png" alt="Logo France Relance" class="rf-col-2 mr-5 pt-4" width="110px" >
            <div class="rf-col-9 mt-3">
                <h1 class="greenTitle font48 pl-2"><strong>Le mot d'Amélie de Montchalin</strong></h1>
            </div>

            <div class="embed-responsive embed-responsive-16by9 rf-col-11 my-4">
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/fTP37ETteOQ" allowfullscreen></iframe>
            </div>

            <div class="transcription rf-col-11 my-4">
                <h2>Transcription de la vidéo</h2>

                <div class="my-5">
                    <h3>Paragraphe 1</h3>
                    <p class="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto sed, praesentium quia et voluptatum commodi quam. Voluptates, amet illo, alias harum, unde officia eveniet fugit porro aliquam labore quisquam.</p>
                </div>

                <div class="my-5">
                    <h3>Paragraphe 2</h3>
                    <p class="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto sed, praesentium quia et voluptatum commodi quam. Voluptates, amet illo, alias harum, unde officia eveniet fugit porro aliquam labore quisquam.</p>
                </div>

                <div class="my-5">
                    <h3>Paragraphe 3</h3>
                    <p class="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto sed, praesentium quia et voluptatum commodi quam. Voluptates, amet illo, alias harum, unde officia eveniet fugit porro aliquam labore quisquam.</p>
                </div>

                <div class="my-5">
                    <h3>Paragraphe 4</h3>
                    <p class="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto sed, praesentium quia et voluptatum commodi quam. Voluptates, amet illo, alias harum, unde officia eveniet fugit porro aliquam labore quisquam.</p>
                </div>

                <div class="my-5">
                    <h3>Paragraphe 5</h3>
                    <p class="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto sed, praesentium quia et voluptatum commodi quam. Voluptates, amet illo, alias harum, unde officia eveniet fugit porro aliquam labore quisquam.</p>
                </div>
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

    .font48 {
        font-size: 48px;
    }

</style>
