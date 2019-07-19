import React, { Component } from 'react';
import _breadCumb from './_breadCumb.less'

class CategoryCard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        const { breadCumb } = this.props
console.log("breadCubm", breadCumb)
        return (
            <div className="bread-cum">
                <style dangerouslySetInnerHTML={{ __html: _breadCumb }} />
                {
                    breadCumb.map((item, index) => {
                        return <div className="bread-cum__item LabelTinyGrey2Left" key={index}>{` ${item.name}`} {index !== breadCumb.length - 1 && ` > `} </div>
                    })
                }
            </div>
        )
    }
}

export default CategoryCard;
