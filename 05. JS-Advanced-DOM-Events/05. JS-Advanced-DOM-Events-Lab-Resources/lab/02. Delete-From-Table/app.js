function deleteByEmail() {
    let input = document.querySelector('input[name="email"]');

    let rows = Array.from(document.querySelector('tbody').children);

    let remove =false;
    for(let row of rows){
        if(row.children[1].textContent == input.value){
            row.remove();
            remove = true;
        }
    }
    if(remove){
        document.getElementById('result').textContent = 'Deleted.';
    }else{
        document.getElementById('result').textContent = 'Not found.';
    }
}