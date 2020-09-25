<template>
    <div class="rf-grid-row rf-grid-row--top">
        <div class="rf-col-xs-12 rf-col-md-1 rf-col-lg-1 rf-col-xl-1">
            <img class="intro-france-relance-logo" src="@/assets/FranceRelance.png" alt="France Relance">
        </div>
        <div class="rf-col text">
            <div>
                <h1 class="rf-h2">Administrations : bénéficiez du volet «&nbsp;Mise à niveau numérique de l'État et des territoires&nbsp;»</h1>
            </div>
            <div class="rf-grid-row subtitle">
                <div class="rf-col-md-8 rf-col-sm-7 rf-col-xs-12 rf-margin-bottom-1N">
                    <p class="rf-text--lg">Votre projet doit contribuer à la relance de l'économie française, notamment des entreprises, et doit produire des résultats concrets sous 18 mois.</p>
                </div>
                <div class="rf-col-md-3 rf-col-sm-4 rf-col-xs-12">
                    <div class="thumbs">
                        <router-link :to="`/le-mot-d-amelie-de-montchalin/`">
                            <img src="@/assets/FausseVideo.png" alt="Voir la vidéo d'Amélie de Montchalin"/>
                        </router-link>
                        <p class="rf-text--xs">Le mot d'Amélie de Montchalin</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "IntroSection",
    }
</script>

<style>

    .subtitle p {
        margin-top: 0;
    }

    .intro-france-relance-logo {
        width: 80px;
    }

    .text {
        padding-left: 32px !important;
    }

    .text h1 {
        color: #107449;
        margin-top:0;
        font-size: 2rem;
    }

    .subtitle {
        justify-content: space-between;
    }

    .subtitle img {
        max-width: 182px;
    }

    @media screen and (max-width: 767px) {

        .intro-france-relance-logo {
            width: 64px;
        }

        .text {
            padding-left: 0px !important;
            padding-top: 16px;
        }

        .thumbs {
            text-align: center;
        }
    }

</style>
