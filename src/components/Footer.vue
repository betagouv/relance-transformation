<template>
    <div>
        <div class="subfooter rf-margin-top-15N">
            <p class="rf-text">Ce site est conçu et édité en partenariat avec <a href="https://aides-territoires.beta.gouv.fr" target="_blank">Aides-Territoires</a></p>
            <a href="https://aides-territoires.beta.gouv.fr" target="_blank"><img src="@/assets/LogoAT.svg" alt="Aides-Territoires - Lien vers le site"></a>
        </div>
        <footer class="rf-footer" role="contentinfo" id="">
            <div class="rf-container">
                <div class="rf-footer__body">
                    <div class="rf-footer__brand">
                        <a class="rf-logo" href="./" >
                            <span class="rf-logo__title">Ministère
                                <br>de la transformation
                                <br>et de la fonction
                                <br>publiques</span>
                        </a>
                    </div>
                    <div class="rf-footer__content">
                        <div class="rf-footer__content-desc">
                            <div class="rf-footer__content-desc-column">
                                <a href="https://www.fonction-publique.gouv.fr/">
                                    fonction-publique.gouv.fr
                                </a>
                                <p class="rf-footer__content-desc-entity-name">
                                    Direction Générale de l’Administration et de la Fonction Publique (DGAFP)
                                </p>
                            </div>
                            <div class="rf-footer__content-desc-column">
                                <a href="https://www.numerique.gouv.fr/">
                                    numerique.gouv.fr
                                </a>
                                <p>
                                    Direction Interministérielle du Numérique (DINUM)
                                </p>
                            </div>
                            <div class="rf-footer__content-desc-column">
                                <a href="https://www.modernisation.gouv.fr/">
                                    modernisation.gouv.fr
                                </a>
                                <p>
                                    Direction Interministérielle de la Transformation Publique (DITP)
                                </p>
                            </div>
                        </div>
                        <ul class="rf-footer__content-links">
                            <li>
                                <a href="https://legifrance.gouv.fr">legifrance.gouv.fr</a>
                            </li>
                            <li>
                                <a href="https://gouvernement.fr">gouvernement.fr</a>
                            </li>
                            <li>
                                <a href="https://service-public.fr">service-public.fr</a>
                            </li>
                            <li>
                                <a href="https://data.gouv.fr">data.gouv.fr</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="rf-footer__bottom">
                    <ul class="rf-footer__bottom-list">
                        <li>
                            <a href="https://www.transformation.gouv.fr/donnees-personnelles">Données personelles et cookies</a>
                        </li>
                        <li>
                            <a href="https://www.transformation.gouv.fr/espace-presse/contact-presse">Contact presse</a>
                        </li>
                        <li>
                            <a href="https://www.transformation.gouv.fr/mentions-legales">Mentions légales</a>
                        </li>
                        <li>
                            <a href="https://www.transformation.gouv.fr/accessibilite">Accessibilité: non conforme</a>
                        </li>
                    </ul>
                    <div class="rf-footer__bottom-copy">
                        Ministère de la Transformation et de la Fonction publiques 2020
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "Footer",

    }
</script>

<style>

    .subfooter {
        background-color: #F9F8F6;
        text-align: left;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 12px 20px;
    }

    .subfooter p {
        display: inline-block;
        margin: 0;
    }

    .subfooter a {
        display: inline-block;
        margin: 0;
        color: #000091;
    }

    .subfooter a::after {
        display: none;
    }

    .subfooter img {
        display: inline-block;
        height: 40px;
        margin-left: 32px;
    }

    .rf-footer__content-desc {
        display: flex;
        flex-wrap: wrap;
        margin-top: -24px;
    }

    .rf-footer__content-desc-column {
        flex: 1 1 220px;
        margin-top: 24px;
        margin-right: 32px;
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .rf-footer__content-desc-column p {
        font-size: 0.875rem;
        margin: 0;
    }

    .rf-footer__content-desc-column a {
        font-weight: 700;
        padding-bottom: 6px;
        position: initial;
    }

    .rf-footer__content-desc-column a::after {
        position: absolute;
        content: "";
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .rf-footer__brand {
        align-items: flex-start;
    }

    .rf-footer__bottom-copy {
        max-width: 100%;
    }

</style>
