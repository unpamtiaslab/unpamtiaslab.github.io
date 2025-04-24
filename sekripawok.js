document.addEventListener("contextmenu", function (a) {
  swal("Gagal!", "Klik kanan tidak diizinkan!", "error");
});

document.getElementById("labForm").addEventListener("submit", function (a) {
  a.preventDefault();
  generateStudentAnnouncement();
});

const themeSwitch = document.getElementById("themeSwitch");
const themeBtnIcon = themeSwitch.querySelector("i");
const themeBtnText = themeSwitch.querySelector("span");

function generateStudentAnnouncement() {
  const a = document.getElementById("name").value,
    n = document.getElementById("day").value,
    e = document.getElementById("time").value,
    t = document.getElementById("room").value,
    i = document.getElementById("subject").value,
    r = document.getElementById("lecturer").value,
    ba = document.getElementById("bapakibu").value,
    u = document.getElementById("class").value;

  if (
    "" === a ||
    "" === n ||
    "" === e ||
    "" === t ||
    "" === i ||
    "" === r ||
    "" === u
  ) {
    return void swal({
      title: "Form Tidak Lengkap!",
      text: "Mohon lengkapi semua kolom yang diperlukan.",
      icon: "error",
      button: "Coba Lagi",
    });
  }

  let m = "";
  "611" === t || "612" === t
    ? (m = `${t} (Lewat pintu masuk, LT. 6 gedung A)`)
    : ("773" !== t && "775" !== t && "776" !== t && "782" !== t) ||
      (m = `${t} (Lewat LT. 8 gedung C parkiran)`);

  displayAnnouncement(
    `
Halo semua! 📢<br><br>
Perkenalkan, saya ${a} dari Asisten Laboratorium. Kami ingin memberitahu kalian bahwa besok akan ada jadwal lab yang perlu diikuti. Berikut detailnya:<br><br>
<ul>
<li><strong>*📅 Hari:*</strong> ${n}</li>
<li><strong>*🕒 Jam:*</strong> ${e}</li>
<li><strong>*🏢 Ruang:*</strong> ${m}</li>
<li><strong>*📚 Mata Kuliah:*</strong> ${i}</li>
<li><strong>*👨‍🏫 Dosen:*</strong> ${ba} ${r}</li>
<li><strong>*🧑‍🎓 Kelas:*</strong> ${u}</li>
</ul>
<hr>
<p><strong>*Catatan penting:*</strong><br />
✅ Wajib memakai almamater.<br />
✅ Wajib membawa laptop masing-masing, karena komputer di lab terbatas.<br /><br />

❌ Dilarang membawa makanan dan minuman ke dalam lab (kecuali botol/tumbler).<br />
❌ Dilarang membawa, memindahkan, mengubah, atau merusak fasilitas yang ada di lab.<br />
❌ Dilarang melakukan aktivitas yang tidak berhubungan dengan praktikum di dalam lab.<br /><br />

📌 Pastikan untuk menjaga kebersihan dan kerapian area kerja di laboratorium. Setelah selesai, rapikan kembali kursi dan meja sesuai posisi semula.<br />
📌 Matikan komputer jika sudah selesai atau tidak digunakan lagi untuk menghemat energi.<br />
📌 Setiap mahasiswa bertanggung jawab atas peralatan yang digunakan selama praktikum.<br />
📌 Jangan tinggalkan barang pribadi di laboratorium setelah praktikum selesai.<br />
📌 Hindari membuat keributan agar tidak mengganggu pengguna laboratorium lainnya.<br /><br />

⏱ Pastikan hadir tepat waktu dan mempersiapkan diri dengan baik.<br />
⏰ Toleransi keterlambatan masuk lab adalah 15 menit atau sesuai kebijakan dosen (opsional).<br /><br />

*Pastikan untuk hadir tepat waktu* dan mempersiapkan diri dengan baik. Terima kasih atas perhatiannya, dan sampai jumpa di lab!<br><br>

<strong>Keamanan dan Ketertiban:</strong><br>
✅ Wajib memakai almamater dan ID card selama berada di dalam lab.<br>
✅ Jaga ketertiban dan kebersihan selama menggunakan fasilitas lab.<br>
✅ Gunakan komputer dan perangkat lab hanya untuk keperluan praktikum atau tugas yang diberikan.<br>
❌ Dilarang mengakses situs atau aplikasi yang tidak terkait dengan praktikum, seperti media sosial atau game.<br>
❌ Dilarang mengunduh, memasang, atau mengubah perangkat lunak tanpa izin dari asisten atau dosen.<br><br>

<strong>Perangkat Keras dan Perangkat Lunak:</strong><br>
✅ Pastikan semua perangkat keras seperti mouse, keyboard, dan monitor berfungsi dengan baik. Laporkan jika ada kerusakan pada asisten atau dosen.<br>
✅ Simpan pekerjaan secara berkala. Jangan mengandalkan komputer lab tanpa menyimpan file secara manual (gunakan cloud storage jika memungkinkan).<br>
❌ Dilarang mengambil atau memindahkan perangkat keras lab tanpa izin.<br>
❌ Dilarang merusak atau memodifikasi perangkat keras di lab, seperti mengganti kabel atau perangkat lainnya.<br>
❌ Dilarang menginstal aplikasi atau perangkat lunak pribadi di komputer lab tanpa persetujuan dari dosen atau asisten.<br><br>

<strong>Penggunaan Perangkat Elektronik:</strong><br>
✅ Gunakan perangkat elektronik hanya untuk keperluan praktikum.<br>
✅ Jika perlu, gunakan headphone untuk mendengarkan materi praktikum atau tutorial.<br>
❌ Dilarang menggunakan ponsel atau perangkat lain untuk kegiatan yang tidak terkait dengan praktikum selama berada di dalam lab.<br>
❌ Dilarang streaming video, mendengarkan musik, atau bermain game di komputer lab.<br>
❌ Dilarang mengambil foto atau merekam video tanpa izin dari dosen atau asisten praktikum.<br><br>

<strong>Keamanan Data dan Informasi:</strong><br>
✅ Jaga kerahasiaan data dan informasi pribadi. Jangan berbagi password atau informasi akun dengan orang lain.<br>
✅ Backup pekerjaan secara berkala di penyimpanan cloud atau perangkat eksternal.<br>
❌ Dilarang sharing file atau data tanpa izin dari pemiliknya.<br>
❌ Dilarang posting atau menyebarkan informasi yang bersifat negatif, provokatif, atau mengganggu keamanan lab.<br>
❌ Dilarang download atau mengakses situs yang mengandung konten negatif atau tidak pantas.<br><br>
❌ Dilarang mengakses data atau file milik orang lain tanpa izin.<br>
❌ Dilarang membawa atau mengunduh file yang tidak terkait dengan kegiatan praktikum.<br><br>

<strong>Kebersihan dan Keamanan Lab:</strong><br>
✅ Cuci tangan sebelum dan setelah menggunakan komputer untuk menjaga kebersihan.<br>
✅ Pastikan meja dan perangkat dibersihkan setelah digunakan, terutama jika ada makanan atau minuman yang tumpah.<br>
✅ Jaga agar kabel dan perangkat tetap rapi, hindari kabel yang berserakan atau menghalangi jalur evakuasi.<br>
❌ Dilarang membawa makanan atau minuman ke dalam lab, kecuali botol air yang tertutup rapat.<br>
❌ Dilarang merokok atau membakar apapun di dalam lab, termasuk lilin atau korek api.<br>
❌ Dilarang membawa bahan yang bisa merusak perangkat, seperti cairan, benda tajam, atau benda berat.<br><br>

<strong>Tugas Praktikum dan Kolaborasi:</strong><br>
✅ Kerjakan tugas praktikum dengan teliti, jangan terburu-buru dalam menyelesaikan pekerjaan.<br>
✅ Bekerja sama dengan teman, tetapi pastikan setiap orang mengerti dan mengerjakan bagian mereka.<br>
❌ Dilarang menyalin pekerjaan teman atau menggunakan sumber yang tidak sah dalam penyelesaian tugas.<br>
❌ Dilarang menyelesaikan tugas praktikum dengan cara yang tidak etis, seperti plagiat atau kecurangan.<br>
❌ Dilarang mengganggu teman atau menghalangi kerja sama dalam kelompok.<br>
✅ Jika ada masalah atau kesulitan, segera minta bantuan dari dosen atau asisten.<br><br>

<strong>Ketepatan Waktu dan Disiplin:</strong><br>
✅ Pastikan hadir tepat waktu di sesi praktikum dan siapkan materi atau perangkat yang diperlukan sebelum sesi dimulai.<br>
✅ Waktu praktikum harus dihormati. Jangan meninggalkan lab lebih awal tanpa izin dari dosen atau asisten.<br>
❌ Dilarang terlambat tanpa pemberitahuan. Jika terlambat, laporkan pada dosen atau asisten sebelum masuk lab.<br>
✅ Toleransi keterlambatan masuk lab adalah 10-15 menit, setelah itu, mungkin Anda tidak bisa mengikuti sesi praktikum.<br><br>

<strong>Penyelesaian Masalah dan Laporan:</strong><br>
✅ Setelah selesai, pastikan semua pekerjaan telah disimpan dengan baik, baik secara lokal atau ke cloud.<br>
✅ Ikuti prosedur untuk mengakhiri sesi praktikum, seperti menutup aplikasi dan mematikan komputer dengan benar.<br>
✅ Laporan praktikum harus diserahkan tepat waktu dan sesuai dengan instruksi yang diberikan.<br>
❌ Dilarang meninggalkan lab dengan komputer yang tidak dimatikan atau tidak log-out dari akun pribadi.<br>
</p>
        `
  );
}

function generateLecturerAnnouncement() {
  const a = document.getElementById("name").value,
    n = document.getElementById("lecturer").value,
    e = document.getElementById("subject").value,
    t = document.getElementById("class").value,
    i = document.getElementById("day").value,
    r = document.getElementById("time").value,
    u = document.getElementById("room").value,
    m = document.getElementById("selamat").value,
    l = document.getElementById("periode").value,
    k = document.getElementById("pertemuan").value;
  ba = document.getElementById("bapakibu").value;

  if (
    "" === a ||
    "" === i ||
    "" === r ||
    "" === u ||
    "" === e ||
    "" === n ||
    "" === t ||
    "" === m ||
    "" === l ||
    "" === k ||
    "" === ba
  ) {
    return void swal({
      title: "Form Tidak Lengkap!",
      text: "Mohon lengkapi semua kolom yang diperlukan.",
      icon: "error",
      button: "Coba Lagi",
    });
  }

  displayAnnouncement(`
        Assalammualaikum warahmatullahi wabarakatuh,<br>
        ${m}, ${ba} ${n}.<br><br>
        Mohon maaf mengganggu waktunya, semoga dalam keadaan sehat walafiat.<br><br>
        Perkenalkan saya ${a}, Asisten Laboratorium yang akan bertugas untuk mengasistensi ${ba} ${n} selama di laboratorium.<br>
        Saya bermaksud memberitahukan bahwa ${ba} ${n} mendapatkan jadwal penggunaan laboratorium untuk semester ini pada ${l}, berikut lampirannya:<br><br>
        <ul>
            <li><strong>*📚Mata Kuliah:*</strong> ${e}</li>
            <li><strong>*🧑‍🎓Kelas:*</strong> ${t}</li>
            <li><strong>*📅Hari:*</strong> ${i}</li>
            <li><strong>*🕒Jam:*</strong> ${r}</li>
            <li><strong>*🏫Ruang:*</strong> ${u}</li>
        </ul>
        <br />
        Sesuai arahan kaprodi, penggunaan labolatorium dimulai pada ${k} pembelajaran dan diharapkan ${ba} ${n} untuk dapat mengisi ruang laboratorium pada jadwal yang telah ditentukan.<br>
        Terima kasih. <br />
        ${m},
        Wasalammualaikum warahmatullahi wabarakatuh.
`);
}

function displayAnnouncement(a) {
  document.getElementById("announcementText").innerHTML = a;
  document.getElementById("output").style.display = "block";
}

themeSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    themeBtnIcon.className = "fas fa-moon";
    themeBtnText.textContent = "Dark Mode";
  } else {
    themeBtnIcon.className = "fas fa-sun";
    themeBtnText.textContent = "Light Mode";
  }
});

document.getElementById("copyBtn").addEventListener("click", function () {
  const a = document.getElementById("announcementText").innerText;
  navigator.clipboard
    .writeText(a)
    .then(function () {
      swal("Berhasil!", "Pengumuman telah disalin ke clipboard!", "success", {
        button: false,
        timer: 2000,
      });
    })
    .catch(function () {
      swal("Gagal!", "Tidak bisa menyalin ke clipboard!", "error");
    });
});

const p = {
  youtube: "https://www.youtube.com/@aslabti_unpam",
  instagram: "https://www.instagram.com/indradwi.25/",
};
function applyLinks() {
  document.getElementById("youtube").href = p.youtube;
  document.getElementById("instagram").href = p.instagram;
}
window.onload = applyLinks;
