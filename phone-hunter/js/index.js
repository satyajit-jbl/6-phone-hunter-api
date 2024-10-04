



const loadAllPhones = async() => {
    console.log('wow .. 3 sec gone  ')
    document.getElementById('spinner').style.display = 'none';

    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    // .then(res => res.json())
    // .then(data => console.log(data))

    // const response = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    // const data = await response.json();
    // console.log(data.data);

    const response = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    const data = await response.json();
   displayAllPhone(data.data.slice(0-6));

}

const displayAllPhone = (phone) => {
    console.log(phone)
}


const handleShowAll = () => {
    console.log('hello')
}



const handleSearch = () => {
document.getElementById('spinner').style.display = 'block';
 
 setTimeout(function (){
    loadAllPhones()
 },1000)
}

loadAllPhones();