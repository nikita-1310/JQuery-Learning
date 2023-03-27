$(document).ready(
    $('#own').click(function(){   
    $(this).hide(); 
    }),
    $('#hide').click(function(){  
        $('#para').hide(3000); 
    }),
    $('#show').click(function(){  
            $('#para').show(1000); 
    }), 
    $('#toggle').dblclick(function(){  
            $('#para').toggle(); 
    }),
    $('#para').hover(function(){  
        alert("By now you leave") 
    }),
    $('input').focus(function(){  
        $(this).css("background-color","red"); 
    }),
    $('input').blur(function(){  
        $(this).css("background-color","orange"); 
    }),
    $('#box').on({
        mouseenter : function(){
            $(this).css("background-color","lightpink")
        },
        mouseleave : function(){
            $(this).css("background-color","lightblue")
        }
    })   ,
    $("#fade_btn").click(function(){
        $('#box1').fadeIn();
        $('#box2').fadeIn(3000);
        $('#box3').fadeIn("slow");
    }),
    $("#fade_btn2").click(function(){
        $('#box1').fadeOut();
        $('#box2').fadeOut(3000);
        $('#box3').fadeOut("slow");
    }),
    $("#flip").click(function(){
        $("#panel").slideDown(4000)
    }),
    $("#flip_up").click(function(){
        $("#panel").slideUp(4000)
    }),
    $("#flip_toggle").click(function(){
        $("#panel").slideToggle("4000")
    }),
    $("#animate").animate({width:'+=800px',opacity:'0.5'},3000),
    $('#start').click(function(){
        $('#sliding').slideDown(3000)
    }),$('#stop').click(function(){
        $('#sliding').stop()
    }),
    $("#call_hide").click(function(){
        $('#call_para').hide(3000,()=>{
            alert("Now the paragraph is hide")
        })
    })
)

// ----------------------- DOM Manipulation 

$(document).ready(
    $('#btn1').click(function(){
        $('#para1').text("Hello, My name is Nikita Agarwal")
    }),
    $('#btn2').click(function(){
        $('#para2').html("<b>Hello, My name is Nikita Agarwal</b>")
    })
    ,$('#btn3').click(function(){
        $('#para3').val("Nikita Agarwal")
    })
    ,$('#btn4').click(function(){
        $('#times').attr('https://lms.earlycareer.timespro.com/')
    }),
    $('#append_btn').click(function(){
        $("#append_text").append("  Append Text 🆕")
    }),
    $('#prepand_btn').click(function(){
        $("#prepand_text").prepend("  Prepends Text 🆕")
    })
    ,$('#remove_btn').click(function(){
        $("#remove").remove()
    }),
    $('#empty').click(function(){
        $("#remove").empty()
    })
)
