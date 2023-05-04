export default function ({ $auth, redirect,$hasRole }) {
    /* let roles = JSON.parse(localStorage.getItem('auth.loggedInUser'))?.roles 
    console.log('USER: ++++++++++++++++ ',roles)
    if(!$hasRole(roles,'admin')){
    return redirect('/')
    } */
    let roles = JSON.parse(localStorage.getItem('auth.loggedInUser'))?.roles 
    console.log('USER: ++++++++++++++++ ',roles)
    if(!$hasRole('admin')){
      return redirect('/')
    }
}