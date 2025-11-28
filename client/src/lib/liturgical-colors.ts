export function getLiturgicalColorToken(colorKey: string): string {
  const tokens: Record<string, string> = {
    // Valori testuali italiani
    'verde': '--liturgical-ordinary',
    'viola': '--liturgical-advent',
    'rosso': '--liturgical-feast',
    'bianco': '--liturgical-solemnity',
    // Valori dell'API esterna (fallback keys)
    'success': '--liturgical-ordinary',
    'primary': '--liturgical-feast',
    'secondary': '--liturgical-advent',
    'warning': '--liturgical-solemnity',
  };
  return tokens[colorKey.toLowerCase()] || '--liturgical-ordinary';
}
