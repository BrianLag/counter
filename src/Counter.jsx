import React,{useState} from 'react'
// Ecriture avec une classe
/*class Counter extends Component {

  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleCounter = (value) => {
    this.setState({count: value});
  }

  render() {
    return (
      <div>
        <p>Le compteur est  à : {this.state.count}</p>
        <button  onClick={() =>  this.handleCounter(this.state.count + 1)}>
          +1
        </button>
        <button  onClick={() =>  this.handleCounter(this.state.count - 1)}>
          -1
        </button>
      </div>
    );
  }
}*/

function Counter() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  // Déclare une fonction setCount qui permet de modifier la valeur de count
  const [count, setCount] = useState(10);

  return (
    <div>
      <p>Le compteur est  à : {count} </p>
      <button onClick={() => setCount(count +1)}>
        +1
      </button>
      <button onClick={() => setCount(count - 1)}>
        -1
      </button>
    </div>
  );
}

export default Counter;