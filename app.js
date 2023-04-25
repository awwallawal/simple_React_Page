const navbar = (
<div>
 <nav>
    <h1>Awwal</h1>
    <ul>
     <li>About Me</li>
     <li>Pricing</li>
     <li>Blog</li>
    </ul>
   </nav>
   <h1>This is a simple React Webpage rendering</h1>
</div>
);
// Remember the difference between React and JavaScript is while React uses the declarative programming approach, JavaScript uses the imperative programming approach. In React just declare what you want done the library takes care of how it would be done. Whereas in plain/vaninlla JavaScript you have to tell it every step of the way to use certain steps (imperative method of programming). Using the above example, after declaring the variables you need to now create the element, set the textContent property and then append the child elements to the parent element (or use the .innerHTML property) after grabbing it from the DOM. In the above example just declare the variable and leave the computer to use the best approach in resolving it to the DOM. 
ReactDOM.render(navbar, document.querySelector("#root"));