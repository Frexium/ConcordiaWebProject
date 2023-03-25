import http from '../http-common'

class ExtensionDataService {
    getExtension (data) {
        return http.post('/extensions/getextension', data)
    }

}
export default new ExtensionDataService()