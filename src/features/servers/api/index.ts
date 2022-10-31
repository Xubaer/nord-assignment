import { useQuery } from '@tanstack/react-query'
import { axios } from '@/lib/axios'

export type ServersResponse = {
  name: string
  distance: number
}

const getServers = async (): Promise<ServersResponse[]> => {
  const { data } = await axios.get('/servers')
  return data
}

export const useServers = () => {
  return useQuery(['servers'], () => getServers(), { staleTime: 2 * 60 * 1000 })
}
