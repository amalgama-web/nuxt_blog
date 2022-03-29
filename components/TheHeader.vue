<template>
    <header>
        <div class="l-container header">
            <nuxt-link to="/" class="logo">Logo</nuxt-link>
            <div class="header__right">

                <search-row></search-row>

                <nuxt-link to="/">Посты</nuxt-link>
            </div>
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
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        &__right {
            display: flex;
            align-items: center;
        }

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
