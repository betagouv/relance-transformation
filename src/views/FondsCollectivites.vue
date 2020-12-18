<template>
  <div class="france_relance">
    <Header></Header>
    <main class="rf-container"  id="main">
      <div class="rf-grid-row rf-grid-row--center rf-margin-bottom-3N">
        <div class="rf-col-md-10">
          <Breadcrumbs></Breadcrumbs>
            <div class="aides-title">
              <img src="@/assets/FranceRelance.png" alt="France Relance">
              <h1 class="">Fonds "mise à niveau numérique des collectivités territoriales"</h1>
            </div>
        </div>
      </div>
      <div class="rf-grid-row rf-grid-row--center">
        <div class="rf-col-md-10 rf-col-lg-8">
          <div class="rf-callout">
            <p class="rf-callout__text rf-text--lg">88 millions d’euros jusqu’à 2022. <strong>Comment en bénéficier ?</strong></p>
          </div>  
          <h2>Je suis une <strong>collectivité</strong> ou un <strong>groupement de collectivités</strong></h2>
          <ul>
            <li>J’ai un <strong>besoin d’outils numériques</strong>, et je pense que ce besoin est commun à beaucoup d’autres collectivités : j’exprime mon besoin ou m’associe à des projets lancés sur la <a href=""><strong>plateforme de co-construction de solutions numériques</strong></a>. L’État aide à la mutualisation, fournit l’ingénierie et cofinance les projets</li>
            <li>J’ai un <strong>projet numérique</strong> qui améliore ma relation à l’usager, je veux accompagner mes agents dans la transition numérique ou former mes agents, ou je veux développer un projet avec un laboratoire d'innovation territoriale : je sollicite les services du <a href=""><strong>préfet de ma région ou de mon département</strong></a>. L’État cofinance mon projet, son ingénierie ou son accompagnement</li>
            <li>Je veux <strong>progresser en matière de cybersécurité</strong> : je demande à <a href=""><strong>bénéficier d’un accompagnement</strong></a> grâce aux fonds de relance pilotés par l’ANSSI. L’État m’aide à trouver un prestataire puis finance mon accompagnement</li>
          </ul>
          <h2>Je suis un groupement de collectivités ou une collectivité de taille importante</h2>
          <p>J’ai un <strong>projet numérique mutualisé ou d’ampleur</strong> qui concerne un département ou l’équivalent d’une population d’environ 500 000 habitants, et qui porte sur :</p>
          <ul>
            <li>La dématérialisation (création ou amélioration) des services aux usagers</li>
            <li>Un meilleur usage des données (intelligence artificielle, open data, archivage, tableaux de bord de pilotage des politiques publiques locales) pour nos territoires</li>
            <li>La coopération avec mes partenaires et usagers grâce au numérique (plateformes citoyennes, gestion de la connaissance partagée, marchés publics)</li>
          </ul>
          <p>Je candidate aux <a href=""><strong>appels à projets nationaux</strong></a>. L’État cofinance mon projet.</p>
          <h2>Je suis une collectivité et je veux déployer FranceConnect ou utiliser les données mises à disposition par l’État</h2>
          <p>Je sollicite le <a href=""><strong>guichet national API et FranceConnect</strong></a>. L’État m’accompagne et finance mon raccordement à ces dispositifs.</p>
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
         name: "FondsCollectivites",

      components: { Header, Breadcrumbs, Footer, infoPlan},

      data() {
          return {
              title: "Les fonds pour les collectivtés - France Relance - Ministère de la Transformation et de la Fonction publiques",
              description: "Comment bénéficier des 88 millions d’euros jusqu’à 2022 pour la mise à niveau numérique des collectivités territoriales",
              previewImg: require('@/assets/Preview.png'),
          }
      },

      methods: {
         trackMyPage() {
            this.$smartTag.sendPage({
                name: 'fonds collectivites',
                level2: '4',
            })
          },
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

      mounted() {
        this.trackMyPage()
      }

    }
</script>

<style>
.rf-callout {
  box-shadow: inset .25rem 0 0 0 #107449;
}


</style>
