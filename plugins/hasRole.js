export default (context, inject) => {
    const hasRole = (role_slug) => {
        let roles = JSON.parse(localStorage.getItem('gecAdminLoggedInUser')).roles
        let checkRole = roles?.filter(item => item.slug === role_slug)?.length;
        if(checkRole==1)
        return true
        else
        return false
    }
    // Inject $getColore(status) in Vue, context and store.
    inject('hasRole', hasRole)
    context.$hasRole = hasRole
}