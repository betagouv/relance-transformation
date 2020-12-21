<template>
    <div class="rf-col-sm-12 rf-col-md-6">
         <div :aria-expanded="expanded" :aria-controls="controls"  role="button" tabindex="0" class="rf-grid-row unselected" :class="{selected:focus}">
            <img class="rf-col-3 top-selection-image" :src="require(`@/assets/picto/${filename}`)" alt="" />
            <h3 class="rf-col-9 rf-text select-title">{{ title }}</h3>
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
            },
            expanded: {
                type: String,
            },
            controls: {
                type: String,
            }
        }
    }
</script>

