export const UPDATE_AUTH = (state, auth) => {
  state.auth = auth
}

export const UPDATE_USER = (state, user) => {
  state.user = user
}

export const APPNAV_SEARCH = (state, searchData) => {
  state.appnav = searchData
}

export const UPDATE_COUNT = (state, notes) => {
  state.notes = notes
}

export const CLEAR_COUNT = (state) => {
  state.notes.count = 0
}


export const DRAG_EXPERIENCE = (state) => {
  state.dragExp = true
}


/**
 * Clear each property, one by one, so reactivity still works.
 *
 * (ie. clear out state.auth.isLoggedIn so Navbar component automatically reacts to logged out state,
 * and the Navbar menu adjusts accordingly)
 *
 * TODO: use a common import of default state to reset these values with.
 */
export const CLEAR_ALL_DATA = (state) => {
  // Auth
  state.auth.isLoggedIn = false
  state.auth.accessToken = null

  // User
  state.user.name = ''
}
