import React from 'react'
import './SingleVarCalculator.css'


export class SVCalculator extends React.Component {
    constructor(props){
        super(props);
        this.state = { clickHandler : this.props.clickHandler, number: 0, result: 0 }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick = (event) => {
        this.setState({result : this.state.clickHandler(Number(this.state.number))});
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({number : event.target.value});
        event.preventDefault();
    }

    render (){
        return (
            <div className='calculator'>
                <h2>{this.props.name}</h2>
                <form onSubmit={this.handleClick}>
                    <label>n :</label>
                    <br/>
                    <input onChange={this.handleChange} type='text' id='number' name='number' placeholder={this.state.number}/>
                    <br/>
                    <input type='submit' class='submit'/>
                    <br></br>
                </form>
                <br></br>
                <br></br>
                <h2>Result = {this.state.result}</h2>
            </div>
        );
    }
}