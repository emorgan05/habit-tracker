class StarsApi {
  static createNewStar(star) {
    const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
    const request = new Request('http://localhost:3001/stars', {
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
