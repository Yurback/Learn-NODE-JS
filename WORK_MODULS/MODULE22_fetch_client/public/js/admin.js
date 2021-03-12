const deleteProduct = (btn) => {
   const prodId = btn.parentNode.querySelector('[name=productId').value;
   const csrf = btn.parentNode.querySelector('[name=_csrf').value;

   const elementDel = btn.closest('article');

   fetch('product/' + prodId,  {
    method: 'DELETE',
    headers: {
        'csrf-token': csrf
    }
   })
   .then(result => {
       return result.json();
   })
   .then(data => {
        console.log(data);
        elementDel.parentNode.removeChild(elementDel);
   })
   .catch(err=>console.log(err));
}



