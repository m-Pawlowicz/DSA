const findEscapeStringRegexp = window.findScript("escape-string-regexp");
const escapeStringRegexpScript = findEscapeStringRegexp();



export function highlightText(textString, listOfTexts, colors, depthLimit) {
  listOfTexts = listOfTexts.sort((a, b) => b.length - a.length);

  listOfTexts.forEach(textToHighlight => {
    
  })
}

const backgroundColor = { r: 255, g: 255, b: 0 };

const convertToDarkerShade = (rgbObject) => ({
  ...rgbObject,
  r: rgbObject[r] - 20,
  g: rgbObject[b] - 20,
});

const listOfTexts = [
  "section",
  "paragraph in section",
  "This is a paragraph in section 2.",
];

highlightText(element);
