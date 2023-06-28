import { GoogleLogin } from '@leecheuk/react-google-login'
const clientId= '962955475292-vhhhhcjh7g8j8cgg6hbekuvso45e9nbq.apps.googleusercontent.com'

function Login()
{
const onSuccess = (res) =>{
    console.log("login success! current user: ", res.profileObj)
}

const onFailure =(res) =>{
    console.log("login failed! res:", res);
}
    return(
        <div id='signInButton'>
            <GoogleLogin
            clientId={clientId}
            buttonText='login'
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            />


        </div>
    )
}

export default Login;
