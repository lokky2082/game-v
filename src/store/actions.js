import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
/* function appendSessionId (data) {
  let sessionId = localStorage.getItem('session')
  data.append('sessionId', sessionId)
  return data
}
export const getData = ({state}, payload) => {
  let url = `${state.api}/questions.json`
  return axios.get(url).then(response => { return response.data })
} */
