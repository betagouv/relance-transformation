<template>

  <div class="france_relance">

    <Header></Header>

    <Breadcrumbs></Breadcrumbs>

    <div class="rf-grid-row rf-grid-row--center">
      <div class="rf-col-8">
        <IntroSection></IntroSection>
        <h2> Découvrez tous les financements auxquels vous pouvez faire appel :</h2>
      </div>
    </div>

    <div class="rf-grid-row rf-grid-row--center rf-grid-row--gutter">
      <TopSelection :title="topSelection1" :filename="logoEtat" :focus="focusTopSelection1" @click.native="goToSelection1()"></TopSelection>
      <TopSelection :title="topSelection2" :filename="logoCollectivite" :focus="focusTopSelection2" @click.native="goToSelection2()"></TopSelection>
    </div>

    <div v-if="topSelectionEtat" class="rf-grid-row rf-grid-row--center rf-grid-row--gutter">
      <div class="rf-col-8">
        <h2>Quelle est l'échéance de votre projet ?</h2>
      </div>
    </div>
    <div v-if="topSelectionEtat" class="rf-grid-row rf-grid-row--center rf-grid-row--gutter">
      <DateSelection :title="dateSelection1" :filename="logo2022" :focus="focusEcheance1" @click.native="goToEcheance2022()"></DateSelection>
      <DateSelection :title="dateSelection2" :filename="logo2023" :focus="focusEcheance2" @click.native="goToEcheance2023()"></DateSelection>
    </div>

      <ResultSection v-if="results">
        <template v-slot:titleResultSection>
          <h2 v-if="focusTopSelection1">Dans le cadre de votre projet, vous pouvez :</h2>
          <h2 v-if="focusTopSelection2">Dans le cadre de votre projet, vous souhaitez :</h2>
        </template>
        <div v-if="echeance2022" class="rf-grid-row rf-grid-row--center rf-grid-row--gutter">
          <div class="rf-col-8">
            <img src="@/assets/picto/Info.svg" alt="" >
            <p><small>Vous pouvez candidater à plusieurs de ces offres pour un même projet</small></p>
          </div>
        </div>
        <template v-slot:resultCards>
          <div v-for="aide in aides" :key="aide.id" class="rf-grid-row rf-grid-row--center rf-grid-row--gutter">
            <div class="rf-col-4">
                <router-link :to="`/Aides/${aide.slug}/`">
                    <div class="col-sm bgGrey p-4 justify-content-start">
                        <h3 class="mb-5 text-left col-sm"><strong><a href="" class="text-reset font16">{{ aide.name }}</a></strong></h3>
                        <div class="rf-grid-row align-items-center">
                            <p class="m-0 moreInfos text-left font14">Obtenir des informations</p>
                            <img src="@/assets/picto/Fleche.svg" alt="" aria-hidden="true" class="ml-2">
                        </div>
                    </div>
                </router-link>
              </div>
          </div>
        </template>
      </ResultSection>


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
          logoEtat: "Etat/Actif.svg",
          logoCollectivite: "Collectivite/Actif.svg",
          dateSelection1: "Votre projet sera réalisé au plus tard à la fin d'année 2022",
          dateSelection2: "Votre projet sera réalisé au plus tôt en début d'année 2023",
          logo2022: "2022/Actif.svg",
          logo2023: "2023/Actif.svg",
          focusTopSelection1: false,
          focusTopSelection2: false,
          focusEcheance1: false,
          focusEcheance2: false,
          topSelectionEtat: false,
          echeance2022: false,
          results: false,
          aides: "",
        }
      },

      methods: {
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

  }
</script>

<style>



</style>
