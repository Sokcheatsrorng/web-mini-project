// script for display 3 advertise card 
let adsDisplay = [
    {
      title : "Advertise1",
      image: "../image/2.png"
    },
    {
      title : "Advertise1",
      image: "../image/1.png"
    },
    {
      title : "Advertise1",
      image: "../image/1.png"
    }
]
let displayAdds = document.querySelector('#displayAdvertiseCard');
adsDisplay.map(item=>{
    displayAdds.innerHTML += `
    <a href="#"
    class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row ">
    <div
        class="flex flex-col justify-between p-4 leading-normal">
        <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">${item.title}</h5>
        <p
            class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here
            are the biggest enterprise technology acquisitions
            of 2021 so far, in reverse chronological order.</p>
    </div>
    <img
        class="object-contain w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src="${item.image}" alt>
</a>
    `;
})

// script for display best seller cards 
let productsBestSell = [
    {
        title : "Ficus elastica Robusta - Rubber Plant",
        price: 39,
        image: "../image/2.png"
    },
    {
        title : "Ficus elastica Robusta - Rubber Plant",
        price: 39,
        image: "../image/2.png"
    },
    {
        title : "Ficus elastica Robusta - Rubber Plant",
        price: 39,
        image: "../image/2.png"
    },
    {
        title : "Ficus elastica Robusta - Rubber Plant",
        price: 39,
        image: "../image/2.png"
    },
    {
        title : "Ficus elastica Robusta - Rubber Plant",
        price: 39,
        image: "../image/2.png"
    },
    {
        title : "Ficus elastica Robusta - Rubber Plant",
        price: 39,
        image: "../image/2.png"
    },
    {
        title : "Ficus elastica Robusta - Rubber Plant",
        price: 39,
        image: "../image/2.png"
    },
    {
        title : "Ficus elastica Robusta - Rubber Plant",
        price: 39,
        image: "../image/2.png"
    }
]

let productListBestSell = document.querySelector("#productListBestSell");
productsBestSell.map(pro =>{
    productListBestSell.innerHTML += `
    <div
    class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
    <a href="#">
        <img class="p-8 rounded-t-lg"
            src="${pro.image}"
            alt="product image" />
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5
                class="text-xl font-semibold tracking-tight text-gray-900 ">${pro.title}</h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
            <div
                class="flex items-center space-x-1 rtl:space-x-reverse">
                <svg class="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" viewBox="0 0 22 20">
                    <path
                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg class="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" viewBox="0 0 22 20">
                    <path
                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg class="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" viewBox="0 0 22 20">
                    <path
                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg class="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" viewBox="0 0 22 20">
                    <path
                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                    class="w-4 h-4 text-gray-200 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" viewBox="0 0 22 20">
                    <path
                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
            </div>
            <span
                class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
        </div>
        <div class="flex items-center justify-between">
            <span
                class="text-3xl font-bold text-red-500 ">$${pro.price}</span>
            <a href="#"
                class="text-white bg-[#003F49] hover:bg-[#FFB41A]  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add
                to cart</a>
        </div>
    </div>
</div>
    `;
})

