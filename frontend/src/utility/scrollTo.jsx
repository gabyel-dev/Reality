export function scrollToSection(elID, behavior = "smooth") {
  const el = document.getElementById(elID);

  if (!elID) return;

  el.scrollIntoView({ behavior });
}
