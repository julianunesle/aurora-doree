let devEnv = window.location.hostname === 'localhost'

export const api_url = 'https://api.sampleapis.com/coffee'

export const api_aurora_doree = devEnv ? 'http://localhost:3535/' : 'https://aurora-doree-be-production.up.railway.app/'