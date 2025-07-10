import { useQuery } from '@tanstack/react-query'
import type { GetRoomsResponse } from './types/get-rooms-response'

export function useRooms() {
  const API_URL = import.meta.env.VITE_API_URL

  return useQuery({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const response = await fetch(`${API_URL}/rooms`)
      const result: GetRoomsResponse = await response.json()

      return result
    },
  })
}
