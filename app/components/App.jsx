import React from 'react';
import QuestionList from './quiz/QuestionList.jsx';
import ScoreBox from './quiz/ScoreBox.jsx';
import Results from './quiz/Results.jsx'
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          text: 'What is your name',
          choices: [
            {
              id: 'a',
              text: 'Michael'
            },
            {
              id: 'b',
              text: 'John'
            },
            {
              id: 'c',
              text: 'Drogo'
            }
          ],
          correct: 'c'
        },
        {
          id: 2,
          text: 'What is your mothers name',
          choices: [
            {
              id: 'a',
              text: 'Hera'
            },
            {
              id: 'b',
              text: 'Rhapsody'
            },
            {
              id: 'c',
              text: 'Dona'
            }
          ],
          correct: 'a'
        },
        {
          id: 3,
          text: 'What is your fathers name',
          choices: [
            {
              id: 'a',
              text: 'Zeus'
            },
            {
              id: 'b',
              text: 'Proemeteus'
            },
            {
              id: 'c',
              text: 'Wyane'
            }
          ],
          correct: 'a'
        },
        {
          id: 4,
          text: 'What is your friends name',
          choices: [
            {
              id: 'a',
              text: 'Jack'
            },
            {
              id: 'b',
              text: 'John'
            },
            {
              id: 'c',
              text: 'Ivan'
            }
          ],
          correct: 'b'
        }
      ],
      score:0,
      current:1
    }
  }

  setCurrent(current){
    this.setState({current})
  }
  setScore(score){
    this.setState({score})
  }

  render() {
    if(this.state.current>this.state.questions.length){
      var scoreBox  = '';
      var results= <Results {...this.state} />

    }else{
        var scoreBox = <ScoreBox {...this.state}/>
        var results = '';
    }
    return (
      <div>
        {scoreBox}
        <QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore = {this.setScore.bind(this)}/>
        {results}
      </div>)
  }
}