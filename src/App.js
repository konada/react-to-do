import React, { Component } from 'react';
import logo from './logo.svg';
import Item from './Item/Item';
import ListForm from './List/ListForm';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.addItem = this.addItem.bind(this);

    this.state ={
      items: [
        { id: 1, itemContent: "Item 1" },
     
      ],
    }
  }

  addItem(item){
    const previousItems = this.state.items;
    previousItems.push({itemContent: item});
    this.setState({
      items: previousItems
    })
  }

  render() {
    return (
     <div className="itemsWrapper">
      <div className="itemsHeader">
        <div className="heading">ReactJS TO-DO-LIST</div>
      </div>
      <div className="itemsBody">
        {
          this.state.items.map((item) => {
            return(
            <Item itemContent={item.itemContent} itemId={item.id} key={item.id}/>
            )
          })
        }
      </div>
      <div className="itemsFooter">
          <ListForm addItem={this.addItem}/>    
      </div>
    </div>
     
     
    );
  }
}

export default App;
