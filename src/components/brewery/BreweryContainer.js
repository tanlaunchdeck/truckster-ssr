import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Brewery from './Brewery'

import _brewery from './_brewery.less'
import _cityCard from '../common/cityCard/_cityCard.less'
import { getDataInitial } from '../../../global'
class BreweryContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasMore: true
        }
    }
    static async getInitialProps({ req, query }) {
        let cities

        cities = await getDataInitial("api/consumer/v1/city")

        return {
            cities
        }
    }
    render() {
        console.log("tgis.prips", this.props)
        return (
            <div className="gray-background">

                <style dangerouslySetInnerHTML={{
                    __html: _cityCard + _brewery
                }} />
                <Brewery
                    {...this.state}
                    {...this.props}

                />
            </div>

        )
    }
}
export function mapStateToProps(state) {
    return {

    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(BreweryContainer);
