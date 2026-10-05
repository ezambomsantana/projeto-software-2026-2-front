import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react'


createRoot(document.getElementById('root')).render(
  <Auth0Provider
      domain="dev-x65bk1hkee81c774.us.auth0.com"
      clientId="kFjkpeVhXxhTGY4zKMh4ytjHhOWmdYYc"
      authorizationParams={{
        audience: "https://dev-x65bk1hkee81c774.us.auth0.com/api/v2/",
        redirect_uri: window.location.origin
      }}
    >
    <App />
  </Auth0Provider>,
)