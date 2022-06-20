document.querySelector('button').addEventListener('click',apiRequest)



async function apiRequest(){
const stateName = document.querySelector('input').value
try{
     const response = await fetch(`https://usa-states-api.herokuapp.com/api/${stateName}`)
     const data = await response.json()
    console.log(data)
    document.getElementById('capitalname').innerText = data.Capital
    document.getElementById('abbreviationname').innerText = data.Abbreviation
    document.getElementById('regionname').innerText = data.Region
    document.getElementById('flagimage').src = data.image

    } catch (error) { 
        console.log(error)
    }
}
