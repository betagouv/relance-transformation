<template>
  <div class="topselection col-sm mt-3">
        <button class="col-sm row p-5 unselected bordernone" :class="{selected:focus}">
            <span class="col-sm-2">
                <i class="fas fa-hand-holding-heart border border-success rounded-circle p-4 mr-4"></i>
            </span>
            <span class="h5 text-left col-sm ml-4"><strong>{{ title }}</strong></span>
        </button>
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

</style>