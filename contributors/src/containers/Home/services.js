
export function fetchContributors(user, repo) {
    return fetch(`https://api.github.com/repos/${user}/${repo}/contributors`)

}
