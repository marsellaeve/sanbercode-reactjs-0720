import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="kotak">
      <h1>Form Pembelian Buah</h1>
      <form>
        <label for="Nama"><b>Nama Pelanggan</b></label>
        <input type="text" id="Nama" name="Nama"/><br/><br/>
        <input type="checkbox" id="buah1" name="buah1" value="Semangka"/>
        <label for="buah1">Semangka</label><br/>
        <input type="checkbox" id="buah2" name="buah2" value="Jeruk"/>
        <label for="buah2">Jeruk</label><br/>
        <input type="checkbox" id="buah3" name="buah3" value="Nanas"/>
        <label for="buah3">Nanas</label><br/>
        <input type="checkbox" id="buah4" name="buah4" value="Salak"/>
        <label for="buah4">Salak</label><br/>
        <label for="buah5"><b>Daftar Item</b></label>
        <input type="checkbox" id="buah5" name="buah5" value="Anggur"/>
        <label for="buah5">Anggur</label><br/><br/>
        <input type="submit" id="button" value="Kirim"/>
      </form>
    </div>
  );
}

export default App;
