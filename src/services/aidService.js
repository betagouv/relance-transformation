import api from '@/services/api'

export default {
  fetchAidDetail(slug) {
    let url = 'aids/' + slug + '/'
    return api.get(url)
      .then(response => response.data)
  }
}