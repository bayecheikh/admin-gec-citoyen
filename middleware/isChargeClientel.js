export default function ({ $auth, redirect,$hasRole }) {
    let roles = JSON.parse(localStorage.getItem('auth.loggedInUser'))?.roles 
    console.log('USER: ++++++++++++++++ ',roles)
    if(!$hasRole('charge_clientele') && !$hasRole('admin')){
      return redirect('/')
    }
}