class HabitsApi {
  static requestHeaders() {
    return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
  }

  static getUserHabits() {
    const headers = this.requestHeaders();
    const request = new Request('http://localhost:3001/habits', {
      method: 'GET',
      headers: headers
    });

    return fetch(request)
      .then(response => response.json())
      .catch(error => error)
  }
}

export default HabitsApi;
