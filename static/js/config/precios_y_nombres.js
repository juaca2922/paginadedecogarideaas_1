// Configuración de precios por cantidad para cada producto
const preciosPorCantidad = {
    // Macetas (producto base)
    macetas: {
        macetas: { 0: 6.00, 25: 4.80, 50: 4.20, 100: 4.00 },
        macetas_con_yute: { 0: 6.50, 25: 5.30, 50: 4.70, 100: 4.50 },
        macetas_con_caja: { 0: 7.50, 25: 6.30, 50: 5.70, 100: 5.50 },
        macetas_con_sticker: { 0: 6.40, 25: 5.20, 50: 4.60, 100: 4.40 }
    },
    // Macetas Redondas (producto separado)
    macetas_redondas: {
        macetas_redondas: { 0: 7.00, 25: 5.50, 50: 4.90, 100: 4.70 },
        macetas_redondas_con_girasol: { 0: 7.50, 25: 5.90, 50: 5.30, 100: 5.10 },
        macetas_redondas_con_caja: { 0: 8.50, 25: 7.00, 50: 6.40, 100: 6.20 },
        macetas_redondas_con_girasol_y_caja: { 0: 8.90, 25: 7.40, 50: 6.80, 100: 6.60 }
    },
    // Macetas de Loza
    macetas_loza: {
        macetas_loza_redonda: { 0: 7.00, 25: 6.60, 50: 6.00, 100: 5.80 },
        macetas_loza_redonda_con_caja: { 0: 8.50, 25: 8.10, 50: 7.50, 100: 7.30 },
        macetas_loza_octogonal: { 0: 7.20, 25: 6.80, 50: 6.20, 100: 6.00 },
        macetas_loza_paloma: { 0: 8.00, 25: 7.30, 50: 6.70, 100: 6.50 },
        macetas_loza_paloma_con_caja: { 0: 9.50, 25: 8.80, 50: 8.20, 100: 8.80 }
    },
    // Macetas de Arcilla
    macetas_arcilla: {
        macetas_arcilla: { 0: 7.50, 25: 6.50, 50: 5.90, 100: 5.70 },
        macetas_arcilla_con_yute: { 0: 8.10, 25: 7.10, 50: 6.50, 100: 6.30 },
        macetas_arcilla_con_caja: { 0: 9.00, 25: 8.00, 50: 7.40, 100: 7.20 },
        macetas_arcilla_corazon: { 0: 8.00, 25: 7.00, 50: 6.40, 100: 6.20 },
        macetas_arcilla_corazon_con_caja: { 0: 9.50, 25: 8.50, 50: 7.90, 100: 7.70 }
    },
    // Velas (producto base)
    velas: {
        vela: { 0: 5.00, 25: 4.80, 50: 4.20, 100: 4.00 },
        vela_con_yute: { 0: 5.50, 25: 5.30, 50: 4.70, 100: 4.50 },
        vela_con_yute_y_soguilla_verde: { 0: 6.00, 25: 5.80, 50: 5.20, 100: 5.00 },
        vela_mas_empaque: { 0: 5.70, 25: 5.50, 50: 4.90, 100: 4.70 },
        vela_con_yute_mas_empaque: { 0: 6.30, 25: 6.00, 50: 5.40, 100: 5.20 },
        vela_con_caja: { 0: 6.50, 25: 6.30, 50: 5.70, 100: 5.50 },
        vela_con_caja_y_yute: { 0: 7.00, 25: 6.80, 50: 6.20, 100: 6.00 }
    },
    // Velas Tubo (producto separado)
    velas_tubo: {
        velas_tubo: { 0: 6.00, 25: 4.80, 50: 4.20, 100: 4.00 },
        velas_tubo_mas_empaque: { 0: 6.70, 25: 5.50, 50: 4.90, 100: 4.70 },
        velas_tubo_con_angelito: { 0: 7.00, 25: 5.80, 50: 5.20, 100: 5.00 },
        velas_tubo_con_angelito_mas_empaque: { 0: 7.70, 25: 6.50, 50: 5.90, 100: 5.70 }
    }
};

// Configuración de nombres visibles para cada producto
const nombresVisibles = {
    macetas: {
        macetas: "macetitas",
        macetas_con_yute: "macetitas con yute",
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
🪴 Macetita decorada
🌱 Suculenta natural
💌 Tarjetita personalizada con el nombre y mensaje que desees`,

    // Macetas Redondas
    macetas_redondas: `
Incluye:
🪴 Maceta redonda decorada
🌱 Suculenta natural
💌 Tarjetita personalizada con el nombre y mensaje que desees`,

    // Macetas de Loza
    macetas_loza: `
Incluye:
🏺 Maceta de loza decorada
🌱 Planta natural
💌 Tarjetita personalizada con el nombre y mensaje que desees`,

    // Macetas de Arcilla
    macetas_arcilla: `
Incluye:
🏺 Maceta de arcilla
🌱 Planta natural
💌 Tarjetita personalizada con el nombre y mensaje que desees`,

    // Velas
    velas: `
Incluye:
🕯️ Vela decorada
🌿 Detalles personalizados
💌 Tarjetita personalizada con el nombre y mensaje que desees`,

    // Velas Tubo
    velas_tubo: `
Incluye:
🕯️ Vela tubo decorada
🌿 Detalles personalizados
💌 Tarjetita personalizada con el nombre y mensaje que desees`,
};

