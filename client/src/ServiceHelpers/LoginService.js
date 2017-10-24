const LoginService = {

  login: (data, callback) => {

    return fetch('/login', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(LoginService.checkStatus).then(callback);
  },

  //check the returned status after the request, parse if the server returned a json response
  checkStatus: (response) => {

    if (response.status === 200 || response.status === 401) {
      return LoginService.parseJSON(response);
    } else {
      response.message = 'Sample server is not up. Go to the folder carrefour/server and run "npm install" and "npm start"';
      return response;
    }
  },

  parseJSON: (response) => {
    return response.json();
  }
}

export default LoginService;
