import {Component} from 'react'
 
class Hello extends Component {
    render () {
        return <h3>Olá, {this.props.name}</h3>
    }
}
 
export default Hello
