<template>
    <div ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import Mark from 'mark.js';

export default {
    props: [
        'highlight'
    ],

    data() {
        return {
            markInstance: null
        }
    },

    mounted() {
        this.markInstance = new Mark(this.$refs.wrapper);
        this.$nextTick(() => {
            this.markInstance.mark(this.highlight);
        });
    },

    updated() {
        this.markInstance.unmark();
        this.$nextTick(() => {
            this.markInstance.mark(this.highlight);
        });
    },

    beforeDestroy() {
        this.markInstance.unmark();
        this.markInstance = null;
    }
}
</script>

<style lang="scss">
mark {
    background-color: #FF008A;
    color: #fff;
}
</style>
