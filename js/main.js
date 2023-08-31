const getCategory=async()=>{
    const res=await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data=await res.json()
    pushcategory(data.data)
}
const pushcategory=(data)=>{
    const categoryContainer=document.getElementById('category-container')
    data.forEach(data=>{
        const categoryList=document.createElement('ul')
        categoryList.innerHTML=`
        <li onclick="cardContainer(${data.category_id})" class="px-4 py-2 bg-gray-300 text-base font-medium hover:bg-scondary-color active:text-white active:bg-scondary-color list-none rounded-md">${data.category}</li>
        `
        categoryContainer.appendChild(categoryList)
    })
}
const cardContainer=async(id)=>{
    const res=await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    const data=await res.json()
    pushCard(data.data)
}
const pushCard=(data)=>{
    const cardContainer=document.getElementById('card-container')
    cardContainer.textContent=' '
    data.forEach(data=>{
        console.log(data); 
        const div=document.createElement('div')
        div.innerHTML=`
        <div class="card rounded-none  bg-gray-200 text-black">
        <figure class="h-[200px] ">
          <img class="hover:scale-125 hover:overflow-hidden duration-300 h-full w-full"
            src=${data.thumbnail}/>
        </figure>
        <div class=" ml-4 my-5 ">
          <div class="card-footer flex justify-between mt-4">
            <div class="flex">
              <div>
                <div class="avatar mr-4">
                  <div class="w-14 rounded-full">
                    <img src=${data.authors .map(data=>data.profile_picture)} />
                  </div>
                </div>
              </div>
              <div>
                <h6>${data.title}</h6>
                <div class="flex gap-2 items-center">
                <small>${data.authors .map(data=>data.profile_name)}</small>${data.authors .map(data=>data.verified==true? `<img src="./image/fi_10629607 (1).svg" alt=""> `: ' ')} </span> <small></small>
                </div>
                <div class="flex gap-1 items-center">
                <h6>${data.others.views}</h6>
                <h6>views</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
        `
        cardContainer.appendChild(div)
    })
}
getCategory()
cardContainer('1000')