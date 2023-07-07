document.addEventListener("DOMContentLoaded", () => {
  // Challenge 1
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
      const dogImageContainer = document.getElementById("dog-image-container");
      data.message.forEach(imageUrl => {
        const imgElement = document.createElement("img");
        imgElement.src = imageUrl;
        dogImageContainer.appendChild(imgElement);
      });
    })
    .catch(error => console.error(error));

  // Challenge 2
  const breedUrl = 'https://dog.ceo/api/breeds/list/all';
  fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
      const breedList = document.getElementById("dog-breeds");
      const breeds = Object.keys(data.message);
      breeds.forEach(breed => {
        const listItem = document.createElement("li");
        listItem.textContent = breed;
        breedList.appendChild(listItem);
      });
    })
    .catch(error => console.error(error));

  // Challenge 3
  const breedList = document.getElementById("dog-breeds");
  breedList.addEventListener("click", event => {
    if (event.target.tagName === "LI") {
      event.target.style.color = "red";
    }
  });

  // Challenge 4
  const breedDropdown = document.getElementById("breed-dropdown");
  breedDropdown.addEventListener("change", event => {
    const selectedLetter = event.target.value;
    const breedItems = breedList.getElementsByTagName("li");
    Array.from(breedItems).forEach(item => {
      if (item.textContent.startsWith(selectedLetter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
