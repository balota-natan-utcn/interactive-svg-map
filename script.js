let lastClickedSvgPath = null;

function showPart(partName, clickedPathElement)
{
  //update displayed part name on the page
  const selectedPartNameSpan = document.getElementById('selectedPartName');
  selectedPartNameSpan.textContent = partName.charAt(0).toUpperCase() + partName.slice(1);

  console.log(`You chose ${partName}`);

  //remove highlight from previously clicked part, if any
  if (lastClickedSvgPath)
  {
    lastClickedSvgPath.classList.remove('active-cow-part');
  }

  //add highlight to the newly clicked part
  clickedPathElement.classList.add('active-cow-part');

  //store the reference to the current clicken part for next time
  lastClickedSvgPath = clickedPathElement;
}
