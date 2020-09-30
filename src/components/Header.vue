<template>
    <header class="rf-header">
        <div class="rf-container">
            <a href="https://www.transformation.gouv.fr/">
              <img class="rf-logo__image--custom" src="@/assets/MarqueMTFP.svg" alt="Ministère de la Transformation et de la Fonction publiques. Liberté Égalité Fraternité. - Retour à l'accueil">
            </a>
            <div class="rf-header__navbar">
                <nav class="rf-nav" role="navigation" aria-label="Menu principal" id="header-navigation">
                    <ul class="rf-nav__list">
                        <li class="rf-nav__item rf-nav__item--custom">
                            <button class="rf-btn rf-btn--cutom" aria-expanded="false" aria-controls="rf-nav-item-0">La
                                ministre</button>
                            <div class="rf-menu" id="rf-nav-item-0">
                                <ul class="rf-menu__list">
                                    <li class="rf-menu__item"><a class="rf-link" href="https://www.transformation.gouv.fr/la-ministre/actualite" target="_self">Actualités</a>
                                    </li>
                                    <li class="rf-menu__item"><a class="rf-link" href="https://www.transformation.gouv.fr/la-ministre/agenda-de-la-ministre" target="_self">Agenda</a></li>
                                    <li class="rf-menu__item"><a class="rf-link" href="https://www.transformation.gouv.fr/la-ministre/biographie" target="_self">Biographie</a>
                                    </li>
                                    <li class="rf-menu__item"><a class="rf-link" href="https://www.transformation.gouv.fr/la-ministre/biographie#cabinet-ministre" target="_self">Cabinet</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="rf-nav__item rf-nav__item--custom">
                            <button class="rf-btn rf-btn--cutom" aria-expanded="false" aria-controls="rf-nav-item-1">Le
                                ministère</button>
                            <div class="rf-menu" id="rf-nav-item-1">
                                <ul class="rf-menu__list">
                                    <li class="rf-menu__item"><a class="rf-link" href="https://www.transformation.gouv.fr/le-ministere/missions" target="_self">Missions</a>
                                    </li>
                                    <li class="rf-menu__item"><a class="rf-link" href="https://www.transformation.gouv.fr/le-ministere/directions" target="_self">Direction</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="rf-nav__item rf-nav__item--custom"><a class="rf-link rf-link--custom" href="https://www.transformation.gouv.fr/espace-presse" target="_self">Espace presse</a></li>
                        <li class="rf-nav__item rf-nav__item--custom rf-nav__item--active"><a class="rf-link rf-link--custom" href="#" target="_self">
                            France Relance</a></li>
                    </ul>
                </nav>
                
                <!--
                <div class="rf-nav__rs--custom">
                  <a href="https://www.facebook.com/AmeliedeMontchalin/" target="_blank">
                    <img class="rf-nav__rs-image--custom" src="@/assets/picto/facebook.svg" alt="Facebook de la ministre Amélie de Montchalin - nouvelle fenêtre">
                  </a>
                  <a href="https://twitter.com/AdeMontchalin" target="_blank">
                    <img class="rf-nav__rs-image--custom" src="@/assets/picto/twitter.svg" alt="Twitter de la ministre Amélie de Montchalin - nouvelle fenêtre">
                  </a>
                  <a href="https://www.instagram.com/amelie.demontchalin/?hl=fr" target="_blank">
                    <img class="rf-nav__rs-image--custom" src="@/assets/picto/instagram.svg" alt="Instagram de la ministre Amélie de Montchalin - nouvelle fenêtre">
                  </a>
                </div>
                -->
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header",

    }
</script>

<style>

  header .rf-header, header a {
    box-shadow: none;
  }

  .rf-nav__rs--custom {
    position: absolute;
    right: 2px;
    top: 19px;
  }

  .rf-header {
      box-shadow: none;
  }

  .rf-header .rf-nav {
    box-shadow: none;
    border-top: 1px solid #e7e7e7;
    border-bottom: 1px solid #e7e7e7;
    width: 100vw;
  }

  .rf-header__navbar {
    margin: 0px;
  }

  .rf-logo__image--custom {
    height: 158px;
    margin: 30px 30px 26px 0px;
  }

  .rf-nav__rs--custom a:not(:last-child) {
    margin-right: 20px;
  }

  .rf-nav__rs-image--custom {
    width: 20px;
    height: 20px;
  }

  .rf-nav__rs--custom a::after {
    display: none;
  }

  @media screen and (min-width: 768px) {

    .rf-btn--cutom {
      padding: 16px 16px 16px 12px !important;
    }

    .rf-nav__item--custom {
      margin: 0 12px 0 0px !important;
    }

    .rf-link--custom {
      margin: 0 -4px 0 -4px !important;
    }
  }

  @media screen and (max-width: 767px) {

    .rf-header {
      border-bottom: 1px solid #e7e7e7;
    }

    .rf-logo__image--custom {
      height: 79px;
      margin: 16px 16px 4px 0px;
    }

    .rf-container {
      padding: 0 16px;
    }

    .rf-nav__rs--custom {
      position: absolute;
      top: -28px;
    }

    .rf-header .rf-nav {
      border-top: none;
      border-bottom: none;
      width: auto;
    }

    .rf-header__navbar::after {
      background-color: white;
    }

    .rf-header__navbar .rf-fi-menu-fill {
      position: absolute;
      top: -90px;
      right: -8px;
    }
  }

</style>
