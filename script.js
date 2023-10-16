$(document).ready(function(){
    $(".year_company").click(function(){
        $(".details").fadeToggle(2000, "swing");
        
    })
    
    $("#hoverOver").on("mouseenter", function(){
        $("#description").show("slow");
    })

});