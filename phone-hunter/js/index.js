



const loadAllPhones = async(status, searchText) => {
    // console.log(searchText);

//spinner not working... need to check .......for the innerHTML null string...................

    document.getElementById('spinner').style.display = 'none';

    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    // .then(res => res.json())
    // .then(data => console.log(data))

    // const response = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    // const data = await response.json();
    // console.log(data.data);

    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText?searchText:'Samsung'}`);
    const data = await response.json();
    console.log(data);

    if(status){
        displayAllPhone(data.data)
    }
    else{
        displayAllPhone(data.data.slice(0, 6))
    }
//    displayAllPhone(data.data.slice(0, 6))
//    console.log(status);

}

const displayAllPhone = (phones) => {
    // document.getElementById('phones-container').innerHTML ="";
    // const searchText = document.getElementById('search-box').value;


    const phoneContainer = document.getElementById('phones-container');
    // for(phone of phones){
    //     console.log(phone)
    // }
    phones.forEach((phone) => {
        const {brand, image, slug } = phone;

        // if(searchText == "" || searchText !== brand){
        // if(searchText == ""){
        //     alert ('pls provide appropriate model')
        //     return;
        // }



        const div=document.createElement('div');
        div.innerHTML= `
        <div class="card m-2 bg-base-100 w-96 shadow-xl">
  <figure class="px-10 pt-10">
    <img
      src=${image}
      alt="Shoes"
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${brand}</h2>
    <p>${slug}</p>
    <div class="card-actions">
   

      <button onclick="phoneDetails('${slug}')" class="btn btn-primary">Show Details</button>
    </div>
  </div>
</div>
`
        phoneContainer.appendChild(div);
    })
}


const handleShowAll = () => {
    loadAllPhones(true)
    // document.getElementById('phone-container').innerHTML = "";

}



const handleSearch = () => {
document.getElementById('spinner').style.display = 'block';
const searchText = document.getElementById('search-box').value;

//error handling

document.getElementById('phones-container').innerHTML = "";
const phoneContainer = document.getElementById('phones-container');
    // for(phone of phones){
    //     console.log(phone)
    // }
//     phones.forEach((phone) => {
//         const {brand, image, slug } = phone;})
// if(searchText == "" || searchText !== brand){
//     alert ('pls provide appropriate model')
//     return;
// }

 setTimeout(function (){
    loadAllPhones(false, searchText)
 },1000)

 // Making the phone image blank
 document.getElementById('phones-container').innerHTML = "";
}


// need to think about slugs... 
const phoneDetails = async(slugs) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/phone/${slugs}`);
    const data = await response.json();
    console.log(data.data);

    const { brand, image, slug} = data.data;

    const modalContainer = document.getElementById('modal-container');

    modalContainer.innerHTML = `
    <dialog id="my_modal_1" class="modal">
        <div class="modal-box">
          <h3 class="text-lg font-bold">${brand}</h3>
          <p class="py-4">Press ESC key or click the button below to close</p>
          <div class="modal-action">
            <form method="dialog">
              <!-- if there is a button in form, it will close the modal -->
              <button class="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    `

    my_modal_1.showModal();

}

loadAllPhones(false, 'iphone');


