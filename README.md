# BALKAN UNDERGROUND PWA v1.2 — GitHub Pages paket

## Instalacija
1. Napravite rezervnu kopiju trenutnog GitHub repozitorijuma.
2. Raspakujte ZIP.
3. Zamenite sadržaj root-a repozitorijuma svim fajlovima iz ovog paketa (uključujući `assets/` i `supabase/`).
4. Commitujte na `main`, uz GitHub Pages podešen na `main` / root.
5. Sačekajte deployment, pa otvorite `https://vinniecruze.github.io/balkan-underground/`.
6. Ako je aplikacija ranije instalirana na početni ekran, uklonite staru ikonicu i ponovo dodajte sajt preko Safari → Share → Add to Home Screen.

## Uključeno
- Mobilni PWA interfejs i navigacija.
- Korisnikov originalni BU logo u GIF i PNG formatima.
- Nove zasebne pozadinske slike izvedene iz trećeg odobrenog vizuelnog koncepta: `bg-city-car.jpg`, `bg-auth.jpg`, `bg-news.jpg`.
- Ispravljen Service Worker cache ključ `bu-pwa-v1-2`, sa uklanjanjem starijih `bu-pwa-*` keševa.
- Demo registracija/prijava, lokalni profil i lokalno čuvanje profilne slike.
- Izbor SA-MP skin ID-jeva 0–311 (bez garantovanih zvaničnih portreta svih 312 skinova).
- Lokalne novosti i početni admin UI okvir.
- Server IP: `62.171.167.126:7777`.

## Važna ograničenja
Ovo je GitHub Pages PWA demo, a ne gotov produkcioni sistem:
- Demo nalozi, profili, slike i novosti čuvaju se samo u lokalnom pregledaču; ne sinhronizuju se između uređaja ili korisnika.
- Supabase nije povezan jer nisu dostavljeni URL i anon ključ projekta. `supabase/schema.sql` je samo početni predlog šeme; RLS i admin autorizacija moraju se dovršiti i testirati pre javne upotrebe.
- Admin ovlašćenja nisu bezbedno implementirana u klijentskom demo-u.
- Prikaz broja igrača/statusa nije povezan sa SA-MP query servisom.
- `samp://` pokretanje radi samo ako je na uređaju instaliran kompatibilan SA-MP klijent.
- Paket ne sadrži zasebne zvanične slike svih 312 SA-MP skinova.

## Struktura slika
- `assets/bu-icon.gif` i `assets/bu-icon.png` — originalni BU logo korisnika.
- `assets/bg-city-car.jpg` — pozadina grada, palmi i automobila.
- `assets/bg-auth.jpg` — tamnija pozadina za ekrane sa formama.
- `assets/bg-news.jpg` — vizuelni akcenat za novosti.
