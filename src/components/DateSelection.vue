<template>
    <div class="rf-col-xs-10 rf-col-sm-6">
        <div role="button" tabindex="0" class="rf-grid-row unselected" :class="{selected:focus}">
            <img :src="require(`@/assets/picto/${filename}`)" alt="" class="rf-col-2">
            <h3 class="rf-col-10 rf-text--lg">{{ title }}</h3>
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
    div[role="button"] {
        height: 8em;
    }
    div[role="button"]:hover, div[role="button"]:focus {
        background-color: #169B62; 
        color: #fff;        
    }
    div[role="button"]:hover h3, div[role="button"]:focus h3 {
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

</style>