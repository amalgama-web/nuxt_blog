export default {

    // find total pages value from response.headers.link
    /* response example
      <http://jsonplaceholder.typicode.com/posts?_embed=comments&_page=1&_limit=9>; rel="first",
      <http://jsonplaceholder.typicode.com/posts?_embed=comments&_page=2&_limit=9>; rel="next",
      <http://jsonplaceholder.typicode.com/posts?_embed=comments&_page=12&_limit=9>; rel="last"
     */
    getTotalPages(parsedStr) {

        // if only 1 page response.headers.link is empty string
        if(parsedStr === '') return 1;

        // find digits after ?_page= or &_page= and before & or >
        const pagesNumbers = parsedStr
            .match(/(?<=[&?]_page=)[\d]+(?=[&>])/g)
            .map(item => +item);

        // return max number - it is last page number
        return Math.max(...pagesNumbers);
    }
}