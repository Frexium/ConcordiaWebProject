import http from '../http-common'

class UserDataService {
    create (data) {
        return http.post('/users', data)
    }

    postLogin (data) {
        return http.post('/users/login', data)
    }

    getLogout () {
        return http.get('/users/logout')
    }
}
export default new UserDataService()