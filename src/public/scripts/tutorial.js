
var data = [
  {author: "Pete Hunt", text: "This is one comment"},
  {author: "Jordan Walke", text: "This is *another* comment"}
];

//div is not html tag its React component
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>
    );
  }
});

//var CommentList = React.createClass ({
//    render : function() {
//        return (
//            <div className = "commentList">
//                Hello, world! I am a CommentList.
//            </div>
//            );
//    }
//});
//



//var CommentList = React.createClass({
//  render: function() {
//    return (
//      <div className="commentList">
//      </div>
//    );
//  }
//});

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function (comment) {
      return (
        <Comment author={comment.author}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

/**<Comment author="Pete Hunt">This is one comment</Comment>
<Comment author="Jordan Walke">This is *another* comment</Comment>**/

var CommentForm = React.createClass ({
    render : function() {
        return (
            <div className = "commentForm">
                Hello, world! I am a CommentForm.
            </div>
        );
    }
});


var Comment = React.createClass({
  render: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return (
      <div className="comment">
        <h2 className="commentAuthor">
         {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }
});
/*{this.props.children}*/


//React.render(
//  <CommentBox />,
//  document.getElementById('content')
//);

React.render(
  <CommentBox data={data} />,
  document.getElementById('content')
);
