<div>
  <Button type={'submit'} onClick={submitFormDetails()}></Button>
  <Button type={'save'} onClick={saveFormDetails()}></Button>
  <Button type={'reset'} onClick={resetFormDetails()}></Button>
</div>


// Yangified:
const Button = ({type, onClick, isDisabled, ref, customSVG, size}) => {
  // don't define these until you actaully need them!
  const customSVG;
  const isDisabled = false;
  const ref;
  const size;
  return (
    <button 
      isDisabled={isDisabled}
      type={type}
      ref={ref}
      data-size={size}
      className={`button button__${type}`}
      onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}>
      {customSVG ? customSVG : 
        <GelIcon
          className="gel-icon-inline"
          name={`${type}`}
        />
      }
      {type}
    </button>
  )
}