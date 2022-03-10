window.addEventListener('load', solve);

function solve() {
    let genre = document.getElementById('genre');
    let songName = document.getElementById('name');
    let autor = document.getElementById('author');
    let date = document.getElementById('date');
    let addButton = document.getElementById('add-btn');
    let hitsContainer = document.querySelector('.all-hits-container');
    let likeSection = document.querySelector('.likes');
    let likePara = document.querySelector('.likes p');
    let savedSongs = document.querySelector('.saved-container');
    
    
     
    
    
    addButton.addEventListener('click', onAdd);
    function onAdd(e){
        e.preventDefault();
        if(genre.value == '' || songName.value == '' || autor.value == '' || date.value == '' ){
            return
        }
       if(!(/^(0?[1-9]|[12][0-9]|3[01])[\/\.](0?[1-9]|1[012])[\/\.]\d{4}$/.test(date.value))){
           return
       }

       let div = document.createElement('div');
       div.setAttribute('class', 'hits-info');

       let img = document.createElement('img');
       img.setAttribute('src','./static/img/img.png')
       

       let h2Genre = document.createElement('h2');
        h2Genre.textContent = `Genre: ${genre.value}`;

        let h2Name = document.createElement('h2');
        h2Name.textContent = `Name: ${songName.value}`

       let h2Author = document.createElement('h2');
       h2Author.textContent = `Author: ${autor.value}`

       let h3 = document.createElement('h3');
       h3.textContent = `Date: ${date.value}`;

       

       let saveBtn = document.createElement('button');
       saveBtn.setAttribute('class', 'save-btn');
       saveBtn.textContent = 'Save song';

       let likeBtn = document.createElement('button');
       likeBtn.setAttribute('class', 'like-btn');
       likeBtn.textContent = 'Like song';

       let deleteBtn = document.createElement('button');
       deleteBtn.setAttribute('class', 'delete-btn');
       deleteBtn.textContent = 'Delete';

       div.appendChild(img);
       div.appendChild(h2Genre);
       div.appendChild(h2Name);
       div.appendChild(h2Author);
       div.appendChild(h3);
       div.appendChild(saveBtn);
       div.appendChild(likeBtn);
       div.appendChild(deleteBtn);
      
       hitsContainer.appendChild(div);

       genre.value ='';
       songName.value ='';
       autor.value = '';
       date.value ='';

       likeBtn.addEventListener('click' ,onLike);
       function onLike(){
        let number =Number(likePara.textContent[13])
        number ++;
        likePara.textContent = `Total Likes: ${number}`;
        likeBtn.disabled = true;    
       }
       saveBtn.addEventListener('click', onSave);
       function onSave(){
        let saveDiv = document.createElement('div');
        saveDiv.setAttribute('class', 'hits-info');
        let newDeleteBtn = document.createElement('button');
        newDeleteBtn.setAttribute('class', 'delete-btn');
        newDeleteBtn.textContent = 'Delete';

        saveDiv.appendChild(img);
        saveDiv.appendChild(h2Genre);
        saveDiv.appendChild(h2Name);
        saveDiv.appendChild(h2Author);
        saveDiv.appendChild(h3);
        saveDiv.appendChild(newDeleteBtn);

        savedSongs.appendChild(saveDiv)
        div.remove(); 
        
        newDeleteBtn.addEventListener('click',onNewDelete);
        function onNewDelete(){
            saveDiv.remove()
        }
       }
       deleteBtn.addEventListener('click',onDelete);
       function onDelete(){
           div.remove()
       }
      

      

    }
}