<template>
    <div id="my-footer">
        <div>
            <slot></slot>
        </div>
        <div>
            <slot name="copy"></slot>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'footers'
    }
</script>


<style scoped>
    #my-footer{
        overflow: hidden;
        position: relative;
        bottom: 0;
        background: lightblue;
        width: auto;
        height: 150px;
        padding: 15px;
    }
    .copy{
        background: blue;
        color: #fff;
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 0;
        padding: 15px;
    }
</style>