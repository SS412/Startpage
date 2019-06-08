import React from 'react';
import './clock.css' 

class Clock extends React.Component{

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }


    render() {
        return (
            <div className = "clock-container">
                <div className = "clock">
                    {this.state.date.toLocaleTimeString()} 
                </div>
                <div className = "date">
                {this.state.date.toLocaleDateString()} 

                </div>

            </div>
        );
    }




    tick() {
        this.setState({
            date: new Date()
        });
    }
    
}

export default Clock;