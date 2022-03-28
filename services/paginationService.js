export default {

    // find total pages value from response.headers.link
    getTotalPages(parsedStr) {

        // if only 1 page response.headers.link is empty string
        if(parsedStr === '') return 1;

        const totalPagesStr = parsedStr.split(',')
            .find(linkItem => linkItem.includes('rel="last"'))
            .match(/(?<=[&?]_page=)[\d]+(?=[&>])/g)[0];

        return +totalPagesStr;
    }
}