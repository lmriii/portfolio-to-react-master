import React from "react";
import {Card, CardImg, CardColumns} from 'reactstrap';
import { newborn1 } from "../resources/photosNewborn1";

// The number of columns change by resizing the window
class Newborn1 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            newPhotos1: newborn1
        }
    }
    render() {
        
        const newbornCard1 = this.state.newPhotos1.map(
            photo => 
            <Card className="col border border-dark m-4">
            <CardImg top width="100%" src={photo.url} alt={photo.name} key={photo.id}/>
            </Card>
        );
        
        
        return (
            <>
            <CardColumns>
            {newbornCard1}
            
            </CardColumns>
            </>
        )
    }
}

export default Newborn1;