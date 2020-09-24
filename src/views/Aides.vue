<template>
    <div class="aides">

        <Header></Header>

        <div class="rf-grid-row rf-grid-row--center">

            <div class="rf-col-7" v-if="aide">

                    <div class="intro mb-5 col-sm">
                        <div class="row align-items-center mb-4">
                            <div class="col-sm-1 mr-5"><img src="@/assets/FranceRelance.png" alt="Logo France Relance" width="100px"></div>
                            <h1 class="greenTitle text-left col-sm"><strong>{{ aide.short_title }}</strong></h1>
                        </div>
                        <p class="text-left h3 mb-5">{{ aide.name }}</p>
                    </div>

                    <div class="description text-left my-5 pt-4 col-sm">
                        <h2 class="mb-3 fontBlack"><strong>Description</strong></h2>
                        <div v-html="aide.description" class=""></div>
                    </div>

                    <div class="conditions text-left my-5 pt-4 col-sm">
                        <h2 class="mb-4 fontBlack"><strong>Conditions</strong></h2>
                        <div v-html="aide.eligibility" class=""></div> 
                    </div>

                    <div class="exemples text-left my-5 pt-4 col-sm">
                        <h2 class="mb-4 fontBlack"><strong>Exemples d'applications</strong></h2>
                        <div>
                            <div v-html="aide.project_examples">À titre d'exemple, les thématiques suivantes pourront être explorées :</div>
                        </div>
                    </div>

                    <div class="candidater text-left my-5 pt-4 col-sm">
                        <h2 class="mb-4 fontBlack"><strong>Candidater</strong></h2>
                        <div v-html="aide.contact"></div>
                        <div class="buttonCandidater p-3 mt-3 col-sm-5 text-center"><a :href="aide.application_url" class="text-reset">Candidater à cet appel à projet</a></div>
                    </div>

            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "@/components/Header";
    import Footer from "@/components/Footer";

    export default {
        name: "Aides",

        components: { Header, Footer },

        data() {
            return {
                aide: null,
                title: "",
                description: "",
                previewImg: require('@/assets/Preview.png'),
            }
        },

        mounted() {
            const axios = require("axios");
            axios.get(`https://staging.aides-territoires.beta.gouv.fr/api/aids/${this.$route.params.slug}/`)
            .then(response => {
                 this.aide = response.data;
                 this.title = response.data.short_title + " - Ministère de la Transformation et de la Fonction publiques";
                 this.description = response.data.name;
            })
        },

        metaInfo() {
          return {
            title: this.title,
            meta: [
              {
                name: "description",
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
    }
</script>

<style>

    .fontBlack {
        color: #000;
    }

    .buttonCandidater {
        background-color: #18936a;
        color: #fff;
        border: none;
    }

    .buttonCandidater:active {
        background-color: #18936a;
        color: #fff !important;
        border: none;
    }

    p {
        font-size: 20px;
    }
</style>
