onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

$(window).load(function(){        
  $('#myModal').modal('show');
   }); 