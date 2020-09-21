<template>
  <div class="france_relance">
      
      <IntroSection></IntroSection>

      <SearchBar></SearchBar>

      <div class="TopSelectionDiv mt-5">
          <h2 class="text-left h3 mb-4 mt-5"><strong>Découvrez tous les financements auxquels vous pouvez faire appel :</strong></h2>
          <div class="row">
            <TopSelection :title="topSelection1" :focus="true"></TopSelection>
            <TopSelection :title="topSelection2" :focus="false"></TopSelection>    
          </div>
      </div>

      <div class="DateSelectionDiv mt-5">
          <h2 class="text-left h3 mb-4 mt-5"><strong>Quelle est l'échéance de votre projet ?</strong></h2>
          <div class="row">
            <DateSelection :title="dateSelection1" :date="date1" :focus="false"></DateSelection>
            <DateSelection :title="dateSelection2" :date="date2" :focus="false"></DateSelection>    
          </div>
      </div>

      <ResultSection></ResultSection>
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
        }
      }

  }
</script>

<style>

  .france_relance {
    margin: 10vh 10vw;
  }
</style>