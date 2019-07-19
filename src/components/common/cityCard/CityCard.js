import React, { Component } from 'react';
import { Router } from 'routes'
const defaultImage = '/static/images/denver-city.jpg'

class CityCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }

    render() {

        const { data, type } = this.props
        const imageURL = data.image || defaultImage
        const url = type !== "brewery" ? `/food-truck/${data.state.short_name.toLowerCase()}/${data.slug}` : `/brewery/${data.state.short_name.toLowerCase()}/${data.slug}`
        return (
            <div onClick={() => Router.pushRoute(url)} style={{ backgroundImage: `url(${imageURL})` }}
                className="city-card-container" >


                <div className="content-city">
                    <div className="title">{data.name}</div>
                    {
                        <div className="state SubheadingWhiteCenter">{data.state.name}</div>
                    }

                </div>


            </div>
        )
    }
}

export default CityCard;
