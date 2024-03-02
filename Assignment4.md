### 1. What is JSX?

JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows developers to write HTML-like code within JavaScript. JSX makes it easier to write and read code for building user interfaces, especially in React applications. It enables the use of HTML elements, attributes, and expressions directly within JavaScript code.

### 2. Superpowers of JSX?

- Component-based structure: JSX allows developers to create reusable components, which can encapsulate both structure and behavior, promoting code reusability.
- Expression interpolation: JSX supports embedding JavaScript expressions within curly braces {}, enabling dynamic content rendering and logic execution.
- Declarative syntax: JSX promotes a declarative approach to UI development, where developers describe the desired UI state rather than imperatively specifying how to achieve it.
- Integration with JavaScript ecosystem: JSX seamlessly integrates with JavaScript, enabling the use of JavaScript libraries, tools, and frameworks within JSX-based applications.

### 3. What is the Role of type attribute in script tag? What options can we use there?

The type attribute in the `<script>` tag specifies the scripting language of the embedded code. It informs the browser how to interpret the contents of the script block. Common options for the type attribute include:

- text/javascript: Specifies JavaScript code.
- module: Indicates that the script is a JavaScript module.
- text/ecmascript: Specifies ECMAScript code. However, it's not commonly used due to compatibility concerns.
- application/javascript: Similar to text/javascript, specifying JavaScript code.

### 4. {TitleComponent} vs {`<TitleComponent/>`} vs {`<TitleComponent></TitleComponent>`} in JSX

- {TitleComponent}: This syntax renders the TitleComponent as a JavaScript expression. It doesn't include any additional HTML elements or attributes. It's suitable for rendering components without additional wrapping elements.
- {`<TitleComponent/>`}: This syntax renders the TitleComponent as a self-closing tag, similar to HTML. It's commonly used for rendering components without children or when no additional attributes are needed.
- {`<TitleComponent></TitleComponent>`}: This syntax renders the TitleComponent with opening and closing tags, allowing for the inclusion of children components or additional attributes within the JSX structure.
