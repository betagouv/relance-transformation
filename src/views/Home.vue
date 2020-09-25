<template>

  <div class="france_relance">

    <Header></Header>
    <div class="rf-container">

    <Breadcrumbs></Breadcrumbs>


        <div class="rf-grid-row rf-grid-row--center">
            <div class="rf-col-xl-10">

            <IntroSection class="rf-margin-bottom-2N"></IntroSection>

            <div class="rf-margin-bottom-8N">
              <div class="rf-grid-row">
    <div class="rf-col">
      <h2 class="rf-h4">Rechercher un financement :</h2>
      <form @submit.stop.prevent="goToResearch()">
        <div class="rf-search-bar rf-search-bar--lg" id="search-input--lg">
          <label class="rf-label" for="search-input--lg-input">Label de la barre de recherche</label>
          <input v-model="recherche" class="rf-input" placeholder="Rechercher un mot, une expression, une référence…" type="search" id="search-input--lg-input" name="search-input--lg-input">
            <button class="rf-btn rf-btn--lg" title="Rechercher" type="submit">
              <span>Rechercher</span>
            </button>
        </div>
      </form>
    </div>
  </div>
            </div>

            <div class="rf-grid-row rf-grid-row--center">
                <div class="rf-col">
                    <h2 class="rf-h4"> Découvrez tous les financements auxquels vous pouvez faire appel&nbsp;:</h2>
                </div>
            </div>

            <div class="rf-grid-row rf-grid-row--center rf-grid-row--middle rf-grid-row--gutters rf-margin-bottom-2N">
                <TopSelection :title="topSelection1" :filename="logoEtat" :focus="focusTopSelection1" @click.native="goToSelection1()"></TopSelection>
                <TopSelection :title="topSelection2" :filename="logoCollectivite" :focus="focusTopSelection2" @click.native="goToSelection2()"></TopSelection>
            </div>

            <div v-if="topSelectionEtat" class="rf-grid-row rf-grid-row--center">
                <div class="rf-col">
                    <h2 class="rf-h4">Quelle est l'échéance de votre projet&nbsp;?</h2>
                </div>
            </div>

            <div v-if="topSelectionEtat" class="rf-grid-row rf-grid-row--center rf-grid-row--middle rf-grid-row--gutters">
                <DateSelection :title="dateSelection1" :filename="logo2022" :focus="focusEcheance1" @click.native="goToEcheance2022()"></DateSelection>
                <DateSelection :title="dateSelection2" :filename="logo2023" :focus="focusEcheance2" @click.native="goToEcheance2023()"></DateSelection>
            </div>

            <ResultSection v-if="results" class="rf-margin-top-4N">
                <template v-slot:titleResultSection>
                    <h2  class="rf-h4" v-if="focusTopSelection2">Dans le cadre de votre projet, vous souhaitez&nbsp;:</h2>
                    <h2  class="rf-h4" v-else-if="focusEcheance1">Dans le cadre de votre projet, vous souhaitez&nbsp;:</h2>
                    <h2  class="rf-h4" v-else-if="focusEcheance2">Dans le cadre de votre projet, vous pouvez&nbsp;:</h2>
                </template>
                <div v-if="echeance2022" class="rf-grid-row rf-margin-bottom-1N">
                    <div class="rf-col-12 info-message">
                        <img src="@/assets/picto/Info.svg" alt="">
                        <p class="rf-text--sm">Vous pouvez candidater à plusieurs de ces offres pour un même projet</p>
                    </div>
                </div>
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

    <Footer></Footer>

  </div>
</template>

<script>
  import Header from "@/components/Header";
  import Breadcrumbs from "@/components/Breadcrumbs";
  import IntroSection from "@/components/IntroSection";
  import SearchBar from "@/components/SearchBar";
  import TopSelection from "@/components/TopSelection";
  import DateSelection from "@/components/DateSelection";
  import ResultSection from "@/components/ResultSection";
  import Footer from "@/components/Footer";

  export default {
      name: "FranceRelance",

      components: { Header, Breadcrumbs, IntroSection, TopSelection, SearchBar, DateSelection, ResultSection, Footer, },

      data() {
        return {
          topSelection1: "Vous êtes un service de l'État ou un établissement public",
          topSelection2: "Vous êtes une collectivité territoriale ou un regroupement de collectivités territoriales",
          logoEtat: "Etat/Normal.svg",
          logoCollectivite: "Collectivite/Normal.svg",
          dateSelection1: "Votre projet sera réalisé au plus tard à la fin d'année 2022",
          dateSelection2: "Votre projet sera réalisé au plus tôt en début d'année 2023",
          logo2022: "2022/Normal.svg",
          logo2023: "2023/Normal.svg",
          focusTopSelection1: false,
          focusTopSelection2: false,
          focusEcheance1: false,
          focusEcheance2: false,
          topSelectionEtat: false,
          echeance2022: false,
          results: false,
          aides: "",
          title: "France Relance - Ministère de la Transformation et de la Fonction publiques",
          description: "Administrations : bénéficiez du volet « Mise à niveau numérique de l'État et des territoires »",
          previewImg: require('@/assets/Preview.png'),
          recherche:"",
        }
      },

      methods: {
          goToResearch() {
            if(this.recherche !== ""){
              this.$router.push({ name: 'search', query: { q: this.recherche }})
            }
          },
          goToSelection1() {
            this.focusTopSelection1 = true;
            this.focusTopSelection2 = false;
            this.topSelectionEtat = true;
            this.aides = "";
          },
          goToSelection2() {
            this.focusTopSelection2 = true;
            this.focusTopSelection1 = false;
            this.topSelectionEtat = false;
            this.focusEcheance1 = false;
            this.focusEcheance2 = false;
            this.results = true;
            this.aides = "";
            const axios = require("axios");
            axios.get(`https://staging.aides-territoires.beta.gouv.fr/api/aids/?backers=505-mtfp&in_france_relance=true&targeted_audiences=commune&targeted_audiences=epci&targeted_audiences=department&targeted_audiences=region`)
                  .then(response => {
                  this.aides = response.data.results;
                  })
            },
            goToEcheance2022() {
              this.focusEcheance1 = true;
              this.focusEcheance2 = false;
              this.echeance2022 = true;
              this.results = true;
              this.aides = "";
              const axios = require("axios");
              axios.get(`https://staging.aides-territoires.beta.gouv.fr/api/aids/?backers=505-mtfp&in_france_relance=true&targeted_audiences=public_org&recurrence=oneoff&apply_before=2022-12-31`)
                    .then(response => {
                    this.aides = response.data.results;
                    })
            },
            goToEcheance2023() {
              this.focusEcheance2 = true;
              this.focusEcheance1 = false;
              this.echeance2022 = false;
              this.results = true;
              this.aides = "";
              const axios = require("axios");
              axios.get(`https://staging.aides-territoires.beta.gouv.fr/api/aids/?backers=505-mtfp&in_france_relance=true&targeted_audiences=public_org&recurrence=ongoing`)
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
  }
</script>

<style>

    .info-message {
        display: flex;
        align-items: flex-start;
        margin-top: -8px;
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
        box-shadow: inset 0 0 0 2px #107449;
    }

    .aide .rf-text {
        margin-top: 0;
        margin-bottom: 20px;
    }

    .aide a {
        position: initial;
        color: initial;
    }

    .aide p {
        margin: 0;
        color: #107449;
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
  .greenButton {
    background-color:           #107449;
    color:                      #fff;
  }

  .formresearch {
    background-color:           #F0F0F0;
    color:                      #6A6A6A;
    border:                     none;
  }

  .border-bottom-green {
    border-bottom:              2px solid #107449;
  }

  #search-input--lg .rf-input {
    box-shadow: inset 0 -2px 0 0 #107449;
  }
  #search-input--lg button.rf-btn {
    background-color: #107449;
  }
</style>
