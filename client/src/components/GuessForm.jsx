var React = require('react');

var GuessForm = React.createClass({

    render: function() {

        var options = this.props.info.map(function(person){
            return <option key={person._id} value={person._id}>{person.name}</option>
        });

        return (
            <div>
                <h1>Guess Form</h1>
                <form>
                    <select>
                        {options}
                    </select>
                </form>
            </div>
        );
    }

});

module.exports = GuessForm;
