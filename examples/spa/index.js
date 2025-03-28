const { Authenticator } = require('cognito-at-edge');

const authenticator = new Authenticator({
  region: 'us-east-1', // user pool region
  userPoolId: 'us-east-1_tyo1a1FHH',
  userPoolAppId: '63gcbm2jmskokurt5ku9fhejc6',
  userPoolDomain: 'domain.auth.us-east-1.amazoncognito.com',
});

exports.handler = async (request) => authenticator.handle(request);
