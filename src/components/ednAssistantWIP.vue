<template>
    <div class="edn-assistant">
        <div class="stepHead"></div>
    
    <slot></slot>
        <div class="stpLnk"></div>
    </div>
</template>

<script>
export default {
    name:"edn-assistant",
    props:{
        Pages:{
            type:Array,
            default:()=>[]
        }
    },
    methods:{

    }
}
</script>
<style lang="stylus">
    div.edn-assistant
        > div.step
            display inlin-block
        > div.stpLnk
            height 2px
            width 100%
            background-color #c4c4c4
</style>