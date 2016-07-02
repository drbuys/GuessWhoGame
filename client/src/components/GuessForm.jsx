var React = require('react');

var GuessForm = React.createClass({

    guess: function(e) {
        e.preventDefault;
        console.log(e.target.value);
        this.props.checkGuess(e.target.value);
    },

    render: function() {

        // var options = this.props.info.map(function(person){
        //     return <option key={person._id} value={person._id}>{person.name}</option>
        // });

        var boxes = [null, "hidebox"]
        if(this.props.guessboxstate){
            boxes = this.props.guessboxstate
        }

        var options = this.props.info.map(function(person){
            return <button className="guessButton" onClick={this.guess}key={person._id} value={person._id}>{person.name}</button>
        }.bind(this));

        return (
            <div className="guessFormDiv">
                <h1>Make Your Guess Below</h1>
                {/*<form>
                    <select>
                    {options}
                    </select>
                </form>*/}
                {options}
                <h3 className={boxes[1]}>{boxes[0]}</h3>
            </div>
        );
    }

});

module.exports = GuessForm;
