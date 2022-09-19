import jwt from "./jsonwebtoken";
var tokenBase64 =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiZXhwIjoiMTUxMTk1MDcwMyIsImFkbWluIjp0cnVlfQ.wFC-9ZsqA9QuvLkRSkQmVYpUmgH9R-j8M4D0GECuPHY";

const token = jwt.decode(tokenBase64);
const tokenExpirationDate = token.exp;
console.log(tokenExpirationDate);
