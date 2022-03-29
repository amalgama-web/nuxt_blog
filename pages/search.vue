<template>
    <div class="l-container search-page">
        <h2 class="search-page__head">Результаты поиска по запросу «<strong>{{searchStr}}</strong>»</h2>
        <p class="search-page__note">
            Выведены статьи в заголовке или тексте которых найдена поисковая фраза.
            Совпадения в комментариях не учитываются
        </p>

        <article-search-item v-for="article in searchResult"
                             :key="article.id"
                             :article="article"
        >
        </article-search-item>
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
            ...mapGetters({
                searchStr: 'search/str',
                searchResult: 'search/result'
            })
        },

        methods: {},

        mounted() {
            console.log(this.searchStr);
            console.log(this.searchResult);
        }
    }
</script>

<style lang="scss">
    .search-page {
        &__head {
            font-weight: normal;
        }
        &__note {
            font-style: italic;
            color: #aaaaaa;
            font-size: 14px;
            margin-bottom: 55px;
        }
    }
</style>
