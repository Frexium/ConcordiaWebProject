import http from '../http-common'

class PosseseDataService {
    getCollection (data) {
        return http.post('/posseses/collection', data)
    }

    add (data) {
        return http.post('/posseses/add', data)
    }

    remove (data) {
        return http.post('/posseses/remove', data)
    }

}
export default new PosseseDataService()