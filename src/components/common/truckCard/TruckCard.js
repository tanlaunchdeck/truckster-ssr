import React, { Component } from 'react';
import { Card, Rate } from 'antd'
import { Link } from 'routes'

const truckIcon = ('/static/images/truck-marker-icon.png')
class TruckCard extends Component {
    renderCoverPhoto(coverURL) {
     
        if (coverURL === null)
            return truckIcon
        else if (coverURL[0] && coverURL[0].thumbnails && coverURL[0].thumbnails.large)
            return coverURL[0].thumbnails.large.url
        else return coverURL[0].url
    }
    render() {
        const { data } = this.props
        let coverURL = "", logoURL = ""
        if (typeof (data.cover_photo) !== 'string') {
            coverURL = data.cover_photo
            logoURL = data.logo
        }
        else if (data.cover_photo === null) {
            coverURL = truckIcon
        }
        else {
            coverURL = JSON.parse(data.cover_photo)
            logoURL = JSON.parse(data.logo)
        }
      
        return (
            <Link prefetch to={`/food-truck/${data.slug}`} >
                <a>

                    <Card bordered={false} className="truck-card-container" cover={
                        <div className="truck-cover">
                            <div className="truck-image"
                                style={{
                                    backgroundImage: `url(${this.renderCoverPhoto(coverURL)})`,
                                    backgroundSize: coverURL ?
                                        "cover" : "50px"
                                }}
                            />

                            <div className="overlay-logo">
                                <img alt="logo" src={logoURL ? logoURL[0].url : truckIcon} />
                            </div>
                        </div>

                    }
                    >
                        <div className="meta-header">
                            <div className="meta-header-title  Body-2SemiBlackLeft ">{data.name}</div>
                            <div className="cuisine-tag">
                                {
                                    data.cuisine.map((item, index) => {
                                        if (index === 0)
                                            return <div key={index} className="cuisine-tag-item CaptionGreyLeft">
                                                {item.name} </div>
                                        else return <div key={index} className="cuisine-tag-item CaptionGreyLeft">
                                            <span>&bull;</span>   {item.name} </div>
                                    })
                                }
                            </div>
                            <Rate disabled value={parseInt(data.avg_rating, 10)} />

                        </div>

                    </Card>
                </a>
            </Link>
        )
    }
}

export default TruckCard;
