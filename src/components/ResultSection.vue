<template>
    <div class="resultsection mt-5">
          <h2 class="text-left h3 mt-5"><strong>Dans le cadre de votre projet, vous souhaitez :</strong></h2>
          <slot></slot>
              <div class="row" >
                <!-- <div class="row" v-for="aide in aides" :key="aide.id" > -->
                    <!-- <div class="col-sm-4 mb-4">
                        <div class="col-sm bgGrey p-4">
                            <p class="mb-5 text-left"><strong>{{ aide.name }}</strong></p>
                            <button class="moreInfos text-left" @click="goToAide(aide.id)">Obtenir des informations →</button>
                        </div>
                    </div> -->
                    <div class="col-sm-4 mb-4">
                        <div class="col-sm bgGrey p-4">
                            <p class="mb-5 text-left"><strong>Développer la dématérialisation de qualité des services aux usagers</strong></p>
                            <button class="moreInfos text-left">Obtenir des informations →</button>
                        </div>
                    </div>
                    <div class="col-sm-4 mb-4">
                        <div class="col-sm bgGrey p-4">
                            <p class="mb-5 text-left"><strong>Développer la dématérialisation de qualité des services aux usagers</strong></p>
                            <button class="moreInfos text-left">Obtenir des informations →</button>
                        </div>
                    </div>
                    <div class="col-sm-4 mb-4">
                        <div class="col-sm bgGrey p-4">
                            <p class="mb-5 text-left"><strong>Développer la dématérialisation de qualité des services aux usagers</strong></p>
                            <button class="moreInfos text-left">Obtenir des informations →</button>
                        </div>
                    </div>
                    <div class="col-sm-4 mb-4">
                        <div class="col-sm bgGrey p-4">
                            <p class="mb-5 text-left"><strong>Développer la dématérialisation de qualité des services aux usagers</strong></p>
                            <button class="moreInfos text-left">Obtenir des informations →</button>
                        </div>
                    </div>
                    <div class="col-sm-4 mb-4">
                        <div class="col-sm bgGrey p-4">
                            <p class="mb-5 text-left"><strong>Développer la dématérialisation de qualité des services aux usagers</strong></p>
                            <button class="moreInfos text-left">Obtenir des informations →</button>
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