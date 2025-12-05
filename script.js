document.addEventListener('DOMContentLoaded', () => {
    // --- Datos del Próximo Concierto ---
    const proximoConcierto = {
        /*
        titulo: "Manifestaciones",
        fecha: "Domingo 07 de Setiembre 2025",
        hora: "20:00",
        lugar: "Espacio patrimonial y artístico Cristóforo Colombo - Godoy Cruz",
        descripcion: "Sumérgete en un programa diverso que celebra la luz, la esperanza y las raíces musicales del mundo. Desde la serenidad de la música sacra contemporánea hasta la vibrante energía del folclore latinoamericano y el jazz, el Ensamble Vocal Acrux te invita a un recorrido sonoro inolvidable.",
        */
        programa: [
            {
                orden: "1",
                titulo: "SICUT LILIUM INTER SPINAS",
                compositor: "M. Raczynski",
                anio: "2006",
                nota: "El título de esta obra significa \"Como el lirio entre las espinas\". Una flor delicada que, a pesar de crecer en un lugar difícil, florece en todo su esplendor. Inspirada en el libro de la Biblia \"Cantar de los Cantares\", es una celebración de la belleza que brilla a pesar de todo. La melodía repite con ternura, en un sonido muy dulce con admiración y pureza, que la persona amada es hermosa."
            },
            {
                orden: "2",
                titulo: "ALLELUIA",
                compositor: "Fredrik Sixten",
                anio: "2014",
                nota: "Una explosión de alegría construida con una sola palabra: Alleluia! Empieza con un simple murmullo, casi un secreto. Pero poco a poco, va creciendo y creciendo, como una ola de emoción, júbilo puro y vibrante. Para luego desaparecer lentamente, como el eco lejano y glorioso de una celebración."
            },
            {
                orden: "3",
                titulo: "O NATA LUX",
                compositor: "Morten Lauridsen",
                anio: "1997",
                nota: "Es como un abrazo de luz en la oscuridad. Imaginen una noche serena y una voz que se eleva en una súplica suave y muy sentida a Jesús \"Luz nacida de la Luz y Redentor del mundo\". Susurro profundo y expresivo que pide algo tan sencillo y vital como la clemencia. Es una invitación a la paz interior."
            },
            {
                orden: "4",
                titulo: "DIES IRAE",
                compositor: "Michael John Trotta",
                anio: 2020,
                texto: "Tradicional",
                nota: "Dies Irae significa \"Día de la Ira\", el momento del Juicio Final. \"El día de la ira, ese día todo se reducirá a cenizas. La Muerte asombrará a la Naturaleza cuando resucite la creatura. Recuérdame, Jesús piadoso, no me deseches. Dios, perdónalos, concédeles el descanso eterno. Sálvame\""
            },
            {
                orden: "5",
                titulo: "EARTH SONG",
                compositor: "Frank Ticheli",
                anio: "2006",
                nota: "\"Canción de la Tierra\" nos hace reflexionar, con una reverencia solemne, sobre el sufrimiento que vemos en el mundo, esa \"oscura hora tormentosa\" de la guerra y la angustia. Pero, en medio del dolor, hay esperanza, la música y el canto son nuestro refugio y nuestra luz. Finalizando con una gran y sentida invocación a la Paz."
            },
            {
                orden: "6",
                titulo: "THERE WILL BE REST",
                compositor: "Frank Ticheli",
                anio: "1999",
                letra: "Sara Teasdale (1884-1933)",
                nota: "Habrá quietud y estrellas brillantes sobre los techos coronados de nieve. Un reino de paz, de olvido sereno, la música del silencio, sagrada y profunda. \nCrearé este mundo en un sueño en mi mente solitaria. Hallaré el cristal de la paz, sobre mí estrellas encontraré."
            },            
            {
                orden: "7",
                titulo: "SIXTEEN TONS",
                musica_letra: "Merle Travis",
                arreglo: "Kirby Shaw",
                anio: "2013",
                nota: "Dieciséis toneladas. Un retrato crudo y sincero de la vida del trabajador del carbón. Un hombre fuerte, hecho de músculo y sangre, pero con una tragedia: la deuda. \"Cargas dieciséis toneladas, ¿qué obtienes? Otro día más viejo y más endeudado. San Pedro no me lleva porque le debo hasta mi alma a mi patrón\"."
            },
            {
                orden: "8",
                titulo: "LA MORENA",
                arreglo: "Julio Morales",
                genero: "Son Jarocho",
                anio: "2013",
                nota: "Nos transporta directamente a la alegría y el color del folclore mexicano con sus melodías pegadizas y su energía contagiosa. La historia es una serenata coqueta: le promete a su amada, la Morena, un viaje de lujo: Será llevada a Jalapa en un bello ferrocarril con durmientes de plata y rieles de marfil. Pero con una condición: que la Morena le dé su amor."
            },
            {
                orden: "9",
                titulo: "LOS MAREADOS",
                letra: "Enrique Cadícamo",
                musica: "Juan Carlos Cobián",
                arreglo: "Liliana Cangiano",
                genero: "Tango",
                anio: "1991",
                nota: "Clásico tango porteño. La escena es trágica y romántica a la vez: una despedida definitiva, un brindis amargo por un gran amor del que sólo queda un adiós. <br>Solistas: <strong>Ivana Morales (Soprano) - Mariano Arenas (Tenor)</strong>"
            },
            {
                orden: "10",
                titulo: "GLORIA CUM SANCTO SPIRITU",
                compositor: "Hyo-Won Woo",
                anio: "2002",
                nota: "Esta obra, con su ritmo ágil y velocidad, es una celebración del espíritu. La música es una gran declaración: comienza cantando \"Gloria a Dios en las alturas\" y se afirma con una convicción poderosa: \"solo tú eres el Señor Altísimo\". Tras momentos de súplica y afirmación apasionada, todo se resuelve en un final resonante y expansivo: un gran Amén."
            },
            {
                orden: "11",
                titulo: "SWING LOW, SWEET CHARIOT",
                genero: "Spiritual",
                arreglo: "David L. Brunner",
                anio: "1994",
                nota: "Un emotivo espiritual afroamericano que nos trae una melodía de profunda esperanza. Es un canto de liberación, que utiliza la imagen de una \"dulce carroza\" (sweet chariot) que se balancea suavemente, que viene a llevarme al cielo. Una visión esperanzadora,  que reafirma la promesa de la liberación de las cadenas de la esclavitud y el descanso eterno."
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
            <!--
            <h3>${proximoConcierto.titulo}</h3>
            <p><strong>Fecha:</strong> ${proximoConcierto.fecha}</p>
            <p><strong>Hora:</strong> ${proximoConcierto.hora}</p>
            <p><strong>Lugar:</strong> ${proximoConcierto.lugar}</p>
            <p>${proximoConcierto.descripcion}</p>
            -->
            <img width="260px" src="images/conciertos/Concierto2025-10-17.jpeg" style="display: block; margin: auto">
            
            <button class="btn btn-programa">Ver Programa</button>
            <div class="programa-detail">
                <h4>Programa del Concierto:</h4>
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
        { nombre: "Cecilia Arango", cuerda: "Contralto" },
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
        { nombre: "Marcelo Alvarez", cuerda: "Tenor" },
        { nombre: "Mariano Arenas", cuerda: "Tenor" },
        { nombre: "Emiliano Tolosa", cuerda: "Bajo" },
        { nombre: "Fabián Pionetti", cuerda: "Bajo" },
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