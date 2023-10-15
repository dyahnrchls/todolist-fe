# Dokumentasi

Repositori ini adalah frontend aplikasi manajemen tugas (to-do list) yang dibangun dengan menggunakan React, Framer Motion, Axios, dan Redux. Aplikasi ini memungkinkan pengguna untuk menambah, menampilkan, mengubah, dan menghapus tugas dengan status "active" atau "completed."

## Daftar Isi

- [Instalasi](#instalasi)
- [Menjalankan Aplikasi](#menjalankan-aplikasi)
- [Fitur](#fitur)
  - [Menambahkan Todo](#menambahkan-todo)
  - [Menampilkan Todo](#menampilkan-todo)
  - [Merubah Nama atau Status Todo](#merubah-nama-atau-status-todo)
  - [Menghapus Todo](#menghapus-todo)
- [Pustaka yang Digunakan](#pustaka-yang-digunakan)
- [Contoh Penggunaan Redux](#contoh-penggunaan-redux)
- [Lisensi](#lisensi)

## Instalasi

1. Clone repositori ini:

   ```bash
   git clone https://github.com/dyahnrchls/todolist-fe.git
   ```

2. Masuk ke direktori repositori:

   ```bash
   cd todolist-fe
   ```

3. Install dependensi:

   ```bash
   npm install
   ```

## Menjalankan Aplikasi

Untuk menjalankan aplikasi, gunakan perintah berikut:

```bash
npm start
```

Aplikasi akan berjalan di `http://localhost:3000` secara default. Anda dapat mengubah port dalam file konfigurasi jika diperlukan.

## Fitur

### Menambahkan Todo

**Deskripsi:** Pengguna dapat menambahkan tugas baru ke dalam daftar to-do.

1. Masukkan nama tugas yang ingin ditambahkan.
2. Pilih status tugas (active atau completed).
3. Klik tombol "Tambah Todo."

### Menampilkan Todo

**Deskripsi:** Pengguna dapat menampilkan tugas berdasarkan status "active," "completed," atau menampilkan semua tugas.

1. Pilih opsi "Active" untuk menampilkan tugas dengan status "active."
2. Pilih opsi "Completed" untuk menampilkan tugas dengan status "completed."
3. Pilih opsi "All" untuk menampilkan semua tugas.

### Merubah Nama atau Status Todo

**Deskripsi:** Pengguna dapat mengubah nama atau status tugas yang sudah ada.

1. Klik tugas yang ingin diubah.
2. Edit nama tugas atau ubah status.
3. Klik tombol "Simpan Perubahan."

### Menghapus Todo

**Deskripsi:** Pengguna dapat menghapus tugas yang sudah ada.

1. Klik ikon "Hapus" pada tugas yang ingin dihapus.
2. Konfirmasi penghapusan.

## Pustaka yang Digunakan

Aplikasi ini memanfaatkan beberapa pustaka JavaScript yang penting, termasuk:

- React: [https://reactjs.org/](https://reactjs.org/)
- Redux: [https://redux.js.org/](https://redux.js.org/)
- Framer Motion: [https://www.framer.com/motion/](https://www.framer.com/motion/)
- Axios: [https://axios-http.com/](https://axios-http.com/)

## Contoh Penggunaan Redux

Aplikasi ini menggunakan Redux untuk mengelola status tugas dan menyimpan daftar to-do. Berikut adalah contoh penggunaan Redux dalam aplikasi:

```javascript
// Menambahkan Todo
dispatch(addApiTodos({ name: "Membuat presentasi", status: "active" }));

// Mengubah Nama/Status Todo
dispatch(updateApiTodos(todoId, { name: "Membuat presentasi", status: "active" }));

// Menghapus Todo
dispatch(deleteTdeleteApiTodosodo(todoId));
```

## Lisensi

Dokumentasi ini dilisensikan di bawah [Lisensi MIT](LICENSE.md).