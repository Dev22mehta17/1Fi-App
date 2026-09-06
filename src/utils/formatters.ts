/**
 * Formats a numeric value to Indian Currency standard string (e.g., ₹79,999)
 */
export function formatCurrency(amount: number | null | undefined): string {
  if (amount == null || isNaN(amount)) return '₹0';
  return `₹${amount.toLocaleString('en-IN')}`;
}

/**
 * Formats a plain number with Indian comma grouping (e.g., 79,999)
 */
export function formatNumber(amount: number | null | undefined): string {
  if (amount == null || isNaN(amount)) return '0';
  return amount.toLocaleString('en-IN');
}
