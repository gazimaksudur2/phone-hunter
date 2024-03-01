// const val = async fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
const fetchDeploy = async(searchUrl)=>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchUrl}`;
    // await fetch(url)
    // .then(res=>res.json())
    // .then(data=>console.log(data));\
    const res = await fetch(url);
    const json = await res.json();
    const Data = json.data;
    displayPhones(Data);
}

const fetchDep = async(searchUrl)=>{
    const url = `https://openapi.programming-hero.com/api/phone/${searchUrl}`;
    const res = await fetch(url);
    const json = await res.json();
    return json;
}

const searchBtn = getByID('search-btn');
searchBtn.addEventListener('click',()=>{
    const phon = getByID('search-phone');
    const search = phon.value;
    fetchDeploy(search)
});
const showAllBtn = getByID('show-all-btn');
showAllBtn.addEventListener('click',()=>{

});
// fetchDeploy();
// console.log(fetchDeploy());

const displayPhones = (data)=>{
    // console.log('data length is : '+data.length);
    const showAll = getByID('show-all');
    if(data.length > 9){
        // console.log(data);
        data = data.slice(0,9);
        showAll.classList.remove('hidden');
    }else{
        showAll.classList.add('hidden');
    }
    const container = getByID('gadgets');
    container.innerHTML = ``;
    data.forEach(phone=>{
        const phoneFetch = fetchDep(phone.slug)
        console.log(phoneFetch);
        console.log(phone.slug);
        const div = document.createElement('div');
        div.classList = `card w-96 bg-base-100 shadow-xl`;
        div.innerHTML = `
            <figure class="px-10 pt-10">
            <img src=${phone.image} alt="Phones"
            class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">${phone.phone_name}</h2>
                <p>There are many variations of passages of available, but the majority have suffered</p>
                <h3>$999</h3>
                <div class="card-actions">
                <button class="btn btn-primary">Show Details</button>
                </div>
            </div>
        `;
        container.appendChild(div);
    })
}