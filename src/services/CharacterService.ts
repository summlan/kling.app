import axios from 'axios'
import Character from '@/interfaces/Character'

class CharacterService {
  async FetchCharacters (): Promise<Character[] | any[]> {
    let response: Character[] | any[] = []
    try {
      const { data, status } = await axios({
        url: 'https://swapi.co/api/people/'
      })

      if (data && status === 200) {
        response = data.results
      }
      return response
    } catch (error) {
      response = [
        {
          error: error.response as object,
          flag: false as boolean,
          generalError: 'An error happened' as string
        }
      ]
      return response
    }
  }
}

export default CharacterService
