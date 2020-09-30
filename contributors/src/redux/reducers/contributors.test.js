import contributorsReducer from './contributors'
import * as actions from '../../containers/Home/actions'

it('should load contributors when pass LOAD_CONTRIBUTORS_SUCCESS', () => {

    const initialState = []



    const contributors = [
        {
            name: 'A'
        },
        {
            name: 'B'
        }
    ]

    const action = actions.loadContributorsSucces(contributors)

    const newState = contributorsReducer(initialState, action)

    expect(newState.length).toEqual(2)
})