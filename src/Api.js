export function getUsersList() {
  const users_list_url = `https://randomuser.me/api/?inc=name,picture,login&results=20&seed=abc`;

  return fetchMethod(users_list_url);
}

export function getUserData() {
  const user_data_url = `https://randomuser.me/api/`;

  return fetchMethod(user_data_url);
}

export function getUserAuthData() {
  const user_data_url = `./auth.json`;

  return fetchMethod(user_data_url);
}

function fetchMethod(url) {
  return fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(function(data) {
      return data;
    })
    .catch(function(error) {
      return error.toString();
    });
}
