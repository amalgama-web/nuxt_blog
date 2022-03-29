<template>
    <div class="article-item article-item_search"
         @click="openArticle(article.id)"
    >
        <div class="article-item__head">
            {{ article.title | capitalFirstLetter }}
        </div>
        <div class="article-item__text">
            {{ article.body | capitalFirstLetter }}
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'article'
        ],

        methods: {
            openArticle(articleId) {
                this.$router.push({name: 'post-id', params: { id: articleId } });
            }
        }
    }

</script>

<style lang="scss">
    .article-item_search {
        margin-bottom: 20px;
    }
</style>