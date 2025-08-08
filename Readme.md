What Prism.js Does:
Adds color and style to code blocks based on the language (like JS, HTML, Python, etc.).

Works in the browser (client-side).

Very customizable — you can choose which languages and plugins to include



You're using a <pre> tag, which is meant to preserve formatting and whitespace — great for displaying code!

But for Prism.js (or any code highlighter) to work, you need to include a <code> block inside the <pre> and add the language class to it.

<pre>
  <code class="language-javascript">
{`function greet(name) {
  console.log("Hello, " + name);
}`}
  </code>
</pre>


