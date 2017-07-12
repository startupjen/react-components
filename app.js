'use strict'

// let Coffee = () => (
//   <li>Coffee</li>
// );

// let Kale = () => (
//   <li>Kale</li>
// );


// let GroceryList = () => (
//   <ul id='groceryList'>
//   <Coffee />
//   <Kale />
//   </ul>  
// );


class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      check: false
    };
  }
  onListItemClick() {
    this.setState({
      check: !this.state.check
    });
  }
  render() {
    let style = { 'font-weight': this.state.check ? 'bold' : 'normal' };
    return (<li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>);
  }
}

let App = (props) => (
  <ul>
    {props.groceryItems.map( (item,index) => <GroceryListItem key={index} item={item} />) }
  </ul>
);

let groceryItems = ['bloop','blah','whee'];

ReactDOM.render(<App groceryItems={groceryItems} />, document.getElementById("app"));

