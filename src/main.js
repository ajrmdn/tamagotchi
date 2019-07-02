import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tamagotchi } from './tamagotchi.js';

$(document).ready(function () {
  const pet = new Tamagotchi('Snarly');
  let sleepy;
  $('#start').click(function () {
    $('.game').show();
    $('.output').show();
    $('#form').hide();
    pet.setLevel();

    $('#play').click(function () {
      pet.play();
    });

    $('#feed').click(function () {
      pet.feed();
    });

    $('button').click(function () {
      clearTimeout(sleepy);
      sleepy = setTimeout(function () {
            pet.sleep();
          }, 10000);
    });

  });
});
