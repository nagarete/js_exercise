const a = `Abiu
Açaí
Acerola
Akebi
Ackee
African Cherry Orange
American Mayapple
Apple
Apricot
Araza
Avocado
Banana
Bilberry
Blackberry
Blackcurrant
Black sapote
Blueberry
Boysenberry
Breadfruit
Buddha's hand (fingered citron)
Cactus pear
Canistel
Cashew
Cempedak
Cherimoya (Custard Apple)
Cherry
Chico fruit
Cloudberry
Coco De Mer
Coconut
Crab apple
Cranberry
Currant
Damson
Date
Dragonfruit (or Pitaya)
Durian
Egg Fruit
Elderberry
Feijoa
Fig
Finger Lime (or Caviar Lime)
Goji berry
Gooseberry
Grape
Raisin
Grapefruit
Grewia asiatica (phalsa or falsa)
Guava
Hala Fruit
Honeyberry
Huckleberry
Jabuticaba (Plinia)
Jackfruit
Jambul
Japanese plum
Jostaberry
Jujube
Juniper berry
Kaffir Lime
Kiwano (horned melon)
Kiwifruit
Kumquat
Lemon
Lime
Loganberry
Longan
Loquat
Lulo
Lychee
Magellan Barberry
Mamey Apple
Mamey Sapote
Mango
Mangosteen
Marionberry
Melon
Cantaloupe
Galia melon
Honeydew
Mouse melon
Musk melon
Watermelon
Miracle fruit
Momordica fruit
Monstera deliciosa
Mulberry
Nance
Nectarine
Orange
Blood orange
Clementine
Mandarine
Tangerine
Papaya
Passionfruit
Pawpaw
Peach
Pear
Persimmon
Plantain
Plum
Prune (dried plum)
Pineapple
Pineberry
Plumcot (or Pluot)
Pomegranate
Pomelo
Purple mangosteen
Quince
Raspberry
Salmonberry
Rambutan (or Mamin Chino)
Redcurrant
Rose apple
Salal berry
Salak
Sapodilla
Sapote
Satsuma
Shine Muscat or Vitis Vinifera
Sloe or Hawthorn Berry
Soursop
Star apple
Star fruit
Strawberry
Surinam cherry
Tamarillo
Tamarind
Tangelo
Tayberry
Ugli fruit
White currant
White sapote
Ximenia
Yuzu`;

const newA = a.split("\n");

let fruits = new Set();
while (fruits.size !== newA.length) {
  let i = Math.floor(Math.random() * newA.length);
  if (!fruits.has(newA[i])) fruits.add(newA[i]);
}

let newFruits = [];
for (let element of fruits) newFruits.push(element);

const ascendingFruits = newFruits.sort();

const descendingFruits = newFruits.sort((a, b) => {
  if (a < b) return 1;
  if (a > b) return -1;
  else return 0;
});

//sorting by length
// const descendingFruitsByLength = newFruits.sort((a, b) => b.length-a.length);

console.log(descendingFruits);
