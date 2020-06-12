export default function({ $axios, redirect }) {
  $axios.onRequest((config) => {
    $axios.setHeader('Content-Type', 'application/json')
    $axios.setBaseURL('http://localhost/3000/')

    if (!config.url) {
      config.url = 'http://localhost:3000/'
    }

    console.log(config)
  })

  $axios.onError((error) => {
    console.log(parseInt(error.response && error.response.status))
  })
}
