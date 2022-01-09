'use strict';

{
  const targets = document.querySelectorAll('img');

  function callback(entries , obs) {
    console.log(entries[0]);

    entries.forEach(entry => {
      
          if (!entry.isIntersecting) {
            return;
              } 
    
        entry.target.classList.add('move');
        obs.unobserve(entry.target);
    });
}
    const options = {
      threshold:1,
      rootMargin:'0px 0px -100px',
    };

    const observer = new IntersectionObserver(callback,options);
    targets.forEach(target =>{
      
      observer.observe(target);
    })
  // こちらはforEachを使う事によってスクロールによる画像表示を全ての画像に反映させている
}