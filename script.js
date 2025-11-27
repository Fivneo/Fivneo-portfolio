// Data isi popup
const POPUP_DATA = {
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
      {
        text: "SDN 1 Pabuaran Kidul",
        link: "https://dapo.kemdikbud.go.id/sekolah/B16A6F13C2C5E1E08B"
      },
      {
        text: "SMPN 1 Waled",
        link: "https://www.smpn1waled.sch.id/"
      },
      {
        text: "SMK Muhammadiyah Lemahabang",
        link: "https://smkmuhlem.sch.id/"
      }
    ]
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("popup-overlay");
  const titleEl = document.getElementById("popup-title");
  const listEl = document.getElementById("popup-list");
  const closeBtn = overlay.querySelector(".popup-close");
  const buttons = document.querySelectorAll("[data-popup]");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const type = btn.getAttribute("data-popup");
      const data = POPUP_DATA[type];
      if (!data) return;

      titleEl.textContent = data.title;
      listEl.innerHTML = "";

      data.items.forEach((item) => {
        const li = document.createElement("li");

        // Kalau punya link, jadikan <a>
        if (item.link) {
          const a = document.createElement("a");
          a.href = item.link;
          a.target = "_blank";
          a.rel = "noopener noreferrer";
          a.textContent = item.text;
          a.className = "school-link";
          li.appendChild(a);
        } else {
          li.textContent = item;
        }

        listEl.appendChild(li);
      });

      overlay.style.display = "flex";
      requestAnimationFrame(() => {
        overlay.classList.add("is-visible");
      });
    });
  });

  function closePopup() {
    overlay.classList.remove("is-visible");
    setTimeout(() => {
      overlay.style.display = "none";
    }, 250);
  }

  closeBtn.addEventListener("click", closePopup);

  overlay.addEventListener("click", (e) => {
    const card = overlay.querySelector(".popup-card");
    if (!card.contains(e.target)) {
      closePopup();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closePopup();
    }
  });
});
