<template>
  <div class="recherche">

    <Header></Header>

    <Breadcrumbs></Breadcrumbs>

    <div class="rf-grid-row rf-grid-row--center">
      <div class="rf-col-8">

        <div class="rf-grid-row rf-grid-row--center align-items-center">
                <img src="@/assets/FranceRelance.png" alt="Logo France Relance" class="rf-col-2 mr-5 pt-4" width="110px" >
            <div class="rf-col-9 mt-3">
                <h1 class="greenTitle font48 pl-2"><strong>Rechercher un financement</strong></h1>
            </div>

            <form action="" class="searchBar rf-col-11 my-4">
                <div class="input-group mb-3">
                <input type="search" class="form-control border-bottom-green formresearch p-4" v-model="recherche" placeholder="Rechercher un mot clé, une expression, une référence..." aria-describedby="basic-addon2">
                <div class="input-group-append">
                    <button class="font20 btn my-2 greenButton my-sm-0 input-group-text pl-4 pr-4" type="button" @click="Research(recherche)">Rechercher</button>
                </div>
                </div>
            </form>

            <ResultSection>
            <template v-slot:titleResultSection>
              <h2 v-if="recherche">Résultats pour "{{ recherche }}" :</h2>
              <h2 v-if="$route.params.recherche && recherche == ''">Résultats pour "{{ $route.params.recherche }}" :</h2>
            </template>

            <template v-slot:resultCards>
              <div v-for="aide in results" :key="aide.id" class="rf-grid-row rf-grid-row--center rf-grid-row--gutter">
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

        </div>

      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
    import Header from "@/components/Header";
    import Breadcrumbs from "@/components/Breadcrumbs";
    import Footer from "@/components/Footer";
    import SearchBar from "@/components/SearchBar";
    import ResultSection from "@/components/ResultSection";

    export default {
         name: "Video",

      components: { Header, Breadcrumbs, SearchBar, ResultSection, Footer, },

      data() {
          return {
              title: "France Relance : rechercher un financement - Ministère de la Transformation et de la Fonction publiques",
              description: "Rechercher un financement dans le cadre du volet « Mise à niveau numérique de l'État et des territoires » du plan de relance",
              previewImg: require('@/assets/Preview.png'),
              results: "",
              recherche: '',
          }
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

      methods: {
        Research(recherche) {
          this.results = "";
          this.$route.params.recherche = recherche;
          const axios = require("axios");
          axios.get(`https://staging.aides-territoires.beta.gouv.fr/api/aids/?backers=505-mtfp&in_france_relance=true&text=${recherche}`)
                .then(response => {
                  this.results = response.data.results;
                })
        }
      },

        mounted() {
            const axios = require("axios");
            axios.get(`https://staging.aides-territoires.beta.gouv.fr/api/aids/?backers=505-mtfp&in_france_relance=true&text=${this.$route.params.recherche}`)
            .then(response => {
                 this.results = response.data.results;
            })
      }

    }
</script>

<style>

    .font48 {
        font-size: 48px;
    }

</style>
