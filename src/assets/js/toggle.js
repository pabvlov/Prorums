var dark = localStorage.getItem('dark')
dark()
function dark() {
    if(dark == "1") {
        document.body.classList.remove('dark-theme');
    } else {
        document.body.classList.add('dark-theme');
    }

}