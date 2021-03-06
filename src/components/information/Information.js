import React, { Component } from 'react';

import { Row, Col, } from 'antd';
import { Link } from "routes"
const homeImage = ("/static/images/image-promo.jpg")
export default class Information extends Component {
    renderBlog(renderPage) {
        const { query } = this.props
        return renderPage.map((item, index) => {
            return <div key={index}>
                <Link prefetch to={"/info/" + item.slug}>
                    <a>
                        <h1 className="article-title Display-2BlackLeft" dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
                    </a>
                </Link>
                {
                    query && query.slug ?
                        <div>
                            <div className="blog-content" dangerouslySetInnerHTML={{ __html: item.content.rendered }} />


                        </div>
                        : <div>
                            <div dangerouslySetInnerHTML={{ __html: item.content.rendered.slice(0, item.content.rendered.indexOf(".</p>", 1)) }} />
                            <Link prefetch to={"/info/" + item.slug}>
                                <a> Continue reading</a>
                            </Link>
                        </div>

                }

            </div>
        })
    }
    renderNewer(page) {
        if (page === 2)
            return <Link prefetch to={"/info/"}>
                <a>
                    {`<< Newer posts`}
                </a>
            </Link>
        else if (page > 2)
            return <Link prefetch to={"/info/page/" + (page - 1).toString()}>
                <a>
                    {`<< Newer posts`}
                </a>
            </Link>
        else return <div />

    }
    render() {
        const { parsedInfoPage, renderPage, query } = this.props

        return (
            <article className="info-wrapper media">
                <div className="Body-1SemiBlackLeft"> POST</div>
                <Row gutter={64} type="flex" align="top">
                    <Col className="blog-content" lg={15} >
                        {
                            this.renderBlog(renderPage)
                        }
                        <div className="blog-resent">
                            {this.renderNewer(parseInt(query.page))}

                            <Link prefetch to={"/info/page/2"}>
                                <a>
                                    Older posts >>
                            </a>
                            </Link>

                        </div>
                    </Col>

                    <Col className="recent-post-container" lg={9}>
                        <div className="Body-1SemiBlackLeft">Recent Posts</div>
                        <ul className="post-list">
                            {
                                parsedInfoPage.data.map((item, index) => {
                                    return <li key={index} className="post-item">
                                        <Link prefetch to={"/info/" + item.slug}>
                                            <a>{item.title.rendered}</a>
                                        </Link>

                                    </li>
                                })
                            }

                        </ul>

                        <div className="promo">
                            <Link prefetch to={"/"}>
                                <a>
                                    <img src={homeImage} alt="promo" />
                                </a>
                            </Link>


                        </div>
                    </Col>
                </Row>
            </article >
        )
    }
}
