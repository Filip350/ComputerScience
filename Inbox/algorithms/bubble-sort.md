---
title: "Bubble Sort — sortowanie bąbelkowe"
area: "Computer Science / Algorytmy / Sortowanie"
status: "teoria omówiona; implementacja w Pythonie niezweryfikowana"
date: 2026-11-25
type: "szkic asystenta"
---

# Bubble Sort — sortowanie bąbelkowe

> Szkic z rozmowy, do późniejszego opracowania przez właściciela w osobistym folderze `Notes/`.

## Pomysł

1. Przejdź od początku listy, porównując **dwa sąsiadujące elementy**.
2. Przy sortowaniu rosnącym, jeśli lewy element jest **większy** od prawego — zamień je miejscami.
3. Po każdym pełnym przebiegu największy element z nieuporządkowanej części znajduje się na jej końcu; nie trzeba porównywać go ponownie.
4. Powtórz przebiegi dla pozostałej części listy.
5. **Optymalizacja:** na początku przebiegu ustaw flagę `swapped = False`. Jeśli zaszła zamiana — ustaw `True`. Gdy cały przebieg kończy się bez żadnej zamiany, lista jest już posortowana i można zakończyć.

## Przykład z rozmowy

Początek: `[7, 2, 9, 4, 1]`

Pierwszy przebieg:
- `7 > 2` → zamiana: `[2, 7, 9, 4, 1]`
- `7 < 9` → bez zamiany
- `9 > 4` → zamiana: `[2, 7, 4, 9, 1]`
- `9 > 1` → zamiana: `[2, 7, 4, 1, 9]`

Po pierwszym przebiegu liczba `9` jest na właściwym miejscu. Kolejne przebiegi uporządkują resztę.

Wynik końcowy: `[1, 2, 4, 7, 9]`.

## Złożoność

- Najgorszy i przeciętny przypadek: **O(n²)** czasu.
- Najlepszy przypadek przy zastosowaniu flagi braku zamian: **O(n)** (już posortowana lista).
- Dodatkowa pamięć przy sortowaniu w miejscu: **O(1)**.
- Algorytm jest stabilny, jeśli zamieniamy tylko elementy ściśle większe, a nie równe.

## Porównanie z Merge Sort

Bubble Sort wielokrotnie porównuje **sąsiadów**. [Merge Sort](merge-sort.md) dzieli dane na części, a następnie efektywnie scala posortowane fragmenty; jego czas wynosi **O(n log n)**.

## Stan nauki

- [x] Samodzielnie zaproponowana metoda porównywania i zamieniania sąsiadów.
- [x] Zrozumiana potrzeba kolejnych przebiegów.
- [x] Samodzielnie wskazany warunek zakończenia: cały przebieg bez zamiany.
- [ ] Samodzielna implementacja w Pythonie.
- [ ] Testy: pusta lista, jeden element, duplikaty, lista już posortowana i odwrócona.
- [ ] Porównanie pomiarów z Merge Sort.
