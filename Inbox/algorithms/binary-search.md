---
title: "Binary Search — wyszukiwanie binarne"
area: "Computer Science / Algorytmy / Wyszukiwanie"
status: "teoria zrozumiana; implementacja niezweryfikowana"
date: 2026-11-25
type: "szkic asystenta"
---

# Binary Search — wyszukiwanie binarne

> **Szkic w Inbox.** Materiał do przejrzenia i ewentualnego opracowania przez właściciela. Nie jest to zatwierdzona notatka w `Notes/`.

## Co zostało poznane podczas rozmowy

Użytkownik doszedł do kluczowej idei: w **posortowanej** liście można sprawdzić element środkowy; jeśli szukana liczba jest większa, odrzucić lewą połowę, a następnie sprawdzić środek prawej połowy. Analogicznie dla liczby mniejszej.

## Algorytm

1. Ustal początkowy i końcowy indeks obszaru wyszukiwania.
2. Sprawdź element środkowy.
3. Jeśli to szukana wartość — zwróć jej pozycję.
4. Jeśli szukana wartość jest większa — przeszukuj prawą połowę; jeśli mniejsza — lewą.
5. Powtarzaj, aż znajdziesz element lub obszar stanie się pusty.

Warunek: dane muszą być posortowane zgodnie z używanym porównaniem. Dla podanej implementacji iteracyjnej zakładamy strukturę z szybkim dostępem przez indeks (np. lista Pythona).

## Złożoność

- Czas: **O(log n)** w najgorszym przypadku, ponieważ zakres zmniejsza się mniej więcej o połowę w każdej iteracji.
- Pamięć: **O(1)** dla wersji iteracyjnej.
- Przy milionie elementów wystarczy około **20 zawężeń zakresu** (dokładna liczba sprawdzeń zależy od przypadku i implementacji).

## Przykład

Posortowana lista: `[2, 5, 8, 12, 17, 21, 29]`. Szukamy `21`.
- Środek: `12` → szukana liczba jest większa; odrzucamy lewą część wraz z `12`.
- Środek prawego zakresu: `21` → znalezione.

## Stan nauki

- [x] Samodzielne rozumowanie prowadzące do zasady odrzucania połowy zakresu.
- [x] Rozumienie konieczności posortowania danych.
- [ ] Samodzielna implementacja w Pythonie.
- [ ] Testy: pusta lista, brak elementu, pierwszy/ostatni element, duplikaty.
- [ ] Benchmark względem wyszukiwania liniowego.
- [ ] Umiejętność samodzielnego wyjaśnienia i wyprowadzenia złożoności O(log n).

## Powiązania

- Wyszukiwanie liniowe — O(n).
- Analiza złożoności (Big O).
- Strategia dziel i zwyciężaj.
- Zastosowania: wyszukiwanie w posortowanych danych, wyznaczanie granic i odpowiedzi spełniających warunek monotoniczny.

## Uwaga organizacyjna

Ten plik pozostaje w `Inbox/`. Do `Notes/` można go przenieść lub przeredagować wyłącznie na wyraźne polecenie właściciela.
