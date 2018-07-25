import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Pairing from './Pairing'
import { getPairing, } from '../../api/pairingApi'
import { mountPairing, } from '../../actions/pairingAction'
import Head from '../head'
let flag = false
class PairingContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasMore: true
        }
    }

    componentDidMount() {
        this.props.mountPairing()
    }
    loadMorePairing() {
        const { getPairing, currentPage, lastPage, pairings } = this.props

        if (currentPage === 1 && pairings.length === 0 && !flag) {
            getPairing("this_week=true&city", "denver", currentPage)
            flag = true
        }
        else if (currentPage === 1 && lastPage === 1 && pairings.length !== 0) {
            this.setState({
                hasMore: false
            })
        }
        else if (currentPage < lastPage)
            getPairing("this_week=true&city", "denver", currentPage + 1)
        else if (currentPage + 1 > lastPage && pairings.length !== 0) {
            this.setState({
                hasMore: false
            })
        }
    }

    render() {
        return (
            <div>
                <Head
                    url="https://gotruckster.com/"
                    title="Find Denver Food Truck & Brewery Pairings - Truckster"
                >
                    <link rel="canonical" href="https://truckster.herokuapp.com/food-truck/co/denver" />
                </Head>
                <Pairing
                    {...this.state}
                    {...this.props}
                    loadMorePairing={() => this.loadMorePairing()}
                />
            </div>
        )
    }
}
export function mapStateToProps(state) {
    return {
        pairings: state.pairingReducer.pairings,
        errorPairing: state.pairingReducer.error,
        currentPage: state.pairingReducer.currentPage,
        lastPage: state.pairingReducer.lastPage
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getPairing,
        mountPairing
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(PairingContainer);
