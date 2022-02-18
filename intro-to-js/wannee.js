function askMyName() {
    const name = prompt("Please Enter Your Name"); // เรียกใช้คำสั่ง prompt เพื่อถามชื่อ https://www.w3schools.com/jsref/met_win_prompt.asp

    if (name != null) {
        document.getElementById("askMyName").innerHTML = "My name is " + name;
    }
}

function helloWorld() {
    const h1message = document.getElementById("askMyName").innerHTML // ใช้คำสั่ง document.getElementById เหมือนใน askMyName เพื่อเอาข้อความใน h1 มาใส่
    alert(h1message + 'ถ้ารีบแซงไปก่อนเลย')
}

function calAge() {
    const yearOfBirth = Number(prompt("Please enter your year of birth in A.D"));

    if (isNaN(yearOfBirth) || (yearOfBirth == 0) || (yearOfBirth == 1)) {
        calAge();
    } else {
        const age = 2022 - yearOfBirth;
        alert(`ยินดีด้วย คุณอยู่ในประเทศนี้มา ${age} ปีแล้ว`);
    }
}

function loadProfile() {
    const name = "Wannee Buason"
    const province = "Bangkok"
    document.getElementById("my-name").innerHTML = name;
    document.getElementById("my-province").innerHTML = province;
}