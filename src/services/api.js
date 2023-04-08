// Base URL:  https://api.themoviedb.org/3/
// Chave:     916b3d045649e2789aeb4cab5a2dc88d

import axios from "axios"

export const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})