<template>
    <div class="rf-grid-row rf-grid-row--top">
        <div class="rf-col-xs-12 rf-col-md-1 rf-col-lg-1 rf-col-xl-1">
            <img src="@/assets/FranceRelance.png" alt="France Relance" width="80px">
        </div>
        <div class="rf-col text">
            <div>
                <h1 class="greenTitle rf-h2">Administrations : bénéficiez du volet « Mise à niveau numérique de l'État et des territoires »</h1>
            </div>
            <div class="rf-grid-row subtitle">
                <div class="rf-col-sm-8 rf-col-xs-12">
                    <p class="rf-text--lead">Votre projet doit contribuer à la relance de l'économie française, notamment des entreprises, et doit produire des résultats concrets sous 18 mois.</p>
                </div>
                <div class="rf-col-sm-3 rf-col-xs-12 rf-margin-top-1N">
                    <div class="thumbs">
                        <a href="" class="rf-col"><img src="@/assets/PhotoAmelieDeMontchalin.png" alt="la vidéo d'Amélie de Montchalin" width="182px"/></a>
                        <p class="fontGrey rf-text--xs">Le mot d'Amélie de Montchalin</p>
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

    div.rf-grid-row--top div {
        text-align: center;
    }

    div.rf-grid-row div.rf-col div {
        text-align: left;
    }

    div.rf-grid-row .rf-col-xs-12 .thumbs {
        text-align: center;
    }

    .greenTitle {
        color: #107449;
        margin-top:0;
        font-size: 2rem;
    }

    .fontGrey {
        color: #6A6A6A;
        font-size: 0.8rem;
    }

    p {
        font-size: 1.2rem;
        margin-top: 0;
    }

    .text {
        padding-left: 24px !important;
    }

    .subtitle {
        justify-content: space-between;
    }

</style>
