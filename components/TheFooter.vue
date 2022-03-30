<template>
    <footer class="l-footer">
        <div class="footer">
            2021 copyright all rights reserved
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'TheFooter'
    }
</script>

<style lang="scss">
    .l-footer {
        border-top: 1px solid #E8E8E8;
    }
    .footer {
        display: flex;
        align-items: center;

        height: 79px;
        max-width: 1014px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 20px;
        padding-right: 20px;

        font-size: 16px;
        line-height: 19px;
    }

</style>
