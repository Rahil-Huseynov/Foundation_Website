document.getElementById('hamburger').addEventListener('click', function(){
    if(document.getElementById('mobile_navbar').style.display == 'block' )
    document.getElementById('mobile_navbar').style.display = 'none';
    else{
        document.getElementById('mobile_navbar').style.display = 'block';
    }
})
