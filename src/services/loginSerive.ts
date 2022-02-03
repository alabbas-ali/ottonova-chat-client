
interface Credentials {
  username: string
  password: string
}

/**
 * this function is a replacment of server side creating a JWT token for the user 
 * @param credentials 
 * @returns 
 */
export async function loginUser(credentials: Credentials) {
	const HMACSHA256 = (_stringToSign: string, _secret: string) => "not_implemented"

	// The header typically consists of two parts: 
	// the type of the token, which is JWT, and the signing algorithm being used, 
	// such as HMAC SHA256 or RSA.
	const header = {
		"alg": "HS256",
		"typ": "JWT",
		"kid": "vpaas-magic-cookie-1fc542a3e4414a44b2611668195e2bfe/4f4910"
	}
	const encodedHeaders = btoa(JSON.stringify(header))


	// The second part of the token is the payload, which contains the claims.
	// Claims are statements about an entity (typically, the user) and 
	// additional data. There are three types of claims: 
	// registered, public, and private claims.
	const claims = {
		username: credentials.username,
		role: "user",
	}
	const encodedPlayload = btoa(JSON.stringify(claims))


	// create the signature part you have to take the encoded header, 
	// the encoded payload, a secret, the algorithm specified in the header, 
	// and sign that.
	const signature = HMACSHA256(`${encodedHeaders}.${encodedPlayload}`, "mysecret")
	const encodedSignature = btoa(signature)

	const jwtToken = `${encodedHeaders}.${encodedPlayload}.${encodedSignature}`
	return {
		token: jwtToken
	}
}