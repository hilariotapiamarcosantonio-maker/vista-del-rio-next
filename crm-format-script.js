/**
 * Formateador de UI para el CRM de Vista del Río en Google Sheets.
 * Este script aplica un estilo premium al Dashboard y a la lista de Leads.
 * 
 * Autor: Marcos Hilario · Digital Architect
 */

function formatSystemUI(sheet) {
  // EL COMANDO MAESTRO: Elimina las líneas de cuadrícula
  sheet.setHideGridlines(true); 
  
  // Estética de la tabla de Leads
  if (sheet.getName() === "Leads") {
    sheet.getRange(1, 1, 1, 6).setBackground("#1c1917").setFontColor("#ffffff");
    sheet.setFrozenRows(1);
  }
  
  // Estética del Dashboard (Modo Aplicación)
  if (sheet.getName() === "Dashboard") {
    sheet.getRange("A1:Z100").setBackground("#0c0a09"); 
    sheet.getRange("B2").setValue("VISTA DEL RÍO · COMMAND CENTER")
      .setFontColor("#f5f5f4").setFontSize(14).setFontWeight("bold");
    sheet.getRange("B3").setValue("Sistemas por Marcos Hilario")
      .setFontColor("#78716c").setFontSize(9);

    // Formato de KPIs
    // Total Leads
    sheet.getRange("B6").setFontSize(36).setFontWeight("bold").setFontColor("#10b981"); // Esmeralda
    // Airbnb
    sheet.getRange("E6").setFontSize(36).setFontWeight("bold").setFontColor("#f59e0b"); // Oro
    // Corporativo
    sheet.getrange("H6").setFontSize(36).setFontWeight("bold").setFontColor("#3b82f6"); // Azul
    // Retiro
    sheet.getRange("K6").setFontSize(36).setFontWeight("bold").setFontColor("#a855f7"); // Púrpura (ejemplo)
  }
}

/**
 * NOTA: La configuración de los valores de los KPIs (ej. '=COUNT(Leads!A2:A)') 
 * y los títulos se deben realizar directamente en la hoja de cálculo, 
 * ya que este script se enfoca únicamente en el formato visual.
 */
