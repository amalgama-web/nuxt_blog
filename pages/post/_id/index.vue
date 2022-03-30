<template>

    <div v-if="$fetchState.pending" class="preloader-blank"></div>

    <div v-else-if="$fetchState.error" class="l-container error-blank">
        Произошла ошибка при загрузке статьи
    </div>

    <div v-else class="l-container">

        <div class="article-view">

            <div class="article-view__banner">
                <picture>
                    <source srcset="~/assets/img/banner-mobile.jpg" media="(max-width: 575px)">
                    <img srcset="~/assets/img/banner.jpg" :alt="currentArticle.title">
                </picture>
            </div>

            <div class="article-view__head">
                {{ currentArticle.title | capitalFirstLetter }}
            </div>

            <template v-if="!isEditFormVisible">

                <div class="article-view__text">
                    {{ currentArticle.body | capitalFirstLetter }}
                </div>

                <button class="article-view__edit" @click="toggleForm">
                    <svg class="article-view__edit-icon">
                        <use xlink:href="~/assets/img/sprites/symbol/svg/sprite.symbol.svg#edit_icon"></use>
                    </svg>
                    Редактировать текст
                </button>

            </template>

            <form-edit-text v-else
                            :class="{'_preloading': isArticleUpdating}"
                            :text="currentArticle.body"
                            @change="applyNewText($event)"
                            @cancel="toggleForm"
            ></form-edit-text>

        </div>

        <div class="article-comments">
            <div class="article-comments__head">
                Комментарии {{ currentCommentsLength }}
            </div>
            <comment-item v-for="comment in currentComments"
                          :comment="comment"
                          :key="comment.id"
            >
            </comment-item>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    layout: 'post',

    fetch() {
        const articlePromise = this.$axios.get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`);
        const commentsPromise = this.$axios.get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}/comments`);

        return Promise.all([articlePromise, commentsPromise])
            .then(([articleResponse, commentsResponse]) => {
                this.$store.dispatch('article/setArticle', articleResponse.data);
                this.$store.dispatch('article/setComments', commentsResponse.data);
            });
    },

    data() {
        return {
            isArticleUpdating: false,
            isEditFormVisible: false
        }
    },

    computed: {
        ...mapGetters({
            currentArticle: 'article/currentArticle',
            currentComments: 'article/currentComments',
            currentCommentsLength: 'article/currentCommentsLength'
        }),
    },

    methods: {

        toggleForm() {
            this.isEditFormVisible = !this.isEditFormVisible;
        },

        applyNewText(newText) {

            this.isArticleUpdating = true;

            this.$axios.patch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`, {
                body: newText
            })
                .then(() => {
                    this.$store.dispatch('article/updateArticleText', newText);
                    this.isArticleUpdating = false;
                    this.toggleForm();
                })
                .catch(e => {
                    console.log('Ошибка при обновлении статьи', e)
                });

        }
    },

    mounted() {
        if (this.$route.params.isEditMode) this.isEditFormVisible = true;
    }
}
</script>

<style lang="scss">
.article-view {
    &__banner {
        margin-bottom: 40px;

        img {
            margin: 0 auto;
        }

        @include media-breakpoint-down(lg) {
        }
        @include media-breakpoint-down(md) {
        }
        @include media-breakpoint-down(sm) {
            margin-left: -16px;
            margin-right: -16px;
            margin-bottom: 20px;
        }
        @include media-breakpoint-down(xs) {
        }
    }

    &__head {
        font-size: 34px;
        line-height: 46px;
        font-weight: 700;

        padding-bottom: 33px;
        margin-bottom: 36px;
        border-bottom: 1px solid #D1D1D6;

        @include media-breakpoint-down(lg) {
        }
        @include media-breakpoint-down(md) {
        }
        @include media-breakpoint-down(sm) {
            padding-bottom: 25px;
            margin-bottom: 23px;

            font-size: 32px;
            line-height: 36px;
        }
        @include media-breakpoint-down(xs) {
        }
    }

    &__text {
        color: rgba(60, 60, 67, 0.6);
        font-size: 18px;
        line-height: 30px;
        margin-bottom: 40px;
    }

    &__edit {
        display: inline-flex;
        align-items: center;
        color: $purple;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;

        background-color: #fff;
        border: none;
        outline: none;
        @include transited();

        &:hover {
            color: #000;
        }
    }

    &__edit-icon {
        width: 20px;
        height: 20px;
        margin-right: 20px;
    }
}

.article-comments {
    margin-top: 80px;

    &__head {
        font-size: 24px;
        line-height: 1.166;
        font-weight: 500;
        margin-bottom: 30px;
        @include media-breakpoint-down(lg) {
        }
        @include media-breakpoint-down(md) {
        }
        @include media-breakpoint-down(sm) {
            font-size: 20px;
        }
        @include media-breakpoint-down(xs) {
        }
    }
}
</style>
