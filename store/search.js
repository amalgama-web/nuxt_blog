export default {
    state() {
        return {
            searchStr: '',
            searchResult: []
        }
    },

    getters: {

    },

    mutations: {
        setStr(state, payload) {
            state.searchStr = payload;
        },
        setResult(state, payload) {
            state.searchResult = payload;
        }
    },

    actions: {
        setStr(context, payload) {
            context.commit('setStr', payload);
        },

        setResult(context, payload) {
            context.commit('setResult', payload);
        }
    },
}
