---
title: "Merge Sort — sortowanie przez scalanie"
area: "Computer Science / Algorytmy / Sortowanie"
status: "teoria zrozumiana; implementacja w Pythonie niezweryfikowana"
date: 2026-11-25
type: "szkic asystenta"
---

# Merge Sort — sortowanie przez scalanie

> Szkic z rozmowy, przeznaczony do późniejszego opracowania przez właściciela. Nie jest zatwierdzoną notatką w `Notes/`.

## Idea algorytmu

**Dziel i zwyciężaj (divide and conquer)**:
1. Podziel listę na dwie części.
2. Powtarzaj podział, aż każda część ma co najwyżej jeden element — taka część jest już posortowana.
3. Scalaj dwie posortowane części, porównując ich **pierwsze niezużyte elementy** i dopisując mniejszy do wyniku.
4. Gdy jedna część się skończy, dopisz pozostałe elementy drugiej bez kolejnych porównań.
5. Powtarzaj scalanie, aż powstanie jedna posortowana lista.

## Scalanie — przykład z rozmowy

- Lewa lista: `[2, 7, 9]`
- Prawa lista: `[1, 4, 8]`
- Kolejne wybrane liczby: `1, 2, 4, 7, 8, 9`
- Wynik: `[1, 2, 4, 7, 8, 9]`

## Dlaczego O(n log n)?

Podzielenie listy na połówki tworzy około `log₂(n)` poziomów. Na każdym poziomie scalenie wszystkich części wymaga łącznie pracy proporcjonalnej do `n`. Łącznie daje to **O(n log n)** czasu (również w najgorszym przypadku).

Przykład z rozmowy: `1024 → 512 → 256 → 128 → 64 → 32 → 16 → 8 → 4 → 2 → 1` — **10 podziałów**, ponieważ `log₂(1024)=10`.

Typowy Merge Sort na tablicach wymaga **O(n)** dodatkowej pamięci na scalanie.

## Porównanie z Bubble Sort

- **Bubble Sort**: porównuje sąsiadujące elementy i zamienia je, jeśli są w złej kolejności. Najgorszy czas: **O(n²)**. Z warunkiem „brak zamian w całym przebiegu” zakończy działanie na już posortowanej liście po **O(n)**.
- **Merge Sort**: dzieli i scala posortowane części. Czas: **O(n log n)**; typowo potrzebuje dodatkowej pamięci **O(n)**.

## Stan nauki

- [x] Zrozumienie idei podziału na mniejsze listy.
- [x] Zrozumienie scalania dwóch już posortowanych list.
- [x] Zrozumienie, że resztę niepustej listy można dopisać bez sortowania.
- [x] Intuicja stojąca za `n log n` i liczba podziałów dla 1024 elementów.
- [ ] Samodzielna implementacja w Pythonie.
- [ ] Testy: pusta lista, jeden element, duplikaty, lista rosnąca i malejąca.
- [ ] Porównanie działania i wydajności z Bubble Sort.

## Powiązania

- [Binary Search](binary-search.md) — inne wykorzystanie dzielenia zakresu na pół.
- Rekurencja, złożoność obliczeniowa, algorytmy sortowania.
