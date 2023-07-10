

window.addEventListener("load", ()=>{

// document.querySelector('button').addEventListener('click', function() {
    let imageLink = "https://upload.wikimedia.org/wikipedia/commons/3/3e/Tokyo_Sky_Tree_2012.JPG",
        downloadSize = 8185374,
        timeStart, timeEnd,
        downloadSrc = new Image();
    timeStart = new Date().getTime();
    console.log(timeStart);
    let cacheImg = "?nn=" + timeStart;
    downloadSrc.src = imageLink + cacheImg;
    console.log(downloadSrc);
    downloadSrc.onload = function (){
        timeEnd = new Date().getTime();
        console.log(timeEnd);
        let timeDuration = (timeEnd - timeStart) / 1000,
            loadedBytes = downloadSize * 8,
            totalSpeed = ((loadedBytes / timeDuration) / 1024 / 1024).toFixed(2);
            totalSpeed_MBperSec = ((loadedBytes / timeDuration) / 1024).toFixed(2);
        console.log(totalSpeed);


        let i=0;
        const animate = () => {
            if(i<totalSpeed){
                document.getElementById('loader').style.visibility = 'hidden';
                document.getElementById('result').innerHTML = i.toFixed(2) + '<small>Mbps</small>';
                setTimeout(animate,20);
                i+=1.02;
            }else{
                document.getElementById('result').innerHTML = totalSpeed + '<small>Mbps</small>';
            }
        }
        
        animate();
        
        
    }


})


