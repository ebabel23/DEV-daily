let url1 =
  "https://auth.cloud.funkedigital.de/auth/realms/funke-bzv/protocol/openid-connect/auth?client_id=spark-fe-hk&scope=openid%20profile%20email&response_type=id_token%20token&response_mode=form_post&nonce=0d41f933-4248-41fe-bf9e-d1718eb870da&redirect_uri=https%3A%2F%2Fwww.harzkurier.de%2Fredirect.html%3Fo%3D%252Fplus%252F%253FdebugPiano";
console.log(encodeURIComponent("?"));
console.log(decodeURIComponent("%253F"));

url1Spliceds = url1.split("%3F");
console.log(url1Spliceds);

if (url1Spliceds[1].includes("%253F")) {
  url1 = url1 + "%2526kc%253DSuccess";
} else {
  url1 = url1 + "%253DKc%253DSuccess";
}
