<template>
  <div class="france_relance">
      <div class="presentation row">
          <div class="col-sm-1"><i class="fas fa-hand-holding-heart border border-success rounded-circle p-4"></i></div>
          <div class="col-sm">
              <h1 class="greenTitle text-left mb-4"><strong>Administrations : bénéficiez du volet « Mise à niveau numérique de l'État et des territoires »</strong></h1>
              <div class="row">
                <p class="text-left col-sm-8 mr-5 h3">Votre projet doit contribuer à la relance de l'économie française, notamment des entreprises, et doit produire des résultats concrets sous 18 mois.</p>
                <div class="video col-sm-3 embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item" src="http://lorempixel.com/180/100"></iframe>
                  <p class="text-justify"><small>Le mot d'Amélie de Montchalin</small></p>
                </div>
              </div>
          </div>
      </div>

      <div class="textSearch mb-5">
          <h2 class="text-left h3 mb-4"><strong>Rechercher un financement :</strong></h2>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <form class="form-inline">
                <input class="form-control bgInherit" type="search" placeholder="Rechercher un mot clé, une expression, une référence..." aria-label="Search">
                <button class="btn my-2 greenButton my-sm-0" type="submit">Rechercher</button>
              </form>
            </div>
          </nav>
      </div>

      <div class="financialSorts mt-5">
          <h2 class="text-left h3 mb-4 mt-5"><strong>Découvrez tous les financements auxquels vous pouvez faire appel :</strong></h2>
          <div class="row justify-content-center">
            <FinancialSort :title="title" :focus="true"></FinancialSort>
            <FinancialSort :title="title2" :focus="false"></FinancialSort>    
          </div>
      </div>
  </div>
</template>

<script>
  import FinancialSort from "@/components/financialsort";

  export default {
      name: "FranceRelance",

      components: { FinancialSort },

      data() {
        return {
          title: "Vous êtes un service de l'État ou un établissement public",
          title2: "Vous êtes une collectivité territoriale ou un regroupement de collectivités territoriales",
        }
      }

  }
</script>

<style>

  .france_relance {
    margin: 10vh 10vw;
  }

  .greenTitle {
    color: #408669;
  }

  .greenButton {
    background-color: #408669;
    color: #fff;
  }

  .bgInherit {
    background-color: inherit;
    color: grey; 
  }
</style>