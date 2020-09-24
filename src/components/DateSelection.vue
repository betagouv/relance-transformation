<template>

        <div role="button" tabindex="0" class="rf-col-4 unselected bordernone" :class="{selected:focus, unselected:!focus}">
            <div class="">
                <img :src="require(`@/assets/picto/${filename}`)" alt="" class="py-3">
            </div>
            <h3 class="streched-link"><strong>{{ title }}</strong></h3>
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
            focus: {
                type: Boolean,
                required: true,
            }
        }
}
</script>

<style>

    .selected {
        background-color: #169B62; 
        color: #FFFFFF;
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