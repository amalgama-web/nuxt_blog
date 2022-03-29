import Vue from 'vue';
import Mark from 'mark.js';

// create singletones of mark.js plugin instance for each directive
let createMarkSingletone = function() {
    let instance = null;

    return function(el) {
        if(!instance) instance = new Mark(el);
        return instance;
    }
};
let singletonesByElement = new Map();

Vue.directive('highlight-text', {
    inserted: function(el, binding) {
        let markSingletone = createMarkSingletone();
        let markInstance = markSingletone(el);
        singletonesByElement.set(el, markSingletone);

        markInstance.mark(binding.value);
    },

    componentUpdated: function(el, binding) {
        let markSingletone = singletonesByElement.get(el);
        let markInstance = markSingletone(el);
        markInstance.unmark();
        markInstance.mark(binding.value);
    },

    unbind: function(el) {
        singletonesByElement.delete(el)
    }

});