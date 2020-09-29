import { types } from '../../redux/actions/actionTypes'
import { fetchContributors } from './services'

export function loadContributorsSucces(contributors) {
    console.log(contributors)

    return { type: types.contributors.LOAD_CONTRIBUTORS_SUCCES, contributors }
}

function loadingCall() {
    return { type: types.commons.LOADING }
}
function loadingSuccess() {
    return { type: types.commons.NO_LOADING }
}

export function loadContributors(user, repo) {
    return function (dispatch) {
        debugger
        dispatch(loadingCall())


        fetchContributors(user, repo)
            .then(response => response.json())
            .then(contributors => {
                dispatch(loadContributorsSucces(contributors))
            }).catch(error => {
                console.log(error)
            }).finally((type) => dispatch(loadingSuccess(type)))


    }
}
