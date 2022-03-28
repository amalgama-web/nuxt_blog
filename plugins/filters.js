import Vue from 'vue';

Vue.filter('capitalFirstLetter', str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
});
