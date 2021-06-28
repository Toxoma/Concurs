document.addEventListener('DOMContentLoaded', () => {
   "use strict";

   try {
      let array = [];

      const getHeroes = (success, error) => {
         const request = new XMLHttpRequest();

         request.addEventListener('readystatechange', () => {
            if (request.readyState !== 4) {
               return;
            }
            if (request.status === 200) {
               success();
               array = request.response;

               console.log(array);
               array = array.filter(item => item.status === 'alive');
               console.log(array);

            } else {
               error(request.status);
            }
         });

         request.open('GET', 'dbHeroes.json');
         request.responseType = 'json';
         request.send();
      };

      getHeroes(
         () => {
            console.log('success');
         },
         (err) => {
            console.error(err);
         });

   } catch (error) {
      console.log(error);
   }

});