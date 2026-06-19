// BANK TOGGLE
const bankingBtn = document.getElementById("bankingBtn");
const bankDetails = document.getElementById("bankDetails");

if (bankingBtn) {
  bankingBtn.addEventListener("click", () => {
    bankDetails.style.display =
      bankDetails.style.display === "block" ? "none" : "block";
  });
}

// SHARE BUTTON
const shareBtn = document.querySelector(".share-btn");

if (shareBtn) {
  shareBtn.addEventListener("click", async () => {
    const name = shareBtn.dataset.name;
    const phone = shareBtn.dataset.phone;
    const website = shareBtn.dataset.website;

    const text = `Name: ${name}\nPhone: ${phone}\nWebsite: ${website}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: name,
          text: text,
        });
      } catch (err) {}
    } else {
      alert(text);
    }
  });
}

// PROFILE MODAL
const profilePhoto = document.getElementById("profilePhoto");
const profileModal = document.getElementById("profileModal");
const profileModalImg = document.getElementById("profileModalImg");
const closeProfile = document.getElementById("closeProfile");

if (profilePhoto) {
  profilePhoto.addEventListener("click", () => {
    profileModal.style.display = "flex";
    profileModalImg.src = profilePhoto.dataset.img;
  });
}

if (closeProfile) {
  closeProfile.addEventListener("click", () => {
    profileModal.style.display = "none";
  });
}

// CLICK PORTFOLIO
const carousel = document.getElementById("clickableCarousel");

if (carousel) {
  carousel.addEventListener("click", () => {
    window.open(carousel.dataset.link, "_blank");
  });
}