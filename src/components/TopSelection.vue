<template>
  <div class="topselection col-sm mt-3">
        <div role="button" tabindex="0" class="col-sm row px-2 py-3 unselected bordernone align-items-center position-relative" :class="{selected:focus}">
            <div class="col-sm-2 mr-4">
                <img :src="require(`@/assets/picto/${filename}`)" alt="" class="py-3">
            </div>
            <h3 class="font18 col-sm ml-4 streched-link">{{ title }}</h3>
        </div>
  </div>
</template>

<script>
    export default {
        name: "TopSelection",

        props: {
            title: {
                type: String,
                required: true,
            },
            filename: {
                type: String,
            },
            focus: {
                type: Boolean,
                required: true,
            }
        }
    }
</script>

<style>

    .unselected > h3 {
        color: #6A6A6A !important;
    }

    .selected {
        background-color: #169B62 !important; 
        color: #fff !important;
    }

    .selected > h3 {
        color: #fff !important;
    }

    .unselected {
        background-color: #F9F8F6;
        color: #6A6A6A;
    }

    .bordernone {
        border: none;
    }

    button:active {
        border: none !important; 
    }

    button:focus {
        border: 0px solid inherit !important; 
        outline-color: inherit;
    }

    .font18 {
        font-size: 18px;
    }

</style>