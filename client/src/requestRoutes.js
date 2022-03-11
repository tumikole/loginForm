import Axios from "axios"

const routeApi = Axios.create({
    baseURL: 'http://localhost:4000',
    timeout: 1000,
})

const postData = async (route, payload) => {
    try {
      const res = await routeApi.post(route, payload)
      console.log("res",res);
      return res
    } catch (error) {
      console.log("err",error)
      return error
  
    }
  }


  const getData = async (route) => {
    try {
      const res = await routeApi.get(route)
      return res.data
    } catch (error) {
      return error
    }
  }

  export {postData, getData}
