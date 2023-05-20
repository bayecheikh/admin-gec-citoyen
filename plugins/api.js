export default function ({ $axios, store ,redirect}, inject) {
    const token = localStorage.getItem('gecToken')
    const gecApi = $axios.create({
        baseURL: 'https://api-gec-citoyen.fly.dev/api/v1',
        headers : {
            common: {
                Accept: 'application/json'
            }
        }
    });


    inject('gecApi', gecApi)
    
}