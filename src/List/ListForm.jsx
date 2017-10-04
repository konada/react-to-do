import React, { Component } from 'react';
import './ListForm.css';

class ListForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            newItemContent: '',
        };
        this.handleUserInput = this.handleUserInput.bind(this);
        this.writeItem = this.writeItem.bind(this);
    }

    handleUserInput(e) {
       this.setState({
        newItemContent: e.target.value,
       }) 
    }

    writeItem(){
        this.props.addItem(this.state.newItemContent);

        this.setState({
        newItemContent: '',
       }) 
    }

    render(){
        return(
            <div className="formWrapper" >
                <input className="itemInput"
                placeholder="Write a new item..."
                value={this.state.newItemContent}
                onChange={this.handleUserInput} />
                <button className="itemButton"
                onClick={this.writeItem}>Add Item</button>
            </div>
        )
    }
}

export default ListForm;