<template>
    <div class="wrapper">
        <div class="wrapper__inner">
            <the-header class="post-header-lg"></the-header>
            <post-header class="post-header-sm"></post-header>

            <nuxt></nuxt>
            <div class="l-prefooter"></div>
        </div>
        <the-footer></the-footer>
    </div>
</template>

<style lang="scss">
    .post-header-lg {
        @include media-breakpoint-down(lg) {
        }
        @include media-breakpoint-down(md) {
        }
        @include media-breakpoint-down(sm) {
            display: none;
        }
        @include media-breakpoint-down(xs) {
        }
    }
    .post-header-sm {
        display: none;
        @include media-breakpoint-down(lg) {
        }
        @include media-breakpoint-down(md) {
        }
        @include media-breakpoint-down(sm) {
            display: block;
        }
        @include media-breakpoint-down(xs) {
        }
    }
</style>