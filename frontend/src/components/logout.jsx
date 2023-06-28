import { GoogleLogout } from "@leecheuk/react-google-login";
const clientId= '962955475292-vhhhhcjh7g8j8cgg6hbekuvso45e9nbq.apps.googleusercontent.com'

function Logout(){
    const onSuccess = ()=>{
        console.log("log out successful");
    }
    return(
        <div id="signOutButton">
         <GoogleLogout
         clientId={clientId}
         buttonText={'logout'}
         onLogoutSuccess={onSuccess}


         />
        </div>
    )
}

export default  Logout
