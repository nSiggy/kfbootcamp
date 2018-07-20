// @flow

type Action =
  | {
      type: 'WAIT';
      ms: number;
    }
  | {
      type: 'FETCH';
      url: string;
    };

function* getUserRepos(userID: string) {
  yield {type: 'WAIT', ms: 200};
  let repos = yield {
    type: 'FETCH',
    url: `https://api.github.com/users/${userID}/repos`,
  };
  yield {type: 'WAIT', ms: 300};
  return repos.map((repo) => repo.name);
}

function run() {}

console.log(getUserRepos('sstur'));
// let promise: Promise<mixed> = run(getUserRepos('sstur'));
//
// promise.then((result) => {
//   console.log(result);
// });
