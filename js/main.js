const getCategory=async()=>{
    const res=await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data=await res.json()
    pushcategory(data.data) 
}
const pushcategory=(data)=>{
    const categoryContainer=document.getElementById('category-container')
    data.forEach(data=>{
        const categoryList=document.createElement('div')
        categoryList.classList=``
        categoryList.innerHTML=`
        <button onclick="cardContainer(${data.category_id})" class="px-1 md:px-4 py-1 md:py-2 md:bg-gray-300 text-base font-medium md:hover:bg-scondary-color focus:border-b focus:border-red-600 focus:text-red-500  md:focus:text-white md:focus:bg-scondary-color  list-none md:rounded-md cursor-pointer">${data.category}</button>
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
    const emptyContainer=document.getElementById('empty-container')
    cardContainer.textContent=' '
    emptyContainer.textContent=' '
    if(data.length>0){  
    data.forEach(data=>{
        const scondTotal=data.others.posted_date
        const hours=Math.floor(scondTotal/3600)
        const minutes=Math.floor((scondTotal%3600)/60)
        const div=document.createElement('div')
        div.innerHTML=`
        <div class="card rounded-none  bg-gray-200 text-black">
        <figure class="h-[200px] relative">
        <img class="hover:scale-125 hover:overflow-hidden duration-300 h-full w-full" src=${data.thumbnail} /> 
        <div class="bg-black bg-opacity-70  text-white px-2 py-1 rounded-sm absolute right-2 bottom-1" >${scondTotal>0 && scondTotal<16726560? `${hours} hrs ${minutes} min ago`: ' '} </div> 
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
                <h6 id="view" class="view-count">${data.others.views}</h6>
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
    else{
      const div=document.createElement('div')
      div.classList=`flex justify-center items-center max-w-[500] mx-auto `
        div.innerHTML=`
        <div class="card  ">
        <figure class="px-10 pt-10">
       <img src="./image/fi_5301987.svg" alt="Shoes" class="rounded-xl" />
       </figure>
        <div class="card-body items-center text-center">
       <h2 class="card-title text-3xl font-bold">Oops!! Sorry, There is no content here</h2>
       </div>
      </div>
        `
        emptyContainer.appendChild(div)
    }
}
const shortView=async(id)=>{
  const res=await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
  const data=await res.json()
  sort(data.data)
}
const sort=(data)=>{
  const cardContainer=document.getElementById('card-container')
  const emptyContainer=document.getElementById('empty-container')
  cardContainer.textContent=' '
  emptyContainer.textContent=' '
  data.sort((a,b)=>parseInt(b.others.views)-parseInt(a.others.views))
  if(data.length>0){  
  data.forEach(data=>{
      const scondTotal=data.others.posted_date
      const hours=Math.floor(scondTotal/3600)
      const minutes=Math.floor((scondTotal%3600)/60)
      const div=document.createElement('div')
      div.innerHTML=`
      <div class="card rounded-none  bg-gray-200 text-black">
      <figure class="h-[200px] relative">
      <img class="hover:scale-125 hover:overflow-hidden duration-300 h-full w-full" src=${data.thumbnail} /> 
      <div class="bg-black bg-opacity-70  text-white px-2 py-1 rounded-sm absolute right-2 bottom-1" >${scondTotal>0 && scondTotal<16726560? `${hours} hrs ${minutes} min ago`: ' '} </div> 
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
              <h6 id="view" class="view-count">${data.others.views}</h6>
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
  else{
    const div=document.createElement('div')
    div.classList=`flex justify-center items-center max-w-[500] mx-auto `
      div.innerHTML=`
      <div class="card  ">
      <figure class="px-10 pt-10">
     <img src="./image/fi_5301987.svg" alt="Shoes" class="rounded-xl" />
     </figure>
      <div class="card-body items-center text-center">
     <h2 class="card-title text-3xl font-bold">Oops!! Sorry, There is no content here</h2>
     </div>
    </div>
      `
      emptyContainer.appendChild(div)
  } 
}
const blogPage=()=>{
  window.location='blog.html'
}
getCategory()
cardContainer('1000')