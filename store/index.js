export default {
    state() {
        // todo разделить на модули??
        return {
            articlesList: [],
            totalPages: 1,
            currentPage: 1,
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

    },

    mutations: {
        setArticlesList(state, payload) {
            state.articlesList = payload;
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

        setTotalPages(context, payload) {
            context.commit('setTotalPages', payload);
        },

        setCurrentPage(context, payload) {
            context.commit('setCurrentPage', payload);
        },
    },
}
