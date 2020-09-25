<template>
    <div class="aides">

        <Header></Header>

        <Breadcrumbs :current_page_title="title"></Breadcrumbs>

        <div class="rf-container">
            <div class="rf-grid-row rf-grid-row--center">
                <div class="rf-col-md-10 rf-col-lg-8" v-if="aide">

                        <div class="">
                            <div class="aide-title">
                                <img src="@/assets/FranceRelance.png" alt="Logo France Relance">
                                <h1 class="">{{ aide.short_title }} mais qui peut aussi être long</h1>
                            </div>
                            <p class="">{{ aide.name }}</p>
                        </div>

                        <div class="">
                            <h2 class="">Description</h2>
                            <div v-html="aide.description" class=""></div>
                        </div>

                        <div class="">
                            <h2 class="">Conditions</h2>
                            <div v-html="aide.eligibility" class=""></div>
                        </div>

                        <div class="">
                            <h2 class="">Exemples d'applications</h2>
                            <div>
                                <div v-html="aide.project_examples">À titre d'exemple, les thématiques suivantes pourront être explorées :</div>
                            </div>
                        </div>

                        <div class="">
                            <h2 class="">Candidater</h2>
                            <div v-html="aide.contact"></div>
                            <div class=""><a :href="aide.application_url" class="text-reset">Candidater à cet appel à projet</a></div>
                        </div>

                </div>
            </div>
        </div>

        <Footer></Footer>
    </div>
</template>

<script>
    import aidService from '../services/aidService'
    import Breadcrumbs from "@/components/Breadcrumbs";
    import Footer from "@/components/Footer";
    import Header from "@/components/Header";

    export default {
        name: "Aides",

        components: { Header, Breadcrumbs, Footer },

        data() {
            return {
                aide: null,
                title: "",
                meta_title: "",
                description: "",
                previewImg: require('@/assets/Preview.png'),
            }
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

    .aide-title {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
    }

    .aide-title h1 {
        color: #107449;
        margin-top: 0;
    }

    .aide-title img {
        height: 120px;
        margin-right: 32px;
    }

    @media screen and (max-width: 767px) {

        .aide-title {
            display: inline-block;
        }

        .aide-title h1 {
            margin-top: 8px;;
            font-size: 2.5rem;
        }

        .aide-title img {
            height: 64px;
            margin-right: 0px;
        }
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
