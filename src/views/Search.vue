<template>

  <div class="recherche">

    <Header></Header>
    <div class="rf-container">

      <Breadcrumbs></Breadcrumbs>

      <div class="rf-grid-row rf-grid-row--center">
        <div class="rf-col-10">

          <div class="rf-grid-row rf-grid-row--top rf-margin-top-2N rf-grid-row--middle">
            <div class="rf-col-xs-12 rf-col-md-1 rf-col-lg-1 rf-col-xl-1">
              <img class="france-relance" src="@/assets/FranceRelance.png" alt="France Relance">
            </div>
            <div class="rf-col text">
                <div>
                    <h1 class="greenTitle rf-h2">Rechercher un financement</h1>
                </div>
            </div>
          </div>

          <div class="rf-margin-bottom-8N rf-margin-top-4N">
            <div class="rf-grid-row">
                <form @submit.stop.prevent="Search(newResearch)" class="searchBar rf-col">
                    <div class="rf-search-bar rf-search-bar--lg" id="search-input--lg">
                      <label class="rf-label" for="search-input--lg-input">Label de la barre de recherche</label>
                      <input type="search" class="rf-input" id="search-input-input" name="search-input-input" v-model="newResearch" placeholder="Rechercher">
                      <button class="rf-btn" title="Rechercher" type="submit">
                        <span>Rechercher</span>
                      </button>
                    </div>
                </form>
            </div>
          </div>

          <ResultSection class="rf-margin-top-4N rf-padding-top-4N">
          <template v-slot:titleResultSection>
            <h2 v-if="text" class="rf-h4">Résultats pour «&nbsp;{{ text }}&nbsp;»&nbsp;:</h2>
            <h2 v-if="results == false" class="rf-h4">Aucun résultat ne correspond à votre recherche.</h2>
          </template>

          <template v-slot:resultCards>
            <div class="rf-grid-row rf-grid-row--start rf-grid-row--gutters">
              <div v-for="aide in results" :key="aide.id" class="rf-col-xs-12 rf-col-sm-6 rf-col-md-4 rf-col-xl-4">
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
    import Footer from "@/components/Footer";
    import ResultSection from "@/components/ResultSection";
    import aidService from '../services/aidService'


    export default {
         name: "Search",

      components: { Header, Breadcrumbs, ResultSection, Footer, },

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
          if(this.newResearch.trim() !== "") {
            this.results = "";
            this.text= newResearch;
            aidService.fetchAidList(`text=${newResearch}`)
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
          aidService.fetchAidList(`text=${this.route.query.q}`)
              .then(response => {
                this.results = response.data.results;
                this.text = this.$route.query.q;
              })
      }
    }
</script>

<style>

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

  .aide a {
      position: initial;
      margin-bottom: 20px;
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

  div.rf-grid-row--top div {
      text-align: center;
  }

  div.rf-grid-row div.rf-col div {
      text-align: left;
  }

  .france-relance {
      width: 80px;
  }

  .text {
      padding-left: 32px !important;
  }

  @media screen and (max-width: 767px) {

      .france-relance {
          width: 64px;
      }

      .text {
          padding-left: 0px !important;
          padding-top: 16px;
      }
  }


</style>
