<template>
    <header>
        <div class="l-container">
            <nuxt-link to="/" class="logo">Logo</nuxt-link>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'TheHeader'
    }
</script>

<style lang="scss">
    .header {
        height: 60px;
        display: flex;
        align-items: center;
    }
    .logo {
        font-size: 20px;
        line-height: 24px;
        font-weight: 700;
        transition: color 200ms linear;
        &.nuxt-link-exact-active {
            cursor: default;
            &:hover {
                color: #000;
            }
        }
    }
</style>
