<template>
    <div class="aides">

        <Header></Header>

        <main class="rf-container" id="main">

            <div class="rf-grid-row rf-grid-row--center">
                <div class="rf-col-md-8" v-if="aide">
                    <Breadcrumbs :dynamic_page_title="title"></Breadcrumbs>

                        <div class="aides-intro">
                            <a href="/" class="rf-link rf-fi-arrow-left-line rf-link--icon-left rf-mb-2w">Retour</a>
                            <div class="aides-title">
                                <img src="@/assets/FranceRelance.png" alt="France Relance" />
                                <h1>{{ aide.name }}</h1>
                            </div>
                            <p class="rf-text--lg"><strong>{{ aide.short_title }}</strong></p>
                        </div>

                        <div class="rf-margin-top-8N">
                            <h2>Description</h2>
                            <div v-html="aide.description" class="rf-text"></div>
                        </div>

                        <div class="rf-margin-top-8N">
                            <h2>Conditions</h2>
                            <div v-html="aide.eligibility" class="rf-text"></div>
                        </div>

                        <div class="rf-margin-top-8N">
                            <h2>Exemples de projets attendus</h2>
                            <div>
                                <div v-html="aide.project_examples" class="rf-text">À titre d’exemple, les thématiques suivantes pourront être explorées :</div>
                            </div>
                        </div>

                        <div class="rf-margin-top-8N">
                            <h2>Candidater</h2>
                            <div v-html="aide.contact"></div>
                            <div class="rf-grid-row rf-grid-row--center  rf-grid-row--gutters" >
                                <div class="rf-col-sm-6" v-if="aide.application_url">
                                    <a :href="aide.application_url" title="Candidater à cet appel à projet - Nouvelle fenêtre" target="_blank" class="rf-btn candidate-button rf-text">Candidater à cet appel à projet</a>
                                </div>
                                <div class="rf-col-sm-6" v-if="aide.origin_url">
                                    <a :href="aide.origin_url" title="Télécharger la fiche détaillée - Nouvelle fenêtre" target="_blank" class="rf-btn rf-btn--secondary candidate-button-secondary rf-text" download="download">Télécharger la fiche détaillée</a>
                                </div>
                            </div>
                        </div>

                </div>
            </div>
        </main>
        <div class="rf-grid-col rf-grid-col--center infoPlan">
            <infoPlan></infoPlan>
        </div>    
        <Footer></Footer>
    </div>
</template>

<script>
    import aidService from '../services/aidService'
    import Breadcrumbs from "@/components/Breadcrumbs";
    import Footer from "@/components/Footer";
    import Header from "@/components/Header";
    import infoPlanEtat from "@/components/planDeRelanceEtat";
    import infoPlan from "@/components/planDeRelance";

    export default {
        name: "Aides",

        components: { Header, Breadcrumbs, Footer, infoPlanEtat, infoPlan },

        data() {
            return {
                aide: null,
                title: "",
                meta_title: "",
                description: "",
                previewImg: require('@/assets/Preview.png'),
            }
        },

        methods: {
            trackMyPage() {
                this.$smartTag.sendPage({
                    name: 'DetailAide',
                    level2: '4',
                })
            },
        },

        created() {
            aidService.fetchAidDetail(this.$route.params.slug)
                .then(aidDetail => {
                    this.aide = aidDetail
                    this.title = aidDetail.short_title;
                    this.meta_title = this.title + " - Ministère de la Transformation et de la Fonction publiques"
                    this.description = aidDetail.name;
            })
        },

        mounted() {
            this.trackMyPage()
        },

        metaInfo() {
          return {
            title: this.meta_title,
            meta: [
              {
                name: "description",
                content: this.description
              },
              {
                property: 'og:title',
                content: this.meta_title
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
                content: this.meta_title
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
    }
</script>

<style>

    ol, ul {
      margin-left: 1.5rem;
    }
    .aide a {
      box-shadow: none;
    }

    .aides-title {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
    }

    .aides-title h1 {
        margin-top: 0;
        margin-bottom: 8px;
    }

    .aides-title img {
        height: 120px;
        margin-right: 32px;
    }
    hr {
        border: 1px solid #000;
        margin: 1.25em 0;
    }
    @media screen and (min-width: 767px) {
        .aides-intro p {
            margin-left: 152px;;
        }
    }
    @media screen and (max-width: 767px) {
        .aides-title {
            display: inline-block;
        }

        .aides-title h1 {
            margin-top: 8px;
            font-size: 2.5rem;
        }

        .aides-title img {
            height: 48px;
            margin-right: 0px;
        }
    }

    .aides h2 {
        margin-bottom: 16px;
    }

    .candidate-button {
        margin-top: 16px;
    }
    .candidate-button-secondary {
        margin-top: 16px;
    }
    a.candidate-button-secondary[target=_blank]::after {
        display: none;
    }
    .infoPlan {
        text-align: center;
        margin-top: 3em;
        background-color: #f9F8F6;
        padding: 0.5em;
    }
</style>
