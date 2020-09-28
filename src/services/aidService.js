import api from '@/services/api'

export default {
    // Build an api call and fetch it's result
    fetchAidList(querystring) {
        const params = `backers=${process.env.VUE_APP_MTFP_PARAM}&in_france_relance=true&${querystring}`;
        return api.get('/aids/?' + params);
    },

    // Fetch a single aid object
    fetchAidDetail(slug) {
        const url = 'aids/' + slug + '/'
        return api.get(url)
            .then(response => response.data);
    }
}
