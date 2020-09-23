<template>
    <div class="searchbar rf-grid-row my-5">
        <div class="rf-col-11">
            <h2 class="font22 text-left mb-4"><strong>Rechercher un financement :</strong></h2>
        </div>
        <form action="" class="rf-col-11">
            <div class="input-group mb-3">
              <input type="search" class="form-control border-bottom-green formresearch p-4" placeholder="Rechercher un mot clé, une expression, une référence..." aria-describedby="basic-addon2">
              <div class="input-group-append">
                <button class="font20 btn my-2 greenButton my-sm-0 input-group-text pl-4 pr-4" type="submit">Rechercher</button>
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

  .font22 {
    font-size: 22px;
  }

  .font20 {
    font-size: 20px;
  }

</style>