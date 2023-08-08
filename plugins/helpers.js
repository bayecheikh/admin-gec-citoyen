import layout from '@/static/data/layout'
import layoutadmin from '@/static/data/layoutadmin'
export default function ({store ,redirect}, inject) { 

    const getToken = () => {
        return localStorage.getItem('gecAdminToken')
    }
    
    const getUser = () => {
        return JSON.parse(localStorage.getItem('gecAdminLoggedInUser'));
    }
    
    const isLogged = () => {
        return JSON.parse(localStorage.getItem('gecAdminIsAuthenticated'))
    }

    const verifySession = () => {
     
        if(isLogged() & getUser!==null & getToken!==null)
        return true
        else
        return false
    } 


    //Cette fonction permet de créer le menu
    const getUserMenu = (array) => {
        let layoutPrincipal = layout.menuItems
        let menu = []
        layoutPrincipal?.map((item)=>{
            menu=[...menu,item]
        })
        return menu
    }
    //Cette fonction permet de créer le menu 
    const getParametreMenu = (array) => {
        let layoutPrincipal = layoutadmin.menuItems
        let menu = []
        layoutPrincipal?.map((item)=>{
            menu=[...menu,item]
        })

        return menu
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


    inject('getUser', getUser)
    inject('getToken',getToken)
    inject('isLogged',isLogged)
    inject('loggout',loggout)
    inject('removeDuplicates', removeDuplicates)
    inject('getColore', getColore) 
    inject('getUserMenu', getUserMenu) 
    inject('getParametreMenu', getParametreMenu) 
}