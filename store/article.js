export default {
    state() {
        return {
            currentArticle: null,
            currentComments: null
        }
    },

    getters: {
        currentArticle(state) {
            return state.currentArticle;
        },

        currentComments(state) {
            return state.currentComments;
        },

        currentCommentsLength(state) {
            return state.currentComments ? state.currentComments.length : 0;
        },
    },

    mutations: {
        setArticle(state, payload) {
            state.currentArticle = payload;
        },

        setComments(state, payload) {
            state.currentComments = payload;
        },

        updateArticleText(state, payload) {
            if(state.currentArticle || state.currentArticle.body) {
                state.currentArticle.body = payload;
            }
        },
    },

    actions: {
        setArticle(context, payload) {
            context.commit('setArticle', payload);
        },
        setComments(context, payload) {
            context.commit('setComments', payload);
        },

        updateArticleText(context, payload) {
            context.commit('updateArticleText', payload);
        },
    },
}
