fetch("tour.json")
.then((response) => response.json())
.then((data) => {
    // Get the tour ID from the query parameter
    const params = new URLSearchParams(window.location.search);
    const itemId = parseInt(params.get("id"));
    console.log("Item ID:", itemId);

    // Find the matching item
    const item = data.find((tour) => tour.id === itemId);

    if (item) {
    // Populate the page with item details
    document.getElementById("item-name").textContent = item.name;
    document.getElementById("item-date").textContent = item.date;
    document.getElementById(
        "item-price"
    ).textContent = `$${item.price}`;
    document.getElementById("item-description").textContent =
        item.description;
    document.getElementById("item-extra").textContent = item.extra;
    } else {
    // Display "Item Not Found" if the item doesn't exist
    document.getElementById("item-name").textContent = "Item Not Found";
    }
})
.catch((error) => {
    console.error("Error loading tour data:", error);
});