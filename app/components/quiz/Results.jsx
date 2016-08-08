import React from 'react';



export default class Results extends React.Component {



    render() {
        var percent= (this.props.score/this.props.questions.length*100);
        if(percent>=80){
            var message = 'Awesome job'
        }else if(percent<80 && percent > 60){
            var message = 'You did ok'
        }else{
            var message= 'You did bad !'
        }

        return (
            <div className="well">
                <h4>You got {this.props.score} out of {this.props.questions.length} correct</h4>
                <h1>{percent}% - {message}</h1>
                <hr />
                <a href="/app">Take again</a>
            </div>)
    }
}