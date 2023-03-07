export function initSelect() {
  document.querySelectorAll('.select').forEach((select) => {
    const head = select.querySelector('.select__head');
    const body = select.querySelector('.select__body');
    const optionCol = Array.from(body.children);

    const item =
      body.querySelector('.is-selected .select__item') ||
      body.querySelector('.select__item');
    head.append(item.cloneNode(true));

    const selectOpen = () => {
      select.classList.add('is-open');
    };
    const selectClose = () => {
      select.classList.remove('is-open');
    };
    const selectIsOpen = () => body.classList.contains('is-open');

    const openCloseHandler = (e) => {
      if (!(e.type === 'click' || (e.type === 'keydown' && e.key === 'Enter')))
        return;

      if (selectIsOpen()) {
        selectClose();
        return;
      }
      selectOpen();
    };
    head.addEventListener('click', openCloseHandler);
    head.addEventListener('keydown', openCloseHandler);
    document.addEventListener('click', (e) => {
      if (select.contains(e.target) || !selectIsOpen()) return;

      selectClose();
    });

    optionCol.forEach((option) => {
      const changeHandler = (e) => {
        if (
          !(e.type === 'click' || (e.type === 'keydown' && e.key === 'Enter'))
        )
          return;

        head.innerHTML = null;

        const prevSelectedOption = body.querySelector('.is-selected');
        prevSelectedOption.classList.remove('is-selected')

        option.classList.add('is-selected')
        
        const currentSelectedItem = option.querySelector('.select__item');
        head.append(currentSelectedItem.cloneNode(true));
        
        selectClose();
      };
      option.addEventListener('click', changeHandler);
      option.addEventListener('keydown', changeHandler);
    });
  });
}
