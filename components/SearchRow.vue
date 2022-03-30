<template>
    <div class="search-row" v-click-outside="closeDropdown">
        <input type="text"
               v-model="searchStr"
               @input="onInput"
               @click="onClick"
               @keydown="onKeydown"
               placeholder="Поиск"
               class="search-row__input">

        <svg class="search-row__icon">
            <use xlink:href="~/assets/img/sprites/symbol/svg/sprite.symbol.svg#zoom_icon"></use>
        </svg>

        <div v-show="isOpen"
             class="search-row__dropdown">

            <template v-if="responseLength">
                <div class="search-row__find-head">
                    Найдено статей: {{ responseLength }} <br>
                    <span class="link search-row__show-all"
                          @click="showAll"
                    >
                        Показать все
                    </span>
                </div>
                <ul class="search-result">
                    <li v-for="article in firstResults"
                        class="search-result__item">
                        <span class="link search-result__link"
                              @click="goToArticle(article.id)"
                        >
                            {{ article.title | capitalFirstLetter }}
                        </span>
                    </li>
                </ul>
            </template>

            <div v-else class="search-row__find-empty">
                Ничего не найдено
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: [],
        data() {
            return {
                searchStr: '',
                responseList: [],
                isOpen: false,

                debounceTimeout: null,
            }
        },

        computed: {
            firstResults() {
                return this.responseList.slice(0, 10);
            },

            responseLength() {
                return this.responseList.length;
            }
        },

        methods: {
            closeDropdown() {
                this.isOpen = false;
            },

            onClick() {
                if(this.responseLength) this.isOpen = true;
            },

            onInput() {
                clearTimeout(this.debounceTimeout);

                if (this.searchStr.length === 0) this.isOpen = false;
                if (this.searchStr.length < 3) return;

                this.debounceTimeout = setTimeout(() => {
                    this.searchRequest(this.searchStr);
                }, 500);
            },

            onKeydown(e) {
                if(e.key === 'Escape') this.closeDropdown();
            },

            // todo кэш для запросов
            searchRequest(str) {
                this.$axios.get(`https://jsonplaceholder.typicode.com/posts?q=${str}`)
                    .then(response => {
                        this.responseList = response.data;
                    })
                    .catch(e => {
                        console.log('Ошибка загрузки поиска', e);
                    })
                    .finally(() => {
                        this.isOpen = true;
                    });
            },

            showAll() {
                this.$router.push({name: 'search', params: { searchStr: this.searchStr } });

                this.$store.dispatch('search/setStr', this.searchStr);
                this.$store.dispatch('search/setResult', this.responseList);

                this.clearSearch();
            },

            goToArticle(articleId) {
                this.$store.dispatch('search/setStr', this.searchStr);
                this.$router.push({name: 'post-id', params: { id: articleId } });
                this.clearSearch();
            },

            clearSearch() {
                this.isOpen = false;
                this.searchStr = '';
                this.responseList = [];
                clearTimeout(this.debounceTimeout);
            }
        },

        beforeDestroy() {
            this.clearSearch();
        }
    }

</script>

<style lang="scss">
    .search-row {
        position: relative;
        width: 309px;

        @include media-breakpoint-down(lg) {
        }
        @include media-breakpoint-down(md) {
        }
        @include media-breakpoint-down(sm) {
            width: 100%;
        }

        &__input {
            display: block;
            height: 50px;
            width: 100%;
            padding-left: 36px;

            border: 1px solid #E7E7E8;
            outline: none !important;
            border-radius: 10px;

            background-color: #E7E7E8;

            font-family: inherit;
            font-size: 17px;
            color: #000;

            @include transited();
            @include placehodlerColor(rgba(60, 60, 67, 0.6));

            &:focus {
                border-color: #FF008A;

                & + .search-row__icon {
                    color: #FF008A;
                }
            }

            @include media-breakpoint-down(lg) {
            }
            @include media-breakpoint-down(md) {
            }
            @include media-breakpoint-down(sm) {
                height: 36px;
            }
        }

        &__icon {
            position: absolute;
            left: 10px;
            top: 50%;
            transform: translateY(-50%);

            width: 19px;
            height: 19px;
            color: rgba(60, 60, 67, 0.6);
            @include transited();
        }

        &__dropdown {
            position: absolute;
            z-index: 10;
            width: 100%;
            top: 100%;
            left: 0;
            margin-top: 2px;
            padding: 20px;

            background-color: #E7E7E8;
            border-radius: 0 0 10px 10px;

        }

        &__find-head {
            color: #7f828b;
            line-height: 1.2;

            border-bottom: 1px solid #ccc;
            padding-bottom: 10px;
            margin-bottom: 10px;
        }
        &__find-empty {
            color: #7f828b;
            line-height: 1.2;
        }
        &__show-all {
            font-size: 14px;
        }
    }

    .search-result {
        &__item {
            margin-bottom: 5px;
            &:last-child {
                margin-bottom: 0;
            }
        }
        &__link {
            display: block;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }

    }
</style>