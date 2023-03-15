           let images = ['image2.jpg','image1.jpg','image3.jpg','image5.jpg'];
            let current = 0
            let imgBlock = document.getElementById('image')
             function next(){
                if(images.length-1 <= current){
                    current = 0
                }else{
                    current = current+1
                }
                setSlide()
             }
             function Previous(){
                 if(current === 0){
                     current = images.length-1
                 } else{
                     current = current-1
                 }
                 setSlide()
                
                }
		function setSlide(){
			imgBlock.src=images[current]
		}
             function initSlide(){
                 setInterval(()=>{
                 next()
             },1000) 
             }
             initSlide()
    