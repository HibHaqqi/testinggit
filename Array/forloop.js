const colours= ["black", "red", "blue", "yellow", "green"];

const brightcolor = (param) => {
    let newColors = [];
    for (let i = 0 ; i < param.length  ; i++) {
      console.log(param[i]);
        if(param[i] == "red" || param[i] == "blue" || 
        param[i] == "yellow" || param[i] == "green"
           
    ) {
        newColors.push(param[i]);
     }else{newColors.push()}
     
    }     
    return newColors;

};

console.log(brightcolor(colours));

