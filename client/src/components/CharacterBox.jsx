var React = require('react');

var CharacterBox = React.createClass({

    clickedpic: function(e) {
        console.log(e.target.className);
        var id = e.target.className;
        this.props.guess(id);
    },

    render: function() {
        return (
            <div className="character">
                <h3>{this.props.character.name}</h3>
                <img onClick={this.clickedpic} className={this.props.character._id} src={this.props.character.image}></img>
            </div>
        );
    }

});

module.exports = CharacterBox;
