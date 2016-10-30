function dragStart(ev) 
{
    ev.dataTransfer.effectAllowed='move';
    //ev.dataTransfer.dropEffect='move';
    
ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));
    ev.dataTransfer.setDragImage(ev.target,0,0);
   
 return true;
}

function dragEnter(ev) {
    var idelt = ev.dataTransfer.getData("Text");
   
 return true;
}

function dragOver(ev) {
    var idelt = ev.dataTransfer.getData("Text");
  
  var id = ev.target.getAttribute('id');
    if( (id =='boxB' || id =='boxA') && (idelt == 'drag'||idelt=='drag2'
|| idelt=='drag5'))
        return false;
   
 else if( id =='boxC' && idelt == 'drag3'||idelt== 'drag4'||idelt== 'drag6')
        return false;
    else
        return true;
}


function dragEnd(ev) {
    ev.dataTransfer.clearData("Text");
    return true
}


function dragDrop(ev) {
    var idelt = ev.dataTransfer.getData("Text");
   
 ev.target.appendChild(document.getElementById(idelt));
    ev.stopPropagation();
    
return false; // return false so the event will not be propagated to the browser
}