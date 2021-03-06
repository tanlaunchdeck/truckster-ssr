import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Truck from './Truck'
import { mountTruck } from '../../actions/truckAction'
import { searchTruck } from '../../api/truckApi'
import Head from '../head'
import _truck from './_truck.less'
class TruckContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasMore: true,
        }
    }


    componentDidMount() {
        const { mountTruck, searchTruck } = this.props
        mountTruck()
        searchTruck("per_page", "12", 1)
        window.scrollTo(0, 0);
    }
    loadMoreTruck() {
        const { currentPage, lastPage, searchTruck } = this.props

        if (currentPage && lastPage) {
            if (currentPage < lastPage)
                searchTruck("per_page", "12", currentPage + 1)

            else if (currentPage === lastPage && currentPage) {
                this.setState({
                    hasMore: false
                })
            }
        }



    }
    render() {

        return (
            <div className="gray-background">
                <style dangerouslySetInnerHTML={{
                    __html: _truck
                }} />
                <Head
                    ogImage="https://dev.gotruckster.com/storage/avatars/0Mv5ywY5QF0o3WwybN0hBvhasU88RM4uKnjpL3Xx.png"
                    url="https://gotruckster.com/food-truck/co/denver/all"
                    title="View All Food Trucks in Denver, Colorado"
                    description="Updated list of Denver food trucks. Find gourmet street food near you."
                />
                <Truck
                    {...this.state}
                    {...this.props}
                    loadMoreTruck={() => this.loadMoreTruck()}
                />
            </div>

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
