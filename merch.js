fetch("merch.json")
  .then((response) => response.json())
  .then((data) => {
    const params = new URLSearchParams(window.location.search);
    const itemId = parseInt(params.get("id"));
    console.log("Item ID:", itemId);

    // Find the matching item
    const item = data.find((merch) => merch.id === itemId);

    if (item) {
      document.getElementById("item-name").textContent = item.name;
      document.getElementById("item-price").textContent = `$${item.price}`;
      document.getElementById("item-description").textContent =
        item.description;
      document.getElementById("item-extras").textContent = item.extras;
      document.getElementById(
        "item-img"
      ).src = `images/merch/merch${itemId}.png`;
      document.getElementById("item-img").alt = item.name;
    } else {
      document.getElementById("item-name").textContent = "Item Not Found";
      document.getElementById("item-img").src = "images/placeholder.png"; // Optional: Add a placeholder image
      document.getElementById("item-img").alt = "Placeholder Image";
    }
  })
  .catch((error) => {
    console.error("Error loading merch data:", error);
  });
