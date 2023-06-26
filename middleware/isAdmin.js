export default function ({ $auth, redirect,$hasRole }) {

    let roles = JSON.parse(localStorage.getItem('gecAdminLoggedInUser'))?.roles 

    if(!$hasRole('admin')){
      return redirect('/')
    }
}