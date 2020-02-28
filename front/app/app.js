$(document).ready(function() {
    //app html
    var app_html = `
    <header role="banner">
    <a href="https://comprovei.com/" target="_blank">
    <img id="logo-main" src="https://lh3.googleusercontent.com/2NAAyu1jqhLZc5O_fLawDA0hVCaToDaD8vcClIs3RNDGe3GlnItglgV2xHx-_vjKsDQ=s180" alt="logoComprovei">
    </a>
  <nav id="navbar-primary" class="navbar navbar-default" role="navigation">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-primary-collapse">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse" id="navbar-primary-collapse">
        <ul class="nav navbar-nav">
          <li id="homeBar" class="active nav-item"><a href="#">Home</a></li>
          <li id="tenisBar" class = "nav-item"><a href="#">Tênis</a></li>
          <li id="alunosBar" class = "nav-item"><a href="#">Alunos</a></li>
          <li id="celularesBar" class = "nav-item"><a href="#">Celulares</a></li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</header><!-- header role="banner" -->
    <div class = "wrapper"> 
    <!-- Side bar 
        <nav id="side-bar">
            <div class = "sidebar-header">
                <a href="https://comprovei.com/">
                <img id = "logoComp" src="https://lh3.googleusercontent.com/2NAAyu1jqhLZc5O_fLawDA0hVCaToDaD8vcClIs3RNDGe3GlnItglgV2xHx-_vjKsDQ=s180" alt="logoComprovei">
                </a>
                </div>
            <ul class="list-unstyled components">
        <li id="menu">
            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
            <ul class="collapse list-unstyled" id="homeSubmenu">
                <li id="tenisBar" class="navItem">
                    <a href="#">Tênis</a>
                </li>
                <li id="alunosBar" class="navItem">
                    <a href="#">Alunos</a>
                </li>
                <li id="celularesBar" class="navItem">
                    <a href="#">Celulares</a>
                </li>
            </ul>
            </li>
        </nav>
    -->
        
        <div class='container'>
            <div class='page-header'>
                <h1 id='page-title'>Home</h1>
            </div>
            
            <!-- this is where the contents will be shown. -->
            <div id='page-content'></p></div> 
        </div>
    </div>`;
    //Injetando html na div app do index.html
    $("#app").html(app_html);
    $(document).on('click', '#menu', function(e) {
        if ((e.target.className == "dropdown-toggle collapsed") || (e.target.className == "dropdown-toggle")) {
            if (!$(this).hasClass('active')) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        }
    })


    $(".nav .nav-item").bind("click", function() {
        event.preventDefault();
        $(".nav .nav-item").each(function() {
            $(this).removeClass("active");
        })
        $(this).addClass("active")
    })
});



//Mudando titulo da pagina
function changePageTitle(page_title) {
    //trocar titulo
    $("#page-title").text(page_title);
    //trocar titulo
    document.title = page_title;
}

//função para transformar valores do form para JSON
$.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

/**
<div class = "wrapper">
    <!-- Side bar -->
        <nav id="side-bar">
            <div class = "sidebar-header">
                <img id = "logoComp" src="-https://lh3.googleusercontent.com/2NAAyu1jqhLZc5O_fLawDA0hVCaToDaD8vcClIs3RNDGe3GlnItglgV2xHx-_vjKsDQ=s180" alt="logoComprovei">
            </div>
            <ul class="list-unstyled components">
        <li id="menu">
            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
            <ul class="collapse list-unstyled" id="homeSubmenu">
                <li id="tenisBar" class="navItem">
                    <a href="#">Tênis</a>
                </li>
                <li id="alunosBar" class="navItem">
                    <a href="#">Alunos</a>
                </li>
                <li id="celularesBar" class="navItem">
                    <a href="#">Celulares</a>
                </li>
            </ul>
            </li>
        </nav>

        
        <div class='container'>
            <div class='page-header'>
                <h1 id='page-title'>TITULO INICIAL</h1>
            </div>

            <!-- this is where the contents will be shown. -->
            <div id='page-content'></div> 
        </div>
    </div>
 */