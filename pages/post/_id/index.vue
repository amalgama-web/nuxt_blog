<template>
    <div class="l-container">

        <div v-if="currentArticle && !isArticleDataLoading" class="article-view">
            <div class="article-view__banner">
                <img class="response-img" src="~/assets/img/banner.jpg" alt="">
            </div>
            <div class="article-view__head">
                {{ currentArticle.title | capitalFirstLetter }}
            </div>
            <div class="article-view__text">
                {{ currentArticle.body | capitalFirstLetter }}
            </div>
            <button class="article-view__edit">
                Редактировать текст
            </button>
        </div>

        <div v-else class="preloader-blank"></div>


        <div class="article-comments">
            <div class="article-comments__head">
                Комментарии {{currentCommentsLength}}
            </div>

            <div v-if="currentComments && !isCommentsDataLoading">
                <comment-item v-for="comment in currentComments"
                              :comment="comment"
                              :key="comment.postId"
                ></comment-item>
            </div>
            <div v-else class="preloader-blank"></div>

        </div>

    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        data() {
            return {
                isArticleDataLoading: true,
                isCommentsDataLoading: true,
            }
        },

        computed: {
            ...mapGetters(['currentArticle', 'currentComments', 'currentCommentsLength']),
        },

        methods: {},

        mounted() {
            this.$axios.get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
                .then(response => {
                    this.$store.dispatch('setArticle', response.data);
                    this.isArticleDataLoading = false;

                    // получаем комменты только после статьи, т.к. если будет ошибка в загрузке статьи комментарии не нужны
                    return this.$axios.get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}/comments`);
                })
                .then(response => {
                    this.$store.dispatch('setComments', response.data);
                    this.isCommentsDataLoading = false;
                })
                .catch(e => {
                    console.log('Ошибка загрузки данных статьи', e);
                })
        }
    }
</script>

<style lang="scss">
    .article-view {
        &__banner {
            margin-bottom: 40px;
        }

        &__head {
            font-size: 34px;
            line-height: 46.44px;

            padding-bottom: 20px;
            margin-bottom: 20px;
            border-bottom: 1px solid #D1D1D6;
        }

        &__text {
            margin-bottom: 40px;
        }
    }

    .article-comments {
        margin-top: 50px;

        &__head {
            font-size: 24px;
            line-height: 33px;
            margin-bottom: 30px;
        }
    }
</style>
