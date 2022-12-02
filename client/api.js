import request from 'superagent'

// const url = "/api/v1/birds"

export function fetchBirds() {
  return request.get('/api/v1/birds/').then((res) => res.body)
}
