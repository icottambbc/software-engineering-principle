// a set of buttons to control a form written with an abstraction

<div>
  <Button type={'submit'} onClick={submitFormDetails()}></Button>
  <Button type={'save'} onClick={saveFormDetails()}></Button>
  <Button type={'reset'} onClick={resetFormDetails()}></Button>
</div>

const Button = ({type, onClick}) => (
  <button type={type} className={`button button__${type}`} onClick={(e) => {
    e.preventDefault();
    onClick(e);
  }}>
    <GelIcon
      className="gel-icon-inline"
      name={`${type}`}
    />{type}
  </button>
)