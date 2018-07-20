// @flow

import fetch from 'node-fetch';

let sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function getUserRepos(userID) {
  await sleep(200);

  let url = `https://api.github.com/users/${userID}/repos`;
  let reposPromise1 = fetch(url).then((res) => res.json);
  let reposPromise2 = fetch(url).then((res) => res.json);
  let repos1 = await reposPromise1;
  let repos2 = await reposPromise2;

  let [repos1, repos2] = await Promise.all([reposPromise1, reposPromise2]);

  await sleep(300);
  return repos.map((repo) => repo.name);
}
