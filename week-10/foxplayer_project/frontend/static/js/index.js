let audio = document.querySelector('audio');
audio.addEventListener('loadstart',(event)=>{
    console.log(event.type); 
})
audio.addEventListener('play',(event)=>{
    console.log(event.type); 
})
audio.addEventListener('ended',(event)=>{
    console.log(event.type); 
},false)
audio.addEventListener('progress',(event)=>{
    console.log(event.type); 
})