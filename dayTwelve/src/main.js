// @flow
import fetch from 'node-fetch';
let promise = fetch('https://api.github.com/users/mozilla/repos');

promise
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (let repoData of data) {
      console.log('name: ' + repoData.name);
      console.log('subscribers: ' + repoData.subscribers_url);

      console.log(getSubs(repoData.subscribers_url));
    }
  });

function getSubs(repoSubAPI) {
  let getSubData = fetch(repoSubAPI);

  getSubData
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.length);
    });
}
