/* =========================================
   SYIKIN & HAFIDZ
   WEBSITE INTERACTIONS
========================================= */


/* =========================================
   1. OPEN INVITATION
========================================= */

const openInvitation = document.getElementById("openInvitation");
const cover = document.getElementById("cover");
const invitation = document.getElementById("invitation");

openInvitation.addEventListener("click", function () {
  cover.classList.add("hidden");
  invitation.classList.remove("hidden");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


/* =========================================
   2. COUNTDOWN
========================================= */

const weddingDate = new Date("December 20, 2026 11:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance <= 0) {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);


/* =========================================
   3. RSVP MODAL
========================================= */

const rsvpModal = document.getElementById("rsvpModal");
const openRsvp = document.getElementById("openRsvp");
const closeRsvp = document.getElementById("closeRsvp");

openRsvp.addEventListener("click", function () {
  rsvpModal.classList.remove("hidden");
});

closeRsvp.addEventListener("click", function () {
  rsvpModal.classList.add("hidden");
});

rsvpModal.addEventListener("click", function (event) {
  if (event.target === rsvpModal) {
    rsvpModal.classList.add("hidden");
  }
});


/* =========================================
   4. RSVP FORM
========================================= */

const rsvpForm = document.getElementById("rsvpForm");
const formStatus = document.getElementById("formStatus");

rsvpForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const guestName = document.getElementById("guestName").value.trim();
  const attendance = document.getElementById("attendance").value;
  const guestCount = document.getElementById("guestCount").value;
  const guestMessage = document.getElementById("guestMessage").value.trim();

  if (!guestName || !attendance) {
    formStatus.textContent = "Please complete the required fields.";
    return;
  }

  const rsvpData = {
    name: guestName,
    attendance: attendance,
    guests: guestCount,
    message: guestMessage
  };

  console.log("RSVP submitted:", rsvpData);

  formStatus.textContent =
    "Thank you, " + guestName + "! Your response has been recorded on this device.";

  rsvpForm.reset();

  document.getElementById("guestCount").value = 1;
});


/* =========================================
   5. ESCAPE KEY TO CLOSE RSVP
========================================= */

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    rsvpModal.classList.add("hidden");
  }
});
