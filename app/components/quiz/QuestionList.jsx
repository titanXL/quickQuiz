import React from 'react';

import Question from './Question.jsx';

export default class QuestionList extends React.Component {



    render() {
        return (
            <div className="questions">
                {
                    this.props.questions.map(question=>{
                        if(question.id == this.props.current){
                        return <Question question={question} key={question.id} {...this.props}/>
                        }
                    })
                }
            </div>)
    }
}