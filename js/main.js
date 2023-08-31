const getCategory=async()=>{
    const res=await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data=await res.json()
    pushcategory(data.data)
}
const pushcategory=(data)=>{
    console.log(data);
    const categoryContainer=document.getElementById('category-container')
    data.forEach(data=>{
        const categoryList=document.createElement('ul')
        categoryList.innerHTML=`
        <li class="px-4 py-2 bg-gray-300 text-base font-medium hover:bg-scondary-color hover:text-white active:bg-scondary-color list-none rounded-md">${data.category}</li>
        `
        categoryContainer.appendChild(categoryList)
    })
}
getCategory()