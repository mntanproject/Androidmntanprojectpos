var generateTitle = function () {
    var title = document.createElement('Title'); // Create a <li> node
    title.innerHTML = 'Point of Sales'
    document.getElementsByTagName('head')[0].appendChild(title);
}

var generateCss = function (arrCss) {
    if (Array.isArray(arrCss)) {
        var temp = 0;
        var cssLink;
        let path = ''
        while (arrCss[temp]) {
            cssLink = document.createElement('link');
            cssLink.rel = 'stylesheet';
            cssLink.type = 'text/css';
            path = arrCss[temp]
            if (path.startsWith("http")) {
                cssLink.href = path
            } else {
                if (appendAbsolutePath == 1) {
                    cssLink.href = absolutePath + path
                } else {
                    cssLink.href = arrCss[temp];
                }
            }
            document.getElementsByTagName('head')[0].appendChild(cssLink);
            temp++;
        }
    } else {
        console.error('invalid parameter on generateCss, parameter must be an array');
    }
}


var generateHeader = function () {
    var header = document.createElement('header');
    //header.class = 'footer mt-auto py-3';
    header.innerHTML = '<nav class="navbar navbar-dark bg-primary fixed-top"><div class="container-fluid"><a class=" navbar-brand" href="/home.html"><img src="/assets/images/logo.png" width="30" height="30" class="d-inline-block align-top mr-1" alt="" loading="lazy">Point of sales</a></div></nav><div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog modal-dialog-centered">    <div class="modal-content"><div class="modal-header"><div id="myModalTitle" class="modal-title"></div>  <button type="button" class="btn-close" onclick="hideModal()" aria-label="Close"></button></div><div id="myModalBody" class="modal-body"></div><div class="modal-footer"><button id="btnModalNo" type="button" class="btn btn-secondary">No</button><button id="btnModalYes" type="button" class="btn btn-primary">Yes</button>   </div></div></div></div>';
    document.body.appendChild(header);
}

var generateFooter = function () {
    var footer = document.createElement('footer');
    footer.className = 'footer mt-auto py-3';
    footer.innerHTML = '<div class="container"><div class = "d-flex mt-5 mb-3 justify-content-end text-muted" > &#169; 2020, All rights reserved</div></div>';
    document.body.appendChild(footer);
}

var generateScript = function (scripts) {
    if (Array.isArray(scripts)) {
        var temp = 0,
            footerScript;

        while (scripts[temp]) {
            footerScript = document.createElement('script');
            path = scripts[temp]
            if (path.startsWith("http")) {
                footerScript.src = path
            } else {
                if (appendAbsolutePath == 1) {
                    footerScript.src = absolutePath + path
                } else {
                    footerScript.src = scripts[temp];
                }
            }

            footerScript.type = 'text/javascript';
            document.body.appendChild(footerScript);
            //footerScript.addEventListener("load", scriptLoaded(scripts[temp]), false);
            //alert(scripts[temp]);
            temp++;
        }
    }

}


window.onload = () => {
    var arrCss = ['https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap',
'/assets/css/bootstrap.min.css', '/assets/css/fontawesome5/css/all.css',
'/assets/css/style.css'];

    generateCss(arrCss);
    generateHeader();
    generateTitle();

    var scripts = ['/assets/js/popper.min.js',
 '/assets/js/bootstrap.min.js', '/assets/js/sweetalert2.all.min.js', '/assets/js/pos-api/genericApi.js'];
    //var scripts = ['/assets/js/popper.min.js', '/assets/js/bootstrap.min.js'];
    generateFooter();
    generateScript(scripts);
}
