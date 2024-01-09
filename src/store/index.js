import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    about:null,
    workExperience:null,
    education:null,
    subjects:null,
    reviews:null,
    projects:null,
  },
  getters: {
  },
  mutations: {
    setAbout(state,about) {
      state.about = about;
    },
    setReviews(state,reviews) {
      state.reviews = reviews;
    },
    setWorkExperience(state,workExperience) {
      state.workExperience = workExperience;
    },
    setEducation(state,education) {
      state.education = education;
    },
    setSubjects(state,subjects) {
      state.subjects = subjects;
    },
    setProjects(state,projects) {
      state.projects = projects;
    },
  },
  actions: {
    fetchData(context) {
      axios.get("https://jsonsept.github.io/vueportfolio/")
        .then(res => {
                      // console.log(res.data.about)
                      let payload = res.data
                      console.log(payload);
                      context.commit('setAbout', payload.about),
                      context.commit('setReviews',payload.reviews)
                      context.commit('setWorkExperience',payload.workExperience)
                      context.commit('setEducation',payload.education)
                      context.commit('setSubjects',payload.subjects)
                      context.commit('setProjects',payload.projects)
                    })
    },
    
  },
  modules: {
  }
})
