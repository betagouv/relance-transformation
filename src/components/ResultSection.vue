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
