 const greet = React.createElement(
  "h1",
  {
    // h1 is the parent and afterwards are it's props(children)
    id: "heading", // this is the way of giving id to the react
  },
  "Hello world from React!"
); //it is just creating h1 element inside react
// the above code is like hey react create a variable greet and store an H1 element inside it
//but creating a root and rendering something inside it, it is the work of React DOM
//this root is the place where all the react code will run
const root = ReactDOM.createRoot(document.getElementById("welcoming")); //this will create a root
root.render(greet);
// greet is now a react element object, and i am telling ReactDOM to render it into the page

//Acctually react was devloped to manipulate dom using javascript
//that missing brackets {} is the place where we will give attributes to the tags
// like we can give heading to the h1 tag as {id:greeting} so that is only for storing attributes
// this render method is converting the object (greet) to the H1 tag and putting it up on the DOM

// Nested Elements :: how to create nested elements through react
/*  <div id = "parent1">
    <div id = "child">
    <h1>I am a h1 tag </h1>
    </div>
    </div> this way of creating element is the html way's
*/
// now react way of doing same thing
const parent = React.createElement(
  "div",
  { id: "parent" },
  [
  React.createElement(
    "div",
    {
      id: "child",
    },
    [
    React.createElement("h1", {}, "I am a h1 tag"),
    React.createElement("h2", {}, "I am a h2 tag"),
    ] //if we want to create multiple (siblings) then we have to use array 
  ),
],
// but then if we have to create multiple childrens then also we will use array 
  [
  React.createElement(
    "div",
    {
      id: "child2",
    },
    [
    React.createElement("h1", {}, "I am a h1 tag"),
    React.createElement("h2", {}, "I am a h2 tag"),
    ] 
  )
]
);

console.log(parent);
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(parent);

//But look at this code it is so confusing and this is the need of JSX 
//Also react is a library and not a framework, that is we can install react and can start using it even into a very small part of our code too

