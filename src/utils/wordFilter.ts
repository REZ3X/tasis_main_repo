const bannedWords = [
    'anjing', 'babi', 'kampret', 'bangsat', 'kontol', 'memek', 'ngentot', 'jancuk', 'k0nt0l', 'kont0l', 'k0ntol', 'k0nt01'
  ];
  
  export function containsBannedWords(text: string): boolean {
    const lowerText = text.toLowerCase();
    return bannedWords.some(word => lowerText.includes(word));
  }
  
  export function filterBadWords(text: string): string {
    let filteredText = text.toLowerCase();
    bannedWords.forEach(word => {
      const regex = new RegExp(word, 'gi');
      filteredText = filteredText.replace(regex, '*'.repeat(word.length));
    });
    return filteredText;
  }