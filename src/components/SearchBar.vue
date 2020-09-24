<template>
    <div class="searchbar rf-grid-row my-5">
        <div class="rf-col-11">
            <h2 class="font22 text-left mb-4"><strong>Rechercher un financement :</strong></h2>
        </div>
        <slot></slot>   
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