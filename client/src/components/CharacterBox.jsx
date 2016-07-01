var React = require('react');

var CharacterBox = React.createClass({

    render: function() {
        return (
            <div className="character">
                <h1>{this.props.character.name}</h1>
                <img src={this.props.character.image}></img>
            </div>
        );
    }

});

module.exports = CharacterBox;
