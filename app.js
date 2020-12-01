var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <ul>
      <GroceryList />
    </ul>
  </div>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    }
  }

  onListItemHover() {
    this.setState({
      hover: !this.state.hover
    })
  }

  render() {
    var style = {
      fontWeight: this.state.hover ? '900' : '400'
    }

    return <li style = {style} onMouseEnter={this.onListItemHover.bind(this)} onMouseLeave={this.onListItemHover.bind(this)}>{this.props.item}</li>
  }
}

var GroceryList = (props) => {
  let gList = ['Cucumbers', 'Kale'];
  return (
    <div>
      <ul>
        <GroceryListItem item={gList[0]}/>
        <GroceryListItem item={gList[1]}/>
      </ul>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));