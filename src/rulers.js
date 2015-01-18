;
(function () {
  'use strict';

  var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    width = w.innerWidth || e.clientWidth || g.clientWidth,
    height = Math.max(
      d.body.scrollHeight, d.documentElement.scrollHeight,
      d.body.offsetHeight, d.documentElement.offsetHeight,
      d.body.clientHeight, d.documentElement.clientHeight
    );

  function init() {
    bindUIEvents();

    g.style.paddingTop = '20px';
    g.style.paddingleft = '20px';

    createGrid();
  }

  function bindUIEvents() {}

  function createGrid() {
    var horRuler = document.createElement('div');
    horRuler.style.width = '100%';
    horRuler.style.height = '20px';
    horRuler.style.backgroundColor = '#ccc';
    horRuler.style.position = 'absolute';
    horRuler.style.top = 0;
    horRuler.style.left = '20px';
    horRuler.style.zIndex = '999999999';

    var verRuler = horRuler.cloneNode();
    verRuler.style.width = '20px';
    verRuler.style.left = 0;
    verRuler.style.top = '20px';
    verRuler.style.height = height + 'px';

    var horRulerInsContainer = document.createElement('div');
    horRulerInsContainer.style.width = '100%';
    horRulerInsContainer.style.height = '100%';
    horRulerInsContainer.style.position = 'relative';
    horRulerInsContainer.style.top = 0;
    horRulerInsContainer.style.left = 0;
    horRulerInsContainer.style.bottom = 0;
    horRulerInsContainer.style.right = 0;
    horRulerInsContainer.style.zIndex = '999999999';

    var i = 0;
    var horRulerItem = document.createElement('div');
    horRulerItem.style.width = '1px';
    horRulerItem.style.position = 'absolute';
    horRulerItem.style.bottom = 0;
    horRulerItem.style.zIndex = '999999999';
    horRulerItem.style.backgroundColor = '#000';
    for (i = 0; i < width; i = i + 10) {
      var el = horRulerItem.cloneNode();
      el.style.height = (i % 100 == 0) ? '10px' : '5px';
      el.style.left = i + 'px';

      horRulerInsContainer.appendChild(el);
    }
    horRuler.appendChild(horRulerInsContainer);

    var verRulerInsContainer = horRulerInsContainer.cloneNode();
    var verRulerItem = horRulerItem.cloneNode();
    verRulerItem.style.height = '1px';
    verRulerItem.style.right = 0;
    for (i = 0; i < height; i = i + 10) {
      var el = verRulerItem.cloneNode();

      el.style.width = (i % 100 == 0) ? '10px' : '5px';
      el.style.top = i + 'px';

      verRulerInsContainer.appendChild(el);
    }
    verRuler.appendChild(verRulerInsContainer);

    document.body.appendChild(horRuler);
    document.body.appendChild(verRuler);
  }

  return {
    init: init()
  };

})();