import React, { Component } from 'react';
import Item from './Item/Item';
import ListForm from './List/ListForm';
import { DB_CONFIG } from './Config/config';
import firebase from 'firebase/app';
import 'firebase/database';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);

    this.app = firebase.initializeApp(DB_CONFIG);
    this.db = this.app.database().ref().child('items');

    this.state ={
      items: [],
    }
  }

  componentWillMount() {
    const previousItems = this.state.items;

    this.db.on('child_added', snap => {
      previousItems.push({
        id: snap.key,
        itemContent: snap.val().itemContent,
      })

      this.setState({
        notes: previousItems
      })
    })

    this.db.on('child_removed', snap => {
      for(var i=0; i < previousItems.length; i++){
        if(previousItems[i].id === snap.key){
          previousItems.splice(i, 1);
        }
      }
      this.setState({
        notes: previousItems
      })
    })
  }

  addItem(item){
    this.db.push().set({itemContent: item});
  }

  removeItem(itemId){
    this.db.child(itemId).remove();
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
            <Item itemContent={item.itemContent} 
              itemId={item.id} 
              key={item.id} 
              removeItem={this.removeItem}/>
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
