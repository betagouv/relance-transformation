<template>
    <div class="resultsection mt-5">
          <h2 class="text-left h3 mt-5"><strong>Dans le cadre de votre projet, vous souhaitez :</strong></h2>
          <slot></slot>
              <div class="container-fluid row mt-5">
                <!-- <div class="container-fluid row mt-5" v-for="aide in aides" :key="aide.id" > -->
                    <!-- <div class="col-sm-4 mb-4">
                        <div class="col-sm bgGrey p-4 justify-content-start">
                            <p class="mb-5 text-left col-sm"><strong>{{ aide.name }}</strong></p>
                            <button class="moreInfos text-left col-sm" @click="goToAide(aide.id)">Obtenir des informations →</button>
                        </div>
                    </div> -->
                    <div class="col-sm-4 mb-4">
                        <div class="col-sm bgGrey p-4 justify-content-start">
                            <p class="mb-5 text-left col-sm"><strong>Développer la dématérialisation de qualité des services aux usagers</strong></p>
                            <button class="moreInfos text-left col-sm">Obtenir des informations →</button>
                        </div>
                    </div>
                    <div class="col-sm-4 mb-4">
                        <div class="col-sm bgGrey p-4">
                            <p class="mb-5 text-left col-sm"><strong>Développer la dématérialisation de qualité des services aux usagers</strong></p>
                            <button class="moreInfos text-left col-sm">Obtenir des informations →</button>
                        </div>
                    </div>
                    <div class="col-sm-4 mb-4">
                        <div class="col-sm bgGrey p-4">
                            <p class="mb-5 text-left col-sm"><strong>Développer la dématérialisation de qualité des services aux usagers</strong></p>
                            <button class="moreInfos text-left col-sm">Obtenir des informations →</button>
                        </div>
                    </div>
                    <div class="col-sm-4 mb-4">
                        <div class="col-sm bgGrey p-4">
                            <p class="mb-5 text-left col-sm"><strong>Développer la dématérialisation de qualité des services aux usagers</strong></p>
                            <button class="moreInfos text-left col-sm">Obtenir des informations →</button>
                        </div>
                    </div>
                    <div class="col-sm-4 mb-4">
                        <div class="col-sm bgGrey p-4">
                            <p class="mb-5 text-left col-sm"><strong>Développer la dématérialisation de qualité des services aux usagers</strong></p>
                            <button class="moreInfos text-left col-sm">Obtenir des informations →</button>
                        </div>
                    </div>
            </div>
              
    </div>
</template>

<script>
    export default {
        name: "ResultSection"

    }
</script>

<style>

    .bgGrey {
        background-color: #f7f5f5;
        color: #2c3e50;
    }

    .moreInfos {
        color: #408669;
        background-color: inherit;
        border: none;
    }

</style>