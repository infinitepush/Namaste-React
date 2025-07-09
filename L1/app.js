const greet = React.createElement("h1",{}, "Hello world from React!"); //it is just creating h1 element inside react
// the above code is like hey react create a variable greet and store an H1 element inside it
//but creating a root and rendering something inside it, it is the work of React DOM 
//this root is the place where all the react code will run
const root = ReactDOM.createRoot(document.getElementById("welcoming")) //this will create a root
root.render(greet);
// greet is now a react element object, and i am telling ReactDOM to render it into the page