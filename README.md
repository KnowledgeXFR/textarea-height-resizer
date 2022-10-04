# Textarea Height Resizer

A JavaScript function that resizes the height of a ```<textarea>``` element based on its contents. It can be called manually, or via an Event Listener. More information can be found at [KnowledgeXFR](https://www.knowledge-xfr.com/article/oo89sg47).

## Installation

1. Download a copy of textarea-resizer.js
2. Add the ```<script>``` tag to the HTML  
    ```
    <script src="textarea-resizer.js"></script>
    ```   
    *Note: The ```src="textarea-resizer.js"``` value may be different based on the file's location.* 

## Usage

In addition to the two examples below, there is also a functioning example found in the **Example** directory.

### Manual

Assuming the document only has a single ```<textarea>``` element:

```javascript
// Query textarea element
let textarea = document.querySelector('textarea');

// Call resizeTextareaHeight()
resizeTextareaHeight(textarea);
```

### From an Event Listener



Assuming the document only has a single ```<textarea>``` element:

```javascript
// Query textarea element
let textarea = document.querySelector('textarea');

// Add event listener to textarea
textarea.addEventListener('input', (e) => {
  resizeTextareaHeight(e.target);
});
```