// Data isi popup
const POPUP_DATA = {
  skills: {
    title: "Skills",
    items: [
      { text: "Terampil dalam berbahasa Inggris" },
      { text: "Menguasai semua aplikasi Microsoft Office di Windows" },
      { text: "Cepat beradaptasi dengan lingkungan sekitar" }
    ]
  },
  riwayat: {
    title: "Riwayat Hidup (Pendidikan)",
    items: [
      {
        text: "SDN 1 Pabuaran Kidul",
        link: "https://data-sekolah.zekolah.id/sekolah/sd-negeri-1-pabuaran-kidul-260264"
      },
      {
        text: "SMPN 1 Waled",
        link: "https://data-sekolah.zekolah.id/sekolah/smp-negeri-1-waled-42773"
      },
      {
        text: "SMK Muhammadiyah Lemahabang",
        link: "https://smkmla-crb.sch.id/"
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

  // === LOGIKA POPUP ===
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const type = btn.getAttribute("data-popup");
      const data = POPUP_DATA[type];
      if (!data) return;

      titleEl.textContent = data.title;
      listEl.innerHTML = "";

      data.items.forEach((item) => {
        const li = document.createElement("li");

        if (item.link) {
          const a = document.createElement("a");
          a.href = item.link;
          a.target = "_blank";
          a.rel = "noopener noreferrer";
          a.textContent = item.text;
          a.className = "school-link";
          li.appendChild(a);
        } else {
          li.textContent = item.text;
        }

        listEl.appendChild(li);
      });

      // tampilkan popup + animasi
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

  // === EFEK TYPEWRITER SEDERHANA UNTUK NAMA & TAGLINE ===
  const nameEl = document.querySelector(".hero-name");
  const taglineEl = document.querySelector(".hero-tagline");

  const nameText = "Karnaca";
  const taglineText = "Initializing human profile";

  if (nameEl && taglineEl) {
    nameEl.textContent = "";
    taglineEl.textContent = "";

    let i = 0;
    let j = 0;

    function typeName() {
      if (i <= nameText.length) {
        nameEl.textContent = nameText.slice(0, i);
        i++;
        setTimeout(typeName, 120);
      } else {
        setTimeout(typeTagline, 250);
      }
    }

    function typeTagline() {
      if (j <= taglineText.length) {
        taglineEl.textContent = taglineText.slice(0, j);
        j++;
        setTimeout(typeTagline, 70);
      }
    }

    typeName();
  }
});
