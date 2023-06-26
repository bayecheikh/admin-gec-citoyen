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

    /* const verifySession = () => {
     
        if(isLogged() & getUser!==null & getToken!==null)
        return true
        else
        return false
    } */

    const getUserRoles = () => {
        return getUser()?.roles
    }

    const getUserPermissions = () => {
        let permissions = []
        getUserRoles()?.map((role)=>{permissions=[...permissions,...role.permissions]})
        let allPermissions = removeDuplicates(permissions)
     
        return allPermissions
    }
    //Cette fonction permet de créer le menu a partir des permisions de l'utilisateur connecté
    const getUserMenu = (array) => {
        let layoutPrincipal = layout.menuItems
        let menu = []
        layoutPrincipal?.map((item)=>{
            if(hasPermission(item.name))
            menu=[...menu,item]
        })
      

        return menu
    }
    //Cette fonction permet de créer le menu a partir des permisions de l'utilisateur connecté
    const getParametreMenu = (array) => {
        let layoutPrincipal = layoutadmin.menuItems
        let menu = []
        layoutPrincipal?.map((item)=>{
            if(hasPermission(item.name))
            menu=[...menu,item]
        })

        return menu
    }

    const hasPermission = (permission_name) => {
        // let permissions = getUserPermissions()
        // let checkpermission = permissions?.filter(item => item.name === permission_name).length;
        // if(checkpermission==1)
        // return true
        // else
        // return false
        return true
    }

    const hasRole = (role_name) => {
        let roles = getUserRoles()
        let checkRole = roles?.filter(item => item.name === role_name)?.length;
        if(checkRole==1)
        return true
        else
        return false
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
    inject('getUserPermissions', getUserPermissions)
    inject('getUserRoles', getUserRoles) 
    inject('hasRole', hasRole)
    inject('hasPermission', hasPermission) 
    inject('getToken',getToken)
    inject('isLogged',isLogged)
    inject('loggout',loggout)
    inject('removeDuplicates', removeDuplicates)
    inject('getColore', getColore) 
    inject('getUserMenu', getUserMenu) 
    inject('getParametreMenu', getParametreMenu) 
}