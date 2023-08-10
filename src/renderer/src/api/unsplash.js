import request from './ajax'

// unsplash resource
export async function randomResourceService() {
  const datas = await request.get('/photos/random?topics=wallpapers&orientation=landscape&count=30')
  return datas
}
