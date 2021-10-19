const fs = require('fs');

let data = fs.readFileSync('colors.json', (err, data) => {
    if(err){
        throw err;
    }
});

//1.ora
console.log(`A nyers adatok: ${data}`);

console.log(data); //kiolvasás soran ezek nyersek valojaban

let colors = JSON.parse(data); //itt már a kíírás JSON
console.log(colors); 

console.log(`a JSON file ${colors.length} elemet tartalmaz.`); //hány tömb elem van

//tömb bejárás
console.log("alap bejárás azaz for-os");
for(color of colors){
    console.log(`${color.name} (${color.code})`);
}

console.log("forEach-es bejárás");
colors.forEach(szin => console.log(`\t${szin.name}`));

//tomb bovites
colors.push({'name': 'Black', 'code':'#000000'});
console.log(`a tömböm ${colors.length} elemet tartalmaz.`); 

colors.forEach(szin => console.log(`\t${szin.name}`));



colors.push({'name':'white', 'code':'#fffffff'});
console.log(`a tömböm ${colors.length} elemet tartalmaz.`); 

colors.forEach(szin => console.log(`\t${szin.name}`));

//elem kivevése
const kiveszem = colors.pop(); //utolso elemet kiveszi azaz kitorli
console.log("Az utolso elem:");
console.log(kiveszem);
console.log("A tömb elemeinek száma a kivétel után: "+colors.length);


 //tömbben elem keresése findIndex
console.log("Adott elem keresése");
const index = colors.findIndex(szin => szin!= null && szin.name === 'Ivory');
console.log("Az Ivory szín indexe: "+index);

//tömbben kereés find
console.log("Az adott szín megkeresése és kimásolása");
const keresett = colors.find(szin => szin != null && szin.code === '#000000');
console.log(keresett);

//tömbből törlés elemet
delete colors[2]; //2 indexu elem törlése, az a harmadik ugy mert 0,1,2
console.log(colors);
console.log("az elemek a törölt tömbben");
for(color of colors){
    if(color != null)
        console.log(`${color.name} (${color.code})`);
}


//2. ora
console.log("uj felepitesu tömb kinyerése");
let i=0;
const szinTomb = colors.map(szin => ({"cid":i++, "cName":szin.name}));
console.log(szinTomb);

szinTomb.push(({"cId":4, "cName":"Purple"}));
szinTomb.push(({"cId":5, "cName":"Áfonyakék"}));
szinTomb.push(({"cId":6, "cName":"Beige"}));

console.log("Rendezzünk rosszan, elso:");
const rendezett = szinTomb.sort((a,b) => a.Cname-b.Cname); //ha sringeken akarunk akkor nem fogja elvégezni mert a Stringeken nem lehet kivonással
console.log(rendezett);



console.log("Rendezzünk helyesen, elso:"); //bonyolult dolgok is lehetnek az if-ben
const rendezett1 = szinTomb.sort((a,b) => {
    if(a.cName < b.cName) return -1; //azt jelenti h jo a  sorrend
    if(a.cName > b.cName) return 1; //nem jo a sorrend, cserélni kell
    return 0; //megeggyezik a két elem
});
console.log(rendezett1);


console.log("Rendezzük, masodik:");
const rendezett2 = szinTomb.sort((a,b) =>  a.cName.localeCompare(b.cName));
console.log(rendezett2);


//filter = egy adott elemet egyik tömbből kiszedjen egy masik tömbbe
console.log("Adott tulajdonságu elemek kiszűrése első"); //azokat az elemeket tudjuk amelyekre egy logikai feltétel igaz
const kiszurt1 = szinTomb.filter((szin) => true); //true = mindegyiket
console.log(kiszurt1);

console.log("----\nszűrés");

console.log("Adott tulajdonságu elemek kiszűrése második"); //azokat az elemeket tudjuk amelyekre egy logikai feltétel igaz
const kiszurt2 = szinTomb.filter((szin) => szin.cId > 3);
console.log(kiszurt2);

console.log("----\n");

console.log("szűrés szövegre"); //regex keszítés
let regex = /^B\w*/g;
const kiszurt3 = szinTomb.filter((szin) =>  {
    if()
    return szin != null && regex.test(szin.cName);
}); 
console.log(kiszurt3);


/* 
2.ora osszegzés--
filter
some //nem vesszuk még
map = egy uj JSON tömb kinyerését teszi lehetové
sort
reguláris kifejezések


regex----
test
split
replace
match azokat szedi ki amelyeket egy halmazba megtalál


1.ora összegzés--
find
findIndex
pop
JSON-parse=nyersből csinal elemet
length
push
for(elem of sokasag)
sokasag.forEach(elem => fuggveny);
*/

