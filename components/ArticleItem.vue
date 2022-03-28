<template>
    <div class="article-item"
         @click="openArticle(article.id)"
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
        <div class="article-item__preview">
            {{ article.body | capitalFirstLetter }}
        </div>
        <div class="article-item__footer">
            comments: {{ commentsCount }}

            <button @click.stop="editArticle(article.id)">Edit</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ArticleItem',

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
            openArticle(articleId) {
                console.log('open article');
                this.$router.push({name: 'post-id', params: { id: articleId } });
            },

            editArticle(articleId) {
                console.log('edit article');
                this.$router.push({name: 'post-id', params: { id: articleId, isEditMode: true } });
            }
        },

        created() {
        }

    }

</script>

<style lang="scss">
    .article-item {
        padding: 16px;
        border: 1px solid #E2E2E2;
        border-radius: 15px;
        cursor: pointer;

        &__image-container {
            display: block;
            position: relative;
            margin-bottom: 16px;
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
            font-weight: bold;

            margin-bottom: 10px;

            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            max-height: 56px;
        }

        &__preview {
            margin-bottom: 15px;

            font-size: 17px;
            line-height: 22px;
            color: rgba(60, 60, 67, 0.6);

            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            max-height: 44px;
        }

        &__foter {

        }

        &:hover {
            .article-item__head {
                color: #FF008A;
                transition: color 200ms linear;
            }
        }
    }

</style>