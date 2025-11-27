// Data isi popup
const POPUP_DATA = {
  skills: {
    title: "Skills",
    items: [
      "Terampil dalam berbahasa Inggris",
      "Menguasai semua aplikasi Microsoft Office di Windows",
      "Cepat beradaptasi dengan lingkungan sekitar"
      "Bisa membuat planet sebesar matahari"
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

document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("popup-overlay");
  const titleEl = document.getElementById("popup-title");
  const listEl = document.getElementById("popup-list");
  const closeBtn = overlay.querySelector(".popup-close");
  const buttons = document.querySelectorAll("[data-popup]");

  // klik tombol Skills / Riwayat
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const type = btn.getAttribute("data-popup");
      const data = POPUP_DATA[type];
      if (!data) return;

      // set judul
      titleEl.textContent = data.title;

      // set list
      listEl.innerHTML = "";
      data.items.forEach((text) => {
        const li = document.createElement("li");
        li.textContent = text;
        listEl.appendChild(li);
      });

      // tampilkan overlay + trigger animasi
      overlay.style.display = "flex";
      // sedikit delay biar transition kepicu
      requestAnimationFrame(() => {
        overlay.classList.add("is-visible");
      });
    });
  });

  function closePopup() {
    overlay.classList.remove("is-visible");
    // tunggu animasi selesai, baru bener2 disembunyiin
    setTimeout(() => {
      overlay.style.display = "none";
    }, 250);
  }

  // tombol X
  closeBtn.addEventListener("click", closePopup);

  // klik di luar card
  overlay.addEventListener("click", (e) => {
    const card = overlay.querySelector(".popup-card");
    if (!card.contains(e.target)) {
      closePopup();
    }
  });

  // tombol Esc di keyboard (kalau buka dari PC)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closePopup();
    }
  });
});
