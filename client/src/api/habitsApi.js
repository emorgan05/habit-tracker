class HabitsApi {
  static requestHeaders() {
    return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
  }

  static getUserHabits() {
    const headers = this.requestHeaders();
    const request = new Request('api/v1/habits', {
      method: 'GET',
      headers: headers
    });

    return fetch(request)
      .then(response => response.json())
      .catch(error => error)
  }

  static createHabit(habit) {
    const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
    const request = new Request('https://salty-cove-50283.herokuapp.com/api/v1/habits', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({habit: habit})
    });

    return fetch(request)
      .then(response => response.json())
      .catch(error => error);
  }
}

export default HabitsApi;
