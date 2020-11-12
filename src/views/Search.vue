<template>

  <div class="recherche">

    <Header></Header>
    <main class="rf-container">

      <div class="rf-grid-row rf-grid-row--center">
        <div class="rf-col-xs-12 rf-col-sm-10">
          <Breadcrumbs></Breadcrumbs>
          <div class="rf-grid-row rf-grid-row--middle">
            <div class="rf-col-xs-12 rf-col-md-1 rf-col-lg-1 rf-col-xl-1">
              <img class="intro-france-relance-logo" src="@/assets/FranceRelance.png" alt="France Relance">
            </div>
            <div class="rf-col text">
                <div>
                    <h1 class="greenTitle rf-h2">Rechercher un financement</h1>
                </div>
            </div>
          </div>

          <div class="rf-margin-bottom-8N rf-margin-top-4N">
            <div class="rf-grid-row">
                <form class="searchBar rf-col" @submit.stop.prevent="Search(newResearch)">
                    <div class="rf-search-bar rf-search-bar--lg" id="search-input--lg">
                      <label class="rf-label" for="search-input--lg-input">Rechercher un financement</label>
                      <input type="search" class="rf-input" id="search-input--lg-input" name="search-input--lg-input" v-model="newResearch" placeholder="Rechercher">
                      <button class="rf-btn  rf-btn--lg" title="Rechercher" type="submit">
                        <span>Rechercher</span>
                      </button>
                    </div>
                </form>
            </div>
          </div>

          <ResultSection class="rf-margin-top-4N rf-padding-top-4N">
          <template v-slot:titleResultSection>
            <h2 v-if="text == null" class="rf-h4">Aucune recherche n’a pu être effectuée car vous n’avez pas saisi de terme de recherche.</h2>
            <h2 v-if="text" class="rf-h4">Résultats pour «&nbsp;{{ text }}&nbsp;»&nbsp;:</h2>
            <p v-if="noResult && text !== undefined && text !== null">Aucun résultat ne correspond à votre recherche.</p>
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
    </main>
    <infoPlan></infoPlan>
    <Footer></Footer>
  </div>
</template>

<script>
    import Header from "@/components/Header";
    import Breadcrumbs from "@/components/Breadcrumbs";
    import Footer from "@/components/Footer";
    import ResultSection from "@/components/ResultSection";
    import aidService from '../services/aidService';
    import infoPlan from "@/components/planDeRelance";

    export default {
         name: "Search",

      components: { Header, Breadcrumbs, ResultSection, Footer, infoPlan },

      data() {
          return {
              title: "France Relance : rechercher un financement - Ministère de la Transformation et de la Fonction publiques",
              description: "Rechercher un financement dans le cadre du volet « Mise à niveau numérique de l'État et des territoires » du plan de relance",
              previewImg: require('@/assets/Preview.png'),
              results: "",
              newResearch: '',
              text: '',
              noResult: false,
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

        trackMyPage() {
            this.$smartTag.sendPage({
                name: 'search',
                level2: '4',
            })
          },

        setTitle(results) {
          if(results.length == 0 && this.text == null) {
            this.title = `Rechercher un financement : Aucun résultat car absence de terme de recherche – France Relance – Ministère de la Transformation et de la Fonction publiques`;
          } else if (results.length == 0) {
            this.title = `Rechercher un financement : Aucun résultat pour « ${this.text} » – France Relance – Ministère de la Transformation et de la Fonction publiques`;
            this.noResult = true;
          } else if (results.length == 1)  {
            this.title = `Rechercher un financement : ${results.length} résultat pour « ${this.text} » – France Relance – Ministère de la Transformation et de la Fonction publiques`;
            this.noResult = false;
          } else {
            this.title = `Rechercher un financement : ${results.length} résultats pour « ${this.text} » – France Relance – Ministère de la Transformation et de la Fonction publiques`;
            this.noResult = false;
          }
        },

        Search(newResearch) {
            this.results = "";  
            if(newResearch.trim() == "") {
              this.text = null;
              this.$router.push({query: {q: null}})
              this.setTitle(this.results);
            } else {
              this.text = newResearch.trim();
              aidService.fetchAidList(`text=${newResearch.trim()}`)
                .then(response => {
                    this.results = response.data.results;
                  })
                .then(() => {
                  this.setTitle(this.results);
                })
            this.$router.push({query: {q: newResearch.trim()}})  
            }      
        },

      },

      mounted() {

          this.trackMyPage()
          
          if(this.$route.query.q == null) {
            this.text = null;
            this.setTitle(this.results);
          } else {
            aidService.fetchAidList(`text=${this.$route.query.q}`)
              .then(response => {
                this.results = response.data.results;
                this.text = this.$route.query.q;
                this.newResearch = this.$route.query.q;
              })
              .then(() => {
                this.setTitle(this.results);
              })
          }
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
