import { useState, useEffect } from 'react'
import Head from 'next/head'

export default function Home() {
  const [activeTab, setActiveTab] = useState('intro')
  const [jsOutput, setJsOutput] = useState('')
  const [es6Output, setEs6Output] = useState('')
  const [angularOutput, setAngularOutput] = useState('')
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({})
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const completed = Object.keys(quizAnswers).length
    const total = 8
    setProgress(Math.round((completed / total) * 100))
  }, [quizAnswers])

  const runJSExample = (code: string, outputSetter: Function) => {
    try {
      const result = eval(code)
      outputSetter(String(result))
    } catch (error: any) {
      outputSetter('Error: ' + error.message)
    }
  }

  const checkQuiz = (question: string, answer: string, correct: string) => {
    setQuizAnswers({...quizAnswers, [question]: answer})
    return answer === correct
  }

  return (
    <>
      <Head>
        <title>Learn AngularJS & ES6 - Interactive Tutorial</title>
        <meta name="description" content="Learn AngularJS and JavaScript ES6 from scratch in a fun, practical way" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="container">
        <div className="header">
          <h1><span className="emoji">🚀</span>AngularJS & ES6 Playground</h1>
          <p>Learn JavaScript ES6 and AngularJS from scratch - The fun way!</p>
          <div className="progress-bar">
            <div className="progress-fill" style={{width: `${progress}%`}}>
              {progress}% Complete
            </div>
          </div>
        </div>

        <div className="nav-tabs">
          <button className={`nav-tab ${activeTab === 'intro' ? 'active' : ''}`} onClick={() => setActiveTab('intro')}>
            🎯 Introduction
          </button>
          <button className={`nav-tab ${activeTab === 'js-basics' ? 'active' : ''}`} onClick={() => setActiveTab('js-basics')}>
            📚 JS Basics
          </button>
          <button className={`nav-tab ${activeTab === 'es6' ? 'active' : ''}`} onClick={() => setActiveTab('es6')}>
            ⚡ ES6 Features
          </button>
          <button className={`nav-tab ${activeTab === 'angular-intro' ? 'active' : ''}`} onClick={() => setActiveTab('angular-intro')}>
            🅰️ AngularJS Intro
          </button>
          <button className={`nav-tab ${activeTab === 'angular-directives' ? 'active' : ''}`} onClick={() => setActiveTab('angular-directives')}>
            🎨 Directives
          </button>
          <button className={`nav-tab ${activeTab === 'angular-advanced' ? 'active' : ''}`} onClick={() => setActiveTab('angular-advanced')}>
            🔥 Advanced
          </button>
        </div>

        <div className="content-area">
          {activeTab === 'intro' && (
            <div className="lesson">
              <h2>Welcome to Your Learning Journey! 🎉</h2>
              <p>This interactive tutorial will teach you JavaScript ES6 and AngularJS from the ground up. Get ready to code, play, and learn!</p>

              <h3>What You'll Learn:</h3>
              <ul>
                <li><strong>JavaScript Fundamentals</strong> - Variables, functions, objects, and arrays</li>
                <li><strong>ES6 Modern Features</strong> - Arrow functions, destructuring, template literals, promises, and more</li>
                <li><strong>AngularJS Framework</strong> - Data binding, directives, controllers, services, and routing</li>
                <li><strong>Real-World Examples</strong> - Build interactive components and applications</li>
              </ul>

              <div className="fun-fact">
                <strong>💡 Fun Fact:</strong>
                AngularJS was created by Google in 2010 and revolutionized how we build single-page applications! While Angular (2+) is now more popular, AngularJS is still used in many legacy applications.
              </div>

              <h3>Why This Course is Different:</h3>
              <ul>
                <li>🎮 <strong>Interactive Playgrounds</strong> - Run code directly in your browser</li>
                <li>🧩 <strong>Mini Quizzes</strong> - Test your knowledge as you go</li>
                <li>🎯 <strong>Practical Examples</strong> - Real-world scenarios, not boring theory</li>
                <li>🚀 <strong>Progressive Learning</strong> - Start simple, get advanced</li>
              </ul>

              <div className="playground">
                <h4>🎮 Let's Start with Your First Code!</h4>
                <button className="playground-button" onClick={() => {
                  const name = prompt("What's your name?") || "Awesome Developer"
                  setJsOutput(`Hello ${name}! Welcome to the course! 🎉`)
                }}>
                  Click Me to Start!
                </button>
                {jsOutput && <div className="output">{jsOutput}</div>}
              </div>
            </div>
          )}

          {activeTab === 'js-basics' && (
            <div className="lesson">
              <h2>JavaScript Basics - Foundation for Everything! 📚</h2>

              <h3>1. Variables - Storing Data</h3>
              <p>Variables are containers for storing data values. In modern JavaScript, we use <code>let</code> and <code>const</code>.</p>

              <div className="code-block">
{`// const - Cannot be reassigned (use for constants)
const PI = 3.14159;
const name = "JavaScript";

// let - Can be reassigned (use for variables)
let score = 0;
score = 100; // This works!

// var - Old way (avoid using it)
var oldStyle = "not recommended";`}
              </div>

              <div className="playground">
                <h4>🎮 Try It: Variable Playground</h4>
                <button className="playground-button" onClick={() => {
                  const age = 25
                  let city = "New York"
                  city = "San Francisco"
                  setJsOutput(`Age: ${age}, City changed to: ${city}`)
                }}>
                  Run Example
                </button>
                {jsOutput && <div className="output">{jsOutput}</div>}
              </div>

              <h3>2. Functions - Reusable Code Blocks</h3>
              <div className="code-block">
{`// Function Declaration
function greet(name) {
  return "Hello, " + name + "!";
}

// Function Expression
const add = function(a, b) {
  return a + b;
};

// Calling functions
greet("Alice");  // "Hello, Alice!"
add(5, 3);       // 8`}
              </div>

              <div className="playground">
                <h4>🎮 Create Your Own Function</h4>
                <input
                  className="playground-input"
                  placeholder="Enter your name"
                  id="nameInput"
                />
                <button className="playground-button" onClick={() => {
                  const input = (document.getElementById('nameInput') as HTMLInputElement).value
                  function createGreeting(name: string) {
                    return `🎉 Welcome ${name}! You just called a function!`
                  }
                  setJsOutput(createGreeting(input || "Friend"))
                }}>
                  Call Function
                </button>
                {jsOutput && <div className="output">{jsOutput}</div>}
              </div>

              <h3>3. Arrays - Lists of Data</h3>
              <div className="code-block">
{`// Creating arrays
const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];

// Array methods
fruits.push("grape");      // Add to end
fruits.pop();              // Remove from end
fruits.length;             // Get length
fruits[0];                 // Access first item
fruits.includes("apple");  // Check if exists`}
              </div>

              <div className="playground">
                <h4>🎮 Array Magic</h4>
                <button className="playground-button" onClick={() => {
                  const colors = ["red", "blue", "green"]
                  colors.push("yellow")
                  const doubled = colors.map(c => c.toUpperCase())
                  setJsOutput(`Original: ${colors.join(", ")} | Uppercase: ${doubled.join(", ")}`)
                }}>
                  Transform Array
                </button>
                {jsOutput && <div className="output">{jsOutput}</div>}
              </div>

              <h3>4. Objects - Key-Value Pairs</h3>
              <div className="code-block">
{`// Creating objects
const person = {
  name: "John",
  age: 30,
  city: "New York",
  greet: function() {
    return "Hi, I'm " + this.name;
  }
};

// Accessing properties
person.name;           // "John"
person["age"];         // 30
person.greet();        // "Hi, I'm John"`}
              </div>

              <div className="quiz">
                <h4>🧩 Quick Quiz!</h4>
                <p>What's the difference between <code>let</code> and <code>const</code>?</p>
                <button
                  className={`quiz-option ${quizAnswers['q1'] === 'a' ? 'incorrect' : ''}`}
                  onClick={() => checkQuiz('q1', 'a', 'b') && setJsOutput("Try again! 🤔")}
                >
                  A) No difference
                </button>
                <button
                  className={`quiz-option ${quizAnswers['q1'] === 'b' ? 'correct' : ''}`}
                  onClick={() => {
                    if(checkQuiz('q1', 'b', 'b')) setJsOutput("Correct! 🎉 const cannot be reassigned!")
                  }}
                >
                  B) const cannot be reassigned, let can
                </button>
                {jsOutput && quizAnswers['q1'] && <div className="output">{jsOutput}</div>}
              </div>
            </div>
          )}

          {activeTab === 'es6' && (
            <div className="lesson">
              <h2>ES6 - Modern JavaScript Magic! ⚡</h2>

              <h3>1. Arrow Functions - Shorter Syntax</h3>
              <div className="code-block">
{`// Old way
const add = function(a, b) {
  return a + b;
};

// ES6 Arrow Function
const add = (a, b) => a + b;

// Multiple lines
const greet = (name) => {
  const message = "Hello " + name;
  return message;
};

// Single parameter (parentheses optional)
const square = x => x * x;`}
              </div>

              <div className="playground">
                <h4>🎮 Arrow Function Power!</h4>
                <input className="playground-input" placeholder="Enter a number" id="arrowInput" />
                <button className="playground-button" onClick={() => {
                  const num = parseInt((document.getElementById('arrowInput') as HTMLInputElement).value || '5')
                  const square = (x: number) => x * x
                  const cube = (x: number) => x * x * x
                  setEs6Output(`${num}² = ${square(num)}, ${num}³ = ${cube(num)}`)
                }}>
                  Calculate
                </button>
                {es6Output && <div className="output">{es6Output}</div>}
              </div>

              <h3>2. Template Literals - String Interpolation</h3>
              <div className="code-block">
{`// Old way
const name = "Alice";
const age = 25;
const message = "Hello, my name is " + name + " and I'm " + age + " years old";

// ES6 Template Literals
const message = \`Hello, my name is \${name} and I'm \${age} years old\`;

// Multi-line strings
const html = \`
  <div>
    <h1>\${name}</h1>
    <p>Age: \${age}</p>
  </div>
\`;`}
              </div>

              <div className="playground">
                <h4>🎮 Template Literal Fun</h4>
                <input className="playground-input" placeholder="Your name" id="nameES6" />
                <input className="playground-input" placeholder="Your hobby" id="hobbyES6" />
                <button className="playground-button" onClick={() => {
                  const name = (document.getElementById('nameES6') as HTMLInputElement).value || 'Developer'
                  const hobby = (document.getElementById('hobbyES6') as HTMLInputElement).value || 'coding'
                  setEs6Output(`🎉 ${name} loves ${hobby}! That's awesome!`)
                }}>
                  Create Message
                </button>
                {es6Output && <div className="output">{es6Output}</div>}
              </div>

              <h3>3. Destructuring - Extract Values Easily</h3>
              <div className="code-block">
{`// Array Destructuring
const colors = ["red", "green", "blue"];
const [first, second, third] = colors;
// first = "red", second = "green", third = "blue"

// Object Destructuring
const person = { name: "Bob", age: 30, city: "NYC" };
const { name, age } = person;
// name = "Bob", age = 30

// With different names
const { name: personName, age: personAge } = person;`}
              </div>

              <div className="playground">
                <h4>🎮 Destructuring Demo</h4>
                <button className="playground-button" onClick={() => {
                  const user = { username: "coder123", email: "coder@email.com", level: 42 }
                  const { username, level } = user
                  setEs6Output(`User: ${username}, Level: ${level} 🎮`)
                }}>
                  Destructure Object
                </button>
                {es6Output && <div className="output">{es6Output}</div>}
              </div>

              <h3>4. Spread Operator - Copy & Merge</h3>
              <div className="code-block">
{`// Spread with arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];  // [1, 2, 3, 4, 5, 6]

// Spread with objects
const person = { name: "Alice", age: 25 };
const employee = { ...person, role: "Developer" };
// { name: "Alice", age: 25, role: "Developer" }

// Copying arrays
const original = [1, 2, 3];
const copy = [...original];`}
              </div>

              <h3>5. Default Parameters</h3>
              <div className="code-block">
{`// Function with default parameters
const greet = (name = "Guest", greeting = "Hello") => {
  return \`\${greeting}, \${name}!\`;
};

greet();                    // "Hello, Guest!"
greet("Alice");             // "Hello, Alice!"
greet("Bob", "Hi");         // "Hi, Bob!"`}
              </div>

              <div className="quiz">
                <h4>🧩 ES6 Quiz!</h4>
                <p>What does the spread operator (...) do?</p>
                <button
                  className={`quiz-option ${quizAnswers['q2'] === 'a' ? 'incorrect' : ''}`}
                  onClick={() => checkQuiz('q2', 'a', 'b') && setEs6Output("Not quite! 🤔")}
                >
                  A) Deletes elements
                </button>
                <button
                  className={`quiz-option ${quizAnswers['q2'] === 'b' ? 'correct' : ''}`}
                  onClick={() => {
                    if(checkQuiz('q2', 'b', 'b')) setEs6Output("Perfect! 🎉 It spreads/copies elements!")
                  }}
                >
                  B) Spreads/copies array or object elements
                </button>
                {es6Output && quizAnswers['q2'] && <div className="output">{es6Output}</div>}
              </div>

              <div className="fun-fact">
                <strong>💡 Fun Fact:</strong>
                ES6 (ECMAScript 2015) was the biggest update to JavaScript in its history! It introduced over 20 new features that made JavaScript more powerful and easier to write.
              </div>
            </div>
          )}

          {activeTab === 'angular-intro' && (
            <div className="lesson">
              <h2>AngularJS Introduction - Let's Build Apps! 🅰️</h2>

              <h3>What is AngularJS?</h3>
              <p>AngularJS is a JavaScript framework that makes it easy to build dynamic web applications. It extends HTML with new attributes and binds data to HTML with expressions.</p>

              <div className="fun-fact">
                <strong>💡 Key Concepts:</strong>
                <ul>
                  <li><strong>Two-Way Data Binding</strong> - Changes in the UI update the model, and vice versa</li>
                  <li><strong>Directives</strong> - Extend HTML with custom attributes (ng-*)</li>
                  <li><strong>Controllers</strong> - JavaScript functions that control data</li>
                  <li><strong>Services</strong> - Reusable business logic</li>
                </ul>
              </div>

              <h3>Your First AngularJS App</h3>
              <div className="code-block">
{`<!DOCTYPE html>
<html ng-app="myApp">
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
</head>
<body ng-controller="MainController">

  <h1>{{ title }}</h1>
  <input ng-model="name" placeholder="Enter your name">
  <p>Hello, {{ name }}!</p>

  <script>
    var app = angular.module('myApp', []);

    app.controller('MainController', function($scope) {
      $scope.title = 'My First AngularJS App';
      $scope.name = 'World';
    });
  </script>

</body>
</html>`}
              </div>

              <div className="angular-demo" id="angularDemo1">
                <h4>🎮 Live AngularJS Demo - Two-Way Binding</h4>
                <div data-ng-app="demoApp" data-ng-controller="DemoController">
                  <input
                    className="playground-input"
                    data-ng-model="userName"
                    placeholder="Type your name..."
                  />
                  <div className="output">
                    Hello, <span data-ng-bind="userName || 'Stranger'"></span>! 👋
                  </div>
                  <p style={{marginTop: '15px', color: '#666'}}>
                    Notice how the greeting updates as you type? That's two-way data binding!
                  </p>
                </div>
              </div>

              <h3>Understanding $scope</h3>
              <p>The <code>$scope</code> is the glue between the controller and the view. It's an object that contains all the data and functions available in your HTML.</p>

              <div className="code-block">
{`app.controller('MyController', function($scope) {
  // Data
  $scope.message = "Hello from controller!";
  $scope.count = 0;

  // Functions
  $scope.increment = function() {
    $scope.count++;
  };

  $scope.greet = function(name) {
    return "Hello, " + name;
  };
});`}
              </div>

              <div className="angular-demo" id="angularDemo2">
                <h4>🎮 Counter Demo with Controller Function</h4>
                <div data-ng-app="counterApp" data-ng-controller="CounterController">
                  <div className="output">
                    Count: <span data-ng-bind="count"></span> 🎯
                  </div>
                  <button className="playground-button" data-ng-click="increment()">
                    Increment
                  </button>
                  <button className="playground-button" data-ng-click="decrement()">
                    Decrement
                  </button>
                  <button className="playground-button" data-ng-click="reset()">
                    Reset
                  </button>
                </div>
              </div>

              <div className="quiz">
                <h4>🧩 AngularJS Quiz!</h4>
                <p>What does ng-model do?</p>
                <button
                  className={`quiz-option ${quizAnswers['q3'] === 'a' ? 'incorrect' : ''}`}
                  onClick={() => checkQuiz('q3', 'a', 'b') && setAngularOutput("Not quite! 🤔")}
                >
                  A) Styles the element
                </button>
                <button
                  className={`quiz-option ${quizAnswers['q3'] === 'b' ? 'correct' : ''}`}
                  onClick={() => {
                    if(checkQuiz('q3', 'b', 'b')) setAngularOutput("Correct! 🎉 It creates two-way data binding!")
                  }}
                >
                  B) Creates two-way data binding
                </button>
                {angularOutput && quizAnswers['q3'] && <div className="output">{angularOutput}</div>}
              </div>

              <script dangerouslySetInnerHTML={{__html: `
                if (typeof angular !== 'undefined') {
                  angular.module('demoApp', [])
                    .controller('DemoController', function($scope) {
                      $scope.userName = '';
                    });

                  angular.module('counterApp', [])
                    .controller('CounterController', function($scope) {
                      $scope.count = 0;
                      $scope.increment = function() { $scope.count++; };
                      $scope.decrement = function() { $scope.count--; };
                      $scope.reset = function() { $scope.count = 0; };
                    });
                }
              `}} />
            </div>
          )}

          {activeTab === 'angular-directives' && (
            <div className="lesson">
              <h2>AngularJS Directives - HTML Superpowers! 🎨</h2>

              <h3>1. ng-repeat - Loop Through Data</h3>
              <div className="code-block">
{`<div ng-controller="ListController">
  <ul>
    <li ng-repeat="item in items">
      {{ item }}
    </li>
  </ul>
</div>

<script>
  app.controller('ListController', function($scope) {
    $scope.items = ['Apple', 'Banana', 'Orange'];
  });
</script>`}
              </div>

              <div className="angular-demo" id="angularDemo3">
                <h4>🎮 Shopping List with ng-repeat</h4>
                <div data-ng-app="listApp" data-ng-controller="ShoppingController">
                  <input
                    className="playground-input"
                    data-ng-model="newItem"
                    placeholder="Add an item..."
                  />
                  <button className="playground-button" data-ng-click="addItem()">
                    Add Item
                  </button>
                  <ul style={{marginTop: '15px', fontSize: '1.1rem'}}>
                    <li data-ng-repeat="item in items track by $index" style={{padding: '8px', background: '#f0f0f0', margin: '5px 0', borderRadius: '5px'}}>
                      🛒 <span data-ng-bind="item"></span>
                      <button
                        style={{marginLeft: '10px', background: '#f44336', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer'}}
                        data-ng-click="removeItem($index)"
                      >
                        ❌
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              <h3>2. ng-show / ng-hide - Toggle Visibility</h3>
              <div className="code-block">
{`<div ng-controller="ToggleController">
  <button ng-click="showMessage = !showMessage">
    Toggle Message
  </button>

  <p ng-show="showMessage">
    This message is visible!
  </p>

  <p ng-hide="showMessage">
    This message is hidden!
  </p>
</div>`}
              </div>

              <div className="angular-demo" id="angularDemo4">
                <h4>🎮 Show/Hide Magic</h4>
                <div data-ng-app="toggleApp" data-ng-controller="ToggleController">
                  <button className="playground-button" data-ng-click="visible = !visible">
                    <span data-ng-show="!visible">Show</span>
                    <span data-ng-show="visible">Hide</span>
                    Secret Message
                  </button>
                  <div data-ng-show="visible" style={{marginTop: '15px', padding: '20px', background: 'linear-gradient(135deg, #667eea, #764ba2)', color: 'white', borderRadius: '10px', fontSize: '1.2rem'}}>
                    🎉 You found the secret message! You're awesome!
                  </div>
                </div>
              </div>

              <h3>3. ng-if - Conditional Rendering</h3>
              <div className="code-block">
{`<div ng-controller="ConditionalController">
  <input ng-model="age" type="number" placeholder="Enter age">

  <p ng-if="age < 18">You are a minor</p>
  <p ng-if="age >= 18 && age < 65">You are an adult</p>
  <p ng-if="age >= 65">You are a senior</p>
</div>`}
              </div>

              <h3>4. ng-class - Dynamic CSS Classes</h3>
              <div className="code-block">
{`<div ng-controller="StyleController">
  <div ng-class="{ 'active': isActive, 'highlighted': isHighlighted }">
    Dynamic styling!
  </div>

  <button ng-click="isActive = !isActive">
    Toggle Active
  </button>
</div>`}
              </div>

              <div className="angular-demo" id="angularDemo5">
                <h4>🎮 Mood Selector</h4>
                <div data-ng-app="moodApp" data-ng-controller="MoodController">
                  <button className="playground-button" data-ng-click="mood = 'happy'">😊 Happy</button>
                  <button className="playground-button" data-ng-click="mood = 'excited'">🚀 Excited</button>
                  <button className="playground-button" data-ng-click="mood = 'calm'">😌 Calm</button>

                  <div
                    style={{marginTop: '20px', padding: '30px', borderRadius: '15px', fontSize: '2rem', textAlign: 'center', transition: 'all 0.3s'}}
                    data-ng-style="mood === 'happy' && {'background': '#FFD700'} || mood === 'excited' && {'background': '#FF6347'} || mood === 'calm' && {'background': '#87CEEB'}"
                  >
                    <span data-ng-if="mood === 'happy'">😊 You're feeling happy!</span>
                    <span data-ng-if="mood === 'excited'">🚀 You're feeling excited!</span>
                    <span data-ng-if="mood === 'calm'">😌 You're feeling calm!</span>
                    <span data-ng-if="!mood">Select your mood above!</span>
                  </div>
                </div>
              </div>

              <div className="quiz">
                <h4>🧩 Directives Quiz!</h4>
                <p>Which directive removes an element from the DOM?</p>
                <button
                  className={`quiz-option ${quizAnswers['q4'] === 'a' ? 'incorrect' : ''}`}
                  onClick={() => checkQuiz('q4', 'a', 'b') && setAngularOutput("Not quite! ng-show only hides it 🤔")}
                >
                  A) ng-show
                </button>
                <button
                  className={`quiz-option ${quizAnswers['q4'] === 'b' ? 'correct' : ''}`}
                  onClick={() => {
                    if(checkQuiz('q4', 'b', 'b')) setAngularOutput("Correct! 🎉 ng-if removes it completely!")
                  }}
                >
                  B) ng-if
                </button>
                {angularOutput && quizAnswers['q4'] && <div className="output">{angularOutput}</div>}
              </div>

              <script dangerouslySetInnerHTML={{__html: `
                if (typeof angular !== 'undefined') {
                  angular.module('listApp', [])
                    .controller('ShoppingController', function($scope) {
                      $scope.items = ['Milk', 'Bread', 'Eggs'];
                      $scope.newItem = '';
                      $scope.addItem = function() {
                        if ($scope.newItem) {
                          $scope.items.push($scope.newItem);
                          $scope.newItem = '';
                        }
                      };
                      $scope.removeItem = function(index) {
                        $scope.items.splice(index, 1);
                      };
                    });

                  angular.module('toggleApp', [])
                    .controller('ToggleController', function($scope) {
                      $scope.visible = false;
                    });

                  angular.module('moodApp', [])
                    .controller('MoodController', function($scope) {
                      $scope.mood = '';
                    });
                }
              `}} />
            </div>
          )}

          {activeTab === 'angular-advanced' && (
            <div className="lesson">
              <h2>Advanced AngularJS - Master Level! 🔥</h2>

              <h3>1. Filters - Transform Data</h3>
              <div className="code-block">
{`<!-- Built-in filters -->
<p>{{ name | uppercase }}</p>
<p>{{ price | currency }}</p>
<p>{{ date | date:'short' }}</p>
<p>{{ text | limitTo:50 }}</p>

<!-- Filter in controller -->
<ul>
  <li ng-repeat="item in items | filter:searchText | orderBy:'name'">
    {{ item.name }}
  </li>
</ul>

<!-- Custom filter -->
app.filter('reverse', function() {
  return function(input) {
    return input.split('').reverse().join('');
  };
});`}
              </div>

              <div className="angular-demo" id="angularDemo6">
                <h4>🎮 Search & Filter Demo</h4>
                <div data-ng-app="filterApp" data-ng-controller="FilterController">
                  <input
                    className="playground-input"
                    data-ng-model="search"
                    placeholder="Search languages..."
                  />
                  <div style={{marginTop: '15px'}}>
                    <div
                      data-ng-repeat="lang in languages | filter:search"
                      style={{padding: '10px', margin: '5px 0', background: '#f0f0f0', borderRadius: '5px', fontSize: '1.1rem'}}
                    >
                      💻 <span data-ng-bind="lang.name"></span> - <span data-ng-bind="lang.year"></span>
                    </div>
                    <p data-ng-if="(languages | filter:search).length === 0" style={{color: '#999', marginTop: '10px'}}>
                      No results found 😕
                    </p>
                  </div>
                </div>
              </div>

              <h3>2. Services - Reusable Logic</h3>
              <div className="code-block">
{`// Creating a service
app.service('MathService', function() {
  this.add = function(a, b) {
    return a + b;
  };

  this.multiply = function(a, b) {
    return a * b;
  };
});

// Using the service
app.controller('CalcController', function($scope, MathService) {
  $scope.result = MathService.add(5, 3);  // 8
});

// Factory pattern
app.factory('UserFactory', function() {
  return {
    getUser: function(id) {
      return { id: id, name: 'User ' + id };
    }
  };
});`}
              </div>

              <h3>3. Promises with $q</h3>
              <div className="code-block">
{`app.service('DataService', function($q, $timeout) {
  this.fetchData = function() {
    var deferred = $q.defer();

    // Simulate API call
    $timeout(function() {
      deferred.resolve({ data: 'Success!' });
    }, 1000);

    return deferred.promise;
  };
});

app.controller('DataController', function($scope, DataService) {
  DataService.fetchData()
    .then(function(response) {
      $scope.data = response.data;
    })
    .catch(function(error) {
      $scope.error = error;
    });
});`}
              </div>

              <div className="angular-demo" id="angularDemo7">
                <h4>🎮 Async Data Loading</h4>
                <div data-ng-app="asyncApp" data-ng-controller="AsyncController">
                  <button className="playground-button" data-ng-click="loadData()" data-ng-disabled="loading">
                    <span data-ng-if="!loading">Load Data</span>
                    <span data-ng-if="loading">Loading...</span>
                  </button>
                  <div data-ng-if="data" style={{marginTop: '15px', padding: '20px', background: '#4CAF50', color: 'white', borderRadius: '10px'}}>
                    ✅ Data loaded: <span data-ng-bind="data"></span>
                  </div>
                </div>
              </div>

              <h3>4. Custom Directives</h3>
              <div className="code-block">
{`// Creating a custom directive
app.directive('myCard', function() {
  return {
    restrict: 'E',
    scope: {
      title: '@',
      content: '@'
    },
    template:
      '<div class="card">' +
        '<h3>{{ title }}</h3>' +
        '<p>{{ content }}</p>' +
      '</div>'
  };
});

// Using the directive
<my-card title="Hello" content="This is a custom directive!"></my-card>`}
              </div>

              <h3>5. Form Validation</h3>
              <div className="code-block">
{`<form name="userForm" ng-submit="submitForm()" novalidate>
  <input
    type="email"
    name="email"
    ng-model="user.email"
    required
  >
  <span ng-show="userForm.email.$invalid && userForm.email.$touched">
    Invalid email!
  </span>

  <input
    type="password"
    name="password"
    ng-model="user.password"
    ng-minlength="8"
    required
  >

  <button type="submit" ng-disabled="userForm.$invalid">
    Submit
  </button>
</form>`}
              </div>

              <div className="angular-demo" id="angularDemo8">
                <h4>🎮 Form Validation Example</h4>
                <div data-ng-app="formApp" data-ng-controller="FormController">
                  <form name="signupForm" data-ng-submit="submit()" noValidate>
                    <input
                      className="playground-input"
                      type="email"
                      name="email"
                      data-ng-model="user.email"
                      placeholder="Email"
                      required
                    />
                    <p data-ng-show="signupForm.email.$invalid && signupForm.email.$touched" style={{color: '#f44336', margin: '5px 0'}}>
                      ⚠️ Please enter a valid email
                    </p>

                    <input
                      className="playground-input"
                      type="text"
                      name="username"
                      data-ng-model="user.username"
                      placeholder="Username (min 3 characters)"
                      ng-minlength="3"
                      required
                    />
                    <p data-ng-show="signupForm.username.$invalid && signupForm.username.$touched" style={{color: '#f44336', margin: '5px 0'}}>
                      ⚠️ Username must be at least 3 characters
                    </p>

                    <button
                      className="playground-button"
                      type="submit"
                      data-ng-disabled="signupForm.$invalid"
                    >
                      Sign Up
                    </button>

                    <div data-ng-if="submitted" style={{marginTop: '15px', padding: '15px', background: '#4CAF50', color: 'white', borderRadius: '8px'}}>
                      ✅ Welcome, <span data-ng-bind="user.username"></span>!
                    </div>
                  </form>
                </div>
              </div>

              <div className="fun-fact">
                <strong>💡 Pro Tip:</strong>
                AngularJS's dependency injection makes it easy to test your code! Services can be mocked and injected into controllers during testing, making your code more maintainable.
              </div>

              <div className="quiz">
                <h4>🧩 Final Challenge!</h4>
                <p>What's the best way to share data between controllers?</p>
                <button
                  className={`quiz-option ${quizAnswers['q5'] === 'a' ? 'incorrect' : ''}`}
                  onClick={() => checkQuiz('q5', 'a', 'b') && setAngularOutput("Not the best approach! 🤔")}
                >
                  A) Global variables
                </button>
                <button
                  className={`quiz-option ${quizAnswers['q5'] === 'b' ? 'correct' : ''}`}
                  onClick={() => {
                    if(checkQuiz('q5', 'b', 'b')) setAngularOutput("Perfect! 🎉 Services are the AngularJS way!")
                  }}
                >
                  B) Services
                </button>
                {angularOutput && quizAnswers['q5'] && <div className="output">{angularOutput}</div>}
              </div>

              <div style={{marginTop: '40px', padding: '30px', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color: 'white', borderRadius: '15px', textAlign: 'center'}}>
                <h3 style={{fontSize: '2rem', marginBottom: '15px'}}>🎉 Congratulations!</h3>
                <p style={{fontSize: '1.2rem', marginBottom: '20px'}}>
                  You've completed the AngularJS & ES6 journey! You now know:
                </p>
                <ul style={{listStyle: 'none', fontSize: '1.1rem', lineHeight: '2'}}>
                  <li>✅ JavaScript ES6 fundamentals</li>
                  <li>✅ AngularJS directives and data binding</li>
                  <li>✅ Controllers, services, and filters</li>
                  <li>✅ Advanced concepts like promises and custom directives</li>
                </ul>
                <p style={{fontSize: '1.2rem', marginTop: '20px', fontWeight: '600'}}>
                  Keep practicing and building awesome apps! 🚀
                </p>
              </div>

              <script dangerouslySetInnerHTML={{__html: `
                if (typeof angular !== 'undefined') {
                  angular.module('filterApp', [])
                    .controller('FilterController', function($scope) {
                      $scope.search = '';
                      $scope.languages = [
                        { name: 'JavaScript', year: 1995 },
                        { name: 'Python', year: 1991 },
                        { name: 'Java', year: 1995 },
                        { name: 'C++', year: 1985 },
                        { name: 'Ruby', year: 1995 },
                        { name: 'Go', year: 2009 }
                      ];
                    });

                  angular.module('asyncApp', [])
                    .controller('AsyncController', function($scope, $timeout) {
                      $scope.loading = false;
                      $scope.data = null;

                      $scope.loadData = function() {
                        $scope.loading = true;
                        $timeout(function() {
                          $scope.data = 'User data loaded successfully! 🎉';
                          $scope.loading = false;
                        }, 1500);
                      };
                    });

                  angular.module('formApp', [])
                    .controller('FormController', function($scope) {
                      $scope.user = {};
                      $scope.submitted = false;

                      $scope.submit = function() {
                        $scope.submitted = true;
                      };
                    });
                }
              `}} />
            </div>
          )}
        </div>
      </div>
    </>
  )
}
