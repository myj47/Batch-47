
const mag = ["Alpha", "Bravo", "Charlie", "Tom", "Jerry"];
  
  
  function show_magicians(mag: string[]) {
    for (let i = 0; i < mag.length; i++) {
      console.log(mag[i]);
    }
}
  
  
  function make_great(mag: string[]){
    const modifiedMagicians: string[] = [];
  
    for (let i = 0; i < mag.length; i++) {
      modifiedMagicians.push("the Great " + mag[i]);
    }
  
    return modifiedMagicians;
  }
  
  
  console.log("Original Magician Names:");
  show_magicians(mag);
  
  
  const modifiedArray = make_great([...mag]);
  
  
  console.log("\nModified Magician Names:");
  show_magicians(modifiedArray);
  