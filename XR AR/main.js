
/*
  main.js
  Simple UI logic + marker detection using A-Frame events.
  Replace the <a-box> with a glTF/GLB model for production, e.g. <a-entity gltf-model="#model" ...>
*/

document.addEventListener('DOMContentLoaded', () => {
  const btnScan = document.getElementById('btn-scan');
  const btnGallery = document.getElementById('btn-gallery');
  const btnInfo = document.getElementById('btn-info');

  const arSection = document.getElementById('ar-section');
  const gallerySection = document.getElementById('gallery-section');
  const infoSection = document.getElementById('info-section');

  const speciesList = document.getElementById('species-list');

  const marker = document.getElementById('marker');
  const speciesBox = document.getElementById('species-box');
  const label = document.getElementById('label');
  const labelText = document.getElementById('label-text');
  const infoCard = document.getElementById('info-card');
  const spName = document.getElementById('sp-name');
  const spDesc = document.getElementById('sp-desc');
  const spHabitat = document.getElementById('sp-habitat');
  const spStatus = document.getElementById('sp-status');

  // Example species dataset (replace with real data / JSON)
  const speciesData = [
    { id: 'rafflesia', name: 'Rafflesia arnoldii', desc: 'Bunga terbesar di dunia, parasit, mekar sebentar.', habitat: 'Hutan hujan Sumatra', status: 'Terancam' },
    { id: 'harimau', name: 'Harimau Sumatra', desc: 'Karnivora besar, endemik Sumatra.', habitat: 'Hutan dan semak', status: 'Kritis' }
  ];

  // Populate gallery
  speciesData.forEach(sp => {
    const li = document.createElement('li');
    li.textContent = sp.name + ' — ' + sp.status;
    speciesList.appendChild(li);
  });

  function hideAllSections(){ arSection.classList.add('hidden'); gallerySection.classList.add('hidden'); infoSection.classList.add('hidden'); }
  btnScan.addEventListener('click', ()=>{ hideAllSections(); arSection.classList.remove('hidden'); });
  btnGallery.addEventListener('click', ()=>{ hideAllSections(); gallerySection.classList.remove('hidden'); });
  btnInfo.addEventListener('click', ()=>{ hideAllSections(); infoSection.classList.remove('hidden'); });

  // Marker events (A-Frame)
  marker.addEventListener('markerFound', ()=>{
    // For demo, show first species info when marker found
    const sp = speciesData[0];
    speciesBox.setAttribute('visible','true');
    label.setAttribute('visible','true');
    labelText.setAttribute('value', sp.name);
    infoCard.classList.remove('hidden');
    spName.textContent = sp.name;
    spDesc.textContent = sp.desc;
    spHabitat.textContent = sp.habitat;
    spStatus.textContent = sp.status;
  });

  marker.addEventListener('markerLost', ()=>{
    speciesBox.setAttribute('visible','false');
    label.setAttribute('visible','false');
    infoCard.classList.add('hidden');
  });

  // Start with gallery visible
  hideAllSections();
  gallerySection.classList.remove('hidden');
});
