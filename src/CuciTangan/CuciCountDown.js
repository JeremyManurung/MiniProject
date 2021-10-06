
import React from 'react';

export default class CuciCountDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.duration,
        }
    }
    
    componentDidMount() {
        this.timer = setInterval(() => {
            let { count } = this.state;
            this.setState({
                count: count - 1
            })
        }, 1000)
    }

    //berhenti ke 0
    componentDidUpdate(prevState) {
        if (prevState.count !== this.state.count && this.state.count === 0) {
            clearInterval(this.timer);
        }
    }

    TimeCount(s) { 
        return (
            s - (s %= 60)) / 60 + (9 < s ? ':' : ':0'
        ) + s 
    }

    render() {
        let { count } = this.state;
        return (
            <>
                {this.TimeCount(count)}
            </>
        )
    }
}