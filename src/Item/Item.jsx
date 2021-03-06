import React, { Component } from 'react';
import './Item.css';
import PropTypes from 'prop-types';

class Item extends Component{

    constructor(props){
        super(props);
        this.itemContent = props.itemContent;
        this.itemId = props.itemId;
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
    }

    handleRemoveItem(id){
        this.props.removeItem(id);
    }

    render(props){
        return(
            <div className="item fade-in">
                <p className="itemContent">{this.itemContent}</p>
                <span className="closebtn" 
                      onClick={() => this.handleRemoveItem(this.itemId)}>
                      &times;
                </span>
            </div>
        )
    }
}

Item.propTypes = { 
    itemContent: PropTypes.string
}

export default Item;