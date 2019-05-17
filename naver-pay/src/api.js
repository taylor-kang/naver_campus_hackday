import axios from "axios"

var serverUrl = 'http://210.89.191.66:80';

export default {
    get: function (res, authorization = '') {
        return new Promise(function (resolve, reject) {
            if (authorization.length > 0) {
                axios.get(serverUrl + res, {
                    headers: {
                        Authorization: authorization,
                    }
                }).then(resolve).catch(reject);
            }
            else {
                axios.get(serverUrl + res).then(resolve).catch(reject);
            }
        });
    },

    getParam: function (res, param, queryParms = null) {
        return new Promise(function (resolve, reject) {
            axios.get(serverUrl + res + '/' + param, {params: queryParms}).then(resolve).catch(reject);
        });
    },

    post: function (res, data) {
        return new Promise(function (resolve, reject) {
            axios.post(serverUrl + res, data).then(resolve).catch(reject);
        });
    },

}