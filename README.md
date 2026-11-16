# BALKAN UNDERGROUND PWA v1.0

Mobilna PWA početna verzija sa tamno-plavim BU izgledom, prijavom/registracijom preko Supabase Auth, profilima, uploadom avatar fotografije, izborom SA-MP skin ID 0–311, novostima i ograničenim admin objavljivanjem.

## Važno pre objave
Ovaj ZIP nije moguće nazvati potpuno povezanim sa serverom dok se ne unesu stvarni Supabase podaci i dok se ne potvrde SA-MP server endpointi. UI i integracioni kod su pripremljeni, ali spoljne usluge moraju biti podešene.

## Podešavanje Supabase (besplatni početni plan)
1. Napravi projekat na https://supabase.com/.
2. U Project Settings → API kopiraj Project URL i anon/public key.
3. Otvori `config.js` i zameni `YOUR-PROJECT` i `YOUR_SUPABASE_ANON_KEY`.
4. U Supabase → SQL Editor pokreni ceo `supabase/schema.sql`.
5. U Storage napravi PUBLIC bucket pod imenom `avatars`.
6. Registruj se kroz aplikaciju. Izvrši poslednji SQL primer iz schema.sql (sa svojim emailom) da postaneš admin.
7. Objavi sve fajlove u GitHub repo. Uključi GitHub Pages (Settings → Pages → Deploy from branch → main → /(root)).

## Lokalno testiranje
Pokreni lokalni statički server iz ovog foldera, npr. `python -m http.server 8080`, pa otvori `http://localhost:8080`. PWA service worker zahteva HTTPS ili localhost.

## SA-MP karakteri
Izbor sadrži kompletan raspon standardnih SA-MP skin ID-jeva 0–311. Trenutno se čuva ID; originalne slike i zvanični nazivi skinova nisu deo priloženog materijala, pa nisu izmišljeni. Dodaj legalno posedovane skin slike u budućoj iteraciji ako želiš vizuelni katalog.

## Server integracija
`config.js` sadrži server adresu prikazanu u dostavljenom dizajnu. `samp://` link pokušava da otvori kompatibilan SA-MP klijent. Status i broj igrača su trenutno označeni kao neprovereni; za stvarno stanje potreban je dostupan SA-MP query endpoint ili mali posrednički API. GitHub Pages ne može direktno da hostuje takav backend.

## Bezbednost
- Nikada ne stavljaj Supabase `service_role` ključ u `config.js` ili javni GitHub repo.
- Admin prava se dodeljuju isključivo SQL-om iz Supabase Dashboard-a.
- Pre javnog puštanja dodaj pravila privatnosti/uslove korišćenja i testiraj RLS na odvojenom test nalogu.
