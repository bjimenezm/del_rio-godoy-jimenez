var trabajos = [{
    figure: "fotos/piñarebrand__.jpg",
    alt: "Piñas Campo",
    title: "Piñas Campo",
    about: "Estudio del mercado de la piña en conserva para crear una identidad de marca que fuera la más atractiva para el usuario.",
    url: "https://www.instagram.com/p/B1nEDwmlv5w/"
}, {
    figure: "fotos/desdemitierra.jpg",
    alt: "Desde mi Tierra",
    title: "Desde mi Tierra",
    about: "Este proyecto consta de un set de libros para niños donde se explica mediante una historia simple cómo es el proceso que hay detrás de una pieza de artesanía.",
    url: "https://www.instagram.com/p/B1nC828larm/"
}, {
    figure: "fotos/cremaparatodos_.jpg",
    alt: "Crema para Todos",
    title: "Crema para Todos",
    about: "Set de 5 cremas para preparar, con la ventaja de que al entrar en contacto con el agua se disuelven de manera instantánea sin dejar grumos.",
    url: "https://www.instagram.com/p/B1nCZh5FR9N/"
}, {
    figure: "fotos/ciclo.jpg",
    alt: "Completa el ciclo",
    title: "Completa el Ciclo",
    about: "Servicio de reciclaje facilitado e incentivado por una aplicación móvil, la cual permite registrar la cantidad de residuos reciclados.",
    url:"https://www.instagram.com/p/B1nCFr1lOGJ/"
}, {
    figure: "fotos/locus.jpg",
    alt: "Colchoneta Locus",
    title: "Colchoneta Locus",
    about: "Colchoneta hecha a partir de PVC, que aísla del frío, humedad e irregularidades del suelo para un descanso más cómodo en situaciones de emergencia.",
    url: "https://www.instagram.com/p/B1nDteHlH98/"
}, {
    figure: "fotos/juego.jpg",
    alt: "Monstrario",
    title: "Juego Monstrario",
    about: "Kit de juego para el desarrollo de habilidades de investigación en jóvenes, que potencia habilidades a través del planteamiento de problemas a partir de una narrativa de monstruos que invaden la tierra.",
    url:"https://www.instagram.com/p/B1m_XKrFJbd/"
}, {
    figure: "fotos/qactus.jpg",
    alt: "Kit Qactus",
    title: "Lápiz 3D Qactus",
    about: "Estudio de las interacciones del lápiz 3D de Qactus y posterior replanteamiento de estas a través de la creación de moldes para dibujo 3D, re-diseño de packaging y creación de contenido multimedia autoexplicativo.",
    url: "https://www.instagram.com/p/B1nDKmQlfA4/"
}, {
    figure: "fotos/luminaria.jpg",
    alt: "Luminaria de escritorio",
    title: "Luminaria de Escritorio",
    about: "Luminaria de escritorio inspirada en una estética industrial que resalta los materiales crudos, pensada para evitar la creación de sombras al trabajar y de luz cálida para crear una atmósfera acojedora.",
    url: "https://www.instagram.com/p/B1nEYisl5w4/"
}];
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '" alt="' + trabajos[i].alt + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    var cuatro = '<p><a href= "' + trabajos[i].url + '">Ver más</a></p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + cuatro + '</div>')
});
