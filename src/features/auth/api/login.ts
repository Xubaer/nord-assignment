import { axios } from '@/lib/axios'

type UserLoginDTO = {
  username: string
  password: string
}

type LoginResponse = {
  data: {
    token: string
  }
}

export const loginUser = async (data: UserLoginDTO): Promise<LoginResponse> => {
  return axios.post('/tokens', data)
}
