const form = document.getElementById("guest-form");
const input = document.getElementById("guestName"); 
const guestList = document.getElementById("guest-list");

let guestCount = 0;

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const name = input.value.trim();

  if (name === "") {
    alert("Please enter a name.");
    return;
  }

  if (guestCount >= 10) {
    alert("Guest list is full. Maximum is 10 guests.");
    return;
  }

  addGuest(name);
  input.value = "";
});

function addGuest(name) {
  const li = document.createElement("li");

  const now = new Date();
  const timeString = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  li.textContent = name + " (Added at " + timeString + ")";

  const rsvpButton = document.createElement("button");
  rsvpButton.textContent = "Not attending";
  rsvpButton.className = "rsvp-button";

  rsvpButton.addEventListener("click", function () {
    if (rsvpButton.textContent === "Not attending") {
      rsvpButton.textContent = "Attending";
      rsvpButton.style.backgroundColor = "green";
    } else {
      rsvpButton.textContent = "Not attending";
      rsvpButton.style.backgroundColor = "orange";
    }
  });

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.className = "remove-button";

  removeButton.addEventListener("click", function () {
    guestList.removeChild(li);
    guestCount = guestCount - 1;
  });

  li.appendChild(rsvpButton);
  li.appendChild(removeButton);

  guestList.appendChild(li);
  guestCount = guestCount + 1;
}
