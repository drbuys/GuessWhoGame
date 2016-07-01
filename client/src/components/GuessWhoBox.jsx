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
            yesnoBox: null
        };
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

    resetYesNo: function() {
        this.setState({yesnoBox: null})
    },

    getYesNoBox: function(char, ans) {
        console.log(this.state.chosen.characteristics[char]);
        if(this.state.chosen.characteristics[char] === ans){
            this.setState({yesnoBox: ["Yes", "showbox"]});
            var filteredChars = this.state.data.filter(function(person){
                if(person.characteristics[char] === ans) {
                    return person
                }
            })
        } else {
            this.setState({yesnoBox: ["No", "showbox"]});
            var filteredChars = this.state.data.filter(function(person){
                if(person.characteristics[char] != ans) {
                    return person
                }
            })
        }
        this.setState({data: filteredChars})
        setTimeout(this.resetYesNo, 3000);
    },



    render: function() {
        return (
            <div>
                <h1>Guess Who</h1>
                <CharacterList info={this.state.data}/>
                <CharacteristicForm characteristics={this.getCharacteristics} answers={this.getPossibleAnswers} checkAnswer={this.getYesNoBox}
                    yesnostate={this.state.yesnoBox}/>
                <GuessForm info={this.state.data} />
            </div>
        );
    }

});

module.exports = GuessWhoBox;
