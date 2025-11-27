// Data pendidikan (dipakai di popup Riwayat Pendidikan)
const POPUP_DATA = {
  skills: {
    title: "Skills",
    items: [
      { text: "Terampil dalam berbahasa Inggris" },
      { text: "Menguasai semua aplikasi Microsoft Office di Windows" },
      { text: "Cepat beradaptasi dengan lingkungan sekitar" }
    ]
  },
  pendidikan: {
    title: "Riwayat Pendidikan",
    items: [
      {
        text: "SDN 1 Pabuaran Kidul — 2016–2022",
        link: "https://data-sekolah.zekolah.id/sekolah/sd-negeri-1-pabuaran-kidul-260264"
      },
      {
        text: "SMPN 1 Waled — 2022–2025",
        link: "https://data-sekolah.zekolah.id/sekolah/smp-negeri-1-waled-42773"
      },
      {
        text: "SMK Muhammadiyah Lemahabang — 2025–sekarang",
        link: "https://smkmla-crb.sch.id/"
      }
    ]
  }
};

// TEKS RIWAYAT HIDUP (paragraf panjang)
const RIWAYAT_HIDUP_TEXT = `
Saya <b>Karnaca</b>, lahir di <b>Cirebon pada 03 Oktober 2010</b>.
Saya tumbuh sebagai seseorang yang suka mencoba hal baru dan belajar hal-hal yang belum saya mengerti,
meskipun harus mulai dari nol dan berjalan pelan. Saya percaya bahwa setiap orang punya ritme hidup masing-masing,
dan berkembang itu tidak harus terburu-buru—yang penting konsisten dan tidak berhenti.<br/><br/>

Sejak SMP saya aktif berorganisasi, terutama di <b>Pramuka</b>, dan pernah dipercaya sebagai
<b>Ketua Bidang Pendidikan</b>. Dari pengalaman itu saya belajar memimpin, mengambil keputusan, dan bertanggung jawab,
meskipun harus berhadapan dengan karakter orang yang berbeda-beda. Dedikasi saya mendapat
<b>apresiasi tinggi</b> dari pembina dan rekan-rekan, dan itu menjadi salah satu pengalaman paling berharga
dalam perjalanan saya.<br/><br/>

Di bidang akademik, saya pernah menjadi <b>Juara 1 bertahan selama masa SMP</b>, serta mengikuti
<b>Olimpiade IPS</b> dan meraih <b>Juara 3</b>. Pencapaian itu mengajarkan saya bahwa hasil tidak pernah
mengkhianati proses—bahwa kerja keras kecil yang dilakukan setiap hari bisa membuahkan sesuatu yang besar.<br/><br/>

Sekarang, saya sedang fokus mengejar mimpi untuk menjadi <b>programmer profesional</b>.
Saya tertarik dengan teknologi dan bagaimana sebuah kode bisa menciptakan sesuatu yang bermanfaat.
Saya ingin suatu hari nanti berkontribusi pada sesuatu yang berpengaruh dan membantu banyak orang.<br/><br/>

Di luar hal itu, saya menikmati <b>bermain game</b> sebagai cara untuk melepas penat, melatih fokus, strategi,
dan refleks. Hidup bagi saya adalah tentang menjaga keseimbangan antara ambisi dan kebahagiaan—bekerja keras
tanpa melupakan diri sendiri.<br/><br/>

Saya percaya bahwa <b>hidup bukan soal membandingkan diri dengan orang lain</b>, tetapi bagaimana menjadi lebih
baik dari diri kita kemarin. Dan saya percaya bahwa <b>kerja keras selalu menang pada akhirnya</b>.
`;

document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("popup-overlay");
  const titleEl = document.getElementById("popup-title");
  const listEl = document.getElementById("popup-list");
  const closeBtn = overlay.querySelector(".popup-close");
  const buttons = document.querySelectorAll("[data-popup]");

  // === Fungsi buka tutup overlay ===
  function openOverlay() {
    overlay.style.display = "flex";
    requestAnimationFrame(() => overlay.classList.add("is-visible"));
  }

  function closeOverlay() {
    overlay.classList.remove("is-visible");
    setTimeout(() => {
      overlay.style.display = "none";
    }, 250);
  }

  // === Popup Skills ===
  function showSkills() {
    const data = POPUP_DATA.skills;
    if (!data) return;

    titleEl.textContent = data.title;
    listEl.innerHTML = "";

    data.items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item.text;
      listEl.appendChild(li);
    });

    openOverlay();
  }

  // === Popup Riwayat Hidup (cerita panjang) ===
  function showRiwayatHidup() {
    titleEl.textContent = "Riwayat Hidup";
    listEl.innerHTML = "";

    // 1 li full text
    const liText = document.createElement("li");
    liText.className = "full-text";
    liText.innerHTML = RIWAYAT_HIDUP_TEXT;
    listEl.appendChild(liText);

    // 1 li berisi tombol kecil ke Riwayat Pendidikan
    const liNav = document.createElement("li");
    liNav.className = "nav-item";
    const btnNav = document.createElement("button");
    btnNav.textContent = "Lihat Riwayat Pendidikan →";
    btnNav.className = "popup-nav-btn";
    btnNav.addEventListener("click", (e) => {
      e.stopPropagation();
      showRiwayatPendidikan();
    });
    liNav.appendChild(btnNav);
    listEl.appendChild(liNav);

    openOverlay();
  }

  // === Popup Riwayat Pendidikan (list + link) ===
  function showRiwayatPendidikan() {
    const data = POPUP_DATA.pendidikan;
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

    // tombol balik ke Riwayat Hidup
    const liBack = document.createElement("li");
    liBack.className = "nav-item";
    const btnBack = document.createElement("button");
    btnBack.textContent = "← Kembali ke Riwayat Hidup";
    btnBack.className = "popup-nav-btn";
    btnBack.addEventListener("click", (e) => {
      e.stopPropagation();
      showRiwayatHidup();
    });
    liBack.appendChild(btnBack);
    listEl.appendChild(liBack);

    openOverlay();
  }

  // === Event tombol di hero ===
  buttons.forEach((btn) => {
    const type = btn.getAttribute("data-popup");
    btn.addEventListener("click", () => {
      if (type === "skills") {
        showSkills();
      } else if (type === "riwayat") {
        showRiwayatHidup();
      }
    });
  });

  // Tutup popup
  closeBtn.addEventListener("click", closeOverlay);
  overlay.addEventListener("click", (e) => {
    const card = overlay.querySelector(".popup-card");
    if (!card.contains(e.target)) {
      closeOverlay();
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeOverlay();
  });

  // === Efek TYPEWRITER untuk nama & tagline ===
  const nameEl = document.querySelector(".hero-name");
  const tagEl = document.querySelector(".hero-tagline");

  const nameText = "Karnaca";
  const tagText = "Initializing human profile";

  if (nameEl && tagEl) {
    let i = 0, j = 0;
    nameEl.textContent = "";
    tagEl.textContent = "";

    function typeName() {
      if (i <= nameText.length) {
        nameEl.textContent = nameText.slice(0, i++);
        setTimeout(typeName, 120);
      } else {
        setTimeout(typeTag, 250);
      }
    }

    function typeTag() {
      if (j <= tagText.length) {
        tagEl.textContent = tagText.slice(0, j++);
        setTimeout(typeTag, 70);
      }
    }

    typeName();
  }
});

// Scroll smooth ke About
function scrollToAbout() {
  const section = document.getElementById("about");
  if (section) section.scrollIntoView({ behavior: "smooth" });
}
