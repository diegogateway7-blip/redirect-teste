export default function handler(req, res) {
  // CONFIGURAÇÃO - ALTERE AQUI
  const PHONE = "551931672944"; // SEU NÚMERO
  
  // Capturar parâmetros
  const { fbclid, utm_source, utm_campaign, text } = req.query;
  
  // Construir URL do WhatsApp
  let whatsappUrl = `https://wa.me/${PHONE}/`;
  
  // Adicionar parâmetros
  const params = [];
  if (text) params.push(`text=${encodeURIComponent(text)}`);
  if (fbclid) params.push(`fbclid=${encodeURIComponent(fbclid)}`);
  if (utm_source) params.push(`utm_source=${encodeURIComponent(utm_source)}`);
  if (utm_campaign) params.push(`utm_campaign=${encodeURIComponent(utm_campaign)}`);
  
  if (params.length > 0) {
    whatsappUrl += `?${params.join('&')}`;
  }
  
  // Headers de redirecionamento
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  
  // Redirecionamento 302
  res.redirect(302, whatsappUrl);
}
