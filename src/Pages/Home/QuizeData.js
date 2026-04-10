// Quiz Data for HTML and CSS
const quizData = {
  // ============== HTML ============== //
  html: [
    {
      course1: [
        {
          question: "HTML stands for?",
          options: [
            "Hyper Text Markup Language",
            "Home Tool",
            "Hyperlinks",
            "None",
          ],
          answer: "Hyper Text Markup Language",
        },
        {
          question: "Paragraph tag?",
          options: ["<p>", "<h1>", "<div>", "<span>"],
          answer: "<p>",
        },
        {
          question: "Line break tag?",
          options: ["<br>", "<hr>", "<lb>", "<break>"],
          answer: "<br>",
        },
        {
          question: "Image tag?",
          options: ["<img>", "<image>", "<src>", "<pic>"],
          answer: "<img>",
        },
        {
          question: "Link tag?",
          options: ["<a>", "<link>", "<href>", "<url>"],
          answer: "<a>",
        },
      ],
      course2: [
        {
          question: "HTML file extension?",
          options: [".html", ".css", ".js", ".xml"],
          answer: ".html",
        },
        {
          question: "Head section use?",
          options: ["Metadata", "Content", "Image", "Footer"],
          answer: "Metadata",
        },
        {
          question: "Title tag?",
          options: ["<title>", "<head>", "<meta>", "<h1>"],
          answer: "<title>",
        },
        {
          question: "List tag?",
          options: ["<ul>", "<div>", "<p>", "<span>"],
          answer: "<ul>",
        },
        {
          question: "Table tag?",
          options: ["<table>", "<tab>", "<tr>", "<td>"],
          answer: "<table>",
        },
      ],
      course3: [
        {
          question: "Form tag?",
          options: ["<form>", "<input>", "<button>", "<submit>"],
          answer: "<form>",
        },
        {
          question: "Input type text?",
          options: ["text", "input", "string", "value"],
          answer: "text",
        },
        {
          question: "Checkbox type?",
          options: ["checkbox", "check", "box", "tick"],
          answer: "checkbox",
        },
        {
          question: "Radio button?",
          options: ["radio", "button", "select", "option"],
          answer: "radio",
        },
        {
          question: "Submit button?",
          options: ["submit", "send", "post", "go"],
          answer: "submit",
        },
      ],
      course4: [
        {
          question: "Div tag use?",
          options: ["Container", "Text", "Image", "None"],
          answer: "Container",
        },
        {
          question: "Span tag?",
          options: ["Inline", "Block", "Section", "None"],
          answer: "Inline",
        },
        {
          question: "Heading tag?",
          options: ["<h1>", "<p>", "<div>", "<span>"],
          answer: "<h1>",
        },
        {
          question: "Max heading?",
          options: ["h6", "h5", "h4", "h3"],
          answer: "h6",
        },
        {
          question: "Semantic tag?",
          options: ["<article>", "<div>", "<span>", "<b>"],
          answer: "<article>",
        },
      ],
      course5: [
        {
          question: "Audio tag?",
          options: ["<audio>", "<sound>", "<music>", "<mp3>"],
          answer: "<audio>",
        },
        {
          question: "Video tag?",
          options: ["<video>", "<movie>", "<media>", "<clip>"],
          answer: "<video>",
        },
        {
          question: "Iframe?",
          options: ["Embed page", "Image", "Text", "None"],
          answer: "Embed page",
        },
        {
          question: "Meta tag?",
          options: ["SEO", "Style", "Script", "UI"],
          answer: "SEO",
        },
        {
          question: "Doctype?",
          options: ["HTML version", "CSS", "JS", "None"],
          answer: "HTML version",
        },
      ],
    },
  ],

  // ============== CSS ============== //
  css: [
    {
      course1: [
        {
          question: "CSS stands for?",
          options: [
            "Cascading Style Sheets",
            "Creative Style Sheets",
            "Color Style Sheets",
            "Computer Style Sheets",
          ],
          answer: "Cascading Style Sheets",
        },
        {
          question: "How to include CSS in HTML?",
          options: ["<style>", "<css>", "<link>", "<script>"],
          answer: "<style>",
        },
        {
          question: "Property to change text color?",
          options: ["color", "font-color", "text-color", "background-color"],
          answer: "color",
        },
        {
          question: "Property to change background?",
          options: ["background-color", "bg-color", "color", "background"],
          answer: "background-color",
        },
        {
          question: "Font size property?",
          options: ["font-size", "text-size", "font-style", "size-font"],
          answer: "font-size",
        },
      ],
      course2: [
        {
          question: "Selector for id?",
          options: ["#", ".", "*", "@"],
          answer: "#",
        },
        {
          question: "Selector for class?",
          options: [".", "#", "*", "@"],
          answer: ".",
        },
        {
          question: "Margin property?",
          options: ["margin", "padding", "spacing", "gap"],
          answer: "margin",
        },
        {
          question: "Padding property?",
          options: ["padding", "margin", "space", "gap"],
          answer: "padding",
        },
        {
          question: "Border property?",
          options: ["border", "outline", "frame", "box"],
          answer: "border",
        },
      ],
      course3: [
        {
          question: "Display block or inline?",
          options: ["block", "inline", "flex", "grid"],
          answer: "block",
        },
        {
          question: "Flexbox main property?",
          options: [
            "display:flex",
            "align-items",
            "justify-content",
            "flex-direction",
          ],
          answer: "display:flex",
        },
        {
          question: "Text alignment?",
          options: ["text-align", "align-text", "justify", "center-text"],
          answer: "text-align",
        },
        {
          question: "Overflow hidden property?",
          options: [
            "overflow:hidden",
            "overflow:auto",
            "overflow:scroll",
            "overflow:visible",
          ],
          answer: "overflow:hidden",
        },
        {
          question: "Opacity property?",
          options: ["opacity", "visibility", "alpha", "transparency"],
          answer: "opacity",
        },
      ],
      course4: [
        {
          question: "Position absolute?",
          options: ["absolute", "relative", "fixed", "sticky"],
          answer: "absolute",
        },
        {
          question: "Position relative?",
          options: ["relative", "absolute", "fixed", "sticky"],
          answer: "relative",
        },
        {
          question: "Z-index use?",
          options: ["Stack order", "Opacity", "Color", "Position"],
          answer: "Stack order",
        },
        {
          question: "Float property?",
          options: ["left/right", "top/bottom", "inline/block", "align"],
          answer: "left/right",
        },
        {
          question: "Clear property?",
          options: ["clear", "float", "reset", "break"],
          answer: "clear",
        },
      ],
      course5: [
        {
          question: "CSS comment syntax?",
          options: [
            "/* comment */",
            "// comment",
            "# comment",
            "<!-- comment -->",
          ],
          answer: "/* comment */",
        },
        {
          question: "Pseudo-class hover?",
          options: [":hover", ":active", ":focus", ":visited"],
          answer: ":hover",
        },
        {
          question: "Pseudo-element before?",
          options: ["::before", ":before", ":after", "::after"],
          answer: "::before",
        },
        {
          question: "CSS variable syntax?",
          options: ["--var-name", "$var", "@var", "var()"],
          answer: "--var-name",
        },
        {
          question: "Responsive unit for font?",
          options: ["rem", "px", "%", "em"],
          answer: "rem",
        },
      ],
    },
  ],

  // ============== Tailwind CSS ============== //
  tailwindcss: [
    {
      course1: [
        {
          question: "Tailwind CSS is?",
          options: [
            "Utility-first framework",
            "UI library",
            "CSS preprocessor",
            "JavaScript library",
          ],
          answer: "Utility-first framework",
        },
        {
          question: "Text color class red?",
          options: ["text-red-500", "color-red", "red-text", "text-red"],
          answer: "text-red-500",
        },
        {
          question: "Background blue class?",
          options: ["bg-blue-500", "background-blue", "blue-bg", "bg-blue"],
          answer: "bg-blue-500",
        },
        {
          question: "Margin top class mt-4?",
          options: ["mt-4", "margin-top-4", "m-t-4", "top-margin-4"],
          answer: "mt-4",
        },
        {
          question: "Padding class p-6?",
          options: ["p-6", "padding-6", "pad-6", "px-6"],
          answer: "p-6",
        },
      ],
      course2: [
        {
          question: "Flex container class?",
          options: ["flex", "flexbox", "display-flex", "d-flex"],
          answer: "flex",
        },
        {
          question: "Grid container class?",
          options: ["grid", "gridbox", "display-grid", "d-grid"],
          answer: "grid",
        },
        {
          question: "Hidden element class?",
          options: ["hidden", "invisible", "none", "hide"],
          answer: "hidden",
        },
        {
          question: "Text center class?",
          options: [
            "text-center",
            "center-text",
            "text-middle",
            "align-center",
          ],
          answer: "text-center",
        },
        {
          question: "Font bold class?",
          options: ["font-bold", "text-bold", "bold", "font-heavy"],
          answer: "font-bold",
        },
      ],
      course3: [
        {
          question: "Rounded corners class?",
          options: ["rounded", "corner", "radius", "rounded-full"],
          answer: "rounded",
        },
        {
          question: "Border class?",
          options: ["border", "b", "border-width", "bd"],
          answer: "border",
        },
        {
          question: "Shadow class?",
          options: ["shadow", "box-shadow", "sh", "shadow-md"],
          answer: "shadow",
        },
        {
          question: "Width class w-1/2?",
          options: ["w-1/2", "width-50", "half-width", "w-50"],
          answer: "w-1/2",
        },
        {
          question: "Height class h-32?",
          options: ["h-32", "height-32", "h-8", "height-8"],
          answer: "h-32",
        },
      ],
      course4: [
        {
          question: "Max width class?",
          options: ["max-w-lg", "max-width", "w-max", "width-lg"],
          answer: "max-w-lg",
        },
        {
          question: "Min height class?",
          options: ["min-h-screen", "h-min", "min-height", "height-min"],
          answer: "min-h-screen",
        },
        {
          question: "Text uppercase class?",
          options: ["uppercase", "text-upper", "text-uppercase", "upper"],
          answer: "uppercase",
        },
        {
          question: "Text ellipsis class?",
          options: [
            "truncate",
            "ellipsis",
            "overflow-ellipsis",
            "text-ellipsis",
          ],
          answer: "truncate",
        },
        {
          question: "Z-index class?",
          options: ["z-10", "z-index", "z-max", "z-layer"],
          answer: "z-10",
        },
      ],
      course5: [
        {
          question: "Responsive breakpoint sm?",
          options: ["sm:", "small:", "s:", "screen-sm:"],
          answer: "sm:",
        },
        {
          question: "Hover state class?",
          options: [
            "hover:bg-blue-500",
            "hover-color",
            "on-hover",
            "hover-class",
          ],
          answer: "hover:bg-blue-500",
        },
        {
          question: "Focus state class?",
          options: ["focus:ring", "focus-class", "on-focus", "focus:outline"],
          answer: "focus:ring",
        },
        {
          question: "Grid columns class?",
          options: ["grid-cols-3", "cols-3", "grid-3", "columns-3"],
          answer: "grid-cols-3",
        },
        {
          question: "Gap between elements class?",
          options: ["gap-4", "space-4", "g-4", "gap"],
          answer: "gap-4",
        },
      ],
    },
  ],

  // ============== Python ============== //
  python: [
    {
      course1: [
        {
          question: "Python is a ___ language?",
          options: ["High-level", "Low-level", "Assembly", "Machine"],
          answer: "High-level",
        },
        {
          question: "Python file extension?",
          options: [".py", ".pt", ".pyt", ".python"],
          answer: ".py",
        },
        {
          question: "Print statement?",
          options: ["print()", "echo()", "console.log()", "printf()"],
          answer: "print()",
        },
        {
          question: "Python is ___ typed?",
          options: ["Dynamically", "Statically", "Weakly", "Strongly"],
          answer: "Dynamically",
        },
        {
          question: "Comments in Python?",
          options: ["#", "//", "/* */", "<!-- -->"],
          answer: "#",
        },
      ],
      course2: [
        {
          question: "Data type for decimal numbers?",
          options: ["float", "int", "double", "decimal"],
          answer: "float",
        },
        {
          question: "List in Python uses?",
          options: ["[]", "()", "{}", "<>"],
          answer: "[]",
        },
        {
          question: "Tuple uses?",
          options: ["()", "[]", "{}", "<>"],
          answer: "()",
        },
        {
          question: "Dictionary uses?",
          options: ["{}", "[]", "()", "<>"],
          answer: "{}",
        },
        {
          question: "Set uses?",
          options: ["{}", "[]", "()", "<>"],
          answer: "{}",
        },
      ],
      course3: [
        {
          question: "Loop in Python?",
          options: ["for, while", "do-while", "foreach", "repeat-until"],
          answer: "for, while",
        },
        {
          question: "Break statement?",
          options: [
            "Exits loop",
            "Skips iteration",
            "Stops program",
            "Pauses loop",
          ],
          answer: "Exits loop",
        },
        {
          question: "Continue statement?",
          options: [
            "Skips current iteration",
            "Exits loop",
            "Pauses loop",
            "Ends program",
          ],
          answer: "Skips current iteration",
        },
        {
          question: "Function declaration?",
          options: ["def", "func", "function", "declare"],
          answer: "def",
        },
        {
          question: "Lambda keyword?",
          options: ["Anonymous function", "Loop", "Class", "Variable"],
          answer: "Anonymous function",
        },
      ],
      course4: [
        {
          question: "Import module?",
          options: ["import", "require", "include", "use"],
          answer: "import",
        },
        {
          question: "Random module function?",
          options: ["randint()", "random()", "randomInt()", "rand()"],
          answer: "randint()",
        },
        {
          question: "OS module use?",
          options: [
            "Operating system tasks",
            "Math functions",
            "String handling",
            "Date-time",
          ],
          answer: "Operating system tasks",
        },
        {
          question: "Time module function?",
          options: ["sleep()", "wait()", "pause()", "delay()"],
          answer: "sleep()",
        },
        {
          question: "JSON module use?",
          options: ["Parse JSON", "Math", "File IO", "Random"],
          answer: "Parse JSON",
        },
      ],
      course5: [
        {
          question: "Exception handling keyword?",
          options: ["try", "catch", "throw", "except"],
          answer: "try",
        },
        {
          question: "Keyword to catch exception?",
          options: ["except", "catch", "handle", "error"],
          answer: "except",
        },
        {
          question: "Finally block is executed?",
          options: ["Always", "Never", "On exception", "Randomly"],
          answer: "Always",
        },
        {
          question: "Raise exception keyword?",
          options: ["raise", "throw", "error", "except"],
          answer: "raise",
        },
        {
          question: "Pass statement does?",
          options: [
            "Does nothing",
            "Skips code",
            "Stops program",
            "Throws error",
          ],
          answer: "Does nothing",
        },
      ],
    },
  ],
  // ============== JavaScript ============== //
  javascript: [
    {
      course1: [
        {
          question: "JavaScript is a ___ language?",
          options: ["High-level", "Low-level", "Machine", "Assembly"],
          answer: "High-level",
        },
        {
          question: "File extension for JS?",
          options: [".js", ".jsx", ".javascript", ".jsc"],
          answer: ".js",
        },
        {
          question: "Console log output?",
          options: ["console.log()", "print()", "echo()", "write()"],
          answer: "console.log()",
        },
        {
          question: "Variable keyword ES6?",
          options: ["let", "var", "const", "all of these"],
          answer: "all of these",
        },
        {
          question: "JavaScript runs on?",
          options: ["Browser", "Server", "Both", "None"],
          answer: "Both",
        },
      ],
      course2: [
        {
          question: "Function declaration?",
          options: [
            "function myFunc()",
            "func myFunc()",
            "def myFunc()",
            "myFunc()",
          ],
          answer: "function myFunc()",
        },
        {
          question: "Arrow function syntax?",
          options: ["() => {}", "function => {}", "func() => {}", "() -> {}"],
          answer: "() => {}",
        },
        {
          question: "Array method to add at end?",
          options: ["push()", "pop()", "shift()", "unshift()"],
          answer: "push()",
        },
        {
          question: "Array method to remove last?",
          options: ["pop()", "push()", "shift()", "unshift()"],
          answer: "pop()",
        },
        {
          question: "Array length property?",
          options: ["length", "size", "count", "len"],
          answer: "length",
        },
      ],
      course3: [
        {
          question: "Object property access?",
          options: ["obj.prop", "obj['prop']", "Both", "None"],
          answer: "Both",
        },
        {
          question: "Template literal uses?",
          options: ["`Hello ${name}`", "'Hello '+name", '"Hello "+name', "All"],
          answer: "`Hello ${name}`",
        },
        {
          question: "Strict equality operator?",
          options: ["===", "==", "=", "!=="],
          answer: "===",
        },
        {
          question: "Event listener method?",
          options: [
            "addEventListener()",
            "onEvent()",
            "listen()",
            "attachEvent()",
          ],
          answer: "addEventListener()",
        },
        {
          question: "Convert string to int?",
          options: ["parseInt()", "Number()", "Both", "toInt()"],
          answer: "Both",
        },
      ],
      course4: [
        {
          question: "JavaScript loop types?",
          options: [
            "for, while, do-while",
            "foreach only",
            "loop(), repeat()",
            "for-in only",
          ],
          answer: "for, while, do-while",
        },
        {
          question: "Break statement?",
          options: ["Stops loop", "Skips iteration", "Pauses", "Exits program"],
          answer: "Stops loop",
        },
        {
          question: "Continue statement?",
          options: [
            "Skips current iteration",
            "Stops loop",
            "Pauses loop",
            "Exits program",
          ],
          answer: "Skips current iteration",
        },
        {
          question: "JS comment syntax?",
          options: ["// comment", "/* */", "# comment", "<!-- -->"],
          answer: "// comment",
        },
        {
          question: "Undefined variable value?",
          options: ["undefined", "null", "0", "NaN"],
          answer: "undefined",
        },
      ],
      course5: [
        {
          question: "NaN stands for?",
          options: ["Not a Number", "No a Number", "Null", "Not Available"],
          answer: "Not a Number",
        },
        {
          question: "JS data types?",
          options: [
            "String, Number, Boolean, Object, Undefined, Symbol, BigInt",
            "All of above",
            "None",
            "Only Number and String",
          ],
          answer: "String, Number, Boolean, Object, Undefined, Symbol, BigInt",
        },
        {
          question: "Truthy values?",
          options: ["Non-zero, Non-empty", "0", "''", "false"],
          answer: "Non-zero, Non-empty",
        },
        {
          question: "Falsy values?",
          options: [
            "0, '', null, undefined, false, NaN",
            "All values",
            "Non-empty string",
            "1",
          ],
          answer: "0, '', null, undefined, false, NaN",
        },
        {
          question: "JS function hoisting?",
          options: [
            "Function declarations hoisted",
            "Function expressions hoisted",
            "Both",
            "None",
          ],
          answer: "Function declarations hoisted",
        },
      ],
    },
  ],

  // ============== React JS ============== //
  reactjs: [
    {
      course1: [
        {
          question: "React is a ___ library?",
          options: ["JavaScript", "CSS", "HTML", "Python"],
          answer: "JavaScript",
        },
        {
          question: "Component in React?",
          options: ["Reusable UI", "Database", "Server", "API"],
          answer: "Reusable UI",
        },
        {
          question: "JSX stands for?",
          options: [
            "JavaScript XML",
            "Java Syntax Extension",
            "JS Example",
            "None",
          ],
          answer: "JavaScript XML",
        },
        {
          question: "React state is used for?",
          options: ["Managing data", "Styling", "Routing", "Testing"],
          answer: "Managing data",
        },
        {
          question: "React prop is used for?",
          options: [
            "Passing data",
            "Managing state",
            "Event handling",
            "Styling",
          ],
          answer: "Passing data",
        },
      ],
      course2: [
        {
          question: "React hook for state?",
          options: ["useState", "useEffect", "useContext", "useReducer"],
          answer: "useState",
        },
        {
          question: "Hook for side effects?",
          options: ["useEffect", "useState", "useRef", "useMemo"],
          answer: "useEffect",
        },
        {
          question: "useRef is used for?",
          options: ["DOM reference", "State", "Props", "Styling"],
          answer: "DOM reference",
        },
        {
          question: "useMemo is for?",
          options: ["Memoization", "Routing", "API call", "Styling"],
          answer: "Memoization",
        },
        {
          question: "React key prop is used for?",
          options: ["Unique list items", "Styling", "State", "Routing"],
          answer: "Unique list items",
        },
      ],
      course3: [
        {
          question: "React lifecycle method for mount?",
          options: [
            "componentDidMount",
            "componentWillUnmount",
            "render",
            "useEffect",
          ],
          answer: "componentDidMount",
        },
        {
          question: "React functional component returns?",
          options: ["JSX", "HTML", "CSS", "JS object"],
          answer: "JSX",
        },
        {
          question: "React Router used for?",
          options: ["Routing", "State", "API call", "DOM manipulation"],
          answer: "Routing",
        },
        {
          question: "React Fragment syntax?",
          options: ["<>...</>", "<Fragment>...</Fragment>", "Both", "None"],
          answer: "Both",
        },
        {
          question: "Conditional rendering uses?",
          options: ["ternary operator", "if-else", "switch", "All"],
          answer: "All",
        },
      ],
      course4: [
        {
          question: "React context used for?",
          options: ["Global state", "Routing", "Component", "Styling"],
          answer: "Global state",
        },
        {
          question: "Context provider prop?",
          options: ["value", "state", "props", "data"],
          answer: "value",
        },
        {
          question: "React lazy used for?",
          options: ["Code splitting", "State", "Routing", "Testing"],
          answer: "Code splitting",
        },
        {
          question: "Suspense component used for?",
          options: ["Loading fallback", "State", "Props", "Routing"],
          answer: "Loading fallback",
        },
        {
          question: "Higher Order Component?",
          options: ["Function returns component", "Component", "Hook", "State"],
          answer: "Function returns component",
        },
      ],
      course5: [
        {
          question: "React.memo used for?",
          options: ["Prevent re-render", "State", "Props", "Routing"],
          answer: "Prevent re-render",
        },
        {
          question: "useCallback used for?",
          options: ["Memoize function", "State", "Routing", "Event handling"],
          answer: "Memoize function",
        },
        {
          question: "React strict mode helps in?",
          options: [
            "Highlight potential problems",
            "Styling",
            "State",
            "Routing",
          ],
          answer: "Highlight potential problems",
        },
        {
          question: "React portal used for?",
          options: [
            "Render outside DOM hierarchy",
            "Routing",
            "State",
            "Props",
          ],
          answer: "Render outside DOM hierarchy",
        },
        {
          question: "React suspense supports?",
          options: ["Lazy loading", "State", "Routing", "Props"],
          answer: "Lazy loading",
        },
      ],
    },
  ],
};
export default quizData;
