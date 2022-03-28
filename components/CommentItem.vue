<template>
    <div class="comment-item">
        <div class="comment-item__photo"></div>
        <div class="comment-item__name">
            {{ comment.name | capitalFirstLetter }}
        </div>
        <div class="comment-item__text">
            {{ comment.body | capitalFirstLetter }}
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'comment'
        ],
        data() {
            return  {

            }
        },

        computed: {
        },

        methods: {
        },

        created() {
        }

    }

</script>

<style lang="scss">
    .comment-item {
        position: relative;
        min-height: 40px;

        padding-left: 64px;
        margin-bottom: 40px;

        &:last-child {
            margin-bottom: 0;
        }
        &__photo {
            position: absolute;
            top: 0;
            left: 16px;
            width: 36px;
            height: 36px;
            background-color: #000;
            border-radius: 50%;
        }
        &__name {
            font-size: 18px;
            line-height: 24px;
            margin-bottom: 5px;
            font-weight: 600;
        }
        &__text {
            font-size: 18px;
            line-height: 22px;
            color: rgba(60, 60, 67, 0.6);
        }
    }

</style>