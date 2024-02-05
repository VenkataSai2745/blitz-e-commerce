    const slides=document.querySelectorAll(".slide");
    let counter=0;

    slides.forEach(
        (slides,index)=>{
            slides.style.left=`${index * 100}%`;
        }
    )

    document.querySelector(".previous").addEventListener("click",()=>{
    counter--;
    changeslide();
    })

    document.querySelector(".next").addEventListener("click",()=>{
        counter++;
        changeslide();
    })

    const changeslide=()=>{
        if(counter<0){
            counter=slides.length-1;
        }
        else if(counter>=slides.length){
            counter=0;
        }
        slides.forEach(
            (slide)=>   {
                slide.style.transform=`translateX(-${counter* 100}%)`
            }
        )
        
    }
    setInterval(() => {
        counter++;
        changeslide();
    }, 3000);