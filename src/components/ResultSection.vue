<template>
    <div class="">
         <slot name="titleResultSection"></slot>
          <slot></slot>
          <slot name="resultCards"></slot>             
    </div>
</template>

<script>
    export default {
        name: "ResultSection"

    }
</script>

<style>

    .bgGrey {
        background-color: #f7f5f5;
        color: #2c3e50;
    }

    .moreInfos {
        color: #408669;
        background-color: inherit;
        border: none;
    }

    a {
        text-decoration: none !important;
        box-shadow: none;
    }

    .font16 {
        font-size: 16px;
    }

    .font14 {
        font-size: 14px;
    }

</style>