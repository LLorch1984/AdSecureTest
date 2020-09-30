import { createStore } from 'redux'
import rootReducer from './reducers/index'
import initialState from './reducers/initialState'
import * as actions from '../containers/Home/actions'


it('should handle loading contributors', () => {
    const store = createStore(rootReducer, initialState)
    const contributors = [{
        avatar_url: "https://avatars0.githubusercontent.com/u/950133?v=4",
        contributions: 217,
        events_url: "https://api.github.com/users/manuelbarzi/events{/privacy}",
        followers_url: "https://api.github.com/users/manuelbarzi/followers",
        following_url: "https://api.github.com/users/manuelbarzi/following{/other_user}",
        gists_url: "https://api.github.com/users/manuelbarzi/gists{/gist_id}",
        gravatar_id: "",
        html_url: "https://github.com/manuelbarzi",
        id: 950133,
        login: "manuelbarzi",
        node_id: "MDQ6VXNlcjk1MDEzMw==",
        organizations_url: "https://api.github.com/users/manuelbarzi/orgs",
        received_events_url: "https://api.github.com/users/manuelbarzi/received_events",
        repos_url: "https://api.github.com/users/manuelbarzi/repos",
        site_admin: false,
        starred_url: "https://api.github.com/users/manuelbarzi/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/manuelbarzi/subscriptions",
        type: "User",
        url: "https://api.github.com/users/manuelbarzi"
    }]

    const action = actions.loadContributorsSucces(contributors)
    store.dispatch(action)

    const loadedContributor = store.getState().contributors[0]
    expect(loadedContributor).toEqual(contributors)
})