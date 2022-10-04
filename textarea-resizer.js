/**
 * Resize textarea height based on content
 *
 * @param {Element} element - The textarea element object
 *
 * @author Michael J. Bartholomew <www.knowledge-xfr.com>
 * @license MIT
 **/
function resizeTextareaHeight(element) {
  
  // Get computed style
  const cssObj = window.getComputedStyle(element, null);
  
  // Calculate padding/border height difference
  const computed_height = parseInt(cssObj.getPropertyValue('height'));
  const diff = computed_height - element.clientHeight;
  
  // Create temp textarea
  var temp = document.createElement('textarea');
  temp.style.position = 'absolute';
  temp.style.left = '100vw';
  temp.style.visibility = 'hidden';
  document.body.appendChild(temp);

  // Mirror textarea styles and value
  temp.style.width = element.clientWidth + 'px';
  temp.style.fontFamily = cssObj.getPropertyValue("font-family");
  temp.style.fontSize = cssObj.getPropertyValue("font-size");
  temp.style.lineHeight = cssObj.getPropertyValue("line-height");
  // Add additional styles when needed
  temp.value = element.value;
  
  // Calculate new height and apply if it doesn't equal element height
  temp.style.height = 0;
  var new_height = temp.scrollHeight + diff + 'px'
  if (element.style.height != new_height) {
    element.style.height = new_height;
  }
  
  // Remove temp textarea
  document.body.removeChild(temp);
  
}