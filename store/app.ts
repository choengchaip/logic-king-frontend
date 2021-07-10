export const state = () => ({
  navbar_show: false
})

export const mutations = {
  setNavbar (state: any, val: boolean) {
    state.navbar_show = val
  },
}

export const actions = {
  showNavbar ({ commit }: any) {
    commit('setNavbar', true)
  },
  hideNavbar ({ commit }: any) {
    commit('setNavbar', false)
  },
}

export const getters = {
  isShowNavbar: (state: any) => {
    return state.navbar_show
  }
}
