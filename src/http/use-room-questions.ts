import { useQuery } from '@tanstack/react-query'
import type { GetRoomQuestionsResponse } from './types/get-room-questions-response'

export function useRoomQuestions(roomId: string) {

  const API_URL = import.meta.env.VITE_API_URL

  return useQuery({
    queryKey: ['get-questions', roomId],
    queryFn: async () => {
      const response = await fetch(
        `${API_URL}/rooms/${roomId}/questions`
      )
      const result: GetRoomQuestionsResponse = await response.json()

      return result
    },
  })
}
