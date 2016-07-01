var React = require('react');

var CharacteristicForm = React.createClass({

    getInitialState: function() {
        return {
            selectedCharacteristic: null
        };
    },

    onCharacteristicChange: function(e) {
        e.preventDefault();
        var selectedChars = e.target.value;
        this.setState({selectedCharacteristic: selectedChars});
    },

    onAnswerChange: function(e) {
        e.preventDefault();
        var selectedAnswer = e.target.value;
        this.props.checkAnswer(this.state.selectedCharacteristic, selectedAnswer);
    },



    render: function() {

        var boxes = [null, "hidebox"]
        if(this.props.yesnostate){
            boxes = this.props.yesnostate
        }

        var options = (<select className="inliners" onChange={this.onCharacteristicChange}>
            <option value="">Select characteristic</option>
            {
                this.props.characteristics().map(function(thing, index){
                    return <option key={index} value={thing}>{thing}</option>
                })
            }
        </select>
        )

        var answers = null;
        if(this.state.selectedCharacteristic){
            answers = (<select className="inliners" onChange={this.onAnswerChange}>
                <option value="">Make a choice</option>
                {
                    this.props.answers(this.state.selectedCharacteristic).map(function(answer, index){
                        return (<option key={index} value={answer}>{answer}</option>)
                    })
                }
            </select>);
        };

        return (
        <div className="form1">
            <h3>Characteristics</h3>
            {options}
            {answers}
            <h3 className={boxes[1]}>{boxes[0]}</h3>
        </div>
        );
    }

});

module.exports = CharacteristicForm;
