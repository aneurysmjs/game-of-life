
import  { useState, useEffect } from 'react';
type SelectedType = {
  id: string,
  text: string,
  value: any
};
type PropsType = {
  options: Array<SelectedType>,
  onSelect: (SelectedType) => void,
  buttonText: string,
};

function Select({ options, onSelect, buttonText = 'Select' }: PropsType) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleClick = (option): void => {
    onSelect(option);
    setSelected(option);
    toggle();
  };

  const toggle = (): void => {
    setOpen(!open);
  };

  const handle = (evt: Event): void => {
    let { target } = evt; // clicked element    
    if (open && !isItem(target)) {
      setOpen(false);
    }
  };

  const isItem = (el: EventTarget): boolean | void => {
    if (el instanceof HTMLButtonElement) {
      el.classList.contains('dropdown-item')
    }
  };

  useEffect(() => {
    
    document.addEventListener('click', handle);

    return () => {
      
      document.removeEventListener('click', handle);
    }
  });
  
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        aria-haspopup="true"
        aria-expanded="false"
        onClick={() => toggle()}
      >
        {selected ? selected.text : buttonText}
      </button>
      <div className={`dropdown-menu ${open ? 'show' : ''}`}>
        {options.map(option => (
          <button
            type="button"
            className="dropdown-item"
            key={option.id}
            onClick={() => handleClick(option)}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Select;
