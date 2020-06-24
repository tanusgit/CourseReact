import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const dish = this.props.recipe;
        return (<Card> <h3>Comments</h3>
            {
                dish.comments.map((c) => (
                    <>
                        <ul>
                            <p>{c.comment}</p>
                            <p>-- {c.author}, {c.date}</p>
                            <p></p>

                        </ul>
                    </>)
                )
            }</Card>
        )
    }

}

export default DishDetail;