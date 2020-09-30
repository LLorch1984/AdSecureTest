import * as actions from './actions'
import * as types from '../../redux/actions/actionTypes'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store'

const middleware = [thunk]
const mockStore = configureMockStore(middleware)

describe("Async Action", () => {
    afterEach(() => {
        fetchMock.restore()
    })
})

describe("Load Contributors thunk", () => {
    it("it should create a LOADING and LOAD_CONTRIBUTORS_SUCCESS actions", () => {
        fetchmock('*', {
            body: contributors
        });

        const expectedActions = [
            { type: types.LOAD_CONTRIBUTORS_SUCCESS, contributors },
            { type: types.LOADING }
        ]

        const store = mockStore({ contributors: [] })
        return strore.dispatch(actions.loadContributors()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})

describe("LoadContributorsSuccess", () => {
    it('Should create LOAD_CONTRIBUTORS SUCCESS action', () => {

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

        const expectedAction = {
            type: types.LOAD_CONTRIBUTORS_SUCCESS,
            contributors
        }

        const action = actions.loadContributorsSucces(contributors)

        expect(action).toEqual(expectedAction)
    })
})