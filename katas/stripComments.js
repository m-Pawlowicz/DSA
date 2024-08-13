// id: 51c8e37cee245da6b40000bd
export function stripComments(text, markers) {
    if(!markers.length) {
      return text.trimEnd();
    }
    
    const parts = text.split("\n");
    markers = markers.map(m => m.padStart(2, '\\'));
    
    const regex = new RegExp(`(${markers.join("|")}).*`, "g");
    
    const partsWithoutCharsAfterMarker = parts.map(part => part.replace(regex, "").trimEnd())
    
    return partsWithoutCharsAfterMarker.join("\n")
  }