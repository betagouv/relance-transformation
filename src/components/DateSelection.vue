<template>
    <div class="rf-col-xs-10 rf-col-sm-6 rf-col-md-6 rf-col-lg-4 rf-col-xl-4">
        <div role="button" tabindex="0" class="rf-grid-row unselected bordernone" :class="{selected:focus}">
            <img :src="require(`@/assets/picto/${filename}`)" alt="" class="rf-col-2">
            <h3 class="rf-col-10">{{ title }}</h3>
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