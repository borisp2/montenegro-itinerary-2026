export const variants = [
  {
    id: 'relax',
    label: 'Pôvodná verzia',
    title: 'Pokojná dovolenka s morom a ľahkými výletmi',
    description: 'Najvyváženejší variant s jednou základňou, oddychom pri mori a pár silnými výjazdmi.',
    highlights: ['Jaz, Trsteno a Mogren ako hlavné pláže', 'Budva, Kotor/Perast a Sveti Stefan', 'Rezervné dni na počasie a únavu'],
    price: '58–76,5 EUR / osoba / deň'
  },
  {
    id: 'budget',
    label: 'Budget verzia',
    title: 'Nižší rozpočet bez zmeny ubytovania',
    description: 'Viac self-cateringu, menej platených vstupov a menej časté dlhé presuny autom.',
    highlights: ['Raňajky v apartmáne', 'Len hlavné výlety, menej spontánnych presunov', 'Viac dní na Jaz a Trstene'],
    price: '50–62 EUR / osoba / deň'
  },
  {
    id: 'active',
    label: 'Aktívnejší plán',
    title: 'Viac výjazdov a viac miest počas pobytu',
    description: 'Každý druhý deň nový bod programu, viac jázd a vyšší tlak na dennú logistiku.',
    highlights: ['Budva, Kotor, Perast, Sveti Stefan, Lovćen/Cetinje', 'Ranné odchody a neskoršie návraty', 'Vyššie palivo a viac obedov mimo apartmánu'],
    price: '72–95 EUR / osoba / deň'
  }
];

export const itineraryDays = [
  {
    id: 'day-1',
    label: '18. júl',
    title: 'Prílet a usadenie',
    type: 'Presun',
    estimatedCost: 'nižší deň',
    description: 'Prílet do Podgorice, presun do Budvy/Jaz, check-in a pokojný začiatok bez tlaku na výkon.',
    agenda: ['Presun z letiska', 'Nákup základných potravín', 'Večerný oddych na apartmáne'],
    notes: ['Neriešiť výlety v deň príletu', 'Vhodný deň na adaptáciu a logistiku']
  },
  {
    id: 'day-2',
    label: '19. júl',
    title: 'Jaz Beach oddych',
    type: 'Pláž',
    estimatedCost: 'stredný deň',
    description: 'Prvý plný deň je vyhradený na kúpanie a vypnutie, aby nebol pobyt od štartu prehustený.',
    agenda: ['Jaz Beach', 'Neskorý obed', 'Večer prechádzka alebo terasa'],
    notes: ['Dobré na štart dovolenky', 'Môže zostať ako budget deň']
  },
  {
    id: 'day-3',
    label: '20. júl',
    title: 'Budva a Mogren',
    type: 'Mesto + pláž',
    estimatedCost: 'stredný deň',
    description: 'Kombinácia starej Budvy, kávy a ľahkého popoludňajšieho kúpania.',
    agenda: ['Budva Old Town', 'Obed v meste', 'Mogren Beach'],
    notes: ['Fajn kompromis medzi programom a oddychom', 'Vhodné aj do aktívnejšej verzie']
  },
  {
    id: 'day-4',
    label: '21. júl',
    title: 'Trsteno alebo voľno',
    type: 'Pláž / buffer',
    estimatedCost: 'nižší deň',
    description: 'Voľnejší deň na regeneráciu alebo kratší presun na pokojnejšiu pláž.',
    agenda: ['Trsteno Beach', 'Návrat skôr popoludní', 'Večera na apartmáne'],
    notes: ['Výborný deň pre budget režim', 'Dá sa použiť aj ako rezerva na počasie']
  },
  {
    id: 'day-5',
    label: '22. júl',
    title: 'Kotor a Perast',
    type: 'Výlet',
    estimatedCost: 'vyšší deň',
    description: 'Najsilnejší historicko-scenický výjazd, ktorý stojí za celodenný plán.',
    agenda: ['Presun do Kotora', 'Staré mesto a výhľady', 'Perast cestou späť'],
    notes: ['Treba vyraziť skôr', 'Počítať s parkovaním a obedom mimo apartmánu']
  },
  {
    id: 'day-6',
    label: '23. júl',
    title: 'Voľný deň pri mori',
    type: 'Oddych',
    estimatedCost: 'nižší deň',
    description: 'Buffer deň určený na vydýchnutie alebo zopakovanie obľúbenej pláže.',
    agenda: ['Neskoré raňajky', 'More podľa nálady', 'Oddych bez pevného programu'],
    notes: ['Strategicky dôležitý deň', 'Pomáha udržať celú dovolenku príjemnú']
  },
  {
    id: 'day-7',
    label: '24. júl',
    title: 'Sveti Stefan',
    type: 'Scénický výjazd',
    estimatedCost: 'stredný deň',
    description: 'Scénická jazda po pobreží a fotogenický deň s ľahším programom.',
    agenda: ['Výhľady na Sveti Stefan', 'Obed pri mori', 'Návrat podvečer'],
    notes: ['Výborné pre rodinné fotky', 'V budget verzii sa dá skrátiť']
  },
  {
    id: 'day-8',
    label: '25. júl',
    title: 'Lovćen alebo Cetinje',
    type: 'Hory',
    estimatedCost: 'vyšší deň',
    description: 'Horský kontrast k plážovým dňom s panorámami a chladnejším vzduchom.',
    agenda: ['Ranný odchod', 'Panoramatické zastávky', 'Návrat večer'],
    notes: ['Vhodné skôr do pôvodnej a aktívnej verzie', 'Treba rátať s jazdou serpentínami']
  },
  {
    id: 'day-9',
    label: '26. júl',
    title: 'Budva podľa nálady',
    type: 'Flex deň',
    estimatedCost: 'stredný deň',
    description: 'Voľný deň na improvizáciu: shopping, káva, pláž alebo opakovanie top miesta.',
    agenda: ['Centrum Budvy', 'Káva / nákupy', 'More podľa energie'],
    notes: ['Dobré miesto na prispôsobenie plánu skupine', 'Necháva priestor na konsenzus rodiny']
  },
  {
    id: 'day-10',
    label: '27. júl',
    title: 'Posledný plný deň',
    type: 'Pláž',
    estimatedCost: 'stredný deň',
    description: 'Finálne kúpanie a pokojný záver bez komplikovanej logistiky.',
    agenda: ['Obľúbená pláž', 'Spoločná večera', 'Pomalé balenie'],
    notes: ['Nenechať na tento deň veľký výlet', 'Cieľom je odísť bez stresu']
  },
  {
    id: 'day-11',
    label: '28. júl',
    title: 'Odchod',
    type: 'Presun',
    estimatedCost: 'nižší deň',
    description: 'Check-out, presun na letisko a návrat domov.',
    agenda: ['Skorší check-out', 'Tankovanie a odovzdanie auta', 'Letisko Podgorica'],
    notes: ['Nechať si rezervu na cestu', 'Nepreťažovať ráno ďalšími aktivitami']
  }
];

export const points = [
  { name: 'Apartmani Andrea-jaz', coords: [42.3008, 18.8152], color: '#01696f', description: 'Základňa pobytu pri Jaz/Budva.' },
  { name: 'Jaz Beach', coords: [42.2887, 18.8004], color: '#437a22', description: 'Hlavná pláž na oddychové dni.' },
  { name: 'Trsteno Beach', coords: [42.2734, 18.7897], color: '#437a22', description: 'Pokojnejšia plážová alternatíva.' },
  { name: 'Mogren Beach', coords: [42.2747, 18.8313], color: '#437a22', description: 'Pláž pri kombinácii s Budvou.' },
  { name: 'Budva Old Town', coords: [42.2781, 18.8376], color: '#964219', description: 'Historické centrum a večerné prechádzky.' },
  { name: 'Sveti Stefan', coords: [42.2572, 18.8943], color: '#964219', description: 'Scénický pobrežný bod.' },
  { name: 'Kotor Old Town', coords: [42.4247, 18.7712], color: '#964219', description: 'Silný celodenný výlet.' },
  { name: 'Perast', coords: [42.4865, 18.699], color: '#964219', description: 'Kľudnejší doplnok ku Kotoru.' },
  { name: 'Lovćen', coords: [42.3998, 18.839], color: '#964219', description: 'Panorámy a horský deň.' },
  { name: 'Podgorica Airport', coords: [42.3594, 19.2519], color: '#964219', description: 'Prílet a odlet.' }
];
