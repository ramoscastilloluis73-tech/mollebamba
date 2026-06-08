// ===== FUNCIONES PARA CARGAR CONTENIDO DINÁMICO =====

function crearCards(containerId, items, tipo = 'default') {
    const container = document.getElementById(containerId);
    if (!container) {
        console.warn(`Contenedor ${containerId} no encontrado`);
        return;
    }
    container.innerHTML = '';
    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        let contenido = '';
        if (tipo === 'tradicion') {
            const imgHtml = item.imagen ? `<img src="${item.imagen}" alt="${item.titulo}">` : '<div style="height: 200px; background: var(--gris-medio); display: flex; align-items: center; justify-content: center;"><i class="fas fa-landmark" style="font-size: 3rem; color: var(--verde-molle);"></i></div>';
            contenido = `${imgHtml}<h3>${item.titulo}</h3><p>${item.descripcion}</p>`;
        } else {
            contenido = `<img src="${item.imagen}" alt="${item.nombre}"><h3>${item.nombre}</h3><p>${item.descripcion}</p>`;
        }
        card.innerHTML = contenido;
        container.appendChild(card);
    });
}

function cargarGaleria(containerId, imagenes) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    imagenes.forEach(img => {
        const enlace = document.createElement('a');
        enlace.href = img.src;
        enlace.setAttribute('data-lightbox', 'galeria');
        enlace.className = 'foto';
        enlace.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
        container.appendChild(enlace);
    });
}

function cargarTestimonios(containerId, items) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    items.forEach(test => {
        const card = document.createElement('div');
        card.className = 'card';
        let estrellasHtml = '';
        for (let i = 0; i < test.estrellas; i++) estrellasHtml += '<i class="fas fa-star" style="color: var(--dorado);"></i> ';
        for (let i = test.estrellas; i < 5; i++) estrellasHtml += '<i class="fas fa-star" style="color: var(--gris-medio);"></i> ';
        card.innerHTML = `<div style="padding:1rem 1rem 0 1rem;">${estrellasHtml}</div><p style="padding:0 1rem;">"${test.comentario}"</p><p style="padding:0 1rem 1rem 1rem; font-style:italic;">- ${test.nombre}, ${test.ciudad}</p>`;
        container.appendChild(card);
    });
}

function cargarFestividades(containerId, items) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.warn(`Contenedor ${containerId} no encontrado`);
        return;
    }
    container.innerHTML = '';
    items.forEach(fiesta => {
        const mesDiv = document.createElement('div');
        mesDiv.className = 'mes';
        let fechaTexto = fiesta.dia ? `${fiesta.dia} - ` : '';
        mesDiv.innerHTML = `
            <h4>📅 ${fiesta.mes}</h4>
            <p><strong>${fechaTexto}${fiesta.nombre}</strong></p>
            <p style="font-size:0.9rem; color: var(--gris-oscuro);">${fiesta.descripcion}</p>
        `;
        container.appendChild(mesDiv);
    });
}

// ===== SERVICIOS TURÍSTICOS (datos estáticos, sin fetch) =====
function cargarServiciosTurismo() {
    const container = document.getElementById('servicios-container');
    if (!container) return;
    container.innerHTML = '';
    
    // Usar datos locales
    const lugares = datosMollebamba.serviciosTurismo;
    
    if (!lugares || lugares.length === 0) {
        container.innerHTML = `<div class="card" style="padding:1rem;"><p>🚧 Próximamente más servicios.</p></div>`;
        return;
    }
    
    lugares.forEach(lugar => {
        const lugarDiv = document.createElement('div');
        lugarDiv.className = 'card';
        lugarDiv.style.marginBottom = '1.5rem';
        
        let serviciosHTML = '<div><h4>🗺️ Opciones de Transporte:</h4><ul style="list-style: none; padding-left: 0;">';
        if (lugar.servicios && lugar.servicios.length > 0) {
            lugar.servicios.forEach(serv => {
                let telefono = serv.contacto.replace(/[^0-9+]/g, '');
                if (telefono.startsWith('+')) telefono = telefono.substring(1);
                const whatsappLink = `https://wa.me/${telefono}`;
                serviciosHTML += `
                    <li style="margin-bottom: 0.8rem; border-bottom: 1px solid var(--gris-medio); padding-bottom: 0.5rem;">
                        <strong>${serv.nombre}</strong> (${serv.tipo})<br>
                        📞 ${serv.contacto}<br>
                        <a href="${whatsappLink}" class="btn" target="_blank" style="margin-top:0.5rem; padding:0.4rem 1rem; font-size:0.85rem; display:inline-flex; align-items:center; gap:0.5rem;">
                            <i class="fab fa-whatsapp"></i> Consultar
                        </a>
                    </li>
                `;
            });
        } else {
            serviciosHTML += '<li>No hay servicios registrados aún.</li>';
        }
        serviciosHTML += '</ul></div>';
        
        // Imagen del lugar (si no tiene, usa la por defecto)
        const imagenSrc = lugar.imagen || "imagenes/imagen.png";
        
        lugarDiv.innerHTML = `
            <img src="${imagenSrc}" alt="${lugar.nombre}" style="width:100%; height:200px; object-fit:cover;">
            <div style="padding:1rem;">
                <h3>📍 ${lugar.nombre}</h3>
                <p><strong>Ubicación:</strong> ${lugar.ubicacion || 'No especificada'}</p>
                <p>${lugar.descripcion || ''}</p>
                ${serviciosHTML}
            </div>
        `;
        container.appendChild(lugarDiv);
    });
}

// ===== INICIALIZACIÓN ÚNICA =====
document.addEventListener('DOMContentLoaded', () => {
    if (typeof datosMollebamba === 'undefined') {
        console.error('Error: datosMollebamba no está definido');
        return;
    }
    crearCards('danzas-container', datosMollebamba.danzas);
    crearCards('platos-container', datosMollebamba.platos);
    crearCards('artesanias-container', datosMollebamba.artesanias);
    crearCards('tradiciones-container', datosMollebamba.tradiciones, 'tradicion');
    cargarGaleria('galeria-container', datosMollebamba.galeria);
    cargarTestimonios('testimonios-container', datosMollebamba.testimonios);
    cargarFestividades('calendario-container', datosMollebamba.festividades);

    // Menú hamburguesa
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');
    if (menuIcon && navLinks) {
        menuIcon.addEventListener('click', () => navLinks.classList.toggle('active'));
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => navLinks.classList.remove('active'));
        });
    }

    // Botón volver arriba
    const btnArriba = document.getElementById('btn-arriba');
    if (btnArriba) {
        window.addEventListener('scroll', () => btnArriba.classList.toggle('visible', window.scrollY > 300));
        btnArriba.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    // Cargar servicios turísticos (estáticos)
    cargarServiciosTurismo();
});