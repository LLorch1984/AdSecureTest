import React, { useState } from 'react'
import { connect } from 'react-redux'
import { loadContributors } from '../../containers/Home/actions'
import PropTypes from 'prop-types'




function List({ loadContributors, contributors }) {

    const [user, setUser] = useState('')
    const [repo, setRepo] = useState('')


    const handleSubmit = () => {
        loadContributors(user, repo)

    }

    return (
        <>
            <div >
                <h1>SEARCH REPOS</h1>
                <form>
                    <div className="form-group w-25">
                        <div className="col-xs-3">
                            <label for="user">User</label>
                            <input className="form-control" onChange={event => setUser(event.target.value)} type='text' id='user' name="user" placeholder="user"></input>
                        </div>
                        <div className="col-xs-3">
                            <label for="repo">Repositori</label>
                            <input className="form-control" onChange={event => setRepo(event.target.value)} type='text' id='repo' name="repo" placeholder="repositori"></input>
                        </div>
                        <div className="col text-center">
                            <button className="mt-3 col-5 btn btn-primary regular-button" onClick={handleSubmit}>
                                Search</button>
                        </div>
                    </div>
                </form>
                <h3>CONTRIBUTORS</h3>
                <ul className='list'>
                    {contributors.length > 0 && contributors.map(contributor => {

                        return <ul key={contributor.id}>{contributor.login}</ul>

                    })}
                </ul>
            </div>
        </>
    )
}

List.propTypes = {
    loadContributors: PropTypes.func.isRequired
}

function mapDispatchToProps(dispatch) {

    return {
        loadContributors: (user, repo) => dispatch(loadContributors(user, repo))
    }
}

function mapStateToProps(state) {

    return {
        contributors: state.contributors

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(List)