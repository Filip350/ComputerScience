# Zasady współpracy — Computer Science

## 1. Cel repozytorium

To **baza wiedzy**, a nie repozytorium kodu projektów. Przechowujemy tutaj:
- notatki i wyjaśnienia zagadnień informatycznych;
- mapy wiedzy i ścieżki nauki;
- wnioski, porównania podejść i przetestowane rozwiązania;
- **case studies** projektów: problem, podjęte decyzje, architektura na poziomie koncepcji, napotkane trudności, wyniki, lekcje i możliwe ulepszenia.

**Nie trzymamy tutaj pełnych projektów, ich kodu źródłowego ani artefaktów wdrożeniowych.** Projekty mogą mieć osobne repozytoria; tutaj zapisujemy wiedzę uzyskaną podczas ich realizacji.

## 2. Podział odpowiedzialności

- `Inbox/` jest roboczą przestrzenią asystenta. Może tu samodzielnie tworzyć, modyfikować i porządkować szkice związane z nauką.
- `Notes/` jest przestrzenią właściciela. Asystent **nie tworzy, nie zmienia, nie usuwa ani nie przenosi** tam plików bez **wyraźnej prośby lub akceptacji konkretnej zmiany**.
- Pliki konfiguracyjne i zasady w katalogu głównym zmieniamy po uzgodnieniu.

## 3. Przepływ informacji

1. Podczas rozmów asystent zapisuje robocze wnioski, szkice notatek, map i case studies do `Inbox/`, kiedy pracujemy nad repozytorium.
2. Treści niezweryfikowane są oznaczane jako szkic / do sprawdzenia.
3. Właściciel wybiera materiały, poprawia ich strukturę i decyduje, co ma trafić do `Notes/`.
4. Dopiero po wyraźnej decyzji asystent może wykonać wskazaną zmianę w `Notes/`; w razie potrzeby przez pull request do przeglądu.
5. Właściciel może edytować wszystkie pliki, w tym `Inbox/`.

## 4. Standard wiedzy

- Markdown kompatybilny z GitHubem i Obsidianem; mapy i schematy w Mermaid.
- Rozdzielamy: **rozumiem teorię**, **potrafię zaimplementować**, **potrafię zastosować**.
- Case study dokumentuje przede wszystkim **czego nauczył projekt**, nie jego repozytorium lub kompletną implementację.
- Nie oznaczamy umiejętności jako zaliczonych bez dowodów z rozmowy lub wykonanej pracy.
- Zewnętrzne informacje otrzymują źródła, a niepewność jest oznaczona.
- Zapisy do GitHub wymagają interakcji z asystentem; brak gwarancji samoczynnej synchronizacji w tle.

## 5. Bezpieczeństwo

Repozytorium jest publiczne. Nie publikujemy sekretów, tokenów, danych wrażliwych ani poufnych fragmentów projektów. Nawet w case studies zachowujemy tylko informacje przeznaczone do udostępnienia.
