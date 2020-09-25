<template>

        <div class="rf-grid-row">
          <div class="rf-col">
            <h2 class="rf-h4">Rechercher un financement :</h2><br/>
            <slot></slot>
          </div>
        </div>

        <!--div class="rf-grid-row rf-grid-row--center">
          <div class="rf-col-8">
            <form action="#">

                <input v-model="recherche" type="search" class="form-control" placeholder="Rechercher un mot clé, une expression, une référence..." >
                  <router-link :to="`/Recherche/${recherche}`">
                    <button class="" >Rechercher</button>
                  </router-link>

           </form>
        </div>   
      </div-->
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

#search-input .rf-input {
  box-shadow: inset 0 -2px 0 0 #107449;
  
}
#search-input button.rf-btn { 
background-color: #107449;  
}

</style>