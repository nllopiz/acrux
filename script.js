document.addEventListener('DOMContentLoaded', () => {

    // --- Datos del Próximo Concierto ---
    const proximoConcierto = {
        
        titulo: "En lo Alto",
        descripcion: "Mirando al cielo la música nos transporta más allá de donde nuestros ojos pueden ver",
        img: "images/conciertos/Concierto8-12-2025.jpeg",
        /*
        fecha: "Lunes 08 de Diciembre 2025",
        hora: "12:00",
        lugar: "Parroquia San José de la Montaña, Valle del Sol, Potrerillos",
        */
        programa: [
            {
                orden: "1",
                titulo: "SICUT LILIUM INTER SPINAS",
                compositor: "M. Raczynski",
                anio: "2006",
                nota: "\"Como el lirio entre las espinas\". Obra inspirada en un poema del \"Cantar de los Cantares\", libro del Antiguo Testamento. La melodía repite con ternura y admiración: Como el lirio entre las espinas, así eres tú amada mía."
            },
            {
                orden: "2",
                titulo: "ALLELUIA",
                compositor: "Fredrik Sixten",
                anio: "2014",
                nota: "Alleluia: palabra que proviene del hebreo, es una expresión de alabanza, con alegría y gratitud dirigida a Dios. Palabra que cantaremos desde el agradecimiento profundo del corazón hasta la exultante alegría de estar en su Presencia."
            },
            {
                orden: "3",
                titulo: "O NATA LUX",
                compositor: "Morten Lauridsen",
                anio: "1997",
                nota: "Un abrazo de luz en la oscuridad. Una voz que se eleva en una súplica suave y muy sentida \"Luz nacida de la Luz, Jesús, Redentor del mundo, ten piedad de nosotros que te suplicamos\"."
            },
            {
                orden: "4",
                titulo: "DIES IRAE",
                compositor: "Michael John Trotta",
                anio: 2020,
                texto: "Tradicional",
                nota: "\"El Día de la Ira de Dios\", poema litúrgico del siglo 13. Relata el momento del Juicio Final. \"El día de la ira, ese día todo se reducirá a cenizas. La Muerte asombrará a la Naturaleza cuando resucite el Salvador. Recuérdame, Jesús piadoso. Dios, perdónalos, concédeles el descanso eterno. Sálvame\""
            },
            {
                orden: "5",
                titulo: "EARTH SONG",
                compositor: "Frank Ticheli",
                anio: "2006",
                nota: "\"Canción de la Tierra\" nos propone reflexionar sobre el sufrimiento que vemos en el mundo. Pero en medio del dolor, hay esperanza, la música y el canto son nuestro refugio y nuestra luz."
            },
            {
                orden: "6",
                titulo: "THERE WILL BE REST",
                compositor: "Frank Ticheli",
                anio: "1999",
                letra: "Sara Teasdale (1884-1933)",
                nota: "Habrá quietud y estrellas brillantes sobre los techos cubiertos de nieve. Un reino de paz, de olvido sereno, la música del silencio, sagrada y profunda. \nEn mi mente solitaria, en un sueño, crearé este mundo. Hallaré el cristal de la paz, sobre mí, estrellas encontraré."
            },            
            /*
            {
                orden: "7",
                titulo: "SIXTEEN TONS",
                musica_letra: "Merle Travis",
                arreglo: "Kirby Shaw",
                anio: "2013",
                nota: "Dieciséis toneladas. Un retrato crudo y sincero de la vida del trabajador del carbón. Un hombre fuerte, hecho de músculo y sangre, pero con una tragedia: la deuda. \"Cargas dieciséis toneladas, ¿qué obtienes? Otro día más viejo y más endeudado. San Pedro no me lleva porque le debo hasta mi alma a mi patrón\"."
            },
            */
            {
                orden: "8",
                titulo: "LA MORENA",
                arreglo: "Julio Morales",
                genero: "Son Jarocho",
                anio: "2013",
                nota: "Nos transporta directamente a la alegría y el color del folclore mexicano con sus melodías pegadizas y su energía contagiosa. El joven le promete a su amada, la Morena, un viaje de lujo: Será llevada a Jalapa en un bello ferrocarril con durmientes de plata y rieles de marfil. Pero con una condición: que la Morena le dé su amor."
            },
            {
                orden: "9",
                titulo: "LOS MAREADOS",
                letra: "Enrique Cadícamo",
                musica: "Juan Carlos Cobián",
                arreglo: "Liliana Cangiano",
                genero: "Tango",
                anio: "1991",
                nota: "Clásico tango porteño. La escena es trágica y romántica a la vez: una despedida definitiva, un brindis amargo por un gran amor del que sólo queda un adiós. <br>Solista: <strong>Mariano Arenas</strong>"
            },
            {
                orden: "10",
                titulo: "GLORIA CUM SANCTO SPIRITU",
                compositor: "Hyo-Won Woo",
                anio: "2002",
                nota: "Gloria a Dios en el cielo y paz a los hombres de buena voluntad. Esta versión contemporánea recrea con energía y emoción uno de los himnos más antiguos de la liturgia cristiana."
            },
            {
                orden: "11",
                titulo: "SWING LOW, SWEET CHARIOT",
                genero: "Spiritual",
                arreglo: "David L. Brunner",
                anio: "1994",
                nota: "Un emotivo espiritual afroamericano que nos trae una melodía de profunda esperanza. Es un canto de liberación, que utiliza la imagen de una \"dulce carroza\" (sweet chariot) que con su suave balanceo, viene a liberarme de las cadenas de la esclavitud para llevarme a casa."
            }
            /*{
                titulo: "BALDOSA FLOJA",
                musica_original: "F. Sassone y J. Bocazzi",
                letra_original: "Dante Gilardoni",
                version_coral: "Rolando Budini",
                genero: "Milonga",
                anio:"2010",
                nota: "Una milonga que en su versión coral adquiere una nueva dimensión de expresividad. La \"Baldosa Floja\" con su ritmo característico y su letra nostálgica, evoca la esencia del tango y la danza popular argentina, invitando a la reflexión sobre el destino y la constancia en el amor."
            },            
            {
                titulo: "TE QUIERO",
                letra: "Mario Benedetti",
                musica: "Alberto Favero",
                arreglo: "Liliana Cangiano",
                anio: "1995",
                nota: "Basado en el célebre poema de Mario Benedetti, este arreglo coral de Liliana Cangiano transforma la emotiva poesía en una experiencia musical conmovedora. La obra es un canto al amor en sus múltiples facetas, celebrando la complicidad, la rebeldía y la conexión profunda."
            },
            {
                titulo: "SAMBA LANDÓ",
                compositores: "Manns / Salinas / Seves",
                arreglo: "Joaquín Martínez Dávila",
                anio: "2024",
                nota: "Una enérgica samba con ritmos vibrantes y un mensaje de libertad. Este arreglo coral de \"Samba Landó\" invita a dejarse llevar por la percusión vocal y la cadencia de la música afro-latinoamericana, celebrando la libertad y la danza."
            }
            */
        ]
    };

    const conciertosListDiv = document.getElementById('conciertos-list');

    if (conciertosListDiv) {
        conciertosListDiv.innerHTML = ''; // Limpiar el contenido de "Cargando conciertos..."

        const conciertoDiv = document.createElement('div');
        conciertoDiv.classList.add('concierto-item');
        conciertoDiv.innerHTML = `
            
            <h3>${proximoConcierto.titulo}</h3>
            <h4>"${proximoConcierto.descripcion}"</h4>
            <p><img width="260px" src="${proximoConcierto.img}" style="display: block; margin: auto"></p>
            <!--
            <p><strong>Fecha:</strong> ${proximoConcierto.fecha}</p>
            <p><strong>Hora:</strong> ${proximoConcierto.hora}</p>
            <p><strong>Lugar:</strong> ${proximoConcierto.lugar}</p>
            -->
            <button class="btn btn-programa">Ver Programa</button>
            <div class="programa-detail">
                <h4>Programa</h4>
                <ul>
                    ${proximoConcierto.programa.map(obra => `
                        <li>
                            <strong><i style="color: var(--accent-color);">${obra.titulo}</i></strong>
                            ${obra.compositor ? `<br>Compositor: ${obra.compositor}` : ''}
                            ${obra.letra ? `<br>Letra: ${obra.letra}` : ''}
                            ${obra.musica_letra ? `<br>Música y Letra: ${obra.musica_letra}` : ''}
                            ${obra.musica_original ? `<br>Música Original: ${obra.musica_original}` : ''}
                            ${obra.letra_original ? `<br>Letra Original: ${obra.letra_original}` : ''}
                            ${obra.version_coral ? `<br>Versión Coral: ${obra.version_coral}` : ''}
                            ${obra.arreglo ? `<br>Arreglo Coral: ${obra.arreglo}` : ''}
                            ${obra.genero ? `<br>Género: ${obra.genero}` : ''}
                            ${obra.texto ? `<br>Texto: ${obra.texto}` : ''}
                            ${obra.anio ? `<br>Año: ${obra.anio}` : ''}
                            <p class="nota">${obra.nota}</p>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
        conciertosListDiv.appendChild(conciertoDiv);

        // Añadir evento al botón "Ver Programa Completo"
        document.querySelectorAll('.btn-programa').forEach(button => {
            button.addEventListener('click', (event) => {
                const programaDetail = event.target.nextElementSibling; // El div programa-detail está justo después del botón
                if (programaDetail) {
                    programaDetail.style.display = programaDetail.style.display === 'block' ? 'none' : 'block';
                    event.target.textContent = programaDetail.style.display === 'block' ? 'Ocultar Programa' : 'Ver Programa';
                }
            });
        });
    }

    // --- Carrusel de Galería (mantener el mismo código) ---
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = document.querySelectorAll('.carousel-slide img');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');

    if (carouselSlide && carouselImages.length > 0) {
        let counter = 0;
        // Recalculamos el tamaño inicial en caso de que las imágenes se carguen después
        const updateSize = () => carouselImages[0].clientWidth;
        let size = updateSize();

        // Función para mover el carrusel
        function updateCarousel() {
            carouselSlide.style.transform = `translateX(${-size * counter}px)`;
        }

        // Botón Siguiente
        nextBtn.addEventListener('click', () => {
            if (counter >= carouselImages.length - 1) { // Si es la última imagen, vuelve al inicio
                counter = 0;
            } else {
                counter++;
            }
            updateCarousel();
        });

        // Botón Anterior
        prevBtn.addEventListener('click', () => {
            if (counter <= 0) { // Si es la primera imagen, ve a la última
                counter = carouselImages.length - 1;
            } else {
                counter--;
            }
            updateCarousel();
        });

        // Ajustar el carrusel si la ventana cambia de tamaño
        window.addEventListener('resize', () => {
            size = updateSize(); // Recalcula el ancho al redimensionar
            updateCarousel();
        });

        // Inicializar la posición del carrusel una vez que se carga todo
        updateCarousel();

        // Opcional: Carrusel automático
        // setInterval(() => {
        //     if (counter >= carouselImages.length - 1) {
        //         counter = 0;
        //     } else {
        //         counter++;
        //     }
        //     updateCarousel();
        // }, 5000); // Cambia cada 5 segundos
    }

    //Cargar los integrantes
    const integrantesCoro = [
        { nombre: "Ángela Cano", cuerda: "Soprano" },
        { nombre: "Ivana Morales", cuerda: "Soprano" },
        { nombre: "Marcia Sanchez", cuerda: "Soprano" },
        { nombre: "Maria Ines Cabrera", cuerda: "Soprano" },
        { nombre: "Marina Faggian", cuerda: "Soprano" },
        { nombre: "Martina Lecea", cuerda: "Soprano" },
        { nombre: "Mercedes Bosch", cuerda: "Soprano" },
        { nombre: "Rocío Pascual", cuerda: "Soprano" },
        { nombre: "Romina Lombardo", cuerda: "Soprano" },
        { nombre: "Valeria Valdivieso", cuerda: "Soprano" },
        //{ nombre: "Cecilia Arango", cuerda: "Contralto" },
        { nombre: "Claudia Corvalán", cuerda: "Contralto" },
        { nombre: "Florencia Adam", cuerda: "Contralto" },
        { nombre: "Jesuana Guerra", cuerda: "Contralto" },
        { nombre: "Jimena Moyano", cuerda: "Contralto" },
        { nombre: "Marianela Severino", cuerda: "Contralto" },
        { nombre: "Sofía Michaux", cuerda: "Contralto" },
        { nombre: "Valeria Echenique", cuerda: "Contralto" },
        { nombre: "Victoria Peinetti", cuerda: "Contralto" },
        { nombre: "Bruno Bitar", cuerda: "Tenor" },
        { nombre: "Javier Torres", cuerda: "Tenor" },
        { nombre: "Marcelo Ayos", cuerda: "Tenor" },
        //{ nombre: "Marcelo Alvarez", cuerda: "Tenor" },
        { nombre: "Mariano Arenas", cuerda: "Tenor" },
        { nombre: "Emiliano Tolosa", cuerda: "Bajo" },
        //{ nombre: "Fabián Pionetti", cuerda: "Bajo" },
        { nombre: "Gustavo Longo", cuerda: "Bajo" },
        { nombre: "Kevin Caillet Bois", cuerda: "Bajo" },
        { nombre: "Norberto Llopiz", cuerda: "Bajo" },        
        { nombre: "Pablo Vergara", cuerda: "Bajo" },
        { nombre: "Pablo Yornet", cuerda: "Bajo" }
    ];

    const membersGrid = document.querySelector('.members-grid');

    if (membersGrid) {
        // Limpiar cualquier contenido existente (como los placeholders)
        membersGrid.innerHTML = ''; 

        // Iterar sobre el arreglo de integrantes y crear las tarjetas
        integrantesCoro.forEach(integrante => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');
            memberCard.innerHTML = `
                <p class="member-name">${integrante.nombre}</p>
                <p>${integrante.cuerda}</p>
            `;
            membersGrid.appendChild(memberCard);
        });
    }

});