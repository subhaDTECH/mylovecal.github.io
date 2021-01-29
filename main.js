





document.getElementById('btn').addEventListener('click',()=>{
    const bfdata=document.getElementById('bfname').value;
    const gfdata=document.getElementById('gfname').value;
    const perdata=document.getElementById('prec')
    let randomdata=Math.floor(Math.random()*100)+1;
    console.log(bfdata);
    console.log(gfdata)
    if (bfdata=='' || gfdata==''){
        alert("plz enter the name first")
    }else{

         let mydata=bfdata.trim().toLowerCase()
         let lovedata=gfdata.trim().toLowerCase()
         if(mydata=="subha" || mydata=="suva" ||lovedata=="siya")
         {
             perdata.innerHTML=100 + "% ";
         }else{
            perdata.innerHTML=randomdata + "%";
         }

       
    }
    console.log(randomdata);


})