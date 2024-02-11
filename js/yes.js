const btn_ok = document.querySelector('.btn_ok')


class CardsSim{
     divimgs=null
    constructor(div,elemento){
        this.div=div
        this.elemento= elemento
        
        this.destino=document.body
    }
  
    mostrar(){
        const estilocontainer='background-color:rgba(0,0,0,.3);'+
        "position:absolute;"+
        "left:0px;"+
         "height:100vh;"+
        "top:0px;"+
        "width:100%;"+
        "display:flex;"+
        "align-items:center;"+
        "justify-content:center;"+
        "Z-inde:999;"


        this.divimgs = document.createElement('div')
        this.divimgs.setAttribute('style',estilocontainer)
        this.divimgs.innerText='ola'
        this.destino.prepend(this.divimgs)

        const divcard= document.createElement('div')

        const estilocard="width:350px;"+
        "background-color:white;"+
        "display:flex;"+
         "justify-content:center;"+
         "align-items:center;"+
        "height:300px;"+
        "position:relative;"


        divcard.setAttribute('style',estilocard)
      
        this.divimgs.appendChild(divcard)
     


       const estilobutton="width:30px;"+"height;30px;"+"border:none;"+"background-color:orange;"+"position:absolute;"+"right:1.5rem;"+"top:1.15rem"
        const buttonfechar=document.createElement('button')
        buttonfechar.setAttribute('style',estilobutton)
        buttonfechar.innerText='X'
        buttonfechar.addEventListener('click',this.ocultar)
        
        divcard.appendChild(buttonfechar)
   

       const divcontentimg=document.createElement('div')
       const divimg=document.createElement('img')
       divimg.setAttribute('src','gif/alegre-4097_256.gif')
       
       divcontentimg.appendChild(divimg)

       divcard.appendChild(divcontentimg)

    }

    ocultar=()=>{
        this.divimgs.remove()
    }
    

}
btn_ok.addEventListener('click',()=>{
    const od= new CardsSim()
    od.mostrar()
})

