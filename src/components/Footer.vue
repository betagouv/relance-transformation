<template>
    <footer class="rf-footer  rf-margin-top-5N" role="contentinfo" id="">
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
                            <p class="rf-footer__content-desc-entity-name">
                                Direction Générale de l’Administration et de la Fonction Publique (DGAFP)
                            </p>
                            <a href="https://www.fonction-publique.gouv.fr/">
                                fonction-publique.gouv.fr
                            </a>
                        </div>
                        <div class="rf-footer__content-desc-column">
                            <p>
                                Direction Interministérielle du Numérique (DINUM)
                            </p>
                            <a href="https://www.numerique.gouv.fr/">
                                numerique.gouv.fr
                            </a>
                        </div>
                        <div class="rf-footer__content-desc-column">
                            <p>
                                Direction Interministérielle de la Transformation Publique (DITP)
                            </p>
                            <a href="https://www.modernisation.gouv.fr/">
                                modernisation.gouv.fr
                            </a>
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
</template>

<script>
    export default {
        name: "Footer",

    }
</script>

<style>

    .rf-footer__content-desc {
        display: flex;
        flex-wrap: wrap;
    }

    .rf-footer__content-desc-column {
        flex-basis: 28%;
        min-width: 180px;
        margin-right: 32px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .rf-footer__content-desc-column p {
        font-size: 0.875rem;
    }

    .rf-footer__content-desc-column a {
        font-weight: 700;
    }

</style>
