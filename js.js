const baze = document.getElementById('baze')
const sanya = [
{   
    anchor: "reno-russkiy",
    name: "Рено Русский",
    img: "./рено-русский-карта.jpg",
    power: "ДВИГАТЕЛЬ Л.С : 35",
    ton: "ТОНН : 6.5",
    power_ton: "Л.С/Т : 5.4",
    height: "ВЫСОТА : 2140",
    lenght: "ДЛИНА : 4960",
    width: "ШИРИНА : 1750"
},
{   
    anchor: "ms-1",
    name: "МС-1 (Т-18)",
    img: "./мс-1-карта.jpg",
    power: "ДВИГАТЕЛЬ Л.С : 40",
    ton: "ТОНН : 5.9",
    power_ton: "Л.С/Т : 6.8",
    height: "ВЫСОТА : 2120",
    lenght: "ДЛИНА : 4350",
    width: "ШИРИНА : 1760"
},
{   
    anchor: "t-26",
    name: "Т-26",
    img: "./т-26-карта.jpg",
    power: "ДВИГАТЕЛЬ Л.С : 92",
    ton: "ТОНН : 9.75",
    power_ton: "Л.С/Т : 9.4",
    height: "ВЫСОТА : 2410",
    lenght: "ДЛИНА : 4620",
    width: "ШИРИНА : 2440"
},
{   
    anchor: "t-27",
    name: "Т-27",
    img: "./т-27-карта.jpg",
    power: "ДВИГАТЕЛЬ Л.С : 40",
    ton: "ТОНН : 2.7",
    power_ton: "Л.С/Т : 14.8",
    height: "ВЫСОТА : 1430",
    lenght: "ДЛИНА : 2600",
    width: "ШИРИНА : 1800"
},
{   
    anchor: "bt-5",
    name: "БТ-5",
    img: "./бт-5-карта.jpeg",
    power: "ДВИГАТЕЛЬ Л.С : 400",
    ton: "ТОНН : 11.9",
    power_ton: "Л.С/Т : 33.6",
    height: "ВЫСОТА : 2338",
    lenght: "ДЛИНА : 5800",
    width: "ШИРИНА : 2230"
},
{   
    anchor: "t-37a",
    name: "Т-37А",
    img: "./т-37а-карта.jpg",
    power: "ДВИГАТЕЛЬ Л.С : 40",
    ton: "ТОНН : 3.2",
    power_ton: "Л.С/Т : 12.5",
    height: "ВЫСОТА : 1800",
    lenght: "ДЛИНА : 3700",
    width: "ШИРИНА : 1900"
},
{   
    anchor: "t-28",
    name: "Т-28",
    img: "./т-28-карта.jpeg",
    power: "ДВИГАТЕЛЬ Л.С : 450",
    ton: "ТОНН : 25.4",
    power_ton: "Л.С/Т : 17.7",
    height: "ВЫСОТА : 2620",
    lenght: "ДЛИНА : 7370",
    width: "ШИРИНА : 2870"
},
{   
    anchor: "t-35",
    name: "Т-35",
    img: "./т-35-карта.jpg",
    power: "ДВИГАТЕЛЬ Л.С : 500",
    ton: "ТОНН : 52",
    power_ton: "Л.С/Т : 9.6",
    height: "ВЫСОТА : 3430",
    lenght: "ДЛИНА : 9720",
    width: "ШИРИНА : 3200"
},
{   
    anchor: "bt-7",
    name: "БТ-7",
    img: "./бт-7-карта.jpg",
    power: "ДВИГАТЕЛЬ Л.С : 400",
    ton: "ТОНН : 13.8",
    power_ton: "Л.С/Т : 29.0",
    height: "ВЫСОТА : 2420",
    lenght: "ДЛИНА : 5660",
    width: "ШИРИНА : 2290"
},
{   
    anchor: "t-40",
    name: "Т-40",
    img: "./т-40-карта.jpg",
    power: "ДВИГАТЕЛЬ Л.С : 70",
    ton: "ТОНН : 5.9",
    power_ton: "Л.С/Т : 11.9",
    height: "ВЫСОТА : 1900",
    lenght: "ДЛИНА : 4100",
    width: "ШИРИНА : 2330"
},
{   
    anchor: "t-60",
    name: "Т-60",
    img: "./т-60-карта.jpg",
    power: "ДВИГАТЕЛЬ Л.С : 70",
    ton: "ТОНН : 6.4",
    power_ton: "Л.С/Т : 10.9",
    height: "ВЫСОТА : 1750",
    lenght: "ДЛИНА : 4100",
    width: "ШИРИНА : 2392"
},
{   
    anchor: "t-70",
    name: "Т-70",
    img: "./т-70-карта.png",
    power: "ДВИГАТЕЛЬ Л.С : 140",
    ton: "ТОНН : 10.1",
    power_ton: "Л.С/Т : 13.9",
    height: "ВЫСОТА : 2040",
    lenght: "ДЛИНА : 4285",
    width: "ШИРИНА : 2420"
},
{   
    anchor: "kv-1",
    name: "КВ-1",
    img: "./кв-1-карта.jpg",
    power: "ДВИГАТЕЛЬ Л.С : 600",
    ton: "ТОНН : 47.5",
    power_ton: "Л.С/Т : 12.6",
    height: "ВЫСОТА : 2710",
    lenght: "ДЛИНА : 6675",
    width: "ШИРИНА : 3320"
},
{   
    anchor: "t-34-40",
    name: "Т-34 (образца 1940)",
    img: "./т-34-40-карта.jpg",
    power: "ДВИГАТЕЛЬ Л.С : 500",
    ton: "ТОНН : 30.9",
    power_ton: "Л.С/Т : 16.2",
    height: "ВЫСОТА : 2450",
    lenght: "ДЛИНА : 5920",
    width: "ШИРИНА : 3000"
},
{   
    anchor: "t-34-85",
    name: "Т-34-85",
    img: "./т-34-85-карта.jpg",
    power: "ДВИГАТЕЛЬ Л.С : 500",
    ton: "ТОНН : 32",
    power_ton: "Л.С/Т : 15.6",
    height: "ВЫСОТА : 2720",
    lenght: "ДЛИНА : 8100",
    width: "ШИРИНА : 3000"
},
{   
    anchor: "kv-85",
    name: "КВ-85",
    img: "./кв-85-карта.jpg",
    power: "ДВИГАТЕЛЬ Л.С : 600",
    ton: "ТОНН : 46",
    power_ton: "Л.С/Т : 13.0",
    height: "ВЫСОТА : 2730",
    lenght: "ДЛИНА : 6750",
    width: "ШИРИНА : 3320"
},
{   
    anchor: "is-1",
    name: "ИС-1",
    img: "./ис-1-карта.png",
    power: "ДВИГАТЕЛЬ Л.С : 520",
    ton: "ТОНН : 44",
    power_ton: "Л.С/Т : 11.8",
    height: "ВЫСОТА : 2735",
    lenght: "ДЛИНА : 8560",
    width: "ШИРИНА : 3070"
},
{   
    anchor: "is-2",
    name: "ИС-2",
    img: "./ис-2-карта.jpg",
    power: "ДВИГАТЕЛЬ Л.С : 520",
    ton: "ТОНН : 46",
    power_ton: "Л.С/Т : 11.3",
    height: "ВЫСОТА : 2730",
    lenght: "ДЛИНА : 9830",
    width: "ШИРИНА : 3070"
},
{   
    anchor: "t-44",
    name: "Т-44",
    img: "./т-44-карта.jpg",
    power: "ДВИГАТЕЛЬ Л.С : 520",
    ton: "ТОНН : 31.8",
    power_ton: "Л.С/Т : 16.4",
    height: "ВЫСОТА : 2400",
    lenght: "ДЛИНА : 7650",
    width: "ШИРИНА : 3180"
},
{   
    anchor: "is-3",
    name: "ИС-3",
    img: "./ис-3-карта.jpg",
    power: "ДВИГАТЕЛЬ Л.С : 520",
    ton: "ТОНН : 46.5",
    power_ton: "Л.С/Т : 11.2",
    height: "ВЫСОТА : 2450",
    lenght: "ДЛИНА : 9850",
    width: "ШИРИНА : 3150"
},
{   
    anchor: "t-54",
    name: "Т-54",
    img: "./т-54-карта.jpg",
    power: "ДВИГАТЕЛЬ Л.С : 520",
    ton: "ТОНН : 36",
    power_ton: "Л.С/Т : 14.4",
    height: "ВЫСОТА : 2400",
    lenght: "ДЛИНА : 9000",
    width: "ШИРИНА : 3270"
},
{   
    anchor: "t-10",
    name: "Т-10",
    img: "./т-10-карта.jpg",
    power: "ДВИГАТЕЛЬ Л.С : 750",
    ton: "ТОНН : 50",
    power_ton: "Л.С/Т : 15.0",
    height: "ВЫСОТА : 2480",
    lenght: "ДЛИНА : 10000",
    width: "ШИРИНА : 3380"
},
{   
    anchor: "t-55",
    name: "Т-55",
    img: "./т-55-карта.jpg",
    power: "ДВИГАТЕЛЬ Л.С : 580",
    ton: "ТОНН : 36.5",
    power_ton: "Л.С/Т : 15.9",
    height: "ВЫСОТА : 2350",
    lenght: "ДЛИНА : 9000",
    width: "ШИРИНА : 3270"
},
{   
    anchor: "t-62",
    name: "Т-62",
    img: "./т-62-карта.jpg",
    power: "ДВИГАТЕЛЬ Л.С : 580",
    ton: "ТОНН : 37",
    power_ton: "Л.С/Т : 15.7",
    height: "ВЫСОТА : 2400",
    lenght: "ДЛИНА : 9300",
    width: "ШИРИНА : 3300"
},
{   
    anchor: "t-64",
    name: "Т-64",
    img: "./т-64-карта.jpg",
    power: "ДВИГАТЕЛЬ Л.С : 700",
    ton: "ТОНН : 38.5",
    power_ton: "Л.С/Т : 18.2",
    height: "ВЫСОТА : 2172",
    lenght: "ДЛИНА : 9225",
    width: "ШИРИНА : 3415"
},
{   
    anchor: "t-72",
    name: "Т-72",
    img: "./т-72-карта.jpg",
    power: "ДВИГАТЕЛЬ Л.С : 780",
    ton: "ТОНН : 41.5",
    power_ton: "Л.С/Т : 18.8",
    height: "ВЫСОТА : 2190",
    lenght: "ДЛИНА : 9530",
    width: "ШИРИНА : 3590"
},
{   
    anchor: "t-80",
    name: "Т-80",
    img: "./т-80-карта.jpg",
    power: "ДВИГАТЕЛЬ Л.С : 1250",
    ton: "ТОНН : 46",
    power_ton: "Л.С/Т : 27.2",
    height: "ВЫСОТА : 2200",
    lenght: "ДЛИНА : 9500",
    width: "ШИРИНА : 3500"
},
{   
    anchor: "t-80u",
    name: "Т-80У",
    img: "./т-80у-карта.jpg",
    power: "ДВИГАТЕЛЬ Л.С : 1250",
    ton: "ТОНН : 46",
    power_ton: "Л.С/Т : 27.2",
    height: "ВЫСОТА : 2220",
    lenght: "ДЛИНА : 9650",
    width: "ШИРИНА : 3580"
},
{   
    anchor: "t-90",
    name: "Т-90",
    img: "./т-90-карта.jpg",
    power: "ДВИГАТЕЛЬ Л.С : 840",
    ton: "ТОНН : 46.5",
    power_ton: "Л.С/Т : 18.1",
    height: "ВЫСОТА : 2220",
    lenght: "ДЛИНА : 9530",
    width: "ШИРИНА : 3780"
},
{   
    anchor: "t-90a",
    name: "Т-90А",
    img: "./т-90а-карта.jpg",
    power: "ДВИГАТЕЛЬ Л.С : 1000",
    ton: "ТОНН : 46.5",
    power_ton: "Л.С/Т : 21.5",
    height: "ВЫСОТА : 2230",
    lenght: "ДЛИНА : 9530",
    width: "ШИРИНА : 3780"
}
]

function render(){
    baze.innerHTML=""
    sanya.map((item)=>{
        baze.insertAdjacentHTML('beforeend',` 
            <a href="index3.html#${item.anchor}" class="a">
                <div class="tank-card">
                    <img class="card-img" src="${item.img}">
                    <p class ="kard-name">${item.name}</p>
                    <p class ="card-history">${item.power}</p>
                    <p class ="card-history">${item.ton}</p>
                    <p class ="card-history">${item.power_ton}</p>
                    <p class ="card-history">${item.height}</p>
                    <p class ="card-history">${item.lenght}</p>
                    <p class ="card-history">${item.width}</p>
                </div>
            </a> 
            `)
    })
}

render()
