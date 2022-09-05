export default class A extends Component {
    state = {
         counter: 1
    }
   
   
    render(){
        const handleClick = () => {
            this.setState({...this.state, counter: this.state.counter + 1})
        }
        return(
            <div>
                <p>{this.state.counter}</p>
                <button onClick={handleClick}>+1</button>
            </div>
        )
    }
  }
  