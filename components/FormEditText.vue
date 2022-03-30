<template>
    <form @submit.prevent="onSubmit"
          class="form-edit-text"
    >
        <textarea class="form-edit-text__field"
                  v-model="newText">
        </textarea>

        <button class="button form-edit-text__button">
            Сохранить изменения
        </button>

        <button type="button"
                @click="cancel"
                class="button button_invert form-edit-text__button"
        >
            Отменить
        </button>
    </form>
</template>

<script>
    export default {
        props: [
            'text'
        ],

        data() {
            return {
                newText: this.text
            }
        },

        methods: {
            onSubmit() {
                if( !this.newText.replace(/\s/g, '').length ) {
                    alert('Текст не может быть пустым');
                    return;
                }
                this.$emit('change', this.newText);
            },
            cancel() {
                this.$emit('cancel');
            }
        }

    }

</script>

<style lang="scss">
    .form-edit-text {
        position: relative;

        @include media-breakpoint-down(lg) {
        }
        @include media-breakpoint-down(md) {
            text-align: center;
        }
        @include media-breakpoint-down(sm) {
        }
        @include media-breakpoint-down(xs) {
        }

        &__field {
            display: block;
            width: 100%;
            min-height: 300px;
            border: 1px solid #D1D1D6;
            border-radius: 8px;

            margin-bottom: 30px;
            padding: 25px 20px;

            font-family: inherit;
            font-size: 18px;
            line-height: 30px;
            outline: none !important;
            resize: none;

            &:focus {
                border-color: darken(#D1D1D6, 10%);
            }
        }

        &__button {
            width: 320px;
            margin-right: 25px;
            @include media-breakpoint-down(lg) {
            }
            @include media-breakpoint-down(md) {
                display: flex;
                margin: 0 auto 20px;
                &:last-child {
                    margin-bottom: 0;
                }
            }
            @include media-breakpoint-down(sm) {
                max-width: 100%;
            }
            @include media-breakpoint-down(xs) {
            }
        }
    }

</style>