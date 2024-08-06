const stars = document.querySelectorAll(".star");

let count = 0;

// Function to update the displayed count
const updateCountDisplay = (value) => {
  document.querySelector("#star-number").textContent = value;
};

// Mouseover event to highlight stars temporarily
stars.forEach((star, i) => {
  star.addEventListener("mouseover", () => {
    stars.forEach((st, j) => {
      if (j <= i) {
        st.classList.add("rate");
      } else {
        st.classList.remove("rate");
      }
    });

    updateCountDisplay(i + 1); // Display the current hovered star count
  });

  // Remove highlight on mouseleave
  star.addEventListener("mouseleave", () => {
    // Only remove highlights if no stars are permanently selected
    stars.forEach((st, j) => {
      if (j >= count) {
        st.classList.remove("rate");
      }
    });
    updateCountDisplay(count); // Reset the display to the selected count
  });
});

// Click event to set permanent rating
stars.forEach((star, i) => {
  star.addEventListener("click", () => {
    count = i + 1; // Update the permanent count

    stars.forEach((st, j) => {
      if (j < count) {
        st.classList.add("rate");
      } else {
        st.classList.remove("rate");
      }
    });

    updateCountDisplay(count); // Update display with permanent count
  });
});

// Initial display of count
updateCountDisplay(count);
