const greet = React.createElement("h1",{ // h1 is the parent and afterwards are it's props(children)
    id: "heading" // this is the way of giving id to the react 
}, "Hello world from React!"); //it is just creating h1 element inside react
// the above code is like hey react create a variable greet and store an H1 element inside it
//but creating a root and rendering something inside it, it is the work of React DOM 
//this root is the place where all the react code will run
const root = ReactDOM.createRoot(document.getElementById("welcoming")) //this will create a root
root.render(greet);
// greet is now a react element object, and i am telling ReactDOM to render it into the page

//Acctually react was devloped to manipulate dom using javascript
//that missing brackets {} is the place where we will give attributes to the tags
// like we can give heading to the h1 tag as {id:greeting} so that is only for storing attributes
// this render method is converting the object (greet) to the H1 tag and putting it up on the DOM  