function getPrices(){
    fetch("http://localhost:3004/summerFruits")
    .then(res => res.json())
    .then(data => {

        document.getElementById('banana').innerHTML = data.banana
        document.getElementById('watermelon').innerHTML = data.watermelon
        document.getElementById('passionfruit').innerHTML = data.passionfruit
        document.getElementById('peach').innerHTML = data.peach

    })

}

const discount = () => {
    event.preventDefault()
    let ans = document.getElementById('coupon').value
    let obj = {
        "coupon" : ans
    }
    let price = document.getElementById(`${ans}`).innerText
    fetch("http://localhost:3004/discount" , {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    }).then(res => {
        if (res.status == 200){
            document.getElementById(`${ans}`).innerHTML = Math.ceil(price * 0.7)
            res.json().then(data => alert(data.message))
        }
        else if (res.status == 401){
            res.json().then(data => alert(data.message))
        }

    })


}


getPrices()

let btn = document.getElementById('check')
btn.addEventListener('click' , discount)