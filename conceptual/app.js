let count = 0
document.getElementById('btn-add').addEventListener('click', function(){
    count = count + 1
    document.getElementById('count').innerText = count;
})

document.getElementById('btn-sub').addEventListener('click', function(){
    count = count - 1
    if(count < 0){
        document.getElementById('count').innerText = ' Only positive'

    }else{
        document.getElementById('count').innerText = count;
        
    }
   
})