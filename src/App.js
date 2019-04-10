import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

export default function App(props) {
  const [logged, setLogin] = useState(null);
  const responseGoogle = response => {
    console.log(response);
    if (response.profileObj) {
      setLogin(response.profileObj);
    }
  };
  const logout = response => {
    console.log(response);
    setLogin(null);
  };
  return (
    <div className="test">
      {!logged && (
        <GoogleLogin
          clientId="85248661840-cldpr5gda7p277id7juhvukv86ubih8v.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      )}
      {logged && (
        <GoogleLogout
          clientId="85248661840-cldpr5gda7p277id7juhvukv86ubih8v.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={logout}
        />
      )}
    </div>
  );
}
