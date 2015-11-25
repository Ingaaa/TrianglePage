window.onload =  function() {
    var a=document.getElementById("triangle-up1");
    var b=document.getElementById("triangle-up2");
    var c=document.getElementById("triangle-down1");
    a.onmouseover=show;
    a.onmouseout=hide;
    b.onmouseover=show1;
    b.onmouseout=hide1;
    c.onmouseover=show2;
    c.onmouseout=hide2;
    
    function show (){
        
            a.style.opacity = "0.6";
     
    };
    function hide (){
        
            a.style.opacity = "0.8";
     
    };
    function show1 (){
        
            b.style.opacity = "0.6";
     
    };
    function hide1 (){
        
            b.style.opacity = "0.8";
     
    };
    function show2 (){
        
            c.style.opacity = "0.6";
     
    };
    function hide2 (){
        
            c.style.opacity = "0.8";
     
    };
    
};

