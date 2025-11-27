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
  link: "https://data-sekolah.zekolah.id/sekolah/smk-muhammadiyah-lemahbang-<kode>" 
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

      overlay.style.display = "flex";
      requestAnimationFrame(() => overlay.classList.add("is-visible"));
    });
  });

  closeBtn.addEventListener("click", () => {
    overlay.classList.remove("is-visible");
    setTimeout(() => (overlay.style.display = "none"), 250);
  });

  overlay.addEventListener("click", (e) => {
    if (!document.querySelector(".popup-card").contains(e.target)) {
      overlay.classList.remove("is-visible");
      setTimeout(() => (overlay.style.display = "none"), 250);
    }
  });

  // TYPEWRITER effect
  const nameEl = document.querySelector(".hero-name");
  const tagEl = document.querySelector(".hero-tagline");

  const nameText = "Karnaca";
  const tagText = "Initializing human profile";

  let i = 0, j = 0;
  nameEl.textContent = "";
  tagEl.textContent = "";

  function typeName() {
    if (i <= nameText.length) {
      nameEl.textContent = nameText.slice(0, i++);
      setTimeout(typeName, 120);
    } else setTimeout(typeTag, 250);
  }
  function typeTag() {
    if (j <= tagText.length) {
      tagEl.textContent = tagText.slice(0, j++);
      setTimeout(typeTag, 70);
    }
  }
  typeName();
});

// Scroll smooth to about
function scrollToAbout() {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}
