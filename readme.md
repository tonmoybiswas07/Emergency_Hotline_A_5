1..What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer:
getElementById:
Select a single element by its unique id name attribute.

getElementsByClassName:

Selects all elements that share a same class name.

querySelector:

Selects the first element that matches a given CSS selector / html tag.

querySelectorAll:

Selects all elements that match a given CSS selector.

2..How do you create and insert a new element into the DOM?
Answer:

Use the (document.createElement()) method to create a new HTML element and use appendChild() method to append the new html file in to container...

3..What is Event Bubbling and how does it work?
Answer:
Event bubbling is a JavaScript mechanism where an event, like a click, triggers on a child element and then propagates up through its ancestors in the DOM tree to the document's root..

4..What is Event Delegation in JavaScript? Why is it useful?
Answer:
Event delegation in JavaScript is a technique for handling events where, instead of attaching individual event listeners to multiple child elements, a single event listener is attached to a common ancestor element.It reduces the number of event listeners attached to the DOM, which can significantly improve performance...

5..What is the difference between preventDefault() and stopPropagation() methods?
Answer:
(preventDefault()):
controls what the browser does in response to an event on the target element....
(stopPropagation()):
controls where the event travels within the DOM....
