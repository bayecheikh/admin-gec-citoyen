export default function ({store ,redirect}, inject) { 

    const getToken = () => {
        return localStorage.getItem('gecToken')
    }
    
    const getUser = () => {
        return JSON.parse(localStorage.getItem('gecAdminLoggedInUser'));
    }
    
    const isLogged = () => {
        return JSON.parse(localStorage.getItem('gecAdminIsAuthenticated'))
    }

    const removeDuplicates = (array) => {
        let uniq = {};
        return array.filter(obj => !uniq[obj.id] && (uniq[obj.id] = true))
    }

    const getColore = (status) => {
        switch (status){
            case true: return 'green'
            break;
            case 'actif': return 'green'
            break;
            case 'livre': return 'green'
            break;
            case 'innactif': return 'orange'
            break;
            case 'suspendu': return 'red'
            break;
            case false: return 'red'
            break;
            case 'encours': return 'yellow'
            break;
            case 'brouillon': return 'blue'
            break;
            case 'delivre': return 'green'
            break;
            case 'desactive': return 'red'
            break;
            case 'rejete': return 'red'
            break;
            default:  return ''
        }
    }
    
    const loggout = async () => {
        await localStorage.removeItem('gecAdminToken')
        await localStorage.removeItem('gecAdminLoggedInUser')
        await localStorage.removeItem('layout')
        await localStorage.removeItem('gecAdminIsAuthenticated') 
    }

    inject('getToken',getToken)
    inject('isLogged',isLogged)
    inject('loggout',loggout)
    inject('removeDuplicates', removeDuplicates)
    inject('getColore', getColore) 
}