export default {
    state() {
        // todo разделить на модули??
        return {
            articlesList: [],
            totalPages: 1,
            currentPage: 1,

            currentArticle: null,
            currentComments: null
        }
    },

    getters: {
        articlesList(state) {
            return state.articlesList;
        },

        articlesListLength(state) {
            return state.articlesList.length;
        },

        totalPages(state) {
            return state.totalPages;
        },

        currentPage(state) {
            return state.currentPage;
        },

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
        setArticlesList(state, payload) {
            state.articlesList = payload;
        },

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

        setTotalPages(state, payload) {
            state.totalPages = payload;
        },

        setCurrentPage(state, payload) {
            state.currentPage = payload;
        },
    },

    actions: {
        setArticlesList(context, payload) {
            context.commit('setArticlesList', payload);
        },
        setArticle(context, payload) {
            context.commit('setArticle', payload);
        },
        setComments(context, payload) {
            context.commit('setComments', payload);
        },

        updateArticleText(context, payload) {
            context.commit('updateArticleText', payload);
        },

        setTotalPages(context, payload) {
            context.commit('setTotalPages', payload);
        },

        setCurrentPage(context, payload) {
            context.commit('setCurrentPage', payload);
        },
    },
}
