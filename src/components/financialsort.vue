<template>
  <div class="financial_sort col-sm mt-3">
        <div class="col-sm row p-5 unselected" :class="{selected:focus}">
            <div class="col-sm-2">
                <i class="fas fa-hand-holding-heart border border-success rounded-circle p-4 mr-4"></i>
            </div>
            <p class="h5 text-left col-sm ml-4"><strong>{{ title }}</strong></p>
        </div>
  </div>
</template>

<script>
    export default {
        name: "FinancialSort",

        props: {
            title: {
                type: String,
                required: true,
            },
            focus: {
                type: Boolean,
                required: true,
            }
        }
    }
</script>

<style>

    .selected {
        background-color: #29a571 !important; 
        color: #fff !important;
    }

    .unselected {
        background-color: whitesmoke;
        color: #757479;
    }

</style>