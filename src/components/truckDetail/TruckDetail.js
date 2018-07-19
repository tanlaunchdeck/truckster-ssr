import React, { Component } from 'react';
import { Row, Col, Rate, Anchor, Spin, Button, Tooltip, Icon, Card, Menu, Radio } from 'antd';
import { Link } from 'react-router-dom'
import Map from '../common/map/Map'
import ReviewModifyContainer from '../common/reviewModify/ReviewModifyContainer'
import ReviewSummary from '../common/reviewSummary/ReviewSummary'
import UserReview from '../common/userReview/UserReview'
import './_truckDetail.less'
import Fade from 'react-reveal/Fade'
import moment from 'moment'
import Calendar from '../common/calendar/Calendar'
const LinkAnchor = Anchor.Link;

const closeIcon = require("/static/images/close-icon.svg")
const homeImage = require("/static/images/home-image.jpg")
const shareIcon = require('/static/images/share-icon.png')
const timeIcon = require('/static/images/time-icon.png')
const mailIcon = require('/static/images/mail-icon.png')
const phoneIcon = require('/static/images/phone-icon.png')
const facebookIconWhite = require('/static/images/facebook-icon-white.svg')
const instagramIconWhite = require('/static/images/instagram-icon-white.svg')
const twitterIconWhite = require('/static/images/twitter-icon-white.svg')

class TruckDetail extends Component {

    renderSchedule(calendarDetail) {
        const { handleClickSchedule, iconMarker, locationArr, locations, handleModeChange, mode, events, handleClickEvent, selectedKey } = this.props

        return <div>
            <div className="detail-time">
                <div className="detail-time-left">
                    <div className="time">
                        <img alt="back" src={timeIcon} />
                    </div>
                    <div className="Body-1MediumBlackLeft">
                        Open time  </div>

                </div>
                <div className="detail-time-right">
                    <Radio.Group onChange={handleModeChange} value={mode}>
                        <Radio.Button className="Body-1MediumBlackLeft radio-button" value="upcoming">UPCOMING</Radio.Button>
                        <Radio.Button className="Body-1MediumBlackLeft radio-button" value="month">MONTH</Radio.Button>
                    </Radio.Group>
                </div>
            </div>
            {
                mode === "upcoming" ? <div>
                    {
                        locations.length > 0 ? <Row className="detail-schedule">
                            <Col className="schedule" xs={24} sm={24} lg={6} md={6}>
                                <Menu
                                    selectedKeys={[selectedKey]}
                                    defaultSelectedKeys={[locations[0].index]}
                                    onClick={(e) => handleClickSchedule(e)}
                                >
                                    {
                                        locations.map((item, index) => {
                                            return <Menu.Item key={item.index}>
                                                <div className='schedule-item'>
                                                    <div className="weekday CaptionGreyLeft">
                                                        {moment(item.timeDisplay, "YYYY-MM-DD hh:mm a").format("dddd, MMM DD, YYYY")}
                                                    </div>
                                                    <div className="time CaptionBlackLeft">
                                                        {moment(item.timeDisplay, "YYYY-MM-DD hh:mm a").format("hh:mm a")} -
                                             {moment(item.end_time).format("hh:mm a")}</div>
                                                </div>
                                            </Menu.Item>
                                        })
                                    }

                                </Menu>
                            </Col>
                            <Col className="schedule" xs={24} sm={24} lg={18} md={18}>
                                <div className="map" >
                                    <Map icon={iconMarker} location={locationArr} />
                                </div>
                            </Col>
                        </Row> : <div className="no-schedule">There are no upcoming schedules for this truck </div>
                    }
                </div> : <div className="detail-schedule">
                        <Calendar handleClickEvent={handleClickEvent} events={events} />
                    </div>
            }


        </div>
    }
    renderInfo(truckDetail) {
        return <div >

            <div className="contact highlight">
                <p className="ButtonGreyLeft">CONTACTS</p>
                {
                    truckDetail.contact_email && <div className="location">
                        <img alt="mail" src={mailIcon} />
                        <a href={`mailto:${truckDetail.contact_email}`} className="Body-2GreyLeft">{truckDetail.contact_email}</a>
                    </div>
                }

                {
                    truckDetail.phone && <div className="location">
                        <img alt="phone" src={phoneIcon} />
                        <a href={`tel:${truckDetail.phone}`} className="Body-2GreyLeft">{truckDetail.phone}</a>
                    </div>
                }

                <div className="social">
                    {
                        truckDetail.facebook_url && <a target="_blank" href={truckDetail.facebook_url} className='image-holder'>
                            <img alt="facebook" src={facebookIconWhite} />
                        </a>
                    }
                    {
                        truckDetail.instagram_url && <a target="_blank" href={truckDetail.instagram_url} className='image-holder'>
                            <img alt="instagram" src={instagramIconWhite} />
                        </a>
                    }
                    {
                        truckDetail.twitter_url && <a target="_blank" href={truckDetail.twitter_url} className='image-holder'>
                            <img alt="twitter" src={twitterIconWhite} />
                        </a>
                    }

                </div>
            </div>
            <div className="contact highlight">
                <p className="ButtonGreyLeft">INTRODUCTION</p>
                <div className="Body-1RegularGrayLeft intro">{truckDetail.company_description}</div>

            </div>
        </div>
    }
    renderOrderDetail() {
        const { order, handleRemoveMenuItem, handleRemoveOne, handleAddOne } = this.props
        return order.map((item, index) => {
            return <div key={item.id} className="order-item-container">
                <Fade collapse bottom>
                    <div className="order-item-header">
                        <div className="Body-1RegularGrayLeft">
                            {item.name}
                        </div>
                        <img onClick={() => handleRemoveMenuItem(item)} alt="close" src={closeIcon} />
                    </div>

                    <div className="order-item-header">
                        <Button.Group className="order-item-count" size="small">
                            <Button disabled={item.count === 1} onClick={() => handleRemoveOne(item)} >
                                <Icon type="minus" />    </Button>
                            <Button >
                                {item.count}</Button>
                            <Button onClick={() => handleAddOne(item)}>
                                <Icon type="plus" />
                            </Button>
                        </Button.Group>
                        <div className="Body-1RegularBlackLeft">
                            ${item.price}
                        </div>
                    </div>
                    <hr />
                </Fade>
            </div>

        })
    }
    renderMenu(truckMenu) {
        const { handleClickMenuItem } = this.props
        if (truckMenu.category)
            return Object.entries(truckMenu.category).map((category, categoryidx) =>
                <div key={categoryidx} className="menu-container">
                    <div className="category-menu  ButtonGreyLeft">{category[0]}</div>
                    <Row gutter={25}>
                        {
                            category[1].map((item, index) => {
                                return <Col key={index} className="food" sm={12} md={12} lg={12}>
                                    <Card onClick={() => handleClickMenuItem(item)} hoverable>
                                        <div className="name Body-1MediumBlackLeft">{item.name}</div>
                                        <div className="bref CaptionGreyLeft">{item.description}</div>
                                        <div className="price Body-1MediumBlackLeft">
                                            {
                                                item.price && `$${item.price}`
                                            }
                                        </div>
                                    </Card>
                                </Col>
                            }
                            )
                        }
                    </Row>
                </div>)
    }


    renderTruckDetail(truckDetail) {
        let rateNum = parseFloat((Math.round(truckDetail.avg_rating * 2) / 2).toFixed(1), 10)
        const {
            reviews,
            isLoggedIn,
            onFavoriteChange,

            isPairing,
            toggleShareModal
        } = this.props

        return (
            <div>
                <div>
                    <div className="detail-main-header" style={{ backgroundImage: `url(${truckDetail.cover_photo ? truckDetail.cover_photo[0].url : homeImage})` }} >
                        <div className="content-detail">
                            <div className="detail-wrapper">
                                <div className="DisplayWhiteLeft name">  {truckDetail.name}</div>
                                <div className="detail-rate">
                                    <div className="rate-number Body-1SemiBlackCenter">
                                        {isNaN(rateNum) ? 0 : rateNum}
                                    </div>

                                    <div className="rate-star">
                                        <Rate disabled value={isNaN(rateNum) ? 0 : rateNum} />
                                    </div>
                                    {/* <div className=" ButtonWhiteCenter">
                                        {truckDetail.reviews_summary.total_reviews} reviews  </div> */}


                                </div>
                                <div className="flex-row">
                                    <div className="tag">
                                        {
                                            truckDetail.cuisine.map((item, index) => {
                                                return <Link key={index} to={`/truck/cuisine/${item.name}`}> <div className="tag-item Body-1MediumBlackCenter">
                                                    {item.name} </div>
                                                </Link>
                                            })
                                        }
                                    </div>
                                    <span className="left-row">
                                        {
                                            !isLoggedIn ?
                                                <Tooltip title="Login required">
                                                    <span>
                                                        <Rate disabled count={1} character={<Icon type="heart" />} />
                                                    </span>
                                                </Tooltip>
                                                :
                                                <Rate value={truckDetail.is_favourite ? 1 : 0} onChange={onFavoriteChange} count={1} character={<Icon type="heart" />} />
                                        }
                                        <img onClick={(e) => toggleShareModal(window.location.href)} alt="back" src={shareIcon} />

                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="cover">
                            <div className="cover-mask"></div>
                        </div>
                    </div>
                    <div className="body-wrapper">
                        <div className="detail-body">
                            <div className="menu-anchor">
                                <Anchor offsetTop={isPairing ? 0 : 68}>
                                    <LinkAnchor href="#info" title="Info" />
                                    <LinkAnchor href="#menu" title="Menu" />
                                    <LinkAnchor href="#reviews" title="Reviews" />
                                </Anchor>
                            </div>

                            <div className="menu-content">
                                {
                                    this.renderSchedule(truckDetail.calendar_detail)
                                }
                                {
                                    this.renderInfo(truckDetail)
                                }
                                <hr />
                                <div id="menu" className="menu-title Display-2BlackLeft">Menu</div>
                                <div className="menu-truck">
                                    {truckDetail.menus[0] &&
                                        this.renderMenu(truckDetail.menus[0])
                                    }
                                </div>
                                <hr />

                                <div className="menu-title Display-2BlackLeft">Reviews </div>

                                <div id="reviews" className="review-truck">
                                    <ReviewSummary summary={truckDetail.reviews_summary} />
                                    <ReviewModifyContainer detail={truckDetail} {...this.props} />
                                    <UserReview reviews={reviews} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        const { truckDetail, isPairing } = this.props
        return (
            <div style={{ padding: isPairing && 0 }} className="truck-detail">
                {
                    truckDetail
                        ?
                        <Fade>

                            <div id="info" className="detail-container" >
                                {
                                    this.renderTruckDetail(truckDetail)
                                }
                            </div>


                        </Fade>
                        :
                        <div className="loading-container">
                            <Spin indicator={<Icon type="loading" style={{ fontSize: 24 }} />} />
                        </div>
                }

            </div>
        )


    }
}

export default TruckDetail
