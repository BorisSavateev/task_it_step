const getChapters = () => {
	fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/chapters/all.json")
    .then(response => response.json())
    .then(data => data.forEach(chapter => (chapter.isCompleted) ? displayCompletedChapters(chapter) : null));
}

// do NOT modify this function
function displayCompletedChapters(chapters) {
  console.log("Received", chapters);
}

// Sample usage - do not modify
getChapters();