export default function({ $axios, redirect }) {
  $axios.onRequest((config) => {
    $axios.setHeader('Content-Type', 'application/json')
    if (!config.url) {
      config.url = 'http://localhost:3000/'
    }
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
