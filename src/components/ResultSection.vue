<template>
    <div class="resultsection mt-5">
          <h2 class="text-left font22 mt-5"><strong>Dans le cadre de votre projet, vous souhaitez :</strong></h2>
          <slot></slot>
              <div class="container-fluid row mt-5">
                <!-- <div class="container-fluid row mt-5" v-for="aide in aides" :key="aide.id" > -->
                    <!-- <div class="col-sm-4 mb-4">
                        <router-link to="/Aides/aide.id">
                            <div class="col-sm bgGrey p-4 justify-content-start">
                                <h3 class="mb-5 text-left col-sm"><strong><a href="" class="text-reset font16">{{ aide.name }}</a></strong></h3>
                                <div class="rf-grid-row align-items-center">
                                    <p class="m-0 moreInfos text-left font14">Obtenir des informations</p>
                                    <img src="@/assets/picto/Fleche.svg" alt="" aria-hidden="true" class="ml-2">
                                </div>
                            </div>
                        </router-link>
                    </div> -->
                    <div class="col-sm-4 mb-4">
                        <router-link to="/Aides/Soutenir le développement rural - programme LEADER/41359">
                            <div class="col-sm bgGrey p-4 justify-content-start">
                                <h3 class="mb-5 text-left col-sm"><strong><a href="#" class="text-reset font16">Développer la dématérialisation de qualité des services aux usagers</a></strong></h3>
                                <div class="rf-grid-row align-items-center">
                                    <p class="m-0 moreInfos text-left font14">Obtenir des informations</p>
                                    <img src="@/assets/picto/Fleche.svg" alt="" aria-hidden="true" class="ml-2">
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="col-sm-4 mb-4">
                        <router-link to="/Aides/41359">
                            <div class="col-sm bgGrey p-4">
                                <h3 class="mb-5 text-left col-sm"><strong><a href="#" class="text-reset font16">Développer la dématérialisation de qualité des services aux usagers</a></strong></h3>
                                <div class="rf-grid-row align-items-center">
                                    <p class="m-0 moreInfos text-left font14">Obtenir des informations</p>
                                    <img src="@/assets/picto/Fleche.svg" alt="" aria-hidden="true" class="ml-2">
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="col-sm-4 mb-4">
                        <router-link to="/Aides/41359">
                            <div class="col-sm bgGrey p-4">
                                <h3 class="mb-5 text-left col-sm"><strong><a href="#" class="text-reset font16">Développer la dématérialisation de qualité des services aux usagers</a></strong></h3>
                                <div class="rf-grid-row align-items-center">
                                    <p class="m-0 moreInfos text-left font14">Obtenir des informations</p>
                                    <img src="@/assets/picto/Fleche.svg" alt="" aria-hidden="true" class="ml-2">
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="col-sm-4 mb-4">
                        <router-link to="/Aides/41359">
                            <div class="col-sm bgGrey p-4">
                                <h3 class="mb-5 text-left col-sm"><strong><a href="#" class="text-reset font16">Développer la dématérialisation de qualité des services aux usagers</a></strong></h3>
                                <div class="rf-grid-row align-items-center">
                                    <p class="m-0 moreInfos text-left font14">Obtenir des informations</p>
                                    <img src="@/assets/picto/Fleche.svg" alt="" aria-hidden="true" class="ml-2">
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="col-sm-4 mb-4">
                        <router-link to="/Aides/41359">
                            <div class="col-sm bgGrey p-4">
                                <h3 class="mb-5 text-left col-sm"><strong><a href="#" class="text-reset font16">Développer la dématérialisation de qualité des services aux usagers</a></strong></h3>
                                <div class="rf-grid-row align-items-center">
                                    <p class="m-0 moreInfos text-left font14">Obtenir des informations</p>
                                    <img src="@/assets/picto/Fleche.svg" alt="" aria-hidden="true" class="ml-2">
                                </div>
                            </div>
                        </router-link>
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

    a {
        text-decoration: none !important;
        box-shadow: none;
    }

    .font16 {
        font-size: 16px;
    }

    .font14 {
        font-size: 14px;
    }

</style>