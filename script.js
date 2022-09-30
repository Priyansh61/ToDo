const task_add=document.getElementById('input');
const form=document.getElementById('form');
const todo=document.getElementById('tasks');



form.addEventListener('submit',(list) =>{
    list.preventDefault();

    const task_name=task_add.value;
    const box= document.createElement('i');
    box.className='fa-regular fa-circle';
    
    console.log("cheal")
    if (task_name){
        var bin_icon=document.createElement('i');
        bin_icon.className="fa-solid fa-trash fa-xs";

        const task=document.createElement('li');
        task.className="task-li";

        const text=document.createElement('span');
        text.className="task";
        text.textContent=task_name;

        task.prepend(box);
        task.append(text);
        task.append(bin_icon);

        todo.append(task);
        task_add.value='';
    }
    
});


todo.addEventListener('click',(item)=>{
    const done= document.createElement('i');
    done.className='fa-solid fa-circle-check';

    const undone= document.createElement('i');
    undone.className='fa-regular fa-circle';

    e=item.target;

    if (e.className==='fa-regular fa-circle')
        e.parentNode.replaceChild(done,e);
    if (e.className==='fa-solid fa-circle-check')    
        e.parentNode.replaceChild(undone,e);
    if (e.className==='fa-solid fa-trash fa-xs')
        e.parentNode.remove();
});