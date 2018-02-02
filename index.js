function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target');
}

function increaseRankBy(n) {
  var rankedLists = document.querySelectorAll('.ranked-list');
  for (var i = 0; i < rankedLists.length; i++) {
    rankedLists[i].innerHTML = (i + n).toString();
  }
}

function deepestChild() {
  var list = document.getElementById('grand-node')
  for (var i = 0; i < ; i++) {
    
  }
}
