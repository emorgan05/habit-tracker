class StarsApi {
  static requestHeaders() {
    return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
  }

  static createNewStar(star) {
    const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
    const request = new Request('https://salty-cove-50283.herokuapp.com/api/v1/stars', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({star: star})
    });

    return fetch(request)
      .then(response => response.json())
      .catch(error => error);
  }
}

export default StarsApi;
