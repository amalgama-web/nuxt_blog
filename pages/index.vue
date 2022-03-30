<template>
    <div v-if="isDataLoading" class="preloader-blank"></div>

    <div v-else-if="isError" class="l-container error-blank">
        Произошла ошибка при загрузке статей
    </div>

    <div v-else class="l-container">

        <div class="articles-list">
            <article-item v-for="article in articlesList"
                          :key="article.id"
                          :article="article"
            ></article-item>
        </div>

        <the-pagination v-if="totalPages > 1"
                        :total-pages="totalPages"
                        :current-page="currentPage"
                        @change="paginationChange"
        ></the-pagination>

    </div>
</template>


<script>
import {mapGetters} from 'vuex';
import paginationService from "~/services/paginationService";

export default {
    fetch() {
        console.log('fetch');
        console.log(this.articlesListLength);
        if (this.articlesListLength) return;
        console.log('fetch after check');

        this.$store.dispatch('setCurrentNumber', 1);

        return this.loadArticlesByPage(1);
    },

    data() {
        return {
            isPaginateLoading: false,
            isPaginationError: false,
        }
    },

    computed: {
        isDataLoading() {
            return this.$fetchState.pending || this.isPaginateLoading;
        },
        isError() {
            return this.$fetchState.error || this.isPaginationError;
        },
        ...mapGetters([
            'articlesList',
            'articlesListLength',
            'totalPages',
            'currentPage'
        ]),
    },

    methods: {

        paginationChange(pageNumber) {
            this.$store.dispatch('setCurrentNumber', pageNumber);
            this.isPaginateLoading = true;

            this.loadArticlesByPage(pageNumber)
                .catch(e => {
                    this.isPaginationError = true;
                    console.log('Ошибка загрузки статей', e);
                })
                .finally(() => {
                    this.isPaginateLoading = false;
                });
        },

        loadArticlesByPage(pageNumber) {
            return this.$axios.get(`https://jsonplaceholder.typicode.com/posts?_embed=comments&_page=${pageNumber}&_limit=9`)
                .then(response => {
                    const totalPages = paginationService.getTotalPages(response.headers['link']);
                    this.$store.dispatch('setArticlesList', response.data);
                    this.$store.dispatch('setTotalPages', totalPages);
                })
        }
    }
}
</script>

<style lang="scss">
.articles-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 23px;

    @include media-breakpoint-down(lg) {
        grid-gap: 16px;
    }
    @include media-breakpoint-down(md) {
        grid-template-columns: 1fr 1fr;
    }
    @include media-breakpoint-down(sm) {
        grid-template-columns: 1fr;
    }
}
</style>
