<template>
    <header>
        <div class="l-container header">
            <nuxt-link to="/" class="logo">
                <svg class="logo__icon">
                    <use xlink:href="~/assets/img/sprites/symbol/svg/sprite.symbol.svg#logo"></use>
                </svg>
            </nuxt-link>
            <div class="header__right">

                <search-row></search-row>

                <nuxt-link to="/" class="header__posts-link">
                    <svg class="header__posts-icon">
                        <use xlink:href="~/assets/img/sprites/symbol/svg/sprite.symbol.svg#posts_icon"></use>
                    </svg>
                    Посты
                </nuxt-link>
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

        &__posts-link {
            display: inline-flex;
            align-items: center;
            $purple: #FF008A;
            color: $purple;

            margin-left: 30px;

            transition: all 200ms linear;
            &:link {
                color: $purple;
            }

            &:visited {
                color: $purple;
            }

            &:hover {
                color: #000;
            }

            &:active {
                color: $purple;
            }

            &.nuxt-link-exact-active {
                cursor: default;
                &:link {
                    color: #000;
                }

                &:visited {
                    color: #000;
                }

                &:hover {
                    color: #000;
                }

                &:active {
                    color: #000;
                }
            }
        }
        &__posts-icon {
            width: 20px;
            height: 20px;
            margin-right: 8px;
        }

    }
    .logo {
        font-size: 20px;
        line-height: 24px;
        font-weight: 700;
        transition: color 200ms linear;

        &__icon {
            width: 60px;
            height: 24px;
        }
        &.nuxt-link-exact-active {
            cursor: default;
            &:hover {
                color: #000;
            }
        }
    }
</style>
