import React from "react"

export class Button extends React.Component{
    state = {
        number: 0
    }

    incrementNumber = () => {
        this.setState({number: (this.state.number+1)})
    }
    decrementNumber = () => {
        this.setState({number: (this.state.number-1)})
    }

    componentDidMount(){
      if (this.props.initNumber) {
        this.setState({number: (this.props.initNumber)})
      }
    }

    render (){
        return (
            <div className="w-50">
                <div className="numberManipulation">
                <button className="decrement" onClick={this.decrementNumber}>-</button>
                    {this.state.number}
                <button className="increment" onClick={this.incrementNumber}>+</button>
                </div>
            </div>
        )
    }
}