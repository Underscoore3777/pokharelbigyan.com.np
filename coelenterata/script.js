  const slides = Array.from(document.querySelectorAll('.slide'));
  let index = 0;

  function update() {
    slides.forEach((s,i)=>{ 
      s.classList.remove('active','exit-left'); 
      if(i<index) s.classList.add('exit-left');
    });
    slides[index].classList.add('active');
    document.getElementById('pager').textContent = (index+1) + ' / ' + slides.length;
  }

  function next(){ if(index < slides.length-1){ index++; update(); }}
  function prev(){ if(index > 0){ index--; update(); }}

  document.addEventListener('keydown', e => {
    if(e.key==='ArrowRight') next();
    if(e.key==='ArrowLeft') prev();
  });

  document.getElementById('deck').addEventListener('click', e => {
    if(e.target.closest('button')) return;
    if(e.clientX > window.innerWidth/2) next(); else prev();
  });

  update();
