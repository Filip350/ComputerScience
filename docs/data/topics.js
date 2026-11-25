// Dane mapy. Nowe tematy dodawaj do tablicy topics — bez edytowania interfejsu.
window.COMPUTER_SCIENCE_MAP = {
  categories: [
    {id:"algorithms",name:"Algorytmy",icon:"◇",desc:"Wyszukiwanie, sortowanie i analiza złożoności."},
    {id:"data-structures",name:"Struktury danych",icon:"▦",desc:"Tablice, listy, stosy, drzewa i grafy."},
    {id:"mathematics",name:"Matematyka",icon:"∑",desc:"Logika, algebra, analiza i matematyka dyskretna."},
    {id:"programming",name:"Programowanie",icon:"⌘",desc:"Języki, wzorce i praktyka pisania kodu."},
    {id:"databases",name:"Bazy danych",icon:"▤",desc:"SQL, NoSQL i modelowanie danych."},
    {id:"systems",name:"Systemy",icon:"⬡",desc:"Systemy operacyjne, sieci i architektura."},
    {id:"ai",name:"AI i dane",icon:"✧",desc:"Uczenie maszynowe i inżynieria danych."},
    {id:"engineering",name:"Inżynieria oprogramowania",icon:"⛭",desc:"Testowanie, Git i projektowanie systemów."}
  ],
  topics: [
    {id:"binary-search",category:"algorithms",title:"Binary Search",subtitle:"Wyszukiwanie binarne",group:"WYSZUKIWANIE",description:"Dzielenie posortowanego zakresu na połowy w celu znalezienia elementu. Złożoność O(log n).",theory:true,practice:false,next:"Samodzielna implementacja w Pythonie",url:"https://github.com/Filip350/ComputerScience/blob/main/Inbox/algorithms/binary-search.md"},
    {id:"bubble-sort",category:"algorithms",title:"Bubble Sort",subtitle:"Sortowanie bąbelkowe",group:"SORTOWANIE",description:"Porównywanie sąsiadów i zamiana ich miejscami, aż nie będzie kolejnych zamian. Złożoność O(n²).",theory:true,practice:false,next:"Samodzielna implementacja w Pythonie",url:"https://github.com/Filip350/ComputerScience/blob/main/Inbox/algorithms/bubble-sort.md"},
    {id:"merge-sort",category:"algorithms",title:"Merge Sort",subtitle:"Sortowanie przez scalanie",group:"SORTOWANIE",description:"Podział danych na mniejsze listy i scalanie już posortowanych fragmentów. Złożoność O(n log n).",theory:true,practice:false,next:"Implementacja w Pythonie i porównanie z Bubble Sort",url:"https://github.com/Filip350/ComputerScience/blob/main/Inbox/algorithms/merge-sort.md"}
  ]
};
