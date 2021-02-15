// a set of buttons to control a form

<div>
  <button type="submit" className="button button__submit" onClick={(e) => {
    e.preventDefault();
    submitFormDetails();
  }}>
    <GelIcon
      className="gel-icon-inline"
      name="submit"
    />Submit
  </button>
  <button type="save" className="button button__save" onClick={(e) => {
    e.preventDefault();
    saveFormDetails();
  }}>
    <GelIcon
      className="gel-icon-inline"
      name="submit"
    />Save
  </button>
  <button type="reset" className="button button__reset" onClick={(e) => {
    e.preventDefault();
    resetFormDetails();
  }}>
    <GelIcon
      className="gel-icon-inline"
      name="reset"
    />Reset
  </button>
</div>