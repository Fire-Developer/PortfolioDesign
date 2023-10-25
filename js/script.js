const stylesWitchertoggler = document.querySelector(".style-switcher-toggler ");
styleswitchertoggler.addEventListener("click",()=>{
   document.querySelector(".style-switcher").classList.toggler("open");
})

//hidestyle-switcher on scroll
window.addEventListener("scroll", ()=>{
    if(document.querySelector(".style-switcher"),classList.contains("open"))
    {
        document.querySelector(".style-switcher"),classList.remove("open");
    }
})
//theme colors
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(colors)
{
    alternateStyles.forEach((style)=>{
        if(colors === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true");
        }

    })
}
