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


## Dodaci u ovoj verziji
- Ikonica aplikacije koristi dostavljeni BU GIF logo (prvi kadar, statična PWA ikonica).
- Galerija SA-MP skinova: ID 0–311, osim nepostojećeg ID 74. Pregledi se učitavaju sa assets.open.mp i zato je internet potreban za prikaz slika. Skinovi 300–311 traže SA-MP 0.3.7 RC3 ili noviji.
- Profilna fotografija se bira sa uređaja i čuva lokalno (do 2 MB).
- Demo admin panel: korisničko ime `admin`, lozinka `BUadmin2026!`. Omogućava izmenu IP adrese/moda/maksimalnog broja igrača, dodavanje i brisanje novosti i izvoz rezervne kopije.

**VAŽNO:** Admin panel i nalozi su u ovoj statičkoj PWA verziji lokalni i nisu bezbedna produkciona autentifikacija niti sinhronizovani između korisnika. Za javnu aplikaciju potreban je backend (npr. Supabase) sa administratorskim pravima, bazom i skladištem slika. Izmena IP adrese u aplikaciji ne menja konfiguraciju SA-MP servera.


## v1.2 – ikonica i SA-MP skinovi
- Ikonica aplikacije koristi dostavljeni BU GIF logo (PWA ikonice su statične PNG slike).
- Izbor obuhvata SA-MP skin ID-jeve 0–311, osim nedostupnog ID-ja 74.
- Sačuvani karakter može naknadno da promeni ime i izabrani skin preko opcije „PROMENI KARAKTER / SKIN“.
- Pregledi skinova se učitavaju sa `assets.open.mp`; za prikaz slika potrebna je internet veza. Sam izbor i čuvanje ID-ja ostaju dostupni u aplikaciji.
