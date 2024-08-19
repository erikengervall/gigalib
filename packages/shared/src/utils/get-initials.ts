export function getInitials(sentense: string, maxLength = 2) {
  const words = sentense.split(' ');

  const initials = words
    .slice(0, maxLength)
    .map((word) => word.charAt(0).toUpperCase());

  return initials.join('');
}
