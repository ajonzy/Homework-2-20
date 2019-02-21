import React, {Component} from "react"

export default class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            number: props.number || 0
        }

        this.handleChange = this.handleChange.bind(this)
    }

handleChange(type) {
    this.setState({
        number: type === "add" ? ++this.state.number : --this.state.number
    })
}

    render() {
        return (
            <div>
                <button onClick={() => this.handleChange("add")}>Increase Counter</button>

                <button onClick={() => this.handleChange("subtract")}>Decrease Counter</button>
                <p>The counter is currently at {this.state.number}</p>
            </div>
        )
    }
}