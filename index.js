const taskList = document.querySelector('#taskList');
const textBox = document.querySelector('#textBox');
const addButton = document.querySelector('#addButton');
const dropdownList = document.querySelector('#dropdownList');

addButton.addEventListener('click', function(){
     const taskText = textBox.value;
     textBox.value = '';
     taskList.appendChild(addTask(taskText));
     showAndCloseDropdownList();
     textBox.focus();
})

function addTask(taskText){
    const elementLi = document.createElement('li');
    const elementSpan = document.createElement('span');

    elementSpan.setAttribute('id', 'task');
    elementSpan.textContent = taskText;
    elementLi.className = 'notConcluded';

    elementLi.appendChild(elementSpan);
    elementLi.appendChild(addRemoveButton());

    elementSpan.addEventListener('click', function(){
        if(this.id === 'task'){
            if(this.parentNode.className === 'notConcluded'){
                this.parentNode.className = 'concluded'
            } else{
                this.parentNode.className = 'notConcluded'
            }
        }
    })

    return elementLi;
}

function addRemoveButton(){
    const removeButton = document.createElement('button');
    removeButton.textContent = '✗';
    removeButton.className = 'remove';

    removeButton.addEventListener('click', function(){
        taskList.removeChild(this.parentNode);
        showAndCloseDropdownList();
    })

    return removeButton
}

function showAndCloseDropdownList(){
    const elementSpan = document.querySelector('#task');
    if (elementSpan === null){
        dropdownList.setAttribute('hidden', 'hidden');
    } else{
        dropdownList.removeAttribute('hidden');
    }
}

dropdownList.addEventListener('change', function(){
    if(dropdownList.selectedIndex === 1 || dropdownList.selectedIndex === 2){
        const taskVector = taskList.querySelectorAll('#task');
        for(task of taskVector){
            task.dispatchEvent(new Event('click'));
           }
        } else if(dropdownList.selectedIndex === 3){
            const taskVector = taskList.querySelectorAll('.remove');
            for(task of taskVector){
                task.dispatchEvent(new Event('click'));
               }
            }
    })