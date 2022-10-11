import React, {Component} from "react";



class Card extends Component{
    render(){
        const {id, name , location, cell , gender,image} = this.props
        return(
            <div className="user-card" id={id}>
                <div className="user-header">
                <h3 className="user-name">{name.title} {name.first} {name.last}</h3>
                <img alt="123" src={image.large} className="user-img"></img>

                </div>
                <hr className="user-section-hr"></hr>
                <div className="user-body">
                <p className="user-info gender"><span  className="info-title">Gender:</span> {gender}</p>
                <p className="user-info telephone"><span className="info-title">phone:</span> {cell}</p>
                <p className="user-info address"><span className="info-title">Location:</span> {location.country}, {location.city}</p>
                </div>
            </div>
        )
    }
}


export default Card;