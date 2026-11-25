# Zasady współpracy — Computer Science

## 1. Podział odpowiedzialności

- `Inbox/` jest roboczą przestrzenią asystenta. Może tam samodzielnie tworzyć, modyfikować i porządkować materiały związane z nauką, zachowując historię zmian w Git.
- `Notes/` jest przestrzenią właściciela. Asystent **nie tworzy, nie zmienia, nie usuwa ani nie przenosi** tam plików bez **wyraźnej prośby albo akceptacji konkretnej zmiany**.
- Pliki konfiguracyjne i zasady w katalogu głównym zmieniamy po wspólnym uzgodnieniu.

## 2. Przepływ informacji

1. Podczas rozmowy asystent może odkładać szkice, rozpoznane zagadnienia, pytania, pomysły na projekty i propozycje notatek do `Inbox/`.
2. Materiały robocze muszą być jasno oznaczone jako szkic / do sprawdzenia, jeśli nie zostały zweryfikowane.
3. Właściciel przegląda propozycje i decyduje, co oraz w jakiej formie trafi do `Notes/`.
4. Dopiero po tej decyzji asystent może przygotować wskazaną zmianę w `Notes/`; preferowany jest pull request do przeglądu, gdy jest to możliwe.
5. Właściciel może dowolnie edytować wszystkie pliki, także `Inbox/`.

## 3. Standard notatek

- Format: Markdown (zgodny z GitHub i Obsidian); diagramy: Mermaid.
- Oddzielamy **poznane w teorii**, **zaimplementowane** i **zastosowane w projekcie**.
- Nie przypisujemy ukończenia implementacji bez potwierdzenia.
- Podajemy źródła przy zewnętrznych faktach; zaznaczamy wątpliwości.
- Asystent nie wykonuje automatycznej synchronizacji ani pracy w tle: aktualizacje następują podczas uruchomionych interakcji.

## 4. Bezpieczeństwo

Repozytorium jest publiczne. Nie zapisujemy danych wrażliwych, sekretów, tokenów i materiałów prywatnych.
