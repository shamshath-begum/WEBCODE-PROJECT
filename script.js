
let bookDetails=document.getElementById('book');

    const apiurl="https://anapioficeandfire.com/api/books?pageSize=50"
async function books(){
    try{
let res= await fetch(apiurl);
if(res.status===200){
    let data=await res.json();
    console.log(data);
    
    let books=document.getElementById('books');
    let isbn=document.getElementById("isbns");
    let name=document.getElementById("names");
    let author=document.getElementById("authors")
    let publisher=document.getElementById("publishers")
    let character=document.getElementById("characters")
    

    for(i of data){
        let parent=document.createElement('p')
        if(books!=null){
        console.log(i);
        let booksDetails=
        JSON.stringify(i)
         parent.innerHTML=booksDetails
         parent.style.border="2px solid black"
         parent.style.padding="5px"
         parent.style.backgroundColor="rgb(197, 130, 169)"
books.append(parent) 
} else if(isbn!=null) {
    let isbnDetails=`
    
    
    <div class="wrapper">
         <div class="data-wrapper">
         <h6> Name of the Book:</h6>
             <span>${i.name}</span>
         </div>
     </div>
     <div class="wrapper">
         <div class="data-wrapper">
         <h6> ISBN:</h6>
             <span>${i.isbn}</span>
         </div>
     </div>
    `
   parent.innerHTML=isbnDetails;
   parent.style.border="2px solid black"
   parent.style.backgroundColor=" rgb(90, 72, 107)"
    isbn.append(parent)  ;
}else if(author!=null){
    let authorDetails=`
    <div class="wrapper">
         <div class="data-wrapper">
         <h6> Name of the Author:</h6>
             <span>${data[0].authors[0]}</span>
         </div>
     </div>
     <div class="wrapper">
         <div class="data-wrapper">
         <h6> Number Of Pages:</h6>
             <span>${data[0].numberOfPages}</span>
         </div>
     </div>
   
    `
     parent.innerHTML=authorDetails;
     parent.style.border="2px solid black"
     parent.style.backgroundColor="rgb(228, 154, 215)"
    author.append(parent);
}else if(publisher!=null ){
    let publisherDetails=`
    <div class="wrapper">
         <div class="data-wrapper">
         <h6> Name Of The Publisher:</h6>
             <span>${i.publisher}</span>
         </div>
     </div>
     <div class="wrapper">
     <div class="data-wrapper">
     <h6> Released Date:</h6>
         <span>${i.released}</span>
     </div>
 </div>
     `

    parent.innerHTML=publisherDetails
    parent.style.border="2px solid black"
     parent.style.backgroundColor="rgb(228, 154, 215)"
     parent.style.height="50px"
    publisher.append(parent)
}else if(character!=null){
for(j=0;j<5;j++){
    let characterDetails=`
    <div class="wrapper">
     <div class="data-wrapper">
     <h6> Characters Of The Book:</h6>
         <span>${i.characters[j]}</span>
     </div>
 </div>
    `
    parent.innerHTML=characterDetails
    parent.style.border="2px solid black"
     parent.style.backgroundColor="rgb(228, 154, 215)"
     parent.style.height="50px"
    character.append(parent)
}
}
    } 


}else{
    throw new Error("some error occurred");
}
}catch(err){
    console.log(err.message);

}
    }
    books(); 

 