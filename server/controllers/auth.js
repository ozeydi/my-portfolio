import { expressjwt } from "express-jwt";
import jwksRsa from "jwks-rsa";

// Authentication middleware
// This middleware will check access token in authorization headers
// It will verify access token against Auth0 JSON web key set

export const checkJwt = expressjwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 10,
    jwksUri: "https://dev-6m3auzxev8j5u08u.us.auth0.com/.well-known/jwks.json",
  }),
  audience: "https://dev-6m3auzxev8j5u08u.us.auth0.com/api/v2/",
  issuer: "https://dev-6m3auzxev8j5u08u.us.auth0.com/",
  algorithms: ["RS256"],
});
