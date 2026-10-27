// Official Spiral Development community and purchase destination.
const SPIRAL_LINKS = {
  download: 'https://discord.gg/U7Yt3vsQ4',
  community: 'https://discord.gg/U7Yt3vsQ4'
};
function openDestination(kind) {
  window.open(SPIRAL_LINKS[kind], '_blank', 'noopener,noreferrer');
}
document.querySelectorAll('.download').forEach(button => button.addEventListener('click', () => openDestination('download')));
document.querySelectorAll('.community').forEach(button => button.addEventListener('click', () => openDestination('community')));
