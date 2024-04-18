import axios from 'axios'
const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmYyN2RmYmIyNjAyMmQ1ZmE3ZTk4YmZlNDFiY2YwNiIsInN1YiI6IjY2MGVjMjUyYTg4NTg3MDE3Y2VhMDM0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mL8zpaVFXo9PsiAI7OnnoPF3e6bpK94tHTK3mFQjD8I'
      }
    
})
export default instance;