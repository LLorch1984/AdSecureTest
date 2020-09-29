import React, { useEffect } from 'react'
import Loading from '../../components/Spinner/Spinner'
import List from '../../components/List/List'
import { connect } from 'react-redux'
import { loadContributors } from './actions'

const Home = ({ isLoading, contributors, loadContributors }) => {
    console.log(isLoading)


    useEffect(() => {
        loadContributors()
    }, [])

    return (
        <>

            {!isLoading ? <List contributors={contributors} /> : <Loading />}
        </>)
}

function mapStateToProps(state) {
    return {
        contributors: state.contributors,
        isLoading: state.loading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadContributors
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
