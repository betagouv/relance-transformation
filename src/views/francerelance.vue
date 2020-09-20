<template>
  <div class="france_relance">
      
      <IntroSection></IntroSection>

      <SearchBar></SearchBar>

      <div class="TopSelectionDiv mt-5">
          <h2 class="text-left h3 mb-4 mt-5"><strong>Découvrez tous les financements auxquels vous pouvez faire appel :</strong></h2>
          <div class="row justify-content-center">
            <TopSelection :title="topSelection1" :focus="true"></TopSelection>
            <TopSelection :title="topSelection2" :focus="false"></TopSelection>    
          </div>
      </div>

      <div class="DateSelectionDiv mt-5">
          <h2 class="text-left h3 mb-4 mt-5"><strong>Quelle est l'échéance de votre projet ?</strong></h2>
          <div class="row justify-content-center">
            <DateSelection :title="dateSelection1" :date="date1" :focus="false"></DateSelection>
            <DateSelection :title="dateSelection2" :date="date2" :focus="false"></DateSelection>    
          </div>
      </div>

  </div>
</template>

<script>
  import IntroSection from "@/components/introsection";
  import SearchBar from "@/components/searchbar";
  import TopSelection from "@/components/topselection";
  import DateSelection from "@/components/dateselection";

  export default {
      name: "FranceRelance",

      components: { IntroSection, TopSelection, SearchBar, DateSelection },

      data() {
        return {
          topSelection1: "Vous êtes un service de l'État ou un établissement public",
          topSelection2: "Vous êtes une collectivité territoriale ou un regroupement de collectivités territoriales",
          dateSelection1: "Votre projet sera réalisé au plus tard à la fin d'année 2022",
          dateSelection2: "Votre projet sera réalisé au plus tôt en début d'année 2023",
          date1: "→ 2022",
          date2: "2023 →",
        }
      }

  }
</script>

<style>

  .france_relance {
    margin: 10vh 10vw;
  }
</style>