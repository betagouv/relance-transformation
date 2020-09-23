<template>

        <div role="button" tabindex="0" class="rf-col-4 unselected bordernone" :class="{selected:focus}">
           
            <img :src="require(`@/assets/picto/${filename}`)" alt="" class="">
           
            <h3>{{ title }}</h3>
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