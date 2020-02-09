var spinkit = {};
spinkit.adImpressions = 0;

app.ready(function() {

  document.querySelectorAll(".pagination a").forEach(function(element, i) {
    element.addEventListener("click", spinkit.handlePaginationClick);
  });
  
  document.querySelector("#next").addEventListener("click", spinkit.goToNext);
  document.querySelector("#prev").addEventListener("click", spinkit.goToPrev);

  // Keyboard shortcuts
  window.addEventListener("keyup", spinkit.handleKeyup);
  window.addEventListener("keydown", spinkit.handleKeydown);

  document.querySelector(".js-sk-source-link").addEventListener("click", function(e) {
    e.preventDefault();
    spinkit.showSourceForActiveSpinner();
  });

  // Prevent the source frame from dismissing when interacting with the textarea
  document.querySelectorAll("#source-frame textarea").forEach(function(element, i) {
    element.addEventListener("click", function(e) { e.stopPropagation(); });
  });

  // Dismiss the sourceframe when clicking the black overlay
  document.querySelector("#source-frame ul").addEventListener("click", spinkit.dismissSourceFrame);
});

spinkit.handlePaginationClick = function(e) {
  e.preventDefault();
  // Remove the selected class from the currently selected indicator
  document.querySelector(".pagination .selected").classList.remove("selected");
  // Make the clicked indicator the selected one
  e.target.classList.add("selected");
  
  spinkit.updateSlideshowForSelectedPage();
}

spinkit.handleKeydown = function(e) {
  // 13 = Enter key
  // The enter key needs to be set to keydown, to not trigger when you
  // hit enter in the URL field to enter the site
  if (e.keyCode == 13) {
    e.preventDefault();
    spinkit.showSourceForActiveSpinner();
  }
}

spinkit.handleKeyup = function(e) {
  if (e.keyCode == 39) { // Key right
    spinkit.goToNext();
  } else if (e.keyCode == 37) { // Key left
    spinkit.goToPrev();
  } else if (e.keyCode == 83) { // S key
    spinkit.showSourceForActiveSpinner();
  } else if (e.keyCode == 27) { // ESC
    spinkit.dismissSourceFrame();
  }
}

spinkit.goToNext = function() {
  spinkit.step({direction: "next"});
}
  
spinkit.goToPrev = function() {
  spinkit.step({direction: "prev"});
}

spinkit.step = function(options) {
  // Exit if the currently selected spinner is the first one
  var selected = document.querySelector(".pagination .selected");
  var newSelectedContainer = options.direction == "next" ? selected.parentElement.nextElementSibling : selected.parentElement.previousElementSibling;
  if (newSelectedContainer == null) return;

  // Exit if the source-frame is visible
  if (document.querySelector("#source-frame").classList.contains("visible")) return;

  selected.classList.remove("selected");
  newSelectedContainer.querySelector("a").classList.add("selected");
  spinkit.updateSlideshowForSelectedPage();
}

spinkit.showSourceForActiveSpinner = function() {
  // Exit if there source-frame is visible
  if (document.querySelector("#source-frame").classList.contains("visible")) return;

  // Show the corresponding li in the source list
  var index = spinkit.getElementIndex(document.querySelector(".pagination .selected").parentElement);
  // Exit if it's the last page (the "more projects" page)
  if (index == document.querySelectorAll(".pagination li").length - 1) return;
  document.querySelectorAll("#source-frame li")[index].classList.add("visible");

  document.querySelector("#source-frame").classList.add("visible");
}

spinkit.updateSlideshowForSelectedPage = function() {
  var index = spinkit.getElementIndex(document.querySelector(".pagination .selected").parentElement);
  document.querySelector("body").classList = "active" + parseInt(index+1);
  
  // If a spinner is selected, deselect it before selecting a new one
  var selected = document.querySelector("#spinners .selected");
  if (selected) selected.classList.remove("selected");
  var spinner = document.querySelectorAll("#spinners li")[index];
  if (spinner == null) return;
  spinner.classList.add("selected");

  spinkit.addAdImpression();
}

spinkit.dismissSourceFrame = function(e) {
  var sourceFrame = document.querySelector("#source-frame");
  if (sourceFrame.querySelector(".visible") == null) return;
  sourceFrame.querySelector(".visible").classList.remove("visible");
  sourceFrame.classList.remove("visible");
  spinkit.refreshAd();
}

spinkit.addAdImpression = function() {
  // Refresh ad
  spinkit.adImpressions++;
  if (spinkit.adImpressions < 3) return;
  // Show new ad if you've seen three or more ads
  spinkit.refreshAd();
}

spinkit.refreshAd = function() {
  if (document.querySelector("#carbonads") == null) return;
  if (typeof _carbonads !== 'undefined') _carbonads.refresh();
  spinkit.adImpressions = 0;
}

spinkit.getElementIndex = function(node) {
  var index = 0;
  while ( (node = node.previousElementSibling) ) { index++; }
  return index;
}
