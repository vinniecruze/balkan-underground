# BALKAN UNDERGROUND Mobile PWA v1.0

Mobilna PWA aplikacija za iOS i Android, pripremljena za GitHub Pages.

## Postavljanje
1. Raspakujte ZIP.
2. U GitHub repozitorijumu `vinniecruze/balkan-underground` postavite sadržaj ovog foldera u root (zamenite postojeće `index.html`, `style.css`, `app.js`, `manifest.json`, `sw.js` i dodajte `assets/`).
3. U Settings → Pages izaberite branch `main` i folder `/ (root)`.
4. Otvorite HTTPS adresu na telefonu. iPhone: Safari → Share → Add to Home Screen. Android: Chrome → Install app.

## Funkcionalnosti u ovoj verziji
- Mobilni prikaz i navigacija prema dostavljenom dizajnu
- Splash ekran, prijava i registracija (lokalni demo režim)
- Lokalno čuvanje korisničkog imena i karaktera
- Kreiranje, izbor i brisanje karaktera
- Novosti, profil, server informacije, podešavanja
- Kopiranje IP adrese `62.171.167.126:7777`
- PWA manifest, ikone, offline cache i slike u assets folderu

## Važna ograničenja
Ovo je funkcionalan PWA prototip, ne nativna iOS/Android aplikacija. Prijava i registracija trenutno rade lokalno na uređaju; za prave korisničke naloge neophodan je backend i baza podataka. Status i broj igrača nisu prikazani kao lažni podaci: potrebno je dodati server-query API. Dugme „Pokreni igru“ ne može samo da pokrene SA-MP na iPhone-u; potreban je kompatibilan klijent/integracija. Ova PWA ne menja niti restartuje postojeći SA-MP server.
