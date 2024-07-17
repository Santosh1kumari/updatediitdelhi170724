var count=0;
var image=[];
image[0]='image5.jpg';
image[1]='image1.jpeg';
image[2]='image2.jpeg';
image[3]='image3.jpeg';
function slider()

{
document.slide.src=image[count];
if(count<image.length-1)
{
count ++;
}
else
count= 0;

setTimeout(slider,5000);
}
window.onload=slider;


document.getElementById("Frame").addEventListener('click', 
function()
 {
  document.getElementById("frame1").style.display ="block";
  }
);

document.getElementById("Frame1").addEventListener('click', 
  function()
   {
    document.getElementById("frame2").style.display ="block";
    
    }
  );

  document.getElementById("Frame2").addEventListener('click', 
    function()
     {
      document.getElementById("frame3").style.display ="block";
      
      }
    );
    document.getElementById("Frame3").addEventListener('click', 
      function()
       {
        document.getElementById("frame4").style.display ="block";
        
        }
      );
      document.getElementById("Frame4").addEventListener('click', 
        function()
         {
          document.getElementById("frame5").style.display ="block";
          
          }
        );









// let btn=document.querySelectorAll(".Frame")
//  btn.addEventListener('click', 

//     function() {
//       document.getElementById("frame1").style.display = 'block';
//       document.getElementById("frame2").style.display = 'block';
//     });



   

   