window.onload = function () {
    getEmpresas()
    getHabilidades()
};

function getEmpresas() {
    fetch('https://demo9037445.mockable.io/empresa').then(response => {
        return response.json()
    })
        .then(data => {
           populaEmpresas(data)
        })
        .catch(err => { })
}

function populaEmpresas(data) {
    var empresas = document.getElementById("empresas")
    var list = data.empresa.map((e) => {
        var html = 
        `<div class="col-md-12 section-content shadow-bg">
            <div class="col-md-12 skill-data">
                <div id="rex-experience-slider">
                    <div class="row">
                        <div class="col-md-2 list-img">
                            <div class="experience-date">
                                <i class="fa fa-code"></i>
                            </div>
                        </div>
                        <div class="col-md-10 list-description">
                            <h6>${e.nome} <span>[${e.periodo}]</span></h6>
                            <span>${e.cargo}</span>
                            <p>${e.atividades}</p>
                            <p>${e.tecnologias}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`

        return html
    })

    empresas.innerHTML = list.join('')
}

function getHabilidades() {
    fetch('https://demo9037445.mockable.io/habilidade').then(response => {
        return response.json()
    })
        .then(data => {
           populaHabilidades(data)
        })
        .catch(err => { })
}

function populaHabilidades(data) {
    var habilidades = document.getElementById("habilidades")
    var list = data.habilidade.map((e) => {
        var html = 
        `<div class="col-md-4 service-wrapper wow zoomIn animated" data-wow-duration="0.5s" data-wow-delay="0.3s" data-wow-offset="0">
            <div class="col-md-12 skill shadow-bg">
                <div class="service-center">
                    <div class="service-icon">
                        <span class="${e.icon}"></span>
                    </div>
                    <div class="service-title">
                        ${e.nome}
                        <span>${e.nivel}</span>
                    </div>
                </div>
                <div class="service-desc">
                    <p>
                    ${e.tecnologias}
                    </p>
                </div>
            </div>
        </div>`

        return html
    })

    habilidades.innerHTML = list.join('')
}

function setTheme(theme) {
    var body = document.getElementById('body')
    body.className = "";
    body.className += theme;
}
