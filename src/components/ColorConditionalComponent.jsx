
 
const ColorConditionalComponent = (props) => {
    let{possible} = props;
    if(possible==="true"){
      return {
        style:{backgroundColor: 'green'}
    } 
  }
}

  export default ColorConditionalComponent;