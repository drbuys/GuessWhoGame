var React = require('react');

var CharacterBox = React.createClass({

    render: function() {
        return (
            <div className="character">
                <h3>{this.props.character.name}</h3>
                <img src={this.props.character.image}></img>
            </div>
        );
    }

});

module.exports = CharacterBox;
