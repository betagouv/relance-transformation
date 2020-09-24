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

    .topselection div[role="button"]:hover, .topselection div[role="button"]:focus {
        background-color: #169B62; 
        color: #fff;        
    }
    .topselection div[role="button"]:hover h3, .topselection div[role="button"]:focus h3 {
        color: #fff;
    }
    .selected {
        background-color: #169B62; 
        color: #fff;
    }
    .unselected {
        background-color: #F9F8F6;
        color: #6A6A6A;
    }
    .bordernone {
        border: none;
    }
    .font18 {
        font-size: 18px;
    }

</style>