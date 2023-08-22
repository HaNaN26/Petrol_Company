$(document).ready(function () {
    function connect(eleId, eleContent) {
        $(eleId).popover({
            html: true,
           
            content: function () {
                return $(eleContent).html();
            }
        });
    }
    $('body').on('click', function (e) {
        $('[data-toggle="popover"]').each(function () {
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $(this).popover('hide');
            }
        });
    });
    connect("#AboutId" , "#aboutContent");
    connect("#projectsId","#projectsContent");
    connect("#servicesId", "#servicesContent");
    connect("#exhibtionId" ,"#exhibtionContent");
    connect("#contactId" ,"#contactContent");
    $(".ulItem").click(function(){
        $(".aboutList li.active , .ProjectsList li.active ,.servicesList li.active ,.exhibtionList li.active").removeClass('active');
        $(this).addClass('active');
    });
    function showElement(liId , elemId , imgClass){
        $(liId).click(function(){
            $("div.activeImg").css("display","none");
            $("div.activeContent").css("display","none");
            $(elemId).addClass('activeContent');
            $(imgClass).addClass('activeImg');
            $(elemId).css("display","inline-block")
            $(imgClass).css("display","flex")
        });
    }
    showElement("#profileLi","#contentProfile" ,".achieveImgs");
    showElement("#StrategyLi","#contentStrategy",".strategy");
    showElement("#CertificatesLi","#contentCertificate",".certificate");
    showElement("#ParentersLi","#contentParenter",".parenter");
    showElement("#HistoryLi","#contentHistory",".history");
    showElement("#ProjectsLi","#contentProjects",".ProjectImgs");
    showElement("#plantsLi","#contentplants",".Plants");
    showElement("#PipelinesLi","#contentPipelines",".PIPELINES");
    showElement("#FramsLi","#contentFrams",".FARMS");
    showElement("#structureLi","#contentstructure",".STRUCTURES");
    showElement("#processLi","#contentprocess",".EQUIPMENT");
    showElement("#coatingLi","#contentcoating",".COATING");
    showElement("#workShopLi","#contentWorkshop",".workShopImg")
    showElement("#pipeCoatLi","#contentPipeCoat",".pipeCoatImg");
    showElement("#maintainanceLi","#contentMaintenance",".MaintenanceImg");
    showElement( "#newsLi","#contentnews",".newsImg");
    showElement("#ExhibitionsLi","#contentExhibitions",".ExhibitionsImg"); 
    $(".language").click(function(){
        $(".arlang , .enlang").toggleClass(" arlang enlang");
        if($(".arlang").hasClass('activeLang')){
            $(".arlang").removeClass('activeLang');
            $(".enlang").addClass('activeLang');
        }else{
            $(".enlang").removeClass('activeLang');
            $(".arlang").addClass('activeLang');
           
        

        }
    }) 
});
