var Courses = React.createClass({ 
   getInitialState: function() {
        return {name: "N/A",id:1};
   },
   updateName:function(element){
     this.setState({name:element.target.value})  
   },
   render: function() {
    return (
      <p>
        Course Name: <input type="text" placeholder="Type Course Name Here" onChange={this.updateName}/>!{this.state.name}
      </p>
      );
   }
});
var courseElement=<Courses/>;

React.render(courseElement,document.getElementById('divContainer'));