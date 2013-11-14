function myColor()
{
    var mylist       = document.getElementById("mylist");
    var currentColor = mylist.selectedIndex;
    document.getElementById("favorite").value = mylist.options[mylist.selectedIndex].text;

    //setting default color to red
    document.body.style.backgroundColor = red;

    var red     = "#AA0000"
    var orange  = "#FF6600"
    var yellow  = "#FFFF00"
    var green   = "00D700"
    var blue    = "#003366"
    var indigo  = "#2E0854"
    var violet  = "#8F5E99"

    switch(currentColor)
    {
        case 0:
            document.body.style.backgroundColor = red;
            break;
        case 1:
            document.body.style.backgroundColor = orange;
            break;
        case 2:
            document.body.style.backgroundColor = yellow;
            break;
        case 3:
            document.body.style.backgroundColor = green;
            break;
        case 4:
            document.body.style.backgroundColor = blue;
            break;
        case 5:
            document.body.style.backgroundColor = indigo;
            break;
        case 6:
            document.body.style.backgroundColor = violet;
            break;
        default:
    }
}