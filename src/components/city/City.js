import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'routes'
import CityCard from '../common/cityCard/CityCard'
import BreadCumb from '../common/breadCumb/BreadCumb'

const cityImage1 = '/static/images/image-city-comming.png'
const cityImage2 = '/static/images/image-city-taking.png'

const breadCumb = [
    {
        name: "HOME",
        url: "/",

    },
    {
        name: "FOOD TRUCKS",
        url: "/food-trucks",
    },

]
const data = [
    {
        title: `Truckster is coming to your city!`,
        desc: `It’s hard to remember the names of trucks you stumbled upon and loved, and even if you do manage to come up with their name, how do you find them? Food trucks are mobile, so naturally they are on the go. In this day and age, there needs to be a better way to do this. We get you! That’s why Truckster’s here and available as an app when you’re on the go. Not a fan of lines? Amen. Skip those pesky lines with mobile ordering directly from your favorite trucks. Just download the Truckster app to get started.

        Truckster’s platform today spans 6 cities and lists nearly 1,000 food trucks. We’re not stopping there! US, we’re coming for you. Let us know your favorite food truck city so we can make sure you’re next on our list!`,
        image: cityImage1
    },
    {
        title: `Food Trucks are taking over!`,
        desc: `How many food trucks are there in the US? Where did the movement start? Where are food trucks today?

        The answer is a ton, and everywhere! While mobile food has been around for hundreds of years, the modern food truck phenomenon is believed to have started either on the beach in Hawaii or in Los Angeles with the first taco truck serving late night eats outside of a local bar in the 70’s. Also around that time, labor unions in New York City and Chicago started feeding workers using the not-so-friendly term of roach coaches.
        
        We have come a long way since then! In the US today, there are estimated to be around 25,000 food trucks, trailers, and food carts. And thanks to food truck fans nationwide, that number is growing every year. Food trucks can be found in nearly every major US city, and are popular for locals and tourists alike. You can find authentic ethnic food, farm to table ingredients, no fuss comfort food, and refined, gourmet cuisines.
        
        In most cities, food trucks can park anywhere with public parking or with permission on private property. Special event permits are used for food trucks in public spaces like parks or pavilions. Some food trucks post up in food truck specific parks or outside of breweries or bars and stay there permanently or for several months at a time. This is more common in cities like Austin and Portland, where food truck destinations have thrived. No matter what city you live in, a great place to find food trucks would be at large events like festivals, conventions, farmers markets, or neighborhood parties. Truckster lists popular events happening in your city where you can find delicious options!`,
        image: cityImage2
    }
]

class City extends Component {

    // render category card 

    renderCityCard(cities) {
        console.log("cities", cities)
        return cities.map((item, index) => {
            return <Col key={index} style={{ marginBottom: "16px" }} span={8}>
                <CityCard data={item} />
            </Col>
        })
    }


    render() {
        const cities = this.props.cities
        return (
            <div className="city">
                <div className=" main-wrapper">
                    <div>
                        <BreadCumb breadCumb={breadCumb} />
                    </div>
                    <h1 className="title DisplayBlackCenter">
                        Explore Local Food Trucks by City
                </h1>
                    <div className="desc LeadRegularDarkGreyCenter">
                        Looking for local, delicious eats? We got you! Search Truckster's cities to find everything you need on the best local food trucks.</div>

                    <Row style={{ paddingTop: "30px" }} gutter={16}>
                        {cities && this.renderCityCard(cities)}

                    </Row>

                    <div className="city__news">

                        <div className="city__news--item" >
                            <img src={data[0].image} />
                            <div>
                                <div className="title Display-3BlackLeft">{data[0].title}</div>
                                <div className="desc Body-2RegularBlackLeft">{data[0].desc}</div>
                            </div>

                        </div>
                        <div className="city__news--item" >

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

export default City
