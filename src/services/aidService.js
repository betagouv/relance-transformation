import api from '@/services/api'

export default {
  fetchAidDetail(slug) {
    let url = 'aids/' + slug + '/'
    return api.get(url)
      .then(response => response.data)
  },

  fetchAids(params) {    
    const url = getUrlFromParams(params);
    return api.get(url)
      .then(response => response.data.results)
  }
}

function getUrlFromParams(params) {
  const { backers, inFranceRelance, targetedAudiences, recurrence, applyBefore } = params;
  
  let url = 'aids/?';

  if (backers) {
    url += `backers=${backers}`;
  }
  if (inFranceRelance) {
    url += `&in_france_relance=${inFranceRelance}`;
  }
  if (targetedAudiences) {
    if (typeof targetedAudiences === 'string') {
      url += `&targeted_audiences=${targetedAudiences}`;
    }
    if (Array.isArray(targetedAudiences)) {
      url += targetedAudiences.map(targetedAudience => `&targeted_audiences=${targetedAudience}`).join('&');
    }    
  }
  if (recurrence) {
    url += `&recurrence=${recurrence}`;
  }
  if (applyBefore) {
    url += `&apply_before=${applyBefore}`;
  }

  return url;
}