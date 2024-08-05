const chooseColorButtons = document.querySelectorAll('.choose-color__button');
const contentItems = document.querySelectorAll('.content-item');

chooseColorButtons.forEach((button)=>{
    button.addEventListener('click', onChooseColorButtonClick)
})

function onChooseColorButtonClick(event){
    const target = event.currentTarget;
    const button = target.dataset.button;
    const activeContent = document.querySelectorAll(`.${button}`);

    chooseColorButtons.forEach((button)=>{
        button.classList.remove('choose-color__button-active');
    })

    target.classList.add('choose-color__button-active');

    contentItems.forEach((item)=>{
        item.classList.remove('content-item-active');
    })

    activeContent.forEach((item)=>{
        item.classList.add('content-item-active');
    })

}
