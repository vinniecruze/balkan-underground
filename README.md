# BALKAN UNDERGROUND — instalacioni PWA prototip v0.3

Ovo je instalacioni web-prototip (PWA), a ne izvorni APK/IPA paket.

## Kako instalirati
PWA mora biti postavljen na HTTPS hosting:
- Android: otvoriti adresu u Chrome-u → meni → Install app / Add to Home screen.
- iPhone: otvoriti adresu u Safari-ju → Share → Add to Home Screen.

## Lokalno testiranje
U folderu pokrenuti `python -m http.server 8000`, pa otvoriti `http://localhost:8000`.
Za instalaciju na telefon sa drugog uređaja potreban je HTTPS hosting.

## Uključeno
- BALKAN UNDERGROUND / ONLINE GAMING COMMUNITY brendiranje
- demo prijava i registracija (podaci ostaju samo u lokalnom pregledaču)
- kreiranje i izbor karaktera
- novosti, profil i odjava
- prikaz server adrese 62.171.167.126:7777
- PWA manifest, ikonica i osnovni offline cache

## Ograničenja
- Nije povezan sa stvarnom bazom korisnika.
- Server status i broj igrača nisu potvrđeni uživo.
- GTA SA-MP 0.3.7 klijent nije ugrađen; dugme za igru je demonstraciono.
- Neophodni su HTTPS hosting, backend i pravno odobrena integracija multiplayer klijenta za pravu aplikaciju.


## Važno pre javnog puštanja
Ovo je PWA demo/prototip. Prijava i registracija čuvaju se samo lokalno u pregledaču; nije povezana sa bazom korisnika niti sa SA-MP serverom. Za produkciju je potreban backend i hosting sa HTTPS. Sama objava na HTTPS ne menja SA-MP server.
