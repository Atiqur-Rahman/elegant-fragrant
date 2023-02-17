import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div className="question">
            <div class="card">
                <div class="card-header">Q/A</div>
                <div class="card-body">
                    <h5 class="card-title">How react works?</h5>
                    <p class="card-text">React is a popular JavaScript library for building user interfaces. It's declarative, efficient, and flexible. When a React element is created, React assigns a key to the element. The key is used to uniquely identify the element. The key is used by React to keep track of the element's position in the virtual DOM. When a user interacts with a React application, React uses the key to quickly find the changed element in the virtual DOM. React only updates the changed element in the virtual DOM and it doesn't need to re-render the entire UI. The key is also used by React to figure out which DOM nodes to update. React uses the key to match the virtual DOM node with the actual DOM node. React uses a diffing algorithm to find the changed element. The diffing algorithm is a clever way to figure out which element has changed. React updates the actual DOM by making changes to the DOM nodes and only updates the changed DOM nodes.</p>
                    <h5 class="card-title">How useState works?</h5>
                    <p class="card-text">The useState() is a Hook that allows you to have state variables in functional components. useState is the ability to encapsulate local state in a functional component. React has two types of components, one is class components which are ES6 classes that extend from React and the other is functional components. Class components a Component and can have state and lifecycle methods: class Message extends React. The useState hook is a special function that takes the initial state as an argument and returns an array of two entries. UseState encapsulate only singular value from the state, for multiple state need to have useState calls.</p>
                </div>
            </div>
        </div>
    );
};

export default Question;
