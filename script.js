document.addEventListener('DOMContentLoaded', () => {

    // --- Datos del Próximo Concierto ---
    const proximoConcierto = {
        
        titulo: "",
        descripcion: "",
        img: "images/conciertos/EmocionesCompartidas.jpeg",
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
                nota: "Inspirada en un pasaje del Cantar de los Cantares, esta obra evoca la belleza, la ternura y el amor a través de una delicada escritura coral. Su melodía repite con serenidad: \"Como el lirio entre las espinas, así eres tú, amada mía\", convirtiendo un antiguo poema en una experiencia musical íntima y contemplativa."
            },
            {
                orden: "4",
                titulo: "ALLELUIA",
                compositor: "Fredrik Sixten",
                anio: "2014",
                nota: "Alleluia es una antigua expresión hebrea de alegría y alabanza. En esta obra, una sola palabra se transforma en un recorrido musical que va desde la contemplación hasta la celebración, expresando gratitud, esperanza y entusiasmo a través de una escritura coral luminosa y expansiva."
            },
            /*{
                orden: "3",
                titulo: "O NATA LUX",
                compositor: "Morten Lauridsen",
                anio: "1997",
                nota: "Un abrazo de luz en la oscuridad. Una voz que se eleva en una súplica suave y muy sentida \"Luz nacida de la Luz, Jesús, Redentor del mundo, ten piedad de nosotros que te suplicamos\"."
            },*/
            {
                orden: "9",
                titulo: "DIES IRAE",
                compositor: "Michael John Trotta",
                anio: 2020,
                texto: "Tradicional",
                nota: "Inspirada en el célebre himno medieval Dies Irae (\"Día de la ira\"), esta obra recrea la intensidad del antiguo poema que describe el Juicio Final. La música alterna momentos de gran dramatismo con pasajes de recogimiento, reflejando tanto el temor como la esperanza y la búsqueda de misericordia."
            },
            {
                orden: "3",
                titulo: "EARTH SONG",
                compositor: "Frank Ticheli",
                anio: "2006",
                nota: "\"Canción de la Tierra\" es una reflexión sobre el sufrimiento humano y los desafíos de nuestro tiempo. Frente al dolor y la incertidumbre, la obra propone un mensaje de esperanza, recordándonos que la música y el canto pueden ser un refugio, un consuelo y una fuerza capaz de inspirar un futuro mejor."
            },
            {
                orden: "5",
                titulo: "THERE WILL BE REST",
                compositor: "Frank Ticheli",
                letra: "Sara Teasdale (1884-1933)",
                anio: "1999",                
                nota: "Sobre un poema de la escritora estadounidense Sara Teasdale, esta obra imagina un paisaje nocturno de silencio, estrellas y serenidad. La música invita a detenerse, respirar y encontrar un espacio de paz interior, donde el descanso y la belleza ofrecen consuelo frente a las inquietudes de la vida."
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
                orden: "7",
                titulo: "LA MORENA",
                arreglo: "Julio Morales",
                anio: "2013",
                nota: "Con el color y la vitalidad del folclore mexicano, esta canción narra el cortejo de un joven enamorado que promete a \"La Morena\" un viaje extraordinario a bordo de un tren imaginario, construido con durmientes de plata y rieles de marfil. Llena de humor, picardía y ritmo, celebra la alegría de la música popular."
            },
            {
                orden: "10",
                titulo: "LOS MAREADOS",
                letra: "Enrique Cadícamo",
                arreglo: "Liliana Cangiano",                
                anio: "1991",
                nota: "Uno de los grandes clásicos del tango argentino. En un último encuentro, dos antiguos amantes brindan mientras intentan disimular el dolor de una despedida definitiva. La música combina nostalgia, pasión y elegancia, convirtiendo esta historia de amor perdido en una de las páginas más memorables del repertorio porteño. <br>Solistas: <strong>Ivana Morales y Mariano Arenas</strong>"
            },
            {
                orden: "2",
                titulo: "GLORIA CUM SANCTO SPIRITU",
                compositor: "Hyo-Won Woo",
                anio: "2002",
                nota: "Basada en el tradicional texto del Gloria, esta obra celebra la alegría, la paz y la alabanza con un lenguaje musical contemporáneo. La compositora combina intensidad rítmica, contrastes expresivos y una escritura coral vibrante para dar nueva vida a uno de los himnos más antiguos de la tradición cristiana."
            },
            /*{
                orden: "11",
                titulo: "SWING LOW, SWEET CHARIOT",
                genero: "Spiritual",
                arreglo: "David L. Brunner",
                anio: "1994",
                nota: "Un emotivo espiritual afroamericano que nos trae una melodía de profunda esperanza. Es un canto de liberación, que utiliza la imagen de una \"dulce carroza\" (sweet chariot) que con su suave balanceo, viene a liberarme de las cadenas de la esclavitud para llevarme a casa."
            }*/
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
            {
                orden: "6",
                titulo: "PRAYER",
                compositor: "Henry Newmann",
                arreglo: "René Clausen",
                anio: "2009",
                nota: "Esta obra toma como base un fragmento de Radiating Christ, oración escrita por John Henry Newman en el siglo XIX. Difundida posteriormente por la Madre Teresa de Calcuta dentro de la espiritualidad de su congregación, la oración expresa el deseo de que la propia vida refleje el amor, la bondad y la luz de Dios hacia los demás. La música realza su carácter íntimo y profundamente meditativo."
            },
            {
                orden: "8",
                titulo: "LIGHT OF A CLEAR BLUE MORNING",
                compositor: "Dolly Parton",
                arreglo: "Craig Hella Johnson",
                anio: "2010",
                nota: "Escrita originalmente por Dolly Parton en 1977, esta canción nació como una expresión de esperanza después de un momento de cambio en su vida. El arreglo coral de Craig Hella Johnson potencia su fuerza emocional y convierte este clásico de la música popular en un canto a la resiliencia y a la confianza en que, tras los momentos difíciles, siempre puede aparecer una nueva luz."
            }
        ]
    };

    const conciertosListDiv = document.getElementById('conciertos-list');

    if (conciertosListDiv) {
        conciertosListDiv.innerHTML = ''; // Limpiar el contenido de "Cargando conciertos..."

        const conciertoDiv = document.createElement('div');
        conciertoDiv.classList.add('concierto-item');
        conciertoDiv.innerHTML = `
            
            <h3>${proximoConcierto.titulo}</h3>
            <h4>${proximoConcierto.descripcion}</h4>
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
                    ${[...proximoConcierto.programa]
                        .sort((a, b) => a.orden - b.orden)
                        .map(obra => `
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
        setInterval(() => {
            if (counter >= carouselImages.length - 1) {
                counter = 0;
            } else {
                counter++;
            }
            updateCarousel();
        }, 5000); // Cambia cada 5 segundos
    }

    //Cargar los integrantes
    const integrantesCoro = [
        { nombre: "Ángela Cano", cuerda: "Soprano" },
        { nombre: "Gianna Hoheb", cuerda: "Soprano" },
        { nombre: "Ivana Morales", cuerda: "Soprano" },
        { nombre: "Marcia Sanchez", cuerda: "Soprano" },
        { nombre: "Maria Ines Cabrera", cuerda: "Soprano" },
        { nombre: "Marina Faggian", cuerda: "Soprano" },
        { nombre: "Martina Lecea", cuerda: "Soprano" },
        { nombre: "Mercedes Bosch", cuerda: "Soprano" },
        { nombre: "Rocío Pascual", cuerda: "Soprano" },
        { nombre: "Romina Lombardo", cuerda: "Soprano" },
        { nombre: "Valeria Valdivieso", cuerda: "Soprano" },
        //
        { nombre: "Candelaria", cuerda: "Contralto" },
        { nombre: "Claudia Corvalán", cuerda: "Contralto" },
        { nombre: "Florencia Adam", cuerda: "Contralto" },
        { nombre: "Jesuana Guerra", cuerda: "Contralto" },
        { nombre: "Jimena Moyano", cuerda: "Contralto" },
        { nombre: "María Fernanda Lavenia", cuerda: "Contralto" },
        { nombre: "Marianela Severino", cuerda: "Contralto" },
        { nombre: "Martina Cona", cuerda: "Contralto" },
        { nombre: "Valeria Echenique", cuerda: "Contralto" },
        { nombre: "Victoria Peinetti", cuerda: "Contralto" },
        //
        { nombre: "Bruno Bitar", cuerda: "Tenor" },
        { nombre: "Critian Zúñiga", cuerda: "Tenor" },
        { nombre: "Denis Ozan", cuerda: "Tenor" },
        { nombre: "Emanuel Tuzzi", cuerda: "Tenor" },
        { nombre: "Javier Torres", cuerda: "Tenor" },
        { nombre: "Lucas Martinez", cuerda: "Tenor" },
        { nombre: "Lucio Marinsalda", cuerda: "Tenor" },
        { nombre: "Marcelo Ayos", cuerda: "Tenor" },
        { nombre: "Mariano Arenas", cuerda: "Tenor" },
        //
        { nombre: "Agustín Blanc", cuerda: "Tenor" },
        { nombre: "Bruno Schafer", cuerda: "Tenor" },
        { nombre: "Facundo Paez", cuerda: "Tenor" },
        { nombre: "Gustavo Longo", cuerda: "Bajo" },
        { nombre: "Kevin Caillet Bois", cuerda: "Bajo" },
        { nombre: "Matías Corvalán", cuerda: "Tenor" },
        { nombre: "Matthew Cunnliffe", cuerda: "Tenor" },
        { nombre: "Norberto Llopiz", cuerda: "Bajo" },        
        { nombre: "Pablo Vergara", cuerda: "Bajo" },
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