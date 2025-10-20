// Class definitions
class User {
  constructor(nama, foto, email, deskripsi, kontak) {
    this.nama = nama;
    this.foto = foto;
    this.email = email;
    this.deskripsi = deskripsi;
    this.kontak = kontak;
  }

  tampilProfil() {
    document.getElementById("profile-name").textContent = this.nama;
    document.getElementById("profile-photo").src = "WhatsApp Image 2025-10-19 at 00.33.05.jpeg";
    document.getElementById("profile-description").textContent = this.deskripsi;
    document.getElementById("profile-email").textContent = `✉️ Email: ${this.email}`;
    document.getElementById("profile-contact").textContent = `📞 Kontak: ${this.kontak}`;
  }

  editProfil(nama, foto, email, deskripsi, kontak) {
    this.nama = nama;
    this.foto = foto;
    this.email = email;
    this.deskripsi = deskripsi;
    this.kontak = kontak;
    this.tampilProfil();
  }
}

class Portfolio {
  constructor() {
    this.projects = [];
  }

  tambahProyek(judulProyek, deskripsi, tanggal, gambar, linkDemo) {
    this.projects.push({ judulProyek, deskripsi, tanggal, gambar, linkDemo });
    this.tampilProyek();
  }

  editProyek(index, judulProyek, deskripsi, tanggal, gambar, linkDemo) {
    if (this.projects[index]) {
      this.projects[index] = { judulProyek, deskripsi, tanggal, gambar, linkDemo };
      this.tampilProyek();
    }
  }

  hapusProyek(index) {
    this.projects.splice(index, 1);
    this.tampilProyek();
  }

  tampilProyek() {
    const container = document.getElementById("projects-list");
    container.innerHTML = "";
    this.projects.forEach((project, index) => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.innerHTML = `
                <img src="${project.gambar}" alt="${project.judulProyek}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 10px; margin-bottom: 1rem;">
                <h3>${project.judulProyek}</h3>
                <p>${project.deskripsi}</p>
                <p><strong>Date:</strong> ${project.tanggal}</p>
                <a href="${project.linkDemo}" target="_blank" style="color: #e91e63;">View Demo</a>
            `;
      container.appendChild(card);
    });
  }
}

class Skill {
  constructor() {
    this.skills = [];
  }

  tambahSkill(namaSkill, levelSkill, kategori) {
    this.skills.push({ namaSkill, levelSkill, kategori });
    this.tampilSkill();
  }

  hapusSkill(index) {
    this.skills.splice(index, 1);
    this.tampilSkill();
  }

  tampilSkill() {
    const container = document.getElementById("skills-list");
    container.innerHTML = "";
    this.skills.forEach((skill) => {
      const card = document.createElement("div");
      card.className = "skill-card";
      card.innerHTML = `
                <h3>${skill.namaSkill}</h3>
                <p><strong>Category:</strong> ${skill.kategori}</p>
                <div class="skill-bar">
                    <div class="skill-fill" style="width: ${skill.levelSkill}%"></div>
                </div>
                <p>${skill.levelSkill}%</p>
            `;
      container.appendChild(card);
    });
  }
}

class Pendidikan {
  constructor() {
    this.data = [];
  }

  tambahData(namaSekolah, jurusan, tahunMasuk, tahunLulus) {
    this.data.push({ namaSekolah, jurusan, tahunMasuk, tahunLulus });
    this.tampilData();
  }

  editData(index, namaSekolah, jurusan, tahunMasuk, tahunLulus) {
    if (this.data[index]) {
      this.data[index] = { namaSekolah, jurusan, tahunMasuk, tahunLulus };
      this.tampilData();
    }
  }

  tampilData() {
    const container = document.getElementById("education-list");
    container.innerHTML = "";
    this.data.forEach((edu) => {
      const item = document.createElement("div");
      item.className = "education-item";
      item.innerHTML = `
                <h3>${edu.namaSekolah}</h3>
                <p><strong>Major:</strong> ${edu.jurusan}</p>
                <p><strong>Years:</strong> ${edu.tahunMasuk} - ${edu.tahunLulus}</p>
            `;
      container.appendChild(item);
    });
  }
}

class Pesan {
  constructor() {
    this.pesan = [];
  }

  kirimPesan(namaPengirim, emailPengirim, isiPesan) {
    const tanggal = new Date().toLocaleDateString();
    this.pesan.push({ namaPengirim, emailPengirim, isiPesan, tanggal });
    this.bacaPesan();
  }

  bacaPesan() {
    const container = document.getElementById("messages-list");
    container.innerHTML = "";
    this.pesan.forEach((msg, index) => {
      const item = document.createElement("div");
      item.className = "message-item";
      item.innerHTML = `
                <h4>${msg.namaPengirim} (${msg.emailPengirim})</h4>
                <p>${msg.isiPesan}</p>
                <p><small>${msg.tanggal}</small></p>
            `;
      container.appendChild(item);
    });
  }

  hapusPesan(index) {
    this.pesan.splice(index, 1);
    this.bacaPesan();
  }
}

// Initialize objects
const user = new User(
  "🌺 Angelica 🎀 ",
  "https://via.placeholder.com/150",
  "Licaangelica061@gmail.com",
  "💻 Halo! Saya Angelica, mahasiswa Teknik Informatika yang suka membuat website interaktif dan menarik. Saya fokus pada pengembangan front-end dan desain UI/UX, serta menciptakan solusi digital yang bermanfaat. Jika Anda ingin bekerja sama atau berkolaborasi, silakan hubungi saya melalui kontak di bawah ini atau klik menu Contact di navbar.🌸",
  "082271044249"
);
const portfolio = new Portfolio();
const skill = new Skill();
const pendidikan = new Pendidikan();
const pesan = new Pesan();

// Sample data
portfolio.tambahProyek("🍰 Website Toko Online Dres Korea", "Website e-commerce sederhana yang menjual berbagai macam dress bergaya Korea. Setiap produk dilengkapi dengan foto, deskripsi bahan, dan harga. Tampilan web didesain dengan gaya clean dan elegan, agar pengguna mudah menemukan produk yang diinginkan.", "2025-04-20", "https://via.placeholder.com/300", "#");
portfolio.tambahProyek("👗 Website Toko Cake Online", "Website toko online yang menjual berbagai jenis cake buatan rumahan, mulai dari cake ulang tahun, cake lembut, hingga cupcake lucu. Tampilan dibuat dengan desain modern, warna lembut, dan navigasi yang mudah digunakan. Pengguna dapat melihat daftar produk, harga, serta tombol pemesanan langsung.", "2025-06-22", "https://via.placeholder.com/300", "#");

skill.tambahSkill("JavaScript 🌷", 85, "Dynamic Interaction");
skill.tambahSkill("CSS 🎀", 90, "Visual Design & Styling");
skill.tambahSkill("HTML 💕", 95, "Structure & Layout");

pendidikan.tambahData("SMA Labschool Palu ", "IPA", "2021", "2024");
pendidikan.tambahData("STIMIK Bina Mulia Palu", "S-1 Teknik Informatika", "2024", "2028");

// Navigation
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const sectionId = e.target.getAttribute("data-section");
    document.querySelectorAll(".section").forEach((section) => {
      section.classList.remove("active");
    });
    document.getElementById(sectionId).classList.add("active");
  });
});

// Contact form
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("sender-name").value;
  const email = document.getElementById("sender-email").value;
  const message = document.getElementById("message").value;
  pesan.kirimPesan(name, email, message);
  e.target.reset();
});

// Initial display
user.tampilProfil();
portfolio.tampilProyek();
skill.tampilSkill();
pendidikan.tampilData();
pesan.bacaPesan();

