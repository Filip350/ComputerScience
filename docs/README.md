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
