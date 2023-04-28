// JavaScript calculator
// coded by: Gábor Parlag • pebbleperspective@gmail.com

let display = document.getElementById("screen") // Főképernyő elem változóba mentése
let displayValue = 0 // Főképernyő elem kezdő értéke
let subSum = document.getElementById("subSum") // Kisképernyő elem ahol a műveleteket menti
let subSumValue = 0
let subEqual = document.getElementById("subEqual") // Kisképernyő elem ahol a részösszeget mutatja
let subEqualValue = 0
let sum = null // Végeredmény - nincs értéke, mert a gomboknál új kalkulációhoz
// szükség lesz rá megvizsgálni, hogy üres-e vagy van értéke

// Törlés
function clearDisplay() { // Minden változót nulláz, üressé tesz
    displayValue = 0
    display.innerHTML = 0
    subSumValue = 0
    subSum.innerHTML = "" // Kitörli a művelet kijelzőt
    subEqualValue = 0
    subEqual.innerHTML = 0
    sum = null
    console.log("Clear megnyomva")
}

// 0-ás gomb
function num0() {

    if (sum != null) {
        console.log("sum nem üres")
        displayValue = 1
        display.innerHTML = 1
        subSumValue = 0
        subSum.innerHTML = ""
        subEqualValue = 0
        subEqual.innerHTML = 0
        sum = null
    } else {
        console.log(sum)

        if (display.innerHTML == "0") { // Ha a kijelzőn már eleve csak egy 0 van,
            displayValue = 0 // akkor marad az
            display.innerHTML = 0
            console.log("Ez már 0!")
        } else {
            displayValue = Number(display.innerHTML += "0")
            display.innerHTML = displayValue
            console.log(displayValue)
        }
    }
}

// 1-es gomb
function num1() {
    if (sum != null) { // Megvizsgálja, hogy a végeredmény üres-e
        console.log("sum nem üres") // Ha nem üres, akkor azt jelenti, hogy már volt végeredmény
        displayValue = 1 // meghívva, tehát mindent törölni kell, hogy az 1-es egyedüli
        display.innerHTML = 1 // számként megjelenjen, ne hozzáírva egy másik számhoz
        subSumValue = 0
        subSum.innerHTML = ""
        subEqualValue = 0
        subEqual.innerHTML = 0
        sum = null // Kiüríti a végeredmény változót
    } else {
        console.log(sum)
        if (display.innerHTML == "0") { // Ez az alaphelyzet, törlés után, vagy frissítésnél
            displayValue = 1 // Leváltja a kezdő 0-t 1-re
            display.innerHTML = 1
        } else {
            displayValue = Number(display.innerHTML += "1") // Meghívja a kijelzőn lévő számot és 
            display.innerHTML = displayValue // (ha az nem 0) mellérakja az 1-est
            console.log(displayValue)
        }
    }
}

// 2-es gomb
function num2() {
    if (sum != null) {
        console.log("sum nem üres")
        displayValue = 2
        display.innerHTML = 2
        subSumValue = 0
        subSum.innerHTML = ""
        subEqualValue = 0
        subEqual.innerHTML = 0
        sum = null
    } else {
        console.log(sum)

        if (display.innerHTML == "0") {
            displayValue = 2
            display.innerHTML = 2
        } else {
            displayValue = Number(display.innerHTML += "2")
            display.innerHTML = displayValue
            console.log(displayValue)
        }
    }
}

// 3-s gomb
function num3() {
    if (sum != null) {
        console.log("sum nem üres")
        displayValue = 3
        display.innerHTML = 3
        subSumValue = 0
        subSum.innerHTML = ""
        subEqualValue = 0
        subEqual.innerHTML = 0
        sum = null
    } else {
        console.log(sum)

        if (display.innerHTML == "0") {
            displayValue = 3
            display.innerHTML = 3
        } else {
            displayValue = Number(display.innerHTML += "3")
            display.innerHTML = displayValue
            console.log(displayValue)
        }
    }
}

// 4-es gomb
function num4() {
    if (sum != null) {
        console.log("sum nem üres")
        displayValue = 4
        display.innerHTML = 4
        subSumValue = 0
        subSum.innerHTML = ""
        subEqualValue = 0
        subEqual.innerHTML = 0
        sum = null
    } else {
        console.log(sum)

        if (display.innerHTML == "0") {
            displayValue = 4
            display.innerHTML = 4
        } else {
            displayValue = Number(display.innerHTML += "4")
            display.innerHTML = displayValue
            console.log(displayValue)
        }
    }
}

// 5-ös gomb
function num5() {
    if (sum != null) {
        console.log("sum nem üres")
        displayValue = 5
        display.innerHTML = 5
        subSumValue = 0
        subSum.innerHTML = ""
        subEqualValue = 0
        subEqual.innerHTML = 0
        sum = null
    } else {
        console.log(sum)

        if (display.innerHTML == "0") {
            displayValue = 5
            display.innerHTML = 5
        } else {
            displayValue = Number(display.innerHTML += "5")
            display.innerHTML = displayValue
            console.log(displayValue)
        }
    }
}

// 6-os gomb
function num6() {
    if (sum != null) {
        console.log("sum nem üres")
        displayValue = 6
        display.innerHTML = 6
        subSumValue = 0
        subSum.innerHTML = ""
        subEqualValue = 0
        subEqual.innerHTML = 0
        sum = null
    } else {
        console.log(sum)

        if (display.innerHTML == "0") {
            displayValue = 6
            display.innerHTML = 6
        } else {
            displayValue = Number(display.innerHTML += "6")
            display.innerHTML = displayValue
            console.log(displayValue)
        }
    }
}

// 7-es gomb
function num7() {
    if (sum != null) {
        console.log("sum nem üres")
        displayValue = 7
        display.innerHTML = 7
        subSumValue = 0
        subSum.innerHTML = ""
        subEqualValue = 0
        subEqual.innerHTML = 0
        sum = null
    } else {
        console.log(sum)

        if (display.innerHTML == "0") {
            displayValue = 7
            display.innerHTML = 7
        } else {
            displayValue = Number(display.innerHTML += "7")
            display.innerHTML = displayValue
            console.log(displayValue)
        }
    }
}

// 8-as gomb
function num8() {
    if (sum != null) {
        console.log("sum nem üres")
        displayValue = 8
        display.innerHTML = 8
        subSumValue = 0
        subSum.innerHTML = ""
        subEqualValue = 0
        subEqual.innerHTML = 0
        sum = null
    } else {
        console.log(sum)

        if (display.innerHTML == "0") {
            displayValue = 8
            display.innerHTML = 8
        } else {
            displayValue = Number(display.innerHTML += "8")
            display.innerHTML = displayValue
            console.log(displayValue)
        }
    }
}

// 9-es gomb
function num9() {
    if (sum != null) {
        console.log("sum nem üres")
        displayValue = 9
        display.innerHTML = 9
        subSumValue = 0
        subSum.innerHTML = ""
        subEqualValue = 0
        subEqual.innerHTML = 0
        sum = null
    } else {
        console.log(sum)

        if (display.innerHTML == "0") {
            displayValue = 9
            display.innerHTML = 9
        } else {
            displayValue = Number(display.innerHTML += "9")
            display.innerHTML = displayValue
            console.log(displayValue)
        }
    }
}

// Összeadás
function add() {
    console.log("Előző memória: " + subEqualValue)

    // Meg kell vizsgálni, hogy mi volt az utolsó művelet, mert alap állásban az előző műveletet akarja
    // végrehajtani pl ha előzőleg volt egy kivonás, akkor a gombra nyomva az utolsó eltárolt számot
    // kijelzőn (displayValue), amit mi hozzá akarunk adni, ki akarja majd vonni.
    // Az utolsó műveletet látjuk az részösszeg mögött a kiskijelző a jobb oldalt (subEqual) - ezt
    // toljuk hozzá bal oldalon, a számolási folyamathoz *** (Talán ezt ki is lehetne törölni onnan!!)
    let lastChar = subEqual.innerHTML // Változóba tesszük a részeredmény elemet
    let lastAction = lastChar.charAt(lastChar.length - 1) // Megnézzük, hogy az utolsó karakte mi
    console.log("Utolsó művelet: " + lastAction) // pl 83- vagy 27+

    subSum.innerHTML += displayValue + "+" // Kiiratjuk a műveletekhez balra
    subEqual.innerHTML = subEqualValue + "+" // Kiiratjuk a részeredményt
    display.innerHTML = "0" // Lenullázzuk a főkijelzőt

    if (lastAction == "+") { // Ha az utolsó művelet (a subEqual
        console.log("Összeadás volt az utolsó művelet") // utolsó karaktere) +, akkor hozzáadjuk
        subEqualValue = subEqualValue + Number(displayValue) // a részeredményhez a kijelzőn levő
        subEqual.innerHTML = subEqualValue + "+" // számot és aszerint változtatjuk
        // a kiírt részeredményt
    } else if (lastAction == "-") {
        console.log("Kivonás volt az utolsó művelet") // Ha kivonás volt azt utolsó eredmény,
        subEqualValue = subEqualValue - Number(displayValue) // kilogikáztam, hogy ez újabb
        subEqual.innerHTML = subEqualValue + "+" // kivonással jön ki a matek (:

    } else if (lastAction == "*") { // Itt lesz majd a többi művelet
        console.log("Szorzás volt az utolsó művelet") // Kompenzációja
        subEqualValue = subEqualValue * Number(displayValue) // művelet - simán csak összeszoroz
        subEqual.innerHTML = subEqualValue + "+"
    } else if (lastAction == "/") {
        console.log("Osztás volt az utolsó művelet")
    } else { // Ez az ág arra kell, ha nem volt előző
        subEqualValue = subEqualValue + Number(displayValue) // művelet - simán csak összead
        subEqual.innerHTML = subEqualValue + "+"
        console.log("Ez az első művelet")
    }
    console.log("Most elmentve: " + subEqualValue)
    console.log("A + megnyomva")
    console.log("Ez lett beütve: " + displayValue)
    console.log("Ez a részösszeg: " + subEqualValue)
}

// Kivonás
function remove() {
    console.log("------------------")
    console.log("Előző memória: " + subEqualValue)

    let lastChar = subEqual.innerHTML // Ugyanúgy vizsgáljuk az előző műveletet...
    let lastAction = lastChar.charAt(lastChar.length - 1)
    console.log("Utolsó művelet: " + lastAction)

    if (lastAction == "+") { // ...és kompenzálunk
        console.log("Összeadás volt az utolsó művelet")
        subEqualValue = subEqualValue + Number(displayValue)
        subEqual.innerHTML = subEqualValue + "+"
    } else if (lastAction == "-") {
        console.log("Kivonás volt az utolsó művelet") // Ez az alapvető kivonási művelet

        // Itt valami volt, hogy bizonyos értékeknél összezavarodott és negatívolta a kivonást, azaz
        // hozzáadta. Ezzel a vizsgálattal küszöböltem ki. 0 részeredménynél fel van cserélve a
        // a kivonandó a részeredménnyel. ... Nem tudom...
        if (subEqualValue == 0) {
            subEqualValue = Number(displayValue) - subEqualValue
            console.log("subEqualValue = 0")
            console.log("Most elmenve: " + subEqualValue)
        } else {
            subEqualValue = subEqualValue - Number(displayValue)
            console.log("subEqualValue != 0")
            console.log("Most elmentve: " + subEqualValue)
        }
    } else if (lastAction == "*") { // Itt lesz majd a többi műveleti
        console.log("Szorzás volt az utolsó művelet") // kompenzáció
        subEqualValue = subEqualValue * Number(displayValue) // művelet - simán csak összeszoroz
        subEqual.innerHTML = subEqualValue + "*"
    } else if (lastAction == "/") {
        console.log("Osztás volt az utolsó művelet")
    } else { // Ez az alapeset, ha nem volt előtte
        console.log("Ez az első művelet") // művelet
        if (subEqualValue == 0) {
            subEqualValue = Number(displayValue) - subEqualValue
            console.log("subEqualValue = 0")
            console.log("Most elmenve: " + subEqualValue)
        } else {
            subEqualValue = subEqualValue - Number(displayValue)
            console.log("subEqualValue != 0")
            console.log("Most elmentve: " + subEqualValue)
        }
    }

    subSum.innerHTML += displayValue + "-"
    subEqual.innerHTML = subEqualValue + "-"
    display.innerHTML = "0"
    console.log("A - megnyomva")
    console.log("Ez lett beütve: " + displayValue)
    console.log("Ez a részösszeg: " + subEqualValue)
}

function multiply() {
    console.log("Szorzás gomb megnyomva")
    console.log("Előző memória: " + subEqualValue)
    let lastChar = subEqual.innerHTML
    let lastAction = lastChar.charAt(lastChar.length - 1)
    console.log("Utolsó művelet: " + lastAction)

    display.innerHTML = "0" // Lenullázzuk a főkijelzőt
    
    if (lastAction == "+") { // Ha az utolsó művelet (a subEqual
        console.log("Összeadás volt az utolsó művelet") // utolsó karaktere) +, akkor hozzáadjuk
        subEqualValue = subEqualValue + Number(displayValue) // a részeredményhez a kijelzőn levő
        subEqual.innerHTML = subEqualValue + "*" // számot és aszerint változtatjuk
        // a kiírt részeredményt
        subSum.innerHTML += displayValue + "*"
    } else if (lastAction == "-") {
        console.log("Kivonás volt az utolsó művelet") // Ha kivonás volt azt utolsó eredmény,
        subEqualValue = subEqualValue - Number(displayValue) // kilogikáztam, hogy újabb
        subEqual.innerHTML = subEqualValue + "*" // kivonással jön ki a matek (:
        subSum.innerHTML += displayValue + "*"
    } else if (lastAction == "*") {
        console.log("Szorzás volt az utolsó művelet")
        subEqualValue = subEqualValue * Number(displayValue)
        subEqual.innerHTML = subEqualValue + "*"
        subSum.innerHTML += displayValue + "*"
    } else if (lastAction == "/") {
        console.log("Osztás volt az utolsó művelet")
    } else {
        subSum.innerHTML += displayValue + "*" // Kiiratjuk a műveletekhez balra
        // 0-val való szorzás logikai hibája miatt meg kell nézni, hogy a részösszegünk 0-e *** pl. első műveletnél
        if (subEqualValue != 0) {
            subEqualValue = subEqualValue * Number(displayValue) // művelet - simán csak összeszoroz
            subEqual.innerHTML = subEqualValue + "*"
            display.innerHTML = "0"
            
            console.log("subEqualValue: " + subEqualValue + " - ez lett elmentve")
        } else {
            // Ha az elmentett vagy kezdő részeredményünk (subEqualValue), akkor nem azzal dolgozunk, hanem átadjuk neki
            // a beütött szorzót (displayValue) és következő műveletnél elvégeztetjük a szorzást, addigra már a subEqualValue nem
            // 0 lesz, így lefuthat az első kondíció
            console.log("Ehhez mit szólsz?")
            subEqual.innerHTML = displayValue + "*"
            subEqualValue = displayValue
        }
    }
    
    console.log("Ez az első művelet")
    console.log("Most elmentve: " + subEqualValue)
    console.log("A * megnyomva")
    console.log("Ez lett beütve: " + displayValue)
    console.log("Ez a részösszeg: " + subEqualValue)
}

// Eredmény (=)
function result() {
    console.log("Eredményt kérek")

    // Itt is meg kell vizsgálni, hogy mi volt az utolsó művelet, visszafelé kell dolgozni, mert
    // nem a szám beírása indítja a számítást, hanem művelet megadása, tehát utólagos. 
    // Ezért ha az eredményt meg akarjuk kapni, meg kell nézni, hogy mi volt az utolsó művelet
    // és azt végrehajtani
    let lastChar = subEqual.innerHTML
    let lastAction = lastChar.charAt(lastChar.length - 1)
    console.log("----------------")
    console.log("Utolsó művelet: " + lastAction)

    if (lastAction == "+") {
        add() // Itt már csak egyszerűen meghívjuk az adott
        display.innerHTML = subEqualValue // műveletet végző függvényt
        sum = subEqualValue // !!Fontos!! Itt adunk értéket a sum változónak, 
        subSumValue = 0 // ami a gombműködéshez kell! És a részeredményt is
        // lenullázzuk
        console.log("----------------")
        console.log("Összeadtam")
        console.log("sum értéke: " + sum)
        // subEqualValue = 0
    } else if (lastAction == "-") {
        remove()
        display.innerHTML = subEqualValue
        sum = subEqualValue
        subSumValue = 0
        console.log("----------------")
        console.log("Kivontam")
    } else if (lastAction == "*") {
        multiply()
        display.innerHTML = subEqualValue
        sum = subEqualValue
        subSumValue = 0
        console.log("----------------")
        console.log("Megszoroztam")
    } else { // Ide jön majd a többi művelet meghívása
        console.log("Nem összeadás / kivonás / szorzás volt az utolsó művelet")
    }
    lastAction = ""
}