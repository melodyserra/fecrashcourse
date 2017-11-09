# Front End Crash Course

## Installation
- Install [Sublime Text](http://www.sublimetext.com/)
	- Sublime Text is a text-editor for code.  

## What is front-end web development?
- Everything your eyes can see on the page.
- Composed of HTML, CSS, and JavaScript.
- A front-end developer will take the work of a designer, and code it on the front-end so a back-end developer can build on top of that.

### What is HTML?
- Stands for: Hyper Text Markup Language.
- It is the content of the page.
	- e.g. header or paragraph
- Has its own default styles.

### What is CSS?
- Stands for: Cascading Style Sheet.
- It is the stylistic component of the page.
- Overrides the default styles of HTML.
	- e.g. change the color or the font-family of your header

### What is JavaScript?
- Helps increase interactivity of the page.
- Helps with page interactions such as animations.
- Helps with dynamic loading of content.

## HTML:
#### Tags < >
- Allow you to set up structure of the page.
- Tell the browser how to format content.
- Attributes allow you to add additional information to a tag.
- Attributes also allow you to bridge the gap between HTML and CSS.

```html
<h1>Hello World!</h1>
```

#### Layout for an HTML file

```html
<!DOCTYPE html>
<html>
<head>
	<title>My First Webpage</title>
	<meta charset="UTF-8">
</head>
<body>
	<h1>Hello World!</h1>
</body>
</html>

```

### What about different ways to organize content in HTML?

#### divs:
- Define a division.
- They are equivalent to empty rectangles.
- They are used to format block elements that can be styled via CSS.

`<div> </div `

#### spans:
- They are inline elements that are normally displayed without line breaks.

`<span> </span> `

## CSS:
- In order to run external CSS you need to link it to the HTML. This usually goes in the head tag:

`<link rel=“stylesheet” href=“css/style.css” >`

#### CSS Syntax

```css
h1 {
	color: #FF9966;
	text-align: center;
}

```

### Id's versus classes
#### Id's:
- An attribute.
- Allow you to style a single element, making it a unique element.

HTML:

```html
<div id=“header”>
	<h1>Welcome to my website</h1>
</div>
```
CSS: hash/pound sign designate an id

```css
#header{
	text-align: center;
	color: red;
}
```


#### Classes:
- An attribute.
- Allow you to select two or more elements and style them the same.

HTML:

```html
<div class=“paragraph”>
     Here are my favorite hobbies:
     skateboarding, scuba diving, and
     riding motorcycles.
</div>

<div class=“paragraph”>
     Here are my favorite foods:
     chocolate, pizza, and
     pasta.
</div>

```
CSS: a period designates a class

```css
.paragraph {
	color: green;
}

```

## How can you edit an existing webpage?
- Open up developer tools.
- This can then be used as a “console” to test new code/change code and see what it looks like.


## A Little More on CSS
- CSS is a powerful language and has an easy-to-learn syntax.
- CSS can be used to achieve everything from pixel-perfect colors to advanced animations.
- If you want to see a couple examples, check these out:
	- [http://codepen.io/juliangarnier/pen/idhuG](http://codepen.io/juliangarnier/pen/idhuG)
	- [http://www.rleonardi.com/interactive-resume/](http://www.rleonardi.com/interactive-resume/)

## CSS Colors
- There are three main ways to use colors in CSS - semantic, HEX values, and RGB(A) values.

##### Semantic:

```css
div {
	background-color:black;
}
```

##### HEX:

```css
div {
	background-color:#000000;
}
```

##### RGBA:

```css
div {
	background-color:rgba(0,0,0,0.5);
}
```

## CSS Gradients
- CSS gradients were introduced as of CSS3.
- They allow for a gradient of colors to be applied across multiple solid colors.
- These are hard to write via raw CSS, so generators are often used.
- Let's have a look at one [here](http://www.colorzilla.com/gradient-editor/).


## Putting it Together
- For this lab we will be creating a personal landing page using HTML and CSS.
- A starter page has been created for you [here](about_me_starter_website/).
- This is meant to be creative, but make sure to at least do the following:
	- Add the class "fixed-top" to the header to make it stay in place during scroll.
	- Use rgba colors to make the header navbar semi-transparent.
	- Use Google Fonts to implement a font of your choice for the logo.
	- Replace the picture of me with one of you :) You will need to look up the <img> tag to make this happen.
	- Replace the picture of the motorcycle with a background of your choice (Hint: Have a look at the CSS to find out where this background comes from).
	- Make the background of the banner have a parallax effect. Hint: Research the "background-attachment" property in CSS.
	- Change the text throughout the page to reflect your own personal information.
	- Add a gradient to the background of the user-info-text class in CSS.
	- **Bonus:** Implement a small animation using CSS somewhere on the page. You may want to research the `transition` and `transform` CSS properties.
- We will be discussing how to make this web page live using a service called BitBalloon.
