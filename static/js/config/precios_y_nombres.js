// Configuración de precios por cantidad para cada producto
const preciosPorCantidad = {
    // Macetas 
    macetas: {
        macetas: { 0: 6.00, 25: 4.80, 50: 4.20, 100: 4.00 },
        macetas_con_yute: { 0: 6.00 + 0.50, 25: 4.80 + 0.50, 50: 4.20 + 0.50, 100: 4.00 + 0.50 },
        macetas_con_caja_personalizada: { 0: 6.00 + 1.50, 25: 4.80 + 1.50, 50: 4.20 + 1.50, 100: 4.00 + 1.50 },
        macetas_con_caja: { 0: 5.50 + 1.00, 25: 4.80 + 1.00, 50: 4.20 + 1.00, 100: 4.00 + 1.00 },
        macetas_con_sticker: {  0: 6.00 + 0.40, 25: 4.80 + 0.40, 50: 4.20 + 0.40, 100: 4.00 + 0.40 }
    },
    // Macetas Redondas 
    macetas_redondas: {
        macetas_redondas: { 0: 7.00, 25: 5.50, 50: 4.90, 100: 4.70 },
        macetas_redondas_con_girasol: { 0: 7.00 + 0.5, 25: 5.50 + 0.4, 50: 4.90 + 0.4, 100: 4.70 + 0.4 },
        macetas_redondas_con_caja: { 0: 7.00 + 1.5, 25: 5.50 + 1.5, 50: 4.90 + 1.5, 100: 4.70 + 1.5 },
        macetas_redondas_con_girasol_y_caja: { 0: 7.00 + 1.9, 25: 5.50 + 1.9, 50: 4.90 + 1.9, 100: 4.70 + 1.9 }
    },
    // Macetas de Loza
    macetas_loza: {
        macetas_loza_redonda: { 0: 7.00, 25: 6.60, 50: 6.00, 100: 5.80 },
        macetas_loza_redonda_con_caja: { 0: 7.00 + 1.5, 25: 6.60 + 1.5, 50: 6.00 + 1.5, 100: 5.80 + 1.5 },
        macetas_loza_octogonal: { 0: 7.20, 25: 6.80, 50: 6.20, 100: 6.00 },
        macetas_loza_paloma: { 0: 8.00, 25: 7.30, 50: 6.70, 100: 6.50 },
        macetas_loza_paloma_con_caja: { 0: 8.00 + 1.5, 25: 7.30 + 1.5, 50: 6.70 + 1.5, 100: 6.50 + 1.5 }
    },
    // Macetas de Arcilla
    macetas_arcilla: {
        macetas_arcilla: { 0: 7.50, 25: 6.50, 50: 5.90, 100: 5.70 },
        macetas_arcilla_con_yute: { 0: 7.50 + 0.6, 25: 6.50 + 0.6, 50: 5.90 + 0.6, 100: 5.70 + 0.6 },// el yute es 0.6 porq se utiliza mas
        macetas_arcilla_con_caja: { 0: 7.50 + 1.5, 25: 6.50 + 1.5, 50: 5.90 + 1.5, 100: 5.70 + 1.5 },
        macetas_arcilla_corazon: { 0: 8.00, 25: 7.00, 50: 6.40, 100: 6.20 },
        macetas_arcilla_corazon_con_caja: { 0: 8.00 + 1.5, 25: 7.00 + 1.5, 50: 6.40 + 1.5, 100: 6.20 + 1.5 }
    },
    // Velas
    velas: {
        vela: { 0: 5.9, 25: 4.7, 50: 4.1, 100: 3.9 },
        vela_con_organza: { 0: 5.9 + 0.2, 25: 4.7 + 0.2, 50: 4.1 + 0.2, 100: 3.9 + 0.2 },
        velas_con_sticker: { 0: 5.9 + 0.3, 25: 4.7 + 0.3, 50: 4.1 + 0.3, 100: 3.9 + 0.3 },
        vela_con_yute: { 0: 5.9 + 0.5, 25: 4.7 + 0.5, 50: 4.1 + 0.5, 100: 3.9 + 0.5 },
        vela_con_yute_y_soguilla_verde: { 0: 5.9 + 1.0, 25: 4.7 + 1.0, 50: 4.1 + 1.0, 100: 3.9 + 1.0 },
        vela_mas_empaque: { 0: 5.9 + 0.7, 25: 4.7 + 0.7, 50: 4.1 + 0.7, 100: 3.9 + 0.7 },
        vela_con_yute_mas_empaque: { 0: 5.9 + 1.2, 25: 4.7 + 1.2, 50: 4.1 + 1.2, 100: 3.9 + 1.2 },
        vela_con_caja: { 0: 5.9 + 1.5, 25: 4.7 + 1.5, 50: 4.1 + 1.5, 100: 3.9 + 1.5 },
        vela_con_caja_y_yute: { 0: 5.9 + 2.0, 25: 4.7 + 2.0, 50: 4.1 + 2.0, 100: 3.9 + 2.0 }
    },
    // Velas Tubo 
    velas_tubo: {
        velas_tubo: { 0: 5.80, 25: 4.60, 50: 4.00, 100: 3.80 },
        velas_tubo_mas_empaque: { 0: 5.80 + 0.7, 25: 4.60 + 0.7, 50: 4.00 + 0.7, 100: 3.80 + 0.7 },
        velas_tubo_con_angelito: { 0: 5.80 + 1.2, 25: 4.60 + 1.2, 50: 4.00 + 1.2, 100: 3.80 + 1.2 },
        velas_tubo_con_angelito_mas_empaque: { 0: 5.80 + 1.9, 25: 4.60 + 1.9, 50: 4.00 + 1.9, 100: 3.80 + 1.9 }
    }
};

// Configuración de nombres visibles para cada producto
const nombresVisibles = {
    macetas: {
        macetas: "macetitas",
        macetas_con_yute: "macetitas con yute",
        macetas_con_caja_personalizada: "macetitas en caja con tarjeta personalizada",
        macetas_con_caja: "macetitas con caja",
        macetas_con_sticker: "macetitas con sticker"
    },
    macetas_redondas: {
        macetas_redondas: "macetas redondas",
        macetas_redondas_con_girasol: "macetas redondas con girasol",
        macetas_redondas_con_caja: "maceta redondas con caja",
        macetas_redondas_con_girasol_y_caja: "macetas redondas con girasol y caja"
    },
    macetas_loza: {
        macetas_loza_redonda: "macetas de loza redonda",
        macetas_loza_redonda_con_caja: "macetas de loza redonda con caja",
        macetas_loza_octogonal: "macetas de loza octogonal",
        macetas_loza_paloma: "macetas de loza paloma",
        macetas_loza_paloma_con_caja: "macetas de loza paloma con caja"
    },
    macetas_arcilla: {
        macetas_arcilla: "macetas de arcilla",
        macetas_arcilla_con_yute: "macetas de arcilla con yute",
        macetas_arcilla_con_caja: "macetas de arcilla con caja",
        macetas_arcilla_corazon: "macetas de arcilla de corazón",
        macetas_arcilla_corazon_con_caja: "macetas de arcilla de corazón con caja"
    },
    velas: {
        vela: "velas",
        vela_con_organza: "velas con organza",
        vela_con_sticker: "velas con sticker",
        vela_con_yute: "velas con yute",
        vela_con_yute_y_soguilla_verde: "velas con yute y soguilla verde",
        vela_mas_empaque: "velas más empaque",
        vela_con_yute_mas_empaque: "velas con yute más empaque",
        vela_con_caja: "velas con caja",
        vela_con_caja_y_yute: "velas con caja y yute"
    },
    velas_tubo: {
        velas_tubo: "velas tubo",
        velas_tubo_mas_empaque: "velas tubo más empaque",
        velas_tubo_con_angelito: "velas tubo con angelito",
        velas_tubo_con_angelito_mas_empaque: "velas tubo con angelito más empaque"
    }
};

// Textos base para el resumen de cada tipo de producto
const textosResumen = {
    // Macetas
    macetas: `
Incluye:
🪴 Una maceta con decoración especial
🌱 Suculenta natural enraizada
🪨 Piedritas decorativas
💌 Una tarjeta personalizada con el nombre y mensaje que prefieras`,

    // Macetas Redondas
    macetas_redondas: `
Incluye:
🪴 Maceta redonda decorada
🌱 Suculenta natural enraizada
🪨 Piedritas decorativas
💌 Tarjetita personalizada con el nombre y mensaje que desees`,

    // Macetas de Loza
    macetas_loza: `
Incluye:
🏺 Maceta de loza decorada
🌱 Suculenta natural enraizada
🪨 Piedritas decorativas
💌 Tarjetita personalizada con el nombre y mensaje que desees`,

    // Macetas de Arcilla
    macetas_arcilla: `
Incluye:
🏺 Maceta de arcilla
🌱 Suculenta natural enraizada
🪨 Piedritas decorativas
💌 Tarjetita personalizada con el nombre y mensaje que desees`,

    // Velas
    velas: `
Incluye:
🕯️ Vela decorada
🪻 Flores decorativas
🌿 Detalles personalizados
💌 Tarjetita personalizada con el nombre y mensaje que desees`,

    // Velas Tubo
    velas_tubo: `
Incluye:
🕯️ Vela tubo decorada
🪻 Flores decorativas
🌿 Detalles personalizados
💌 Tarjetita personalizada con el nombre y mensaje que desees`,
};

