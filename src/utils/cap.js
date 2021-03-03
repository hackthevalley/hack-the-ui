export default function cap(str) {
  return str.replace(/(^\w)|(-\w)/g, (s) => s.slice(-1).toUpperCase());
}
