export default (context, inject) => {
    const hasPermission = (permission_slug) => {
        let permissions = JSON.parse(localStorage.getItem('gecAdminLoggedInUser')).roles.permissions
        let checkpermission = permissions.filter(item => item.slug === permission_slug).length;
        if(checkpermission==1)
        return true
        else
        return false
    }
    // Inject $getColore(status) in Vue, context and store.
    inject('hasPermission', hasPermission)
    context.$hasPermission = hasPermission
}