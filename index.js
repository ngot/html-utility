module.exports = {
  appendScript: function (doc, src, callback) {
    var head = doc.head || doc.body;
    var script = doc.createElement("script");
    script.type = "text/javascript";
    if (callback && typeof callback === 'function') {
      if (script.readyState)
        script.onreadystatechange = function () {
          if (this.readyState == 'loaded')
            callback()
        };
      else
        script.onload = callback;
    }
    script.src = src;
    head.appendChild(script);
  },
  appendLink: function (doc, href) {
    var head = doc.head;
    var link = doc.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = href;
    head.appendChild(link);
  }
};
