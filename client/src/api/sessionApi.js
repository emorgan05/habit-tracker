class SessionApi {
  static login(credentials) {
    const request = new Request('http://localhost:3001/user_token', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({auth: credentials})
    });

    return fetch(request)
      .then(response => response.json())
      .catch(error => error);
  }

  static createUser(credentials) {
    const request = new Request('api/v1/users', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({credentials: credentials})
    });

    return fetch(request)
      .then(response => response.json())
      .catch(error => error);
  }
}

export default SessionApi;
