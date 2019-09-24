export function getUsersList() {
  const users_list_url = 'https://randomuser.me/api/?results=10&seed=abc';

  return fetchMethod(users_list_url);
}

export function getUserData() {
  const user_data_url = 'https://randomuser.me/api/';

  return fetchMethod(user_data_url);
}

function fetchMethod(url) {
  return fetch(url)
    .then(function(data) {
      console.log('data: ', data);
      return data.json();
    })
    .catch(function(error) {
      console.log('error: ', error);
      return error.text();
    });
}
