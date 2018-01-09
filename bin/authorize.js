const AWSCognito = require('amazon-cognito-identity-js')

const [poolId, clientId, username, password] = process.argv.slice(2, 6)

const authenticationDetails = new AWSCognito.AuthenticationDetails({
  Username: username,
  Password: password
})

const userPool = new AWSCognito.CognitoUserPool({
  UserPoolId: poolId,
  ClientId: clientId
})

const cognitoUser = new AWSCognito.CognitoUser({
  Username: username,
  Pool: userPool
})

cognitoUser.authenticateUser(authenticationDetails, {
  onSuccess (result) {
    console.log('ID Token: %s', result.getIdToken().getJwtToken())
  },

  onFailure (error) {
    console.error(error)
  }
})
