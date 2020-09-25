<template>
  <div class="rf-grid-row">
    <div class="rf-col">
      <h2 class="rf-h4">Rechercher un financement :</h2>
      <form>
        <div class="rf-search-bar rf-search-bar--lg" id="search-input--lg">
          <label class="rf-label" for="search-input--lg-input">Label de la barre de recherche</label>
          <input class="rf-input" placeholder="Rechercher un mot, une expression, une référence…" type="search" id="search-input--lg-input" name="search-input--lg-input">
          <router-link :to="`/Recherche/${recherche}`">
            <button class="rf-btn rf-btn--lg" title="Rechercher">
              <span>Rechercher</span>
            </button>
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SearchBar",

    }
</script>

<style>

  .greenButton {
    background-color:           #107449;
    color:                      #fff;
  }

  .formresearch {
    background-color:           #F0F0F0;
    color:                      #6A6A6A; 
    border:                     none;
  }

  .border-bottom-green {
    border-bottom:              2px solid #107449;
  }

  #search-input--lg .rf-input {
    box-shadow: inset 0 -2px 0 0 #107449;
  }
  #search-input--lg button.rf-btn { 
    background-color: #107449;    
  }
</style>