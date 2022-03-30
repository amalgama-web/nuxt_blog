<template>
    <div class="pagination-wrap">
        <ul class="pagination">
            <li @click="prev"
                :class="{'_disabled': isFirstPage }"
                class="pagination__item _prev">
                <svg class="pagination__icon">
                    <use xlink:href="~/assets/img/sprites/symbol/svg/sprite.symbol.svg#arrow_left_icon"></use>
                </svg>
            </li>

            <li v-for="item in paginationModel"
                @click="onClick(item.index)"
                :class="{'_active': item.active, '_static': item.static}"
                class="pagination__item">
                {{item.text}}
            </li>

            <li @click="next"
                :class="{'_disabled': isLastPage }"
                class="pagination__item _next">
                <svg class="pagination__icon _reverse">
                    <use xlink:href="~/assets/img/sprites/symbol/svg/sprite.symbol.svg#arrow_left_icon"></use>
                </svg>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: [
            'totalPages',
            'currentPage'
        ],

        data() {
            return {
            }
        },

        computed: {
            isFirstPage() {
                return this.currentPage === 1;
            },

            isLastPage() {
                return this.currentPage === this.totalPages;
            },

            paginationModel() {
                const paginationArray = [];
                let isSkipStarted = false;

                for (let i = 1; i <= this.totalPages; i++) {
                    if (i <= 1 || i === this.totalPages || i >= this.currentPage - 1 && i <= this.currentPage + 1) {
                        isSkipStarted = false;
                        let isCurrent = i === this.currentPage;
                        paginationArray.push({
                            index: isCurrent ? null : i,
                            text: i,
                            active: isCurrent,
                            static: false
                        });
                    } else if (!isSkipStarted) {
                        isSkipStarted = true;
                        paginationArray.push({
                            index: null,
                            text: '...',
                            active: false,
                            static: true
                        });
                    }
                }

                return paginationArray;
            }
        },

        methods: {
            onClick(index) {
                if (index) this.applyNewIndex(index);
            },

            next() {
                const nextPage = this.currentPage + 1;
                if(nextPage > this.totalPages) return;
                this.applyNewIndex(nextPage);
            },

            prev() {
                const prevPage = this.currentPage - 1;
                if(prevPage < 1) return;
                this.applyNewIndex(prevPage);
            },

            applyNewIndex(index) {
                this.$emit('change', index);
            }
        }
    }
</script>

<style lang="scss">
    .pagination-wrap {
        display: flex;
        justify-content: flex-end;
        margin-top: 40px;
        @include media-breakpoint-down(lg) {
        }
        @include media-breakpoint-down(md) {
        }
        @include media-breakpoint-down(sm) {
            justify-content: center;
        }
        @include media-breakpoint-down(xs) {
        }
    }

    .pagination {
        position: relative;
        display: flex;
        flex-wrap: wrap;

        @include media-breakpoint-down(lg) {
        }
        @include media-breakpoint-down(md) {
        }
        @include media-breakpoint-down(sm) {
            justify-content: center;
            padding-left: 36px;
            padding-right: 36px;
        }
        @include media-breakpoint-down(xs) {
        }

        &__item {
            display: flex;
            align-items: center;
            justify-content: center;

            width: 32px;
            height: 32px;
            margin-left: 8px;

            border: 1px solid #E2E2E2;
            border-radius: 4px;

            font-size: 14px;
            line-height: 1;
            font-weight: 700;

            cursor: pointer;
            transition: all 200ms linear;

            &:hover {
                border-color: #FF008A;
            }

            @include media-breakpoint-down(lg) {
            }
            @include media-breakpoint-down(md) {
            }
            @include media-breakpoint-down(sm) {
                margin: 4px;
                &._prev,
                &._next {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    margin: 0;
                }
                &._prev {
                    left: 0;
                }
                &._next {
                    right: 0;
                }
            }
            @include media-breakpoint-down(xs) {
            }

            &._static {
                cursor: default;

                &:hover {
                    border-color: #E2E2E2;
                }
            }

            &._active {
                border-color: #FF008A;
                color: #FF008A;
                cursor: default;
            }

            &._disabled {
                opacity: .2;
                cursor: default;

                &:hover {
                    border-color: #E2E2E2;
                }
            }
        }

        &__icon {
            width: 9px;
            height: 12px;
            color: #E2E2E2;

            transform-origin: center;
            &._reverse {
                transform: rotate(180deg);
            }
        }
    }
</style>
