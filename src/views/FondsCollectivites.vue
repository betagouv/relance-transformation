<template>
  <div class="france_relance">
    <HeaderBlock></HeaderBlock>
    <main class="rf-container"  id="main">
      <div class="rf-grid-row rf-grid-row--center rf-mb-4w">
        <div class="rf-col-md-10">
          <BreadcrumbsBlock></BreadcrumbsBlock>
            <div class="aides-title">
              <img src="@/assets/FranceRelance.png" alt="France Relance">
              <h1 class="">Fonds "transformation numérique des collectivités territoriales"</h1>
            </div>
        </div>
      </div>
      <div class="rf-grid-row rf-grid-row--center">
        <div class="rf-col-md-10 rf-col-lg-8">
          <div class="rf-callout">
            <p class="rf-callout__text rf-text--lg">Les candidatures sur ces appels à projets/guichets sont à présent closes. <br>Vous pouvez consulter <a href="https://www.data.gouv.fr/fr/datasets/france-relance-donnees-relatives-aux-laureats-des-appels-a-projet-et-guichets-du-volet-mise-a-niveau-numerique-de-letat-et-des-territoires-enveloppe-mtfp/" target="_blank" title="les lauréats en opendata - nouvelle fenêtre">les lauréats en opendata</a>.</p>
          </div>  
          <h2 class="rf-mt-8v">Je suis une <strong>collectivité</strong> ou un <strong>groupement de collectivités</strong></h2>
          <ul>
            <li class="rf-pb-2v">J’ai un <strong>besoin d’outils numériques</strong>, et je pense que ce besoin est commun à beaucoup d’autres collectivités : j’exprime mon besoin ou m’associe à des projets lancés sur la <a class="aides" target="_blank" title="plateforme de co-construction de solutions numériques - nouvelle fenêtre" href="https://mon.incubateur.anct.gouv.fr/processes/transformation-numerique"><strong>plateforme de co-construction de solutions numériques</strong></a>. L’État aide à la mutualisation, fournit l’ingénierie et cofinance les projets</li>
            <li class="rf-pb-2v">J’ai un <strong>projet numérique</strong> qui améliore ma relation à l’usager, je veux accompagner mes agents dans la transition numérique ou former mes agents, ou je veux développer un projet avec un laboratoire d'innovation territoriale : <a class="aides" href="dcd6-accompagner-les-projets-de-transformation-nu/"><strong>je sollicite les services du préfet de ma région ou de mon département</strong></a>. L’État cofinance mon projet, son ingénierie ou son accompagnement</li>
            <li class="rf-pb-2v">Je veux <strong>progresser en matière de cybersécurité</strong> : <a class="aides" href=" https://www.ssi.gouv.fr/agence/cybersecurite/le-volet-cybersecurite-de-france-relance/" target="_blank" title="je demande à bénéficier d’un accompagnement - nouvelle fenêtre"><strong>je demande à bénéficier d’un accompagnement</strong></a> grâce aux fonds de relance pilotés par l’ANSSI. L’État m’aide à trouver un prestataire puis finance mon accompagnement</li>
            <li class="rf-pb-2v">Je souhaite mettre en œuvre des solutions de <strong>téléprocédures</strong> permettant de recevoir et d’instruire sous forme dématérialisée les <strong>demandes d’autorisations d’urbanismes</strong> (DAU) en prévision de l’application de la Loi ELAN : <a class="aides" href="b493-soutenir-la-dematerialisation-des-demandes-da/"><strong>je sollicite un financement spécifique dans le cadre du programme Démat. ADS.</strong></a></li>
          </ul>
          <h2>Je suis un groupement de collectivités ou une collectivité de taille importante</h2>
          <p>J’ai un <strong>projet numérique mutualisé ou d’ampleur</strong> qui concerne un département ou l’équivalent d’une population d’au moins 300&nbsp;000 habitants, et qui porte sur :</p>
          <ul>
            <li class="rf-pb-2v">La <a class="aides" href="b78b-ameliorer-lexperience-usager-dans-une-demarch/"><strong>dématérialisation des services</strong></a> aux usagers (création ou amélioration) </li>
            <li class="rf-pb-2v">Un <a class="aides" href="dbbc-developper-lutilisation-de-la-donnee-dans-vot/"><strong>meilleur usage des données pour nos territoires</strong></a> (intelligence artificielle, open data, archivage, tableaux de bord de pilotage des politiques publiques locales)</li>
            <li class="rf-pb-2v">La <a class="aides" href="7fa8-developper-la-collaboration-avec-vos-ecosyste/"><strong>coopération avec mes partenaires et usagers</strong></a> grâce au numérique (plateformes citoyennes, gestion de la connaissance partagée, marchés publics)</li>
          </ul>
          <p>Je candidate aux appels à projets nationaux <a class="aides" href="b78b-ameliorer-lexperience-usager-dans-une-demarch/">dématérialisation</a>, <a class="aides" href="dbbc-developper-lutilisation-de-la-donnee-dans-vot/">données</a>, <a class="aides" href="7fa8-developper-la-collaboration-avec-vos-ecosyste/">coopération</a>. L’État cofinance mon projet.</p>
          <h2>Je suis une collectivité et je veux déployer FranceConnect ou utiliser les données mises à disposition par l’État</h2>
          <p>Je sollicite le <a class="aides" href="e13a-deployer-franceconnect-et-utiliser-les-api-na/"><strong>guichet national API et FranceConnect</strong></a>. L’État m’accompagne et finance mon raccordement à ces dispositifs.</p>
        </div>
      </div>
    </main>
    <div class="rf-grid-col rf-grid-col--center infoPlan">
      <infoPlan></infoPlan>
    </div>  
    <FooterBlock></FooterBlock>
  </div>
</template>

<script>
    import HeaderBlock from "@/components/HeaderBlock";
    import BreadcrumbsBlock from "@/components/BreadcrumbsBlock";
    import FooterBlock from "@/components/FooterBlock";
    import infoPlan from "@/components/planDeRelance";

    export default {
         name: "FondsCollectivites",

      components: { HeaderBlock, BreadcrumbsBlock, FooterBlock, infoPlan},

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
.infoPlan {
  text-align: center;
  margin-top: 3em;
  background-color: #f9F8F6;
  padding: 0.5em;
}
</style>