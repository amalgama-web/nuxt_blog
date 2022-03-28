<template>
    <div class="l-container">

        <div v-if="currentArticle && !isArticleDataLoading" class="article-view">
            <div class="article-view__banner">
                <img class="response-img" src="~/assets/img/banner.jpg" alt="">
            </div>
            <div class="article-view__head">
                {{ currentArticle.title | capitalFirstLetter }}
            </div>

            <template v-if="!isEditFormVisible">

                <div class="article-view__text">
                    {{ currentArticle.body | capitalFirstLetter }}
                </div>

                <button class="button" @click="toggleForm">
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

        <div v-else class="preloader-blank"></div>


        <div class="article-comments">
            <div class="article-comments__head">
                Комментарии {{currentCommentsLength}}
            </div>

            <div v-if="currentComments && !isCommentsDataLoading">
                <comment-item v-for="comment in currentComments"
                              :comment="comment"
                              :key="comment.id"
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
                isArticleUpdating: false,

                isEditFormVisible: false
            }
        },

        computed: {
            ...mapGetters(['currentArticle', 'currentComments', 'currentCommentsLength']),
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
                        this.$store.dispatch('updateArticleText', newText);
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

            padding-bottom: 40px;
            margin-bottom: 50px;
            border-bottom: 1px solid #D1D1D6;
        }

        &__text {
            color: rgba(60, 60, 67, 0.6);
            font-size: 18px;
            line-height: 30px;
            margin-bottom: 40px;
        }
    }

    .article-comments {
        margin-top: 80px;

        &__head {
            font-size: 24px;
            line-height: 33px;
            margin-bottom: 30px;
        }
    }
</style>
