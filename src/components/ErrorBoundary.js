import {Component} from "react";

export default class ErrorBoundary extends Component{
    constructor(){
        super();
        this.state = { hasError: false}
    }

    componentDidCatch(error) {
        this.setState({hasError: true})
    }

    render() {
        if(this.state.hasError){
            return <p>No User Found!</p>
        }
            return this.props.children;
        }

}