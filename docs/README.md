# Interaktywna mapa Computer Science

Statyczna strona w HTML, CSS i czystym JavaScript. Nie wymaga Reacta, backendu ani instalowania zależności.

## Uruchomienie
- Lokalnie: otwórz `docs/index.html` w przeglądarce.
- GitHub Pages: w repozytorium wybierz **Settings → Pages → Build and deployment → Deploy from a branch**, następnie **main** i **/docs**, po czym kliknij **Save**.
- Docelowy adres po udanej publikacji: https://filip350.github.io/ComputerScience/

## Jak rozszerzać mapę
- Dane są w `docs/data/topics.js`.
- Dodaj kategorię do `categories` albo temat do `topics`.
- Dla tematów `theory` i `practice` oznaczaj jako `true` dopiero po rzeczywistym przerobieniu/zweryfikowaniu.
- `url` kieruje do notatki w repozytorium.
- Mapa nie edytuje folderu `Notes/`; zawartość mapy to wyłącznie prezentacja danych.
- W wersji 1 nie zapisuje zmian z poziomu przeglądarki; stan przechowywany jest w pliku JavaScript.

## Status na starcie
Binary Search, Bubble Sort i Merge Sort: teoria poznana, implementacje w Pythonie niezweryfikowane.


## Zakładka Projekty
- **`docs/projects.html`** — widoczna w nawigacji obok mapy wiedzy; katalog projektów i etapy pierwszego projektu: własny system operacyjny x86 od instrukcji CPU.
- **`docs/projects.css`** — style tej podstrony, dziedziczące podstawowy wygląd z `docs/style.css`.
- **`Inbox/projects/bare-metal-os-x86.md`** — roboczy konspekt edukacyjny, źródła, granice projektu i cele etapów do zatwierdzenia.
- Etapów nie oznaczamy jako ukończonych bez udokumentowanego eksperymentu. Obecnie **0/14**. Aktualizując postęp, synchronizuj opis na stronie z weryfikowalnymi notatkami.
- Pełny kod systemu powinien trafić do osobnego repozytorium; baza ComputerScience przechowuje mapę wiedzy i case studies.
