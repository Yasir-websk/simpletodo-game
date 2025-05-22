let todo=[];
// let req=prompt("please enter your request");

 while(true)
{
    if(req=="quit")
    {
        console.log("you quitted");
        break;
    }

    if(req=="list")
    {
        console.log("-----------");
        for(i=0; i<todo.length; i++)
        {
            console.log(i, todo[i]);
        }

    }
    else if(req=="add")
    {
        let task =prompt("enter the task want to add");
        todo.push(task);
        console.log("task added");
    }

    else if (req=="delete")
    {
        let idx=prompt("enter the index you want delete");
        todo.splice(idx,1);
         console.log("task deleted");
    }
    else{
         console.log("you enter wrong");
    }
    req= prompt("enter your request!");
 }