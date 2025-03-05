export const formatDate = (dateString: string): string => {
  try {
    // Handle MM/DD/YY format
    if (dateString.includes('/')) {
      const parts = dateString.split('/');
      // Assuming MM/DD/YY format
      if (parts.length === 3) {
        // Convert YY to YYYY if needed
        let year = parts[2];
        if (year.length === 2) {
          year = `20${year}`;
        }
        return new Date(`${year}-${parts[0]}-${parts[1]}`).toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        });
      }
    }
    
    // If it's already in a readable format, return as is
    if (dateString.includes('January') || 
        dateString.includes('February') || 
        dateString.includes('March') || 
        dateString.includes('April') || 
        dateString.includes('May') || 
        dateString.includes('June') || 
        dateString.includes('July') || 
        dateString.includes('August') || 
        dateString.includes('September') || 
        dateString.includes('October') || 
        dateString.includes('November') || 
        dateString.includes('December')) {
      return dateString;
    }
    
    // Default case: try to parse the date
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  } catch (error) {
    // Return original string if formatting fails
    return dateString;
  }
};

export const truncateText = (text: string, maxLength: number = 50): string => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}; 