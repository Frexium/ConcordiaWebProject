import http from '../http-common'

class CardDataService {
    getCollection (data) {
        return http.post('/cards/getextenstion', data)
    }

    getCard (data) {
        return http.post('/cards/getcardbynumandid', data)
    }

}
export default new CardDataService()