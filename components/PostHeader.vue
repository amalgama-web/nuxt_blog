<template>
    <header class="post-header">
        <nuxt-link to="/" class="post-header__back">
            <svg class="post-header__back-icon">
                <use xlink:href="~/assets/img/sprites/symbol/svg/sprite.symbol.svg#arrow_left_icon"></use>
            </svg>
            Назад
        </nuxt-link>
        <div class="post-header__title">
            Пост
        </div>
    </header>
</template>

<style lang="scss">
.post-header {
    position: relative;
    padding: 15px 0;

    font-size: 18px;
    line-height: 24px;
    font-weight: 600;
    &__back {
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
        @include link-color($purple, #000);
    }
    &__back-icon {
        width: 10px;
        height: 13px;
    }
    &__title {
        text-align: center;
    }
}
</style>
