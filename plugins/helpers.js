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
<<<<<<< HEAD
        let layoutPrincipal = layout.menuItems
        let menu = []
        layoutPrincipal?.map((item)=>{
            menu=[...menu,item]
        })
        return menu
    }
    //Cette fonction permet de créer le menu 
=======
        let layoutPrincipal = layout.menuItems;
        let menu = [];
      
        layoutPrincipal?.forEach((item) => {
          if (hasPermission(item.name)) {
            menu.push(item);
          }
        });
      
        const parametresItem = {
          "icon": "mdi-cog-outline",
          "href": "/parametres",
          "title": "Paramétrage",
          "name": "gerer-parametres"
        };
      
        const hasParametres = menu.some(item => item.name === "gerer-parametres");
      
        if ((hasPermission("gerer-roles") || hasPermission("gerer-permissions") || hasPermission("gerer-organismes") || hasPermission("gerer-faq") || hasPermission("gerer-contenus-dynamiques")) && !hasParametres) {
          menu.push(parametresItem);
        }
      
        return menu;
      }
    //Cette fonction permet de créer le menu à partir des permisions de l'utilisateur connecté
>>>>>>> yacine-v41
    const getParametreMenu = (array) => {
        let layoutPrincipal = layoutadmin.menuItems
        let menu = []
        layoutPrincipal?.map((item)=>{
            menu=[...menu,item]
        })

        return menu
    }

<<<<<<< HEAD
   
=======
    const hasPermission = (permission_slug) => {
        let permissions = getUserPermissions()
        let checkpermission = permissions?.filter(item => item.slug === permission_slug).length;
        if(checkpermission==1)
        return true
        else
        return false
     
    }

    const hasRole = (role_slug) => {
        let roles = getUserRoles()
        let checkRole = roles?.filter(item => item.slug === role_slug)?.length;
        if(checkRole==1)
        return true
        else
        return false
    }
>>>>>>> yacine-v41

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