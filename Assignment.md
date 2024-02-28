Chapter 01 - Inception
Link to my Code
Theory -
● What is Emmet?
● Difference between a Library and Framework?
● What is CDN? Why do we use it?
● Why is React known as React?
● What is crossorigin in script tag?
● What is diference between React and ReactDOM
● What is difference between react.development.js and react.production.js files via CDN?
● What is async and defer? - see my Youtube video
Coding -
● Set up all the tools in your laptop
○ VS Code
○ Chrome
○ Extensions of Chrome
● Create a new Git repo
● Build your first Hello World program using,
○ Using just HTML
○ Using JS to manipulate the DOM
○ Using React
■ use CDN Links
■ Create an Element
■ Create nested React Elements
■ Use root.render
● Push code to Github (Theory as well as code)
● Learn about Arrow Functions before the next class
References:

- https://beta.reactjs.org/apis/react/createElement
- https://www.youtube.com/watch?v=IrHmpdORLu8

Q.1 What is Emmet ?
Ans 1. Basically Emmet is a web development tool that helps developers to write their code fast and efficiently. Generally most of the Code editors like Vs code, Sublime Text etc. have emmet as a built in plugin. Emmet helps you to use shorthand syntax to generate code snippets for HTM and CSS, saving time and reducing the amount of typing required.
For eg : In vs code if you write HTML5(in a .html file) and hit enter it will give you a boiler plate code for basic HTML layout.

Q.2 What is the Difference between a Library and Framework?
Ans 2. A library and a framework are both reusable pieces of code that aim to help developers build software more efficiently, but they differ in their approach and level of control they provide to the developer:

Library :

- A library is a collection of functions or modules that you can use in your code to perform specific tasks. It typically provides a set of functionalities that you can call upon when needed.
- Libraries are generally more flexible and allow you to retain more control over your code.
- Libraries do not dictate the overall structure or flow of your application; they are meant to be used as needed.
- Examples of libraries include React.js, jQuery, NumPy etc.

Framework :

- A framework, on the other hand, provides a broader structure for building applications. It often dictates the architecture, flow, and overall design of your application.
- Frameworks impose a certain way of doing things, such as organizing your code, defining the flow of control, and handling various aspects of application development (e.g., routing, data handling, authentication).
- While frameworks can be more opinionated and restrictive compared to libraries, they can also provide more guidance and standardization, which can be beneficial, especially for larger projects or teams.
- Examples of Frameworks includes : Angular, Django, Spring etc.

Q.3 What is CDN? Why do we use it?
Ans 3. A CDN, or Content Delivery Network, is a network of servers strategically distributed across various geographic locations to deliver web content more efficiently to users.

When a user requests content from a website, such as images, videos, scripts, or stylesheets, the request is routed to the nearest CDN server rather than the website’s origin server. This reduces latency and speeds up the delivery of content because the data travels a shorter distance.

CDNs work by caching content on their servers and serving it to users from the nearest location. This not only improves the loading times of web pages but also helps to reduce the load on the origin server, making the website more scalable and resilient to traffic spikes.

Many websites and web applications, especially those with a global audience, use CDNs to optimize performance and deliver a better user experience.

Q.4 Why is React known as React?
Ans. 4 React is named for its main concept, which is the idea of "reactive" user interfaces. The name reflects how the library operates: it reacts to changes in data and automatically updates the user interface to reflect those changes.

In React, you describe how your UI should look at any given point in time, and React efficiently updates and renders the components when the underlying data changes. This reactive approach allows for a more declarative and efficient way of building user interfaces compared to traditional imperative approaches.

Additionally, React was initially developed by Jordan Walke, a software engineer at Facebook. It was first deployed on Facebook's newsfeed in 2011 and later open-sourced in 2013, making it accessible to developers outside of Facebook. The name "React" was chosen to convey the library's core concept of reacting to changes in data to update the UI.

Q.5 What is crossorigin in script tag?
A.5 When a webpage tries to load a file (like a JavaScript file) from a different website, there are security rules in place to make sure it’s safe. The crossorigin attribute is a way to tell the browser, "Hey, I'm loading this file from another website, and it's okay because I trust that website."

So, when you see <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script> in your HTML code, it's saying that the browser should load the React JavaScript file from the given URL with special security rules in place, ensuring everything is safe and secure.

Q.6 What is diference between React and ReactDOM
Ans 6. React and ReactDOM are closely related but serve different purposes:

React:

- React is a JavaScript library for building user interfaces. It provides a declarative and efficient way to create interactive UI components.
- React allows developers to create reusable UI components and manage their state efficiently. It uses a virtual DOM (Document Object Model) to optimize the rendering process, updating only the parts of the UI that have changed.
- React provides features such as component lifecycle methods, state management, and JSX (JavaScript XML) syntax for defining UI components in a more readable and expressive way.

ReactDOM:

- ReactDOM is a package that serves as the glue between React and the DOM (Document Object Model). It provides methods for rendering React components into the DOM.
- ReactDOM's primary purpose is to take React components and render them into the browser DOM. It includes methods like ReactDOM.render() for mounting a React component into a specified DOM node, ReactDOM.hydrate() for server-side rendering with React, and ReactDOM.unmountComponentAtNode() for unmounting React components from the DOM.
- ReactDOM also provides features for working with portals, which allow rendering components outside of their parent DOM hierarchy.

Q.7 What is difference between react.development.js and react.production.js files via CDN?

Ans 7. A. react.development.js:

- This file is meant for development purposes. It includes additional warnings and debugging information that can help developers identify and fix issues during the development process.
- The development version of React is larger in size compared to the production version because it includes extra code for debugging and development tools.
- It is not optimized for performance but provides a more helpful environment for debugging and troubleshooting.

B. react.production.js:

- This file is optimized for production use. It is smaller in size compared to the development version because it removes all development-specific warnings, debugging tools, and optimizations for speed.
- The production version of React is stripped of unnecessary code and is typically minified and compressed to reduce its file size further.
- It is intended to be used in production environments where performance and file size are critical factors.

Q. 8 What is async and defer?
Ans 8 async and defer are attributes that can be used with the <script> tag in HTML to control the loading and execution of external JavaScript files:

async:

- When you include the async attribute in a <script> tag, it tells the browser to begin downloading the script file immediately without blocking the rendering of the page.
- The script will be executed asynchronously as soon as it finishes downloading, regardless of whether the HTML parsing has finished or not.
- This can lead to scripts being executed out of order, especially if they depend on each other, as the browser will execute them as soon as they are downloaded, without waiting for any other scripts or the DOM to be fully loaded.

defer:

- The defer attribute also tells the browser to download the script file without blocking the rendering of the page, similar to async.
- However, scripts with the defer attribute will only be executed after the HTML parsing is completed.
- Multiple scripts with the defer attribute will be executed in the order they appear in the HTML document.
  This is useful when you have scripts that depend on the DOM being fully constructed before they are executed, as they are guaranteed to run after the DOM is ready but before the DOMContentLoaded event.

In summary:

- Use async when the script doesn't depend on the DOM or other scripts and can be executed as soon as it's downloaded.
- Use defer when the script depends on the DOM being fully parsed or other scripts being executed but doesn't need to be executed immediately after downloading.
