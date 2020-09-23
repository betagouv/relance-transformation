<template>
  <div class="recherche">
    
    <Header></Header>
    
    <div class="rf-grid-row rf-grid-row--center">
      <div class="rf-col-8">
      
        <div class="rf-grid-row rf-grid-row--center align-items-center">
                <img src="@/assets/FranceRelance.png" alt="Logo France Relance" class="rf-col-2 mr-5 pt-4" width="110px" >
            <div class="rf-col-9 mt-3">
                <h1 class="greenTitle font48 pl-2"><strong>Rechercher un financement</strong></h1>
            </div>

            <form action="" class="searchBar rf-col-11 my-4">
                <div class="input-group mb-3">
                <input type="search" class="form-control border-bottom-green formresearch p-4" placeholder="Rechercher un mot clé, une expression, une référence..." aria-describedby="basic-addon2">
                <div class="input-group-append">
                    <button class="font20 btn my-2 greenButton my-sm-0 input-group-text pl-4 pr-4" type="submit">Rechercher</button>
                </div>
                </div>
            </form>   
        
        </div>

      </div>
    </div>
  
    <Footer></Footer>
  </div>
</template>

<script>
    import Header from "@/components/Header";
    import Footer from "@/components/Footer";
    import SearchBar from "@/components/SearchBar";

    export default {
         name: "Video",

      components: { Header, SearchBar, Footer, },

    }
</script>

<style>

    .font48 {
        font-size: 48px;
    }

</style>