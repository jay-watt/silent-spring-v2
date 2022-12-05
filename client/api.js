import request from 'superagent'

const url = "/api/v1/birds"

export function fetchBirds() {
  return request.get(url).then((res) => res.body)
}
