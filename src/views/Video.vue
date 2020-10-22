<template>
  <div class="france_relance">
    <Header></Header>
    <main class="rf-container">
      <div class="rf-grid-row rf-grid-row--center rf-margin-bottom-3N">
        <div class="rf-col-md-10">
          <Breadcrumbs></Breadcrumbs>
            <div class="aides-title">
              <img src="@/assets/FranceRelance.png" alt="France Relance">
              <h1 class="">Le mot d’Amélie de Montchalin</h1>
            </div>
        </div>
      </div>
      <div class="rf-grid-row rf-grid-row--center">
        <div class="rf-col-xs-12 rf-col-md-10 rf-responsive-vid">
          <iframe title="Vidéo : Le mot d'Amélie de Montchalin" class="rf-responsive-vid__player" src="https://www.youtube.com/embed/YHucCe9IQ8I" allowfullscreen></iframe>
        </div>
      </div> 
      <div class="rf-grid-row rf-grid-row--center">
        <div class="rf-col-md-10 rf-col-lg-8">
          <p class="rf-text--sm"><em>Transcription de la vidéo</em></p>
          <p>Depuis 2017, le gouvernement a entrepris une démarche sans précédent de transformation numérique du service public pour simplifier les démarches pour les usagers et faciliter pour les agents publics l’accompagnement de ces usagers.</p>
          <p>La crise sanitaire que nous traversons nous montre que nous devons accélérer cette transformation numérique et dans le cadre du plan de relance ce sont 500 millions d’euros qui y sont dédiés spécifiquement pour cette transformation numérique au service des usagers et au service des agents publics dans leur travail du quotidien. </p>
          <p>L’administration doit, en effet, offrir des services publics en ligne plus simples, plus accessibles à tous notamment aux personnes en situation de handicap et plus faciles à faire.</p>
          <p>Mais cette transformation numérique ne peut pas être une transformation numérique  de façade. Nous devons profondément modifier, moderniser nos méthodes de travail au sein de l’administration. Pour cela, nous devons donner de meilleurs outils aux agents publics, pour qu’ils puissent se concentrer sur les tâches à plus forte valeur ajoutée, pour qu’ils puissent travailler de manière plus collaborative, pour qu’ils puissent travailler à distance, chez eux, ou en mobilité. Nous devons explorer de nouvelles modalités de travail. Nous devons donc donner aux agents publics de nouveaux outils et en particulier numériques.</p>
          <p>Mais cette transformation numérique ne peut pas se limiter à l’État. Nous voulons également associer les collectivités locales avec lesquelles nous travaillons main dans la main pour réussir la mise en œuvre de ce plan de relance. Main dans la main avec les collectivités, nous allons pouvoir définir leurs besoins pour qu’elles puissent également apporter de meilleurs services aux usagers et pour que les agents publics territoriaux aient eux aussi accès aux outils de travail à la pointe de la technologie. Nous allons construire avec elles des solutions, construire avec elles des programmes de développement numérique.</p>
          <p>Alors, sur cette page, vous avez accès à l’ensemble de ce que nous proposons pour que ce plan de relance devienne une réalité et qu’il soit réellement crédible, puissant, décisif pour mettre à niveau ces outils numériques dans l’État mais aussi dans les collectivités locales.</p>
          <p>Mon ministère, le ministère de la Transformation et de la Fonction publiques, est à votre service pour faciliter votre vie au quotidien que vous soyez agent public ou usager du service public.</p> 
        </div>
      </div>
    </main>
    <infoPlan></infoPlan>
    <Footer></Footer>
  </div>
</template>

<script>
    import Header from "@/components/Header";
    import Breadcrumbs from "@/components/Breadcrumbs";
    import Footer from "@/components/Footer";
    import infoPlan from "@/components/planDeRelance";

    export default {
         name: "Video",

      components: { Header, Breadcrumbs, Footer, infoPlan},

      data() {
          return {
              title: "France Relance : le mot d’Amélie de montchalin - Ministère de la Transformation et de la Fonction publiques",
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



</style>
