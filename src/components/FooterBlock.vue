<template>
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
                                <p class="rf-footer__content-desc-entity-name">
                                    Direction Générale de l’Administration et de la Fonction Publique (DGAFP)
                                </p>
                                <a href="https://www.fonction-publique.gouv.fr/" target="_blank" title="fonction-publique.gouv.fr - nouvelle fenêtre">
                                    fonction-publique.gouv.fr
                                </a>
                            </div>
                            <div class="rf-footer__content-desc-column">
                                <p>
                                    Direction Interministérielle du Numérique (DINUM)
                                </p>
                                <a href="https://www.numerique.gouv.fr/" target="_blank" title="numerique.gouv.fr - nouvelle fenêtre">
                                    numerique.gouv.fr
                                </a>
                            </div>
                            <div class="rf-footer__content-desc-column">
                                <p>
                                    Direction Interministérielle de la Transformation Publique (DITP)
                                </p>
                                <a href="https://www.modernisation.gouv.fr/" target="_blank" title="modernisation.gouv.fr - nouvelle fenêtre">
                                    modernisation.gouv.fr
                                </a>
                            </div>
                        </div>
                        <ul class="rf-footer__content-links">
                            <li>
                                <a href="https://www.elysee.fr" target="_blank" title="élysée.fr - nouvelle fenêtre">elysee.fr</a>
                            </li>
                            <li>
                                <a href="https://legifrance.gouv.fr" target="_blank" title="légifrance.gouv.fr - nouvelle fenêtre">legifrance.gouv.fr</a>
                            </li>
                            <li>
                                <a href="https://gouvernement.fr" target="_blank" title="gouvernement.fr - nouvelle fenêtre">gouvernement.fr</a>
                            </li>
                            <li>
                                <a href="https://service-public.fr" target="_blank" title="service-public.fr - nouvelle fenêtre">service-public.fr</a>
                            </li>
                            <li>
                                <a href="https://data.gouv.fr" target="_blank" title="data.gouv.fr - nouvelle fenêtre">data.gouv.fr</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="rf-footer__bottom">
                    <ul class="rf-footer__bottom-list">
                        <li>
                            <a href="https://www.transformation.gouv.fr/donnees-personnelles">Données personnelles et cookies</a>
                        </li>
                        <li>
                            <a href="https://www.transformation.gouv.fr/espace-presse/contact-presse">Contact presse</a>
                        </li>
                        <li>
                            <a href="https://www.transformation.gouv.fr/mentions-legales">Mentions légales</a>
                        </li>
                        <li>
                            <a href="https://www.transformation.gouv.fr/accessibilite">Accessibilité : partiellement conforme</a>
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
        name: "FooterBlock",
    }
</script>

<style>

    footer a {
        box-shadow: none;
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
        justify-content: space-between;
    }

    .rf-footer__content-desc-column p {
        font-size: 0.875rem;
        margin: 0;
    }

    .rf-footer__content-desc-column a {
        font-weight: 700;
        padding-bottom: 6px;
        position: initial;
        box-shadow: none;
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
    .rf-footer__content-links li {
        margin-right: 1.5rem;
    }
    .rf-footer__content-links li a {
        display: inline;
        box-shadow: none;
    }

</style>
