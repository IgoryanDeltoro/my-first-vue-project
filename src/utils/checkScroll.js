const checkScroll = () => {
  const elements = [...document.querySelectorAll('.orders-list')[0].children],
    fraction = 0.8;
  elements.map(el => {
    let element = el.getBoundingClientRect();
    let x = 0,
      y = 0,
      w = element.width,
      h = element.height,
      r, //right
      b, //bottom
      visibleX,
      visibleY,
      visible,
      parent;

    parent = el;
    while (parent && parent !== document.body) {
      x += parent.offsetLeft;
      y += parent.offsetTop;
      parent = parent.offsetParent;
    }

    r = x + parseInt(w);
    b = y + parseInt(h);

    visibleX = Math.max(
      0,
      Math.min(w, window.scrollX + window.innerWidth - x, r - window.scrollX)
    );
    visibleY = Math.max(
      0,
      Math.min(h, window.scrollY + window.innerHeight - y, b - window.scrollY)
    );
    visible = (visibleX * visibleY) / (w * h);

    if (visible > fraction) {
      el.classList.add('visible');
    } else if (visible < fraction) {
      el.classList.remove('visible');
    }
  });
};

export default checkScroll;
