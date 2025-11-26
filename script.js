// Data popup
const popupData = {
  skills: {
    title: "Skills",
    items: [
      "Terampil dalam berbahasa Inggris",
      "Menguasai semua aplikasi Microsoft Office di Windows",
      "Cepat beradaptasi dengan lingkungan sekitar"
    ]
  },
  riwayat: {
    title: "Riwayat Hidup (Pendidikan)",
    items: [
      "SDN 1 Pabuaran Kidul",
      "SMP 1 Waled",
      "SMK Muhammadiyah Lemahabang"
    ]
  }
};

function openPopup(type) {
  const popup = document.getElementById("popup");
  const titleEl = document.getElementById("popup-title");
  const contentEl = document.getElementById("popup-content");

  const data = popupData[type];
  if (!data) return;

  // Set judul & isi list
  titleEl.textContent = data.title;
  contentEl.innerHTML = "";

  data.items.forEach((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    contentEl.appendChild(li);
  });

  // Tampilkan popup + trigger animasi
  popup.classList.add("show");
}

function closePopup() {
  const popup = document.getElementById("popup");
  popup.classList.remove("show");
}

// Tutup kalau klik di luar kartu
document.addEventListener("click", (e) => {
  const popup = document.getElementById("popup");
  const card = document.querySelector(".popup-card");

  if (!popup.classList.contains("show")) return;
  if (!card.contains(e.target) && e.target !== card && e.target.id !== "popup") {
    closePopup();
  }
});

// Tutup pakai Esc
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closePopup();
  }
});
