export function setMessage(type, text) {
  return type && text ? { type, text } : null
}
