const button = document.getElementById("theButton")
const data = document.getElementById("info")

const cars = [
 { "make":"Porsche", "model":"911S" },
 { "make":"Mercedes-Benz", "model":"220SE" },
 { "make":"Jaguar","model": "Mark VII" }
];

button.onclick= function(){
    fetch("http://127.0.0.1:5000/receiver", 
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
        body:JSON.stringify(cars)}).then(res=>{
                if(res.ok){
                    console.log("here1")
                    return res.json()
                }else{
                    console.log("here2")
                    alert("something is wrong")
                }
            }).then(jsonResponse=>{
                // Log the response data in the console
                console.log("here3")
                console.log(jsonResponse)
                text = JSON.stringify (jsonResponse)
                alert(text)
            } 
            ).catch((err) => console.error(err));
            
           }