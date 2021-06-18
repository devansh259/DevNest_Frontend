var library = [
     { 
         title: 'The Road Ahead',
          author: 'Bill Gates',
           libraryID: 1254
    }, 
    { 
        title: 'Walter Isaacson',
         author: 'Steve Jobs',
          libraryID: 4264 
    }, 
    { 
        title: 'Mockingjay: The Final Book of The Hunger Games',
         author: 'Suzanne Collins', 
         libraryID: 3245 
    }
]; 
var libId =[];
for(item in library){libId.push(library[item].libraryID);};
libId.sort((a,b) => b-a);
libId.sort((a,b) => b-a);
for(const i in library){
    for(var j in library){
        if(libId[i]==(library[j].libraryId)){
            console.log(library[i]);}

    }
}
