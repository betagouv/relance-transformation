<template>
    <div class="searchbar mb-5 mt-5">
          <h2 class="text-left h3 mb-4"><strong>Rechercher un financement :</strong></h2>
            <form action="" class="row m-1">
                <div class="input-group mb-3">
                  <input type="search" class="form-control border-bottom-green" placeholder="Rechercher un mot clé, une expression, une référence..." aria-describedby="basic-addon2">
                  <div class="input-group-append">
                    <button class="btn my-2 greenButton my-sm-0 input-group-text" type="submit">Rechercher</button>
                  </div>
                </div>
            </form>          
      </div>
</template>

<script>
    export default {
        name: "SearchBar",

    }
</script>

<style>

  .greenButton {
    background-color: #408669;
    color: #fff;
  }

  .bgInherit {
    background-color: inherit;
    color: grey; 
    border: none;
  }

  .border-bottom-green {
    border-bottom: 2px solid #408669;
  }

</style>