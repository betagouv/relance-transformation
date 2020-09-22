<template>
  <div class="france_relance">
      
      <IntroSection></IntroSection>

      <SearchBar></SearchBar>

      <div class="TopSelectionDiv mt-5">
          <h2 class="text-left h3 mb-4 mt-5"><strong>Découvrez tous les financements auxquels vous pouvez faire appel :</strong></h2>
          <div class="row container-fluid">
            <TopSelection :title="topSelection1" :focus="focusTopSelection1" @click.native="goToSelection1()"></TopSelection>
            <TopSelection :title="topSelection2" :focus="focusTopSelection2" @click.native="goToSelection2()"></TopSelection>    
          </div>
      </div>

      <div class="DateSelectionDiv mt-5" v-if="topSelectionEtat">
          <h2 class="text-left h3 mb-4 mt-5"><strong>Quelle est l'échéance de votre projet ?</strong></h2>
          <div class="row container-fluid">
            <DateSelection :title="dateSelection1" :date="date1" :focus="focusEcheance1" @click.native="goToEcheance2022()"></DateSelection>
            <DateSelection :title="dateSelection2" :date="date2" :focus="focusEcheance2" @click.native="goToEcheance2023()"></DateSelection>    
          </div>
      </div>

      <ResultSection v-if="results">
        <p class="text-left" v-if="echeance2022">ℹ︎ Vous pouvez candidater à plusieurs de ces offres pour un même projet</p>
      </ResultSection>
  </div>
</template>

<script>
  import IntroSection from "@/components/IntroSection";
  import SearchBar from "@/components/SearchBar";
  import TopSelection from "@/components/TopSelection";
  import DateSelection from "@/components/DateSelection";
  import ResultSection from "@/components/ResultSection";

  export default {
      name: "FranceRelance",

      components: { IntroSection, TopSelection, SearchBar, DateSelection, ResultSection },

      data() {
        return {
          topSelection1: "Vous êtes un service de l'État ou un établissement public",
          topSelection2: "Vous êtes une collectivité territoriale ou un regroupement de collectivités territoriales",
          dateSelection1: "Votre projet sera réalisé au plus tard à la fin d'année 2022",
          dateSelection2: "Votre projet sera réalisé au plus tôt en début d'année 2023",
          date1: "→ 2022",
          date2: "2023 →",
          focusTopSelection1: false,
          focusTopSelection2: false,
          focusEcheance1: false,
          focusEcheance2: false,
          topSelectionEtat: false,
          echeance2022: false,
          results: false,
        }
      },

      methods: {
            goToSelection1() {
                this.focusTopSelection1 = true;
                this.focusTopSelection2 = false;
                this.topSelectionEtat = true;
                this.results = false;
            },
            goToSelection2() {
                this.focusTopSelection2 = true;
                this.focusTopSelection1 = false;
                this.topSelectionEtat = false;
                this.focusEcheance1 = false;
                this.focusEcheance2 = false;
                this.results = true;
            },
            goToEcheance2022() {
                this.focusEcheance1 = true;
                this.focusEcheance2 = false;
                this.echeance2022 = true;
                this.results = true;
            },
            goToEcheance2023() {
                this.focusEcheance2 = true;
                this.focusEcheance1 = false;
                this.echeance2022 = false;
                this.results = true;
            },
            goToAides(identifiant) {
              this.$router.push({ path: `/aides/${identifiant}` });
            }
      },

  }
</script>

<style>

  .france_relance {
    margin: 10vh 10vw;
  }
</style>