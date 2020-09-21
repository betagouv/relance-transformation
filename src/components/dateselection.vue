<template>
  <div class="dateselection col-sm mt-3">
        <button class="col-sm row p-5 unselected align-items-center bordernone" :class="{selected:focus}">
            <span class="col-sm-2 rounded-circle p-3 text-center bgWhite mr-1">
                <strong class="date">
                    {{ date }}
                </strong>
            </span>
            <span class="h5 text-left col-sm ml-4"><strong>{{ title }}</strong></span>
        </button>
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
            date: {
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

    .selected > span > .date {
        color: #408669 !important;
    }

    .unselected {
        background-color: #f7f5f5;
        color:#408669;
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