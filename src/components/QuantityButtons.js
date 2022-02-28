import React from "react"

export class QuantityButtons extends React.Component{
    state = {
        number: 1
    }

    incrementNumber = () => {
      if(this.state.number < this.props.max){
        this.setState({number: (this.state.number+1)})
      }
    }
    decrementNumber = () => {
      if(this.state.number > (this.props.min || 1)){
        this.setState({number: (this.state.number-1)})
      }
    }

    componentDidMount(){
      if (this.props.initNumber) {
        this.setState({number: (this.props.initNumber)})
      }
    }

    componentDidUpdate(){
      this.props.currentNumber(this.state.number)
    }

    render (){
        return (
            <div className="w-100">
                <div className="numberManipulation d-flex justify-content-between align-items-center">
                  <div>
                    <button className="decrement" onClick={this.decrementNumber}>-</button>
                  </div>
                  <div>{this.state.number}</div>
                  <div>
                    <button className="increment" onClick={this.incrementNumber}>+</button>
                  </div>
                </div>
            </div>
        )
    }
}