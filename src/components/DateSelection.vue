<template>
    <div class="rf-col-sm-12 rf-col-md-6">
        <div role="button" tabindex="0" class="rf-grid-row unselected" :class="{selected:focus}">
            <img class="rf-col-3 top-selection-image" :src="require(`@/assets/picto/${filename}`)" alt="" >
            <h3 class="rf-col-9 rf-text">{{ title }}</h3>
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
        color: white !important;
    }

    .selected {
        background-color: #169B62 !important;
    }

    .selected .rf-text {
        color: white !important;
    }

    .unselected {
        background-color: #F9F8F6;
        color: #6A6A6A;
    }

    .top-selection-image {
        display: flex;
        align-items: center;
        padding: 20px !important;
    }

    .rf-text {
        margin: 0;
        padding-left: 0 !important;
        color: #107449 !important;
        display: flex;
        align-items: center;
    }

</style>
