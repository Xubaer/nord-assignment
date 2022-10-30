import storage from './storage'

const auth = {
  getUser: () => {
    return !!storage.getToken()
  },
  setUser: (token: string): void => {
    storage.setToken(token)
  },
  logout: () => {
    storage.clearToken()
  },
}

export default auth
