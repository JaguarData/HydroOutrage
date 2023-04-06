function textNodesUnder(node){
  var all = [];
  for (node=node.firstChild;node;node=node.nextSibling){
    if (node.nodeType==3) all.push(node);
    else all = all.concat(textNodesUnder(node));
  }
  return all;
}

var docRoot = document.documentElement;

if(docRoot)
{
	allTextNodes = textNodesUnder(docRoot);
	
	for(var idxTxtNode = 0; idxTxtNode < allTextNodes.length; idxTxtNode++)
	{
		var txtNode = allTextNodes[idxTxtNode];
		
		txtNode.nodeValue=txtNode.nodeValue.replace(/outage/g,'outrage');
		txtNode.nodeValue=txtNode.nodeValue.replace(/Outage/g,'Outrage');
		txtNode.nodeValue=txtNode.nodeValue.replace(/outage/gi,'oUtRaGe');
		
	}
}
