# jQuery Advanced (Max's Version)
Project for Atlas School

## Description

## Tasks
### 0. README.md
Write a good, substantial readme!

### 1. Setup your dev environment
You are given this starter HTML for this task:

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">

    <head>

        <meta charset="utf-8" />
        <title>Task 0</title>

    </head>

    <body>

    </body>

</html>
```
In a file 0-index.html:

- Load the latest version of jQuery using their code.jquery.com CDN
- Use the Slim & minified version of jQuery
When the page is being loaded, verify that jQuery is loaded correctly
- If jQuery is ready to be used, log to the console jQuery has been loaded correctly
- If jQuery has not been loaded properly, log to the console jQuery has not been loaded correctly

### 2. Creating a DOM element
In a file 1-index.html, reuse the template you created previously.

Remove the code that verifies jQuery loaded and logs messages to the console

Create a function named createTextElement:
- Within the function, create a p HTML element
- The paragraph should display Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in diam risus. Nunc sit amet euismod ipsum. Aenean tempus ex sed est volutpat, sed sodales velit tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin auctor sollicitudin eleifend. Vivamus porta enim vitae mauris commodo, vitae tempor tellus elementum. Quisque sed pellentesque nulla, at eleifend nisi. Phasellus eget tincidunt ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
- Add the paragraph to the body of the page
Call the createTextElement function

### 3. Creating multiple DOM elements at once
In a file 2-index.html, reuse the template you created previously.

Remove the function createTextElement

Create a function named createFamilyTree:
- It should create a table element
* The head of the table should display Firstname and Lastname in two cells
* The body of the table should three rows
* The first row should contain two cells with Guillaume and Salva
* The second row should contain two cells with Paulette and Salva
* The third row should contain two cells with Antoine and Salva
- Use the keyword append only once to attach all the elements of the table to the page

Call the createFamilyTree function

## Learning Objectives
- Learn how to load jQuery from a CDN in a page
- Learn the different ways to create DOM elements with jQuery
- Learn how to modify elements
- Learn how to add new elements to a page with different positions
- Learn how to add a click handler on an element
- Learn how to send GET, POST, DELETE or any type of AJAX query with jQuery
- Learn how to create a pagination
