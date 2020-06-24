import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class RenderLeader extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        {/** leadersParam is an instance variable of this class.
            leadersParam is a list of dictionary like key-value thing.
            map is like a foreach loop of Java where each
            entry is passed as 'lead'
            for(lead : leadersParam) {
                // do something with lead.
            }
         */}
        const leaders = this.props.leadersParam.map((lead) => {
            return (
                <div key={lead.id} className="col-md-12 m-1">
                    <Card>
                        <div className="row">
                            <div className="col-md-2">
                                <CardImg width="20%" src={lead.image} alt={lead.name} />
                            </div>
                            <div className="col-md-8">
                                <CardTitle>
                                    {lead.name}
                                </CardTitle>

                                <CardTitle>
                                    {lead.designation}
                                </CardTitle>

                                <CardTitle>
                                    {lead.description}
                                </CardTitle>
                            </div>
                        </div>
                    </Card>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    {leaders}
                </div>
            </div>

        );
    }
}

export default RenderLeader;