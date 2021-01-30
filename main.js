$(document).ready(
    function () {
        $(".tab-item").each(function () {
            $(this).click(function () {
                var content = $(this).attr("data-target");
                var tab_content = $(".row").find(content);
                console.log(content);
                $(".tab-item").removeClass("active").removeClass("outer-shadow");
                $(".tab-content").removeClass("active");
                $(this).addClass("active").addClass("outer-shadow");
                tab_content.addClass("active");
            })
        })

        $(".filter-item").each(function () {
            $(this).click(function () {
                var content_attr = $(this).attr("data-target");
                var single_portfolio = $(".portfolio-items").find(content_attr);
                $(".portfolio-item").removeClass("show").addClass("hide");
                if(content_attr == "portfolio-all"){
                    $(".portfolio-item").removeClass("hide").addClass("show");
                }
                $(".filter-item").removeClass("active").removeClass("outer-shadow");
                 $(this).addClass("active").addClass("outer-shadow");
                 single_portfolio.removeClass("hide").addClass("show");
            })
        })



        $(".hamburger-btn").each(function () {
            $(this).click(function () {
                var menu_content = $(".nav-menu");
                console.log(menu_content.attr);
                if(menu_content.attr == "open"){
                    menu_content.removeClass("open").addClass("close");
                    
                }else{
                    menu_content.removeClass("close").addClass("open");
                }
               
            })
        })

        $(".close-nav-menu").click(function(){
            $(".nav-menu").removeClass("open").addClass("close");
        })

        $(".link-item").each(function () {
            $(this).click(function () {
                $(".nav-menu").removeClass("open").addClass("close");
               
            
            })
        })

    }
)


  