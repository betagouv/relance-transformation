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

            <form @submit.stop.prevent="Search(newResearch)" class="searchBar rf-col-11 my-4">
                <div class="input-group mb-3">
                <input type="search" class="rf-input" id="search-input-input" name="search-input-input" v-model="newResearch" placeholder="Rechercher un mot clé, une expression, une référence…">
                <div class="input-group-append">
                    <button class="rf-btn" title="Rechercher" type="submit">Rechercher</button>
                </div>
                </div>
            </form>

            <ResultSection>
            <template v-slot:titleResultSection>
              <h2 v-if="text">Résultats pour "{{ text }}" :</h2>
              <!-- <h2 v-if="$route.query.q && text == ''">Résultats pour "{{ this.$route.query.q }}" :</h2> -->
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
         name: "Search",

      components: { Header, Breadcrumbs, SearchBar, ResultSection, Footer, },

      data() {
          return {
              title: "France Relance : rechercher un financement - Ministère de la Transformation et de la Fonction publiques",
              description: "Rechercher un financement dans le cadre du volet « Mise à niveau numérique de l'État et des territoires » du plan de relance",
              previewImg: require('@/assets/Preview.png'),
              results: "",
              newResearch: '',
              text: '',
          }
      },

      props: {
          query: {
              type: Function,
              default: null
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
        Search(newResearch) {
          if(this.newResearch !== "") {
            this.results = "";
            this.text= newResearch;
            const axios = require("axios");
            axios.get(`https://staging.aides-territoires.beta.gouv.fr/api/aids/?backers=505-mtfp&in_france_relance=true&text=${newResearch}`)
                  .then(response => {
                    this.results = response.data.results;
                  })
            this.$router.push({query: {q: newResearch}})
          } else {
              return
            }       
        }
      },

        mounted() {
            const axios = require("axios");
            axios.get(`https://staging.aides-territoires.beta.gouv.fr/api/aids/?backers=505-mtfp&in_france_relance=true&text=${this.$route.query.q}`)
            .then(response => {
                 this.results = response.data.results;
                 this.text = this.$route.query.q;
            })
      }

    }
</script>

<style>

    .font48 {
        font-size: 48px;
    }

</style>
