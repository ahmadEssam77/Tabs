function openCity(evt, cityName) {
    var i, tabcontent, tablinks;   // Declare all variables 

    // Get all elemnts with class -tabcontent- and hide them
    tabcontent = document.getElementsByClassName('tabcontent');   
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    //Get all elemts with class -tablinks- and remove the class active 
    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    //Show the current tab, and add an "active" class to the button that open the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += "active";
}