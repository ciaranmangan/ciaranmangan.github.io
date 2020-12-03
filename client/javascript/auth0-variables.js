// Declare consts for Auth0 details reqired in this app


// The Auth0 id for this app
const AUTH0_CLIENT_ID = '8n84ZbYTye1pLfG9Wwcy3lu1TZHJcF9m';

// Your Auth0 domain aka account/ tenant
const AUTH0_DOMAIN = 'x00008519.eu.auth0.com';

// Users of this app require access to the API, identified by...
// This value is the 'Identifier' in your API settings 
const AUDIENCE = 'https://productsapi.ie';

// Where Auth0 should return the token to after authentication
const AUTH0_CALLBACK_URL = 'http://localhost:8082';

// Initialise Auth0 connection with parameters defined above
const auth0WebAuth = new auth0.WebAuth({
  domain: AUTH0_DOMAIN,
  clientID: AUTH0_CLIENT_ID,
  redirectUri: AUTH0_CALLBACK_URL,
  responseType: 'id_token token',
  audience: AUDIENCE
});

const auth0Authentication = new auth0.Authentication(auth0WebAuth, {
  domain: AUTH0_DOMAIN,
  clientID: AUTH0_CLIENT_ID
});