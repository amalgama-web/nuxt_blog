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

<style lang="scss">
    .header {
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
        &__right {
            display: flex;
            align-items: center;

            @include media-breakpoint-down(lg) {
            }
            @include media-breakpoint-down(md) {
            }
            @include media-breakpoint-down(sm) {
                width: 100%;
                flex-direction: column-reverse;
                align-items: flex-start;
            }
        }

        &__posts-link {
            display: inline-flex;
            align-items: center;

            margin-left: 30px;

            transition: all 200ms linear;
            @include link-color($purple, #000);

            &.nuxt-link-exact-active {
                cursor: default;
                @include link-color(#000);
            }

            @include media-breakpoint-down(lg) {
            }
            @include media-breakpoint-down(md) {
            }
            @include media-breakpoint-down(sm) {
                margin-left: 0;
                font-size: 32px;
                font-weight: 700;
            }
        }
        &__posts-icon {
            width: 20px;
            height: 20px;
            margin-right: 8px;
            @include media-breakpoint-down(lg) {
            }
            @include media-breakpoint-down(md) {
            }
            @include media-breakpoint-down(sm) {
                display: none;
            }
        }

    }
    .logo {
        font-size: 20px;
        line-height: 24px;
        font-weight: 700;
        transition: color 200ms linear;

        @include media-breakpoint-down(lg) {
        }
        @include media-breakpoint-down(md) {
        }
        @include media-breakpoint-down(sm) {
            display: none;
        }

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
