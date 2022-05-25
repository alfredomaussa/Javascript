# querySelector vs getElementById
[Source](https://stackoverflow.com/q/14377590/13636459)

## querySelector
Returns the first matching Element node within the node's subtree. If no matching node is found, null is returned.

## querySelectorAll
Returns a NodeList containing all matching Element nodes within the node's subtree, or an empty NodeList if no matches are found.

These are more complex syntax, the same as CSS selectors.


## getElementsByClassName and getElementById in JavaScript
Are more specific and faster.

``` javascript
document.querySelector("#someId .someClass div")
document.querySelectorAll(".class1.class2")
document.querySelector("div.target > span"); 
// 
document.getElementById("someId").getElementsByClassName("someClass")[0].getElementsByTagName("div")[0]
document.getElementsByClassName("class1 class2")
document.getElementById("idOfSpan"); 
```

# APIs to learn [tweet](https://twitter.com/adarsh____gupta/status/1527880635918196736?s=20&t=q-kaQR5_7fQCLnkwaM_byQ)
* Fullscreen
* Geolocation
* Fetch
* Canvas
* Payment


# Fullscreen
Get the element that is currently in fullscreen mode:
``` javascript
var elem = document.fullscreenElement;

// 
/* If fullscreen mode is available, then do something */
if (
  document.fullscreenEnabled || /* Standard syntax */
  document.webkitFullscreenEnabled || /* Safari */
  document.msFullscreenEnabled/* IE11 */
) 
```

# Cookies vs Local Storage
Cookies are for client-server (browser-server) applications.

Local storage are for client (browser) applications.

Cookies are associated with websites. If the data is for client use, sending cookies in every HTTP header is waist of bandwith.

Some users have cookies disabled as a rule in their browsers.

A Cookie has a size limit of 4 Kilobytes. Local Storage has a limit of 5 Megabytes per domain.

A Cookie have expiration date. Local Storage has not.

``` javascript
localStorage.clear(); //sessionStorage.clear()
// 
localStorage.getItem(keyname)
// 
var x = sessionStorage["test1"];
var x = sessionStorage.test1;
// 
localStorage.key(index) // The key name of the index
// localStorage.length
for (i = 0; i < localStorage.length; i++) {
  x = localStorage.key(i);
  document.getElementById("demo").innerHTML += x;
}
// 
localStorage.removeItem(keyname)
// 
localStorage.setItem(keyname, value)
```

## Sessionstorage
This is similar to Localstorage but with expiration at session close (close browser or i think it is when close the website)

# util
``` javascript
function myFunction() {
  let text = "Press a button!\nEither OK or Cancel.";
  if (confirm(text) == true) {
    text = "You pressed OK!";
  } else {
    text = "You canceled!";
  }
  document.getElementById("demo").innerHTML = text;
}
```