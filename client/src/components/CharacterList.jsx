var React = require('react');
var CharacterBox = require('./CharacterBox.jsx');

var CharacterList = React.createClass({

    render: function() {
        var characterNodes = this.props.info.map(function(character) {
          return (
            <CharacterBox character={character} key={character._id}/>
          );
        }.bind(this));

        return (
            <div className="characterList">
                <h3>Character List</h3>
                {characterNodes}
            </div>
        );
    }

});

module.exports = CharacterList;
