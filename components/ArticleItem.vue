<template>
    <div class="article-item">
        <nuxt-link class="article-item__inner"
             :to="`/post/${article.id}`"
             :title="article.title | capitalFirstLetter"
        >
            <div class="article-item__image-container">
                <div class="article-item__image-outer">
                    <img class="article-item__image" src="~/assets/img/tmp.jpeg">
                </div>
            </div>

            <div class="article-item__head">
                {{ article.title | capitalFirstLetter }}
            </div>

            <div class="article-item__preview _crop">
                {{ article.body | capitalFirstLetter }}
            </div>
        </nuxt-link>

        <div class="article-item__footer">
            <div class="article-item__footer-item">
                <svg class="article-item__footer-icon">
                    <use xlink:href="~/assets/img/sprites/symbol/svg/sprite.symbol.svg#dialog_icon"></use>
                </svg>
                <span class="article-item__footer-text">{{ commentsCount }}</span>
            </div>

            <button class="article-item__footer-item _interactive" @click.stop="editArticle(article.id)">
                <svg class="article-item__footer-icon">
                    <use xlink:href="~/assets/img/sprites/symbol/svg/sprite.symbol.svg#edit_icon"></use>
                </svg>
            </button>
        </div>

    </div>
</template>

<script>
export default {
    props: [
        'article'
    ],

    data() {
        return {}
    },

    computed: {
        commentsCount() {
            return this.article.comments.length;
        }
    },

    methods: {
        editArticle(articleId) {
            this.$router.push({name: 'post-id', params: {id: articleId, isEditMode: true}});
        }
    }
}

</script>

<style lang="scss">
.article-item {
    position: relative;
    border: 1px solid #E2E2E2;
    border-radius: 20px;
    padding-bottom: 40px;

    @include media-breakpoint-down(lg) {
    }
    @include media-breakpoint-down(md) {
    }
    @include media-breakpoint-down(sm) {
        border: none;
        border-bottom: 1px solid #e2e2e2;
        border-radius: 0;
        padding-bottom: 16px;
        &:last-child {
            border-bottom: none;
        }
    }
    @include media-breakpoint-down(xs) {
        padding-bottom: 60px;
    }

    &__inner {
        display: block;
        padding: 16px;
        cursor: pointer;

        &:hover {
            .article-item__head {
                color: $purple;
                @include transited();
            }
        }

        @include media-breakpoint-down(lg) {
        }
        @include media-breakpoint-down(md) {
        }
        @include media-breakpoint-down(sm) {
            padding: 0;
        }
        @include media-breakpoint-down(xs) {
        }
    }

    &__image-container {
        display: block;
        position: relative;
        margin-bottom: 16px;
        @include media-breakpoint-down(lg) {
        }
        @include media-breakpoint-down(md) {
        }
        @include media-breakpoint-down(sm) {
            float: right;
            width: 50%;
            margin: 0 0 0 16px;
        }
        @include media-breakpoint-down(xs) {
            float: none;
            width: 100%;
            margin: 0 0 16px;
        }
    }

    &__image-outer {
        position: relative;
        padding: 50% 0;
    }

    &__image {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    &__head {
        font-size: 24px;
        line-height: 28px;
        font-weight: 700;

        margin-bottom: 10px;

        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        max-height: 56px;
        @include transited();
    }

    &__preview {

        font-size: 17px;
        line-height: 22px;
        color: rgba(60, 60, 67, 0.6);

        &._crop {
            $lines: 2;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: $lines;
            -webkit-box-orient: vertical;
            max-height: 22px * $lines;

            @include media-breakpoint-down(lg) {
            }
            @include media-breakpoint-down(md) {
            }
            @include media-breakpoint-down(sm) {
                $lines: 3;
                -webkit-line-clamp: $lines;
                max-height: 22px * $lines;
            }
            @include media-breakpoint-down(xs) {
            }
        }
    }



    &__footer {
        position: absolute;
        left: 0;
        bottom: 0;
        padding: 16px;
        display: flex;
        align-items: center;

        @include media-breakpoint-down(lg) {
        }
        @include media-breakpoint-down(md) {
        }
        @include media-breakpoint-down(sm) {
            padding-left: 0;
            padding-right: 0;
        }
    }

    &__footer-item {
        display: flex;
        align-items: center;
        margin-right: 25px;

        color: #000;
        @include transited();

        &:last-child {
            margin-right: 0;
        }

        &._interactive {
            background-color: #fff;
            border: none;
            outline: none;
            padding: 4px;

            &:hover {
                color: $purple;
                cursor: pointer;
            }
        }
    }

    &__footer-text {
        font-size: 17px;
        line-height: 24px;
        color: rgba(60, 60, 67, 0.6);
        margin-left: 10px;
    }

    &__footer-icon {
        width: 20px;
        height: 20px;
    }
}

</style>