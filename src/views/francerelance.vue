<template>

  <div class="france_relance">
    
    <Header></Header>
    
    <div class="rf-grid-row rf-grid-row--center">
      <div class="rf-col-8">
      
      <IntroSection></IntroSection>

      <SearchBar></SearchBar>

      <div class="TopSelectionDiv my-5">
          <h2 class="font22">Découvrez tous les financements auxquels vous pouvez faire appel :</h2>
          <div class="row container-fluid">
            <TopSelection :title="topSelection1" :filename="logoEtat" :focus="focusTopSelection1" @click.native="goToSelection1()"></TopSelection>
            <TopSelection :title="topSelection2" :filename="logoCollectivite" :focus="focusTopSelection2" @click.native="goToSelection2()"></TopSelection>    
          </div>
      </div>

      <div class="DateSelectionDiv my-5" v-if="topSelectionEtat">
          <h2 class="font22">Quelle est l'échéance de votre projet ?</h2>
          <div class="row container-fluid">
            <DateSelection :title="dateSelection1" :filename="logo2022" :date="date1" :focus="focusEcheance1" @click.native="goToEcheance2022()"></DateSelection>
            <DateSelection :title="dateSelection2" :filename="logo2023" :date="date2" :focus="focusEcheance2" @click.native="goToEcheance2023()"></DateSelection>    
          </div>
      </div>

      <ResultSection v-if="results">
        <div v-if="echeance2022" class="rf-grid-row align-items-center">
          <img src="@/assets/picto/Info.svg" alt="" aria-hidden="true" class="mr-2">
          <p class="m-0"><small>Vous pouvez candidater à plusieurs de ces offres pour un même projet</small></p>
        </div>
      </ResultSection>

      </div>
    </div>
  
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "@/components/Header";
  import IntroSection from "@/components/IntroSection";
  import SearchBar from "@/components/SearchBar";
  import TopSelection from "@/components/TopSelection";
  import DateSelection from "@/components/DateSelection";
  import ResultSection from "@/components/ResultSection";
  import Footer from "@/components/Footer";

  export default {
      name: "FranceRelance",

      components: { Header, IntroSection, TopSelection, SearchBar, DateSelection, ResultSection, Footer, },

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
        }
      },

      methods: {
            goToSelection1() {
                this.focusTopSelection1 = true;
                this.focusTopSelection2 = false;
                this.topSelectionEtat = true;
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
      },

  }
</script>

<style>

  .font22 {
      font-size: 22px;
  }

</style>