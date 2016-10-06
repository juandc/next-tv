import React from 'react';
import Menu from './components/menu/index.jsx';
import Movies from './components/movies/index.jsx';
import page from 'page';

// $(document).ready(function(){
//   $('.modal-trigger').leanModal();
//   page('/', function (ctx, res) {
//     $('#modal').closeModal()
//   })
//   page('/movies/:id', function (ctx, res) {
//     $(`#modal${ctx.params.id}`).openModal({
//       complete: function() {
//         page('/')
//       }
//     })
//   })
//   page()
// });


function Template() {
  return (
    <section>
      <Menu />
      <Movies />
    </section>
  );
}

export default Template;
