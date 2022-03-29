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

        <the-pagination v-if="totalPages > 1"
                        :total-pages="totalPages"
                        :current-page="currentPage"
                        @change="changePaginationPage"
        ></the-pagination>

    </div>
</template>


<script>
import {mapGetters} from 'vuex';
import paginationService from "~/services/paginationService";

export default {
    data() {
        return {
            isDataLoading: false,
        }
    },

    computed: {
        ...mapGetters([
            'articlesList',
            'articlesListLength',
            'totalPages',
            'currentPage'
        ]),
    },

    methods: {
        changePaginationPage(newIndex) {
            this.loadArticlesByPage(newIndex);
        },

        loadArticlesByPage(pageNumber) {
            this.$store.dispatch('setCurrentPage', pageNumber);
            this.isDataLoading = true;

            this.$axios.get(`https://jsonplaceholder.typicode.com/posts?_embed=comments&_page=${pageNumber}&_limit=9`)
                .then(response => {
                    const totalPages = paginationService.getTotalPages(response.headers['link']);
                    this.$store.dispatch('setArticlesList', response.data);
                    this.$store.dispatch('setTotalPages', totalPages);
                })
                .catch(e => {
                    console.log('Ошибка загрузки статей', e);
                })
                .finally(() => {
                    this.isDataLoading = false;
                });
        }
    },

    mounted() {
        if (this.articlesListLength) return;
        this.loadArticlesByPage(1);
    }
}
</script>

<style lang="scss">
.articles-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 23px;
}

.test-icon {
    fill: red;
    color: red;
}
</style>
