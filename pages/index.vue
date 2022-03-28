<template>
    <div class="l-container">

        <div v-if="articlesListLength && !isDataLoading"
             class="articles-list"
        >
            <article-item v-for="article in articlesList"
                          :key="article.id"
                          :article="article"
            >
            </article-item>
        </div>
        <div v-else class="preloader-blank"></div>

        <div class="pagination">
            <div class="pagination__item"></div>
            <div class="pagination__item">1</div>
            <div class="pagination__item">2</div>
        </div>

    </div>
</template>


<script>
    import {mapGetters} from 'vuex';

    export default {
        data() {
            return {
                isDataLoading: false,
            }
        },

        computed: {
            ...mapGetters(['articlesList', 'articlesListLength']),
        },

        mounted() {
            this.isDataLoading = true;

            this.$axios.get('https://jsonplaceholder.typicode.com/posts?_embed=comments')
                .then(response => {
                    this.$store.dispatch('setArticlesList', response.data)
                })
                .catch(e => {
                    console.log('Ошибка загрузки статей', e);
                })
                .finally(() => {
                    this.isDataLoading = false;
                });
        }
    }
</script>

<style lang="scss">
    .articles-list {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 23px;

    }

</style>
