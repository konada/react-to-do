import React, { Component } from 'react';
import './Item.css';
import PropTypes from 'prop-types';

class Item extends Component{

    constructor(props){
        super(props);
        this.itemContent = props.itemContent;
        this.itemId = props.itemId;
    }

    render(props){
        return(
            <div className="item fade-in">
                <p className="itemContent">{this.itemContent}</p>
            </div>
        )
    }
}

Item.propTypes = { 
    itemContent: PropTypes.string
}

export default Item;