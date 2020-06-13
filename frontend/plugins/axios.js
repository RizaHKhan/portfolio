export default function({ $axios, redirect }) {
  $axios.onRequest((config) => {
    // $axios.setHeader('Content-Type', 'application/json')
  })

  $axios.onError((error) => {
    console.log(error)
    if (error.response.status === 500) {
      redirect('/')
    } else {
      console.log('an error occured, deal with it')
    }
  })
}
