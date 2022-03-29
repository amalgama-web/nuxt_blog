<template>
<!--    it's just for convenient testing =) -->
    <div class="test-indicator">
        <div class="media-query-indicator _xxs">xxs</div>
        <div class="media-query-indicator _xs">xs</div>
        <div class="media-query-indicator _sm">sm</div>
        <div class="media-query-indicator _md">md</div>
        <div class="media-query-indicator _lg">lg</div>
        <div class="media-query-indicator _xl">xl</div>
        <div class="media-query-indicator _xxl">xxl</div>
    </div>
</template>

<style lang="scss">
.test-indicator {
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(255,255,255,.3);
    display: flex;
    justify-content: center;
    color: red;
    font-weight: bold;
    font-size: 12px;
}
.media-query-indicator {
    margin: 0 10px;
    @include media-breakpoint-down(xxl) {
        &._xxl {
            display: none;
        }
    }
    @include media-breakpoint-down(xl) {
        &._xl {
            display: none;
        }
    }
    @include media-breakpoint-down(lg) {
        &._lg {
            display: none;
        }
    }
    @include media-breakpoint-down(md) {
        &._md {
            display: none;
        }
    }
    @include media-breakpoint-down(sm) {
        &._sm {
            display: none;
        }
    }
    @include media-breakpoint-down(xs) {
        &._xs {
            display: none;
        }
    }
}
</style>