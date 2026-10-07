import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react'


createRoot(document.getElementById('root')).render(
  <Auth0Provider
      domain="{seu-domain-aqui}"
      clientId="{seu-client-id-aqui}"
      authorizationParams={{
        audience: "{seu-audience-aqui}",
        redirect_uri: window.location.origin
      }}
    >
    <App />
  </Auth0Provider>,
)