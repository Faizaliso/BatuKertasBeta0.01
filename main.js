//---4. MENYIMPAN NILAI
let [botScore, userScore] = [0, 0]
//---2. OBJECT PILIHAN KETEMU PILIHAN JADINYA APA
let result_ref = document.getElementById("result")

let optionObject = {
    'batu': {
        'batu': 'ulang',
        'kertas': 'menang',
        'gunting': 'kalah'
    },
    'kertas': {
        'batu': 'menang',
        'kertas': 'ulang',
        'gunting': 'menang'
    },
    'gunting': {
        'batu': 'kalah',
        'kertas': 'menang',
        'gunting': 'ulang'
    }
}

//---1. OUTPUT USER & BOT
function checker(input) {
    let option = ['batu', 'kertas', 'gunting']
    let bot = Math.floor(Math.random() * 3)

    document.getElementById("botChoice").innerHTML =
        `Bot milih <span>${option[bot]}</span>`;
    document.getElementById("userChoice").innerHTML =
        `Kamu milih <span>${input}</span>`;

    //---3. BOT MENANG KALAH

    let botOption = option[bot]
    switch (optionObject[input][botOption]) {
        case 'menang':
            //coloring text
            result_ref.style.cssText = "background-color: #cefdce; color : #689f38; corner-radius: 20px";
            result_ref.innerHTML = "SELAMAT KAMU MENANG";
            //nambah nilai buat disimpan
            userScore++
            break;
        case 'kalah':
            result_ref.style.cssText = "background-color: #ffdde0; color : #d32f2f; corner-radius: 20px";
            result_ref.innerHTML = "KALAH KAMU AHAHA";
            botScore++
            break;
        default:
            result_ref.style.cssText = "background-color: #e5e5e5; color : #808080; corner-radius: 12px";
            result_ref.innerHTML = "ULANG GAN";
            break;
    }

    //---5. PRINT SCORE
    document.getElementById("botScore").innerHTML = botScore;
    document.getElementById("userScore").innerHTML = userScore;


}