import React, {Component} from "react"

export default class ToggleFont extends Component {
    constructor(props) {
        super(props)

        this.state = {
            size: props.size || 10
        }

        this.toggleSize = this.toggleSize.bind(this)
    }

    toggleSize(method) {
        this.setState({
            size: method === "increase" ? this.state.size + 5 : this.state.size - 5
        })
    }

    render() {
        return (
            <div>
                <button onClick={() => this.toggleSize("increase")}>Make Me Bigger</button>
                <button onClick={() => this.toggleSize("decrease")}>Make Me Smaller</button>
                <p style={{fontSize: this.state.size + "px"}}>The text size is {this.state.size} pixels</p>
            </div>
        )
    }
}