<template>
    <div class="aides">
        <div v-if="aide">

                <div class="intro mb-5 col-sm">
                    <div class="row align-items-center mb-4">
                        <div class="col-sm-1 mr-5"><img src="@/assets/FranceRelance.png" alt="Logo France Relance" width="100px"></div>
                        <h1 class="greenTitle text-left col-sm"><strong>{{ aide.name }}</strong></h1>
                    </div>
                    <p class="text-left h3 mb-5">Votre projet doit contribuer à la relance de l'économie française, notamment des entreprises, et doit produire des résultats concrets sous 18 mois.</p>
                </div>

                <div class="description text-left my-5 pt-4 col-sm">
                    <h2 class="mb-3 fontBlack"><strong>Description</strong></h2>
                    <div v-html="aide.description" class="h5"></div>
                </div>

                <div class="conditions text-left my-5 pt-4 col-sm">
                    <h2 class="mb-4 fontBlack"><strong>Conditions</strong></h2>
                    <div v-html="aide.eligibility" class="h5"></div> 
                </div>

                <div class="exemples text-left my-5 pt-4 col-sm">
                    <h2 class="mb-4 fontBlack"><strong>Exemples d'applications</strong></h2>
                    <div>
                        <p class="h5">À titre d'exemple, les thématiques suivantes pourront être explorées :</p>
                        <!-- <ul class="h5" v-repeat="aide.destinations">
                        <li> {{$value}} </li> 
                        </ul> -->
                    </div>
                </div>

                <div class="candidater text-left my-5 pt-4 col-sm">
                    <h2 class="mb-4 fontBlack"><strong>Candidater</strong></h2>
                    <p class="h5">L'appel à projet est ouvert aux DNUM ministérielles et aux laboratoires de recherche publics, il permet un cofinancement des projets jusqu'à 80% du coût complet du projet.</p>
                    <p class="h5 mt-3">L'appel à projet est continu, vous pouvez candidater dès que vous êtes prêts.</p>
                    <div class="buttonCandidater p-3 mt-3 col-sm-3"><a :href="aide.application_url" class="text-reset">Candidater à cet appel à projet</a></div>
                </div>

                <div class="questions text-left my-5 pt-4 col-sm">
                    <h2 class="mb-4 fontBlack"><strong>Vous avez une question ?</strong></h2>
                    <p class="h5 mb-4">Vous pouvez joindre l'équipe en charge de l'appel à projet à l'adresse : </p>
                    <div v-html="aide.contact" class="h5"></div>
                </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Aides",

        data() {
            return {
                aide: null,
            }
        },

        mounted() {
            const axios = require("axios");
            axios.get(`https://staging.aides-territoires.beta.gouv.fr/api/aids/${this.$route.params.id}/`)
            .then(response => {
                 this.aide = response.data;
            })
        },
    }
</script>

<style>
    .aides {
        margin: 10vh 10vw;
    }

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
</style>