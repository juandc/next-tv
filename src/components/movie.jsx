var React = require('react')
var ReactDOM = require('react-dom')

var Movie = React.createClass({
  getInitialState: function(){
    return {
      username : "@juandc",
      avatar : "https://static.platzi.com/media/public/uploads/yo-cbafcb14-c143-42af-83c9-c86524f3814e.jpg",
      description : "Lider de equipo frontend en @platzi"
    }
  },
  changeUser: function(){
    this.setState({
      username : "@fjuandc",
      avatar : "https://www.codesolt.com/blog/wp-content/uploads/2016/07/Screenshot-from-2016-07-10-101935.png",
      description : "Lider de equipo frontend en @platzi"
    })
  },
  render: function(){
    var image = this.state.avatar;
    return (
      <article className="User" onClick={this.changeUser}>
        <img src={image} className="User-avatar" width="100"/>
        <div className="User-description">
          <p className="User-name">{this.state.username}</p>
          <p>{this.state.description}</p>
        </div>
      </article>
    )
  }
})

module.exports = Movie
