<template>

  <div class="france_relance">

    <Header></Header>

    <main class="rf-container" id="main">


      <div class="rf-grid-row rf-grid-row--center">
        <div class="rf-col-md-10">
          <Breadcrumbs></Breadcrumbs>

          <IntroSection class="rf-mb-4w"></IntroSection>

          <div class="rf-grid-row rf-grid-row--center">
            <div class="rf-col">
              <h2 class="rf-h4"> Découvrez tous les financements auxquels vous pouvez faire appel&nbsp;:</h2>
              <p class="rf-text">Consultables aussi au <a href="static/20201029_Plan-de-relance-transformation-numerique-de-l-Etat-et-des-Territoires_Livret-des-themes.pdf" target="_blank" title="Consulter l'ensemble des financements au format PDF - nouvelle fenêtre">format PDF</a>.</p>
            </div>
          </div>

          <div class="rf-grid-row rf-grid-row--center rf-grid-row--middle rf-grid-row--gutters rf-mb-2w">
            <TopSelection :title="topSelection1" :expanded="expanded1" :controls="controls1" :filename="logoEtat" :focus="focusTopSelection1" @click.native="goToSelection1()" @keyup.enter.native="goToSelection1()" @keyup.space.prevent.native="goToSelection1()"></TopSelection>

            <div class="rf-col-sm-12 rf-col-md-6">
              <div class="rf-grid-row unselected collectivites" >
                <img class="rf-col-3 top-selection-image" src="@/assets/picto/Collectivite/Normal.svg" alt="" />
                <h3 class="rf-col-9 rf-text select-title">
                  <router-link :to="{ name: 'FondsCollectivites' }">
                    Vous êtes une collectivité territoriale ou un regroupement de collectivités territoriales
                  </router-link>
                </h3>
              </div>
            </div>
          </div>

          <div v-if="results" id="results">
          <ResultSection class="rf-margin-top-4N">
            <template v-slot:titleResultSection>
              <h2  class="rf-h4" v-if="focusTopSelection1">Dans le cadre de votre projet, vous souhaitez</h2>
              <h2  class="rf-h4" v-else-if="focusTopSelection2 && aides.length == 0">À venir dans les prochains jours.</h2>
              <h2  class="rf-h4" v-else>Dans le cadre de votre projet, vous pouvez</h2>
            </template>

            <template v-slot:resultCards>
              <div class="rf-grid-row rf-grid-row--start rf-grid-row--gutters">
                <div v-for="aide in aides" :key="aide.id" class="rf-col-xs-12 rf-col-sm-6 rf-col-md-4 rf-col-xl-4">
                  <div class="aide">
                    <h3 class="rf-text"><router-link :to="{ name: 'aid_detail', params: { slug: aide.slug } }">{{ aide.name }}</router-link></h3>
                    <p class="rf-text--sm">Obtenir des informations<img src="@/assets/picto/Fleche.svg" alt="" /></p>
                  </div>
                </div>
              </div>
            </template>
          </ResultSection>
          </div>
        </div>
      </div>
    </main>
    <div class="rf-grid-col rf-grid-col--center infoPlan">
      <infoPlanEtat></infoPlanEtat>
      <infoPlan></infoPlan>
    </div>  
    <Footer></Footer>

  </div>
</template>

<script>
  import Header from "@/components/Header";
  import Breadcrumbs from "@/components/Breadcrumbs";
  import IntroSection from "@/components/IntroSection";
  import TopSelection from "@/components/TopSelection";
  import ResultSection from "@/components/ResultSection";
  import Footer from "@/components/Footer";
  import aidService from '../services/aidService';
  import infoPlanEtat from "@/components/planDeRelanceEtat";
  import infoPlan from "@/components/planDeRelance";

  export default {
      name: "FranceRelance",

      components: { Header, Breadcrumbs, IntroSection, TopSelection, ResultSection, Footer, infoPlanEtat, infoPlan },

      data() {
        return {
          topSelection1: "Vous êtes un service de l'État ou un établissement public",
          logoEtat: "Etat/Normal.svg",
          focusTopSelection1: false,
          results: false,
          aides: "",
          title: "France Relance - Ministère de la Transformation et de la Fonction publiques",
          description: "Administrations : bénéficiez du volet « Mise à niveau numérique de l'État et des territoires »",
          previewImg: require('@/assets/Preview.png'),
          expanded1: "false",
          controls1:"results",
        }
      },

      methods: {
        trackMyPage() {
          this.$smartTag.sendPage({
            name: 'accueil',
            level2: '4',
          })
        },
        goToSelection1() {
            this.focusTopSelection1 = true;
            this.expanded1 = "true";
            this.expanded2 = "false";
            this.results = true;
            this.aides = "";
            aidService.fetchAidList('targeted_audiences=public_org&recurrence=oneoff')
              .then(response => {
                this.aides = response.data.results;
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

    .rf-col {
      max-width: 940px;
    }

    .info-message {
      display: flex;
      align-items: flex-start;
      margin-top: -8px;
    }

    .info-message p {
        margin: 0;
    }

    .info-message img {
      padding: 1px 8px 0 2px;
      flex-shrink: 0;
      width: 28px;
    }

    .aide {
      position: relative;
      background-color: #F9F8F6;
      padding: 32px 32px 24px 32px;
      height: 100%;
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
    }
    .aide:hover {
      box-shadow: inset 0 0 0 2px var(--bf500);
    }


    .aide .rf-text {
        margin-top: 0;
        margin-bottom: 20px;
    }

    .aide a {
      position: initial;
      margin-bottom: 20px;
      color: initial;
    }
    .aide p {
      margin: 0;
      color: var(--bf500);
    }
    .aide img {
      padding-left: 8px;
      margin-bottom: -2px;
    }

    .aide a::after {
      position: absolute;
      content: "";
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }


    .collectivites {
      position: relative;
    }
    .collectivites a {
      box-shadow: none;
    }
    .collectivites a::before {
      position: absolute;
      content: "";
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    div[role="button"] {
        height: 120px;
    }

    div[role="button"]:hover, div[role="button"]:focus, .collectivites:hover, .collectivites:focus {
        background-color: #083A9F;
        cursor: pointer;
    }

    div[role="button"]:hover h3, div[role="button"]:focus h3, .collectivites:hover h3 a, .collectivites:focus h3 a {
        background-color: #083A9F;
        color: white !important;
    }

    .selected .rf-text {
        color: white !important;
    }

    .unselected {
        background-color: #F9F8F6;
        color: var(--bf500);
    }

    .top-selection-image {
        display: flex;
        align-items: center;
        padding: 20px !important;
        max-width: 120px;
    }

    .select-title {
        margin: 0;
        padding-left: 0 !important;
        padding-right: 24px !important;
        display: flex;
        align-items: center;
    }
    .infoPlan {
        text-align: center;
        margin-top: 3em;
        background-color: #f9F8F6;
        padding: 0.5em;
    }
</style>
