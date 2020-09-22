<template>
  <div class="dateselection col-sm mt-3">
        <div class="col-sm row px-2 py-2 unselected bordernone align-items-center position-relative" :class="{selected:focus}">
            <div class="col-sm-2 mr-1">
                <img :src="require(`@/assets/picto/${filename}`)" alt="" class="py-3">
            </div>
            <h3 class="font18 text-left col-sm ml-4 streched-link"><strong>{{ title }}</strong></h3>
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
            filename: {
                type: String,
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
        background-color: #169B62 !important; 
        color: #FFFFFF !important;
    }

    .unselected {
        background-color: #F9F8F6;
        color: #6A6A6A;
    }

    .selected > span > .date {
        color: #408669 !important;
    }

    .bgWhite {
        background-color: #fff;
    }

    .bordernone {
        border: none;
    }

    button:active {
        border: none; 
    }

    button:focus {
        border: 0px solid inherit !important; 
        outline-color: inherit;
    }

</style>