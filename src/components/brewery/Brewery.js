import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'routes'
import CityCard from '../common/cityCard/CityCard'
import BreadCumb from '../common/breadCumb/BreadCumb'

const breweryImage1 = '/static/images/image-brewery-match.png'
const breweryImage2 = '/static/images/image-brewery-micro.png'

const breadCumb = [
    {
        name: "HOME",
        url: "/",

    },
    {
        name: "BREWERY",
        url: "/brewery",
    },

]
const data = [
    {
        title: `Breweries and food trucks, truly a match made in heaven`,
        desc: `Nothing goes better with a nice cold beer than some salty eats. Craft breweries are frequently so specialized and already have plenty of investment in beer manufacturing equipment, it just doesn’t make sense to add a commercial kitchen to the mix. Meanwhile, food trucks are looking for ideal locations packed with hungry patrons. And thus, the sacred bond between breweries and food trucks emerged. Rather than going to a restaurant and just staying for your meal, going to a brewerycan be a one beer or multi-hour event. Breweries know that having a good food truck parked outside brings in more customers and extends their customer stay. By keeping the food and the drinks separate, both become a unique experience for the consumer. Some breweries only host food trucks on Saturdays or for special events, others have a daily food truck and multiple options on the weekends. With Truckster, you can explore all the nearby breweries and their upcoming food truck schedules, so you can always find the best beer and food pairings out there.`,
        image: breweryImage1
    },
    {
        title: `The rise of the microbrewery`,
        desc: `As recently as 2012, it’s estimated that the two leading beer manufacturers controlled 90% of the beer production in the US. Since then, America has seen a dramatic shift in consumer tastes and demand. Consumers have become more sophisticated in their beer knowledge and specific in their tastes. Just think about it, 20 years ago you would have been hard pressed to find an India Pale Ale at your local liquor store. This trend, compounded by the movement to purchase from local providers and to support small business have created the ideal environment for craft breweries to flourish.Microbreweries are designated by limited production and generally local distribution. With a desirable lifestyle for the brewers and plenty of demand from the consumers, openings of microbreweries quickly snowballed. Similarly, beer gardens offering several brewery options have thrived. Enthusiasts and casual beer drinkers alike have benefitted from this massive shift in the beer industry. And it’s helped develop a natural habitat for the burgeoning food truck movement as well. `,
        image: breweryImage2
    }
]

class Brewery extends Component {

    // render category card 

    renderBreweryCard(cities) {
        console.log("cities", cities)
        return cities.map((item, index) => {
            return <Col key={index} style={{ marginBottom: "16px" }} span={8}>
                <CityCard type="brewery" data={item} />
            </Col>
        })
    }


    render() {
        const cities = this.props.cities
        return (
            <div className="brewery">
                <div className=" main-wrapper">
                    <div>
                        <BreadCumb breadCumb={breadCumb} />
                    </div>
                    <h1 className="title DisplayBlackCenter">
                    Explore Local Breweries by City
                </h1>
                    <div className="desc LeadRegularDarkGreyCenter">
                    Consider yourself a craft beer aficionado? Looking for the best taprooms around? We got you! Search Truckster’s cities to find everything you need on the best local breweries.</div>

                    <Row style={{ paddingTop: "30px" }} gutter={16}>
                        {cities && this.renderBreweryCard(cities)}

                    </Row>

                    <div className="brewery__news">

                        <div className="brewery__news--item" >
                            <img src={data[0].image} />
                            <div>
                                <div className="title Display-3BlackLeft">{data[0].title}</div>
                                <div className="desc Body-2RegularBlackLeft">{data[0].desc}</div>
                            </div>

                        </div>
                        <div className="brewery__news--item" >

                            <div>
                                <div className="title Display-3BlackLeft">{data[1].title}</div>
                                <div className="desc Body-2RegularBlackLeft">{data[1].desc}</div>
                            </div>
                            <img src={data[1].image} />
                        </div>

                    </div>

                </div>
            </div>
        )


    }
}

export default Brewery
