import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
/* function appendSessionId (data) {
  let sessionId = localStorage.getItem('session')
  data.append('sessionId', sessionId)
  return data
} */
export const getQuestions = ({state}, payload) => {
  let url = `data.json`
  return axios(url).then(response => { return response })
}
export const setQuestion = ({state}, payload) => {
  state.activeQuestion = payload
}
export const increase = ({state}, payload) => {
  state.count = state.count + payload
}
export const setDisabled = ({state}, payload) => {
  state.disabled.push(payload)
}
