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
  </div>
</template>

<script>
  import IntroSection from "@/components/introsection";
  import TopSelection from "@/components/topselection";
  import SearchBar from "@/components/searchbar";

  export default {
      name: "FranceRelance",

      components: { IntroSection, TopSelection, SearchBar },

      data() {
        return {
          topSelection1: "Vous êtes un service de l'État ou un établissement public",
          topSelection2: "Vous êtes une collectivité territoriale ou un regroupement de collectivités territoriales",
        }
      }

  }
</script>

<style>

  .france_relance {
    margin: 10vh 10vw;
  }
</style>