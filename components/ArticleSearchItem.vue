<template>
    <nuxt-link :to="`/post/${article.id}`" class="article-item article-item_search">
        <div class="article-item__head">
            {{ article.title | capitalFirstLetter }}
        </div>
        <div class="article-item__preview">
            {{ article.body | capitalFirstLetter }}
        </div>
    </nuxt-link>
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
        display: block;
        margin-bottom: 20px;
        padding: 16px;

        @include media-breakpoint-down(lg) {
        }
        @include media-breakpoint-down(md) {
        }
        @include media-breakpoint-down(sm) {
            padding-left: 0;
            padding-right: 0;
        }

        &:hover {
            .article-item__head {
                color: $purple;
                @include transited();
            }
        }
    }
</style>