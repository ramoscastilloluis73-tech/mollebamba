// ===== DATOS DE MOLLEBAMBA =====
const datosMollebamba = {
    // Danzas típicas
    danzas: [
        {
            nombre: "Los Osos",
            imagen: "imagenes/lososos.jpg",
            descripcion: "Representación del respeto a la fauna andina, con máscaras y pasos enérgicos."
        },
        {
            nombre: "Carnaval Mollebambino",
            imagen: "imagenes/carnaval.jpg",
            descripcion: "Yunza, serpentina y tinya. Alegría pura en febrero."
        },
        {
            nombre: "Los Negros",
            imagen: "imagenes/losnegros.jpg",
            descripcion: "Danza colonial que evoca la libertad de los esclavos."
        }
    ],

    // Platos típicos
    platos: [
        {
            nombre: "Ajiaco de Cuy",
            imagen: "imagenes/cuy_chactado.png",
            descripcion: "Guiso espeso con maní y ají panca, plato bandera."
        },
        {
            nombre: "Cabrito",
            imagen: "imagenes/cabrito.png",
            descripcion: "Adobado en chicha de jora, tierno y aromático."
        },
        {
            nombre: "Caldo de Gallina",
            imagen: "imagenes/caldodegallina.png",
            descripcion: "Reconfortante, con fideos caseros y hierbabuena."
        }
    ],

    // Tradiciones
    tradiciones: [
        {
            titulo: "Semana Santa",
            imagen: "imagenes/semanaS01.jpg",
            descripcion: "Procesiones, viacrucis, misas y platillos típicos de la temporada."
        },
        {
            titulo: "Virgen del Carmen",
            imagen: "imagenes/imagen04.png",
            descripcion: "Patrona del distrito, cada 16, 17 y 18 de julio se celebra con procesión y danzas."
        },
        {
            titulo: "Señor de la Misericordia",
            imagen: "",
            descripcion: "Festividad el 14 de septiembre, con misas y comparsas."
        }
    ],

    // Galería de imágenes
    galeria: [
        { src: "imagenes/imagen.png", alt: "Nevado protector" },
        { src: "imagenes/SemanaS01.jpg", alt: "Semana Santa" },
        { src: "imagenes/imagen02.png", alt: "Río Mollebamba" },
        { src: "imagenes/imagen03.png", alt: "Plaza de Armas" },
        { src: "imagenes/imagen04.png", alt: "Virgen del Carmen" },
        { src: "imagenes/imagen05.png", alt: "Caminos ancestrales" },
        { src: "imagenes/paisaje_mollebamba.jpg", alt: "Mirador" }
    ],

    // Artesanías
    artesanias: [
        {
            nombre: "Tejidos en lana",
            imagen: "imagenes/tejido.jpg",
            descripcion: "Chompas, ponchos y mantas hechos por tejedoras."
        },
        {
            nombre: "Mates burilados",
            imagen: "imagenes/mates.jpg",
            descripcion: "Arte ancestral con motivos andinos."
        },
        {
            nombre: "Instrumentos musicales",
            imagen: "imagenes/instrumentos.jpg",
            descripcion: "Quenas, tinya y charangos tallados a mano."
        }
    ],

    // Testimonios
    testimonios: [
        {
            nombre: "Ana López",
            ciudad: "Lima",
            comentario: "El paisaje es impresionante y la danza de los osos es única. Volveré cada año.",
            estrellas: 4
        },
        {
            nombre: "Carlos M.",
            ciudad: "Trujillo",
            comentario: "El ajiaco de cuy es el mejor que he probado. Gente muy hospitalaria.",
            estrellas: 4
        }
    ],

    // Calendario de festividades
    festividades: [
        {
            mes: "Enero",
            dia: 1,
            nombre: "Año Nuevo Andino",
            descripcion: "Celebración con rituales de agradecimiento a la Pachamama."
        },
        {
            mes: "Febrero/Marzo",
            dia: null,
            nombre: "Carnaval Mollebambino",
            descripcion: "Yunza, serpentina, música de tinya y mucha alegría."
        },
        {
            mes: "Marzo/Abril",
            dia: null,
            nombre: "Semana Santa",
            descripcion: "Una de las celebraciones más conmovedoras de la provincia, que revive la Pasión, Muerte y Resurrección de Cristo. Destaca el Vía Crucis en vivo, la procesión del Señor del Santo Sepulcro y la tradicional figura del 'Carga Palo'."
        },
        {
            mes: "Julio",
            dia: 16,
            nombre: "Virgen del Carmen",
            descripcion: "Patrona del distrito. Procesión, danzas y castillos."
        },
        {
            mes: "Agosto",
            dia: 3,
            nombre: "Aniversario del distrito",
            descripcion: "Fundación de Mollebamba. Desfile cívico y actividades culturales."
        },
        {
            mes: "Septiembre",
            dia: 14,
            nombre: "Señor de la Misericordia",
            descripcion: "Misa, procesión y comparsas."
        },
        {
            mes: "Noviembre",
            dia: 2,
            nombre: "Día de los Difuntos",
            descripcion: "Visita a cementerios, ofrendas y comidas típicas."
        }
    ],

    // ===== SERVICIOS TURÍSTICOS (ESTÁTICOS) =====
    // Estos datos reemplazan a la base de datos
    serviciosTurismo: [
        {
            id: 1,
            nombre: "Laguna de Huamanbul",
            ubicacion: "Zona alta de Miraflores, Mollebamba",
            descripcion: "Hermosa laguna rodeada de un bosque de árboles. El agua cambia de color al mediodía. Según la tradición, es un puquio o manantial de origen ancestral.",
            imagen: "imagenes/laguna.jpg",   // asegúrate de tener esta imagen o cámbiala
            servicios: [
                { nombre: "Empresa de transportes \"Pamelita SAC\"", tipo: "Combi / Bus", contacto: "+51 987 654 321" },
                { nombre: "Viru Tours Travel", tipo: "Vehículo Turístico Privado", contacto: "+51 912 345 678" }
            ]
        },
        {
            id: 2,
            nombre: "Mirador Cerro Calvario / Altuganda",
            ubicacion: "Encima del pueblo de Tulpo",
            descripcion: "Zona arqueológica que funciona como un mirador natural. Desde aquí se puede observar el nevado de Pelagatos y el pueblo de Pallasca.",
            imagen: "imagenes/cerro.jpg",    // asegúrate de tener esta imagen o cámbiala
            servicios: [
                { nombre: "Empresa de transportes \"Pamelita SAC\"", tipo: "Combi / Bus", contacto: "+51 987 654 321" },
                { nombre: "Viru Tours Travel", tipo: "Vehículo Turístico Privado", contacto: "+51 912 345 678" },
                { nombre: "Don Manuel - Arrieros Mollebamba", tipo: "Transporte Tradicional (Burro/Caballo)", contacto: "Contacto directo en la plaza" }
            ]
        }
        // Puedes agregar más lugares aquí
    ]
};