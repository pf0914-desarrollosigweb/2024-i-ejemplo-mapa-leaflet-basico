window.onload = init;

function init() {
  // Mapa Leaflet
  var mapa = L.map("mapaid").setView([9.632735, -83.64124], 8);

  // Capa base
  var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(mapa);

  // Otra capa base
  var esri = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    {
      attribution:
        "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
    }
  ).addTo(mapa);

  // Marcadores
  liberia = L.marker([10.633333, -85.433333]);
  liberia.bindTooltip("Liberia").openTooltip();
  liberia.addTo(mapa);

  limon = L.marker([10.002216, -83.084037]);
  limon.bindTooltip("Limón").openTooltip();
  limon.addTo(mapa);

  puntarenas = L.marker([9.966667, -84.833333]);
  puntarenas.bindTooltip("Puntarenas").openTooltip();
  puntarenas.addTo(mapa);

  // Conjunto de capas base
  var mapasBase = {
    "ESRI World Imagery": esri,
    OpenStreetMap: osm,
  };

  // Control de capas
  L.control.layers(mapasBase).addTo(mapa);
}