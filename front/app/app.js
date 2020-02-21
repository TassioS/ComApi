$(document).ready(function () {
    //app html
    var app_html = `
    <div class='container'>
        <div class='page-header'>
            <h1 id='page-title'>Read Products</h1>
        </div>
        <!-- this is where the contents will be shown. -->
        <div id='page-content'></div> 
    </div>`;
    //Injetando html na div app do index.html
    $("#app").html(app_html);
});



//Mudando titulo da pagina
function changePageTitle(page_title) {
    //trocar titulo
    $("#page-title").text(page_title);
    //trocar titulo
    document.title = page_title;
}

//função para transformar valores do form para JSON
$.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a,function(){
        if (o[this.name] !== undefined){
            if (!o[this.name].push){
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else{
            o[this.name] = this.value || '';
        }
    });
    return o;
};

