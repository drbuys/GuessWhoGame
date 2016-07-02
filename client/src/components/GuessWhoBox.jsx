var React = require('react');
var CharacterList = require('./CharacterList.jsx');
var CharacteristicForm = require('./CharacteristicForm.jsx');
var GuessForm = require('./GuessForm.jsx');
var sampleInfo = require('../sample_info.js');
var _ = require('lodash');

var GuessWhoBox = React.createClass({

    getInitialState: function() {
        return {
            data: sampleInfo,
            chosen: this.getGameCharacter(),
            yesnoBox: null,
            guessBox: null
        };
    },

    componentDidMount: function() {
        this.setState({guessBox: ["Shall we play a game?", "AnswerBoxShow"]})
        setTimeout(this.resetYesNoGuess, 3000);
    },

    getGameCharacter: function() {
        var character = _.sample(sampleInfo);
        console.log(character.name);
        return character;
    },

    getCharacteristics: function() {
        var characteristics = Object.keys(this.state.data[0].characteristics);
        var chars = _.uniq(characteristics);
        return chars;
    },

    getPossibleAnswers: function(characteristic) {
        var filteredAnswers = this.state.data.map(function(person){
            return person.characteristics[characteristic];
        });
        var filteredAns = _.uniq(filteredAnswers)
        return filteredAns;
    },

    resetYesNoGuess: function() {
        this.setState({yesnoBox: null});
        this.setState({guessBox: null});
    },

    getYesNoBox: function(char, ans) {
        if(this.state.chosen.characteristics[char] === ans){
            // this.setState({yesnoBox: ["Yes", "showbox"]});
            this.setState({yesnoBox: ["Yes", "AnswerBoxShow"]});
            var filteredChars = this.state.data.filter(function(person){
                if(person.characteristics[char] === ans) {
                    return person
                }
            })
        } else {
            // this.setState({yesnoBox: ["No", "showbox"]});
            this.setState({yesnoBox: ["No", "AnswerBoxShow"]});
            var filteredChars = this.state.data.filter(function(person){
                if(person.characteristics[char] != ans) {
                    return person
                }
            })
        }
        this.setState({data: filteredChars})
        setTimeout(this.resetYesNoGuess, 3000);
    },

    onCheckGuess: function(_id) {
        if(this.state.chosen._id === parseInt(_id)) {
            // this.setState({guessBox: ["Well Done!", "showbox"]})
            this.setState({guessBox: [`Well Done, the answer is:  ${this.state.chosen.name}`, "AnswerBoxShow"]})
        } else {
            // this.setState({guessBox: ["Try Again...", "showbox"]})
            this.setState({guessBox: ["Try Again...", "AnswerBoxShow"]})
            setTimeout(this.resetYesNoGuess, 3000);
        }
    },

    render: function() {

        var answerbox = [null, "hidebox"]
        if(this.props.yesnostate){
            boxes = this.props.yesnostate
        }
        if(this.props.guessboxstate){
            boxes = this.props.guessboxstate
        }

        return (
            <div className="encompass">
                <h1 className="Title">Guess Who - Happy Tree Friends!</h1>
                <div className={answerbox[1]}>
                    <h1>{answerbox[0]}</h1>
                </div>
                <div className="mainBox">
                    <CharacterList info={this.state.data}/>
                    <CharacteristicForm characteristics={this.getCharacteristics} answers={this.getPossibleAnswers} checkAnswer={this.getYesNoBox}
                        yesnostate={this.state.yesnoBox}/>
                    <GuessForm info={this.state.data} checkGuess={this.onCheckGuess} guessboxstate={this.state.guessBox}/>
                </div>
                <div className="footer">
                    <h3>&copy; Zak Buys 2016</h3>
                </div>
            </div>
        );
    }

});

module.exports = GuessWhoBox;
