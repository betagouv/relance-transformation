<template>
    <header class="rf-header rf-margin-bottom-5N">
        <div class="rf-container">
            <!-- <div class="rf-header__body">
                <div class="rf-header__brand">
                    <a class="rf-logo" href="./">
                        <span class="rf-logo__title">Ministère
                            <br>de la transformation
                            <br>et de la fonction
                            <br>publiques</span>
                    </a>
                </div>
            </div> -->
            <a class="rf-logo--custom" href="./">
              <img class="rf-logo__image--custom" src="@/assets/MarqueMTFP.svg" alt="Ministère de la Transformation et de la Fonction publiques. Liberté Égalité Fraternit. - Retour à l'accueil">
            </a>
            <div class="rf-header__navbar">
                <nav class="rf-nav" role="navigation" aria-label="Menu principal" id="header-navigation">
                    <ul class="rf-nav__list">
                        <li class="rf-nav__item">
                            <button class="rf-btn rf-btn--cutom" aria-expanded="false" aria-controls="rf-nav-item-0">La
                                ministre</button>
                            <div class="rf-menu" id="rf-nav-item-0">
                                <ul class="rf-menu__list">
                                    <li class="rf-menu__item"><a class="rf-link" href="#" target="_self">Actualités</a>
                                    </li>
                                    <li class="rf-menu__item"><a class="rf-link" href="#" target="_self">Agenda</a></li>
                                    <li class="rf-menu__item"><a class="rf-link" href="#" target="_self">Biographie</a>
                                    </li>
                                    <li class="rf-menu__item"><a class="rf-link" href="#" target="_self">Cabinet</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="rf-nav__item">
                            <button class="rf-btn rf-btn--cutom" aria-expanded="false" aria-controls="rf-nav-item-1">Le
                                ministère</button>
                            <div class="rf-menu" id="rf-nav-item-1">
                                <ul class="rf-menu__list">
                                    <li class="rf-menu__item"><a class="rf-link" href="#" target="_self">Missions</a>
                                    </li>
                                    <li class="rf-menu__item"><a class="rf-link" href="#" target="_self">Direction</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="rf-nav__item"><a class="rf-link" href="#" target="_self">Espace presse</a></li>
                        <li class="rf-nav__item rf-nav__item--active"><a class=" rf-link" href="#" target="_self">
                            France Relance</a></li>
                    </ul>
                </nav>
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
    margin: 30px 30px 30px 0px;
  }

  .rf-btn--cutom {
    padding: 16px 16px 16px 12px !important;
  }

  .rf-nav__item {
    margin: 0 12px 0 0px !important;
  }

  .rf-link {
    margin: 0 -4px 0 -4px !important;
  }

</style>
