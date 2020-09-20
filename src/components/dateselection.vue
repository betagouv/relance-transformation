<template>
  <div class="dateselection col-sm mt-3">
        <div class="col-sm row p-5 unselected align-items-center" :class="{selected:focus}">
            <div class="col-sm-2 rounded-circle p-3 text-center bgWhite">
                <strong>
                    {{ date }}
                </strong>
            </div>
            <p class="h5 text-left col-sm ml-4"><strong>{{ title }}</strong></p>
        </div>
  </div>
</template>

<script>
export default {
 name: "DateSelection",

        props: {
            title: {
                type: String,
                required: true,
            },
            date: {
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
        background-color: #f7f5f5;
        color:#408669;
    }

    .bgWhite {
        background-color: #fff;
    }

</style>