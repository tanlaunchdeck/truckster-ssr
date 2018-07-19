import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Truck from './Truck'
import Fade from 'react-reveal/Fade';
import { mountTruck } from '../../../actions/truckAction'
import { searchTruck } from '../../../api/truckApi'
let renderPageFlag = false
class TruckContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasMore: true,
        }
    }

    componentWillMount() {
        
        sessionStorage.setItem("reloadUrl", window.location.href)
        renderPageFlag = false
    }
    componentDidMount() {
        this.props.mountTruck()
      
    }
    loadMoreTruck() {
        const { currentPage, lastPage, searchTruck } = this.props

        if (!currentPage && !renderPageFlag) {
            renderPageFlag = true
            searchTruck("", "", 1)
        }

        else if (currentPage < lastPage)
            searchTruck("", "", currentPage + 1)

        else if (currentPage === lastPage && currentPage) {
            this.setState({
                hasMore: false
            })
        }

    }
    render() {

        return (
            <Fade>
                <Truck
                    {...this.state}
                    {...this.props}
                    loadMoreTruck={() => this.loadMoreTruck()}
                />
            </Fade>
        )
    }
}
export function mapStateToProps(state) {
    return {
        error: state.truckReducer.error,
        trucks: state.truckReducer.trucks,
        currentPage: state.truckReducer.currentPage,
        lastPage: state.truckReducer.lastPage
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        mountTruck,
        searchTruck
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(TruckContainer);
