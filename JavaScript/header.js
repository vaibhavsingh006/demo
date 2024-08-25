let headerbutton = document.getElementsByClassName('header-button')[0];
let menu = document.getElementsByClassName('menu')[0];
// console.log(headerbutton)
headerbutton.addEventListener('click', function () {
    // console.log('me')
    headerbutton.classList.toggle('active-button');
    menu.classList.toggle('menu-visible');

})




// console.log('yo');
const linksList = document.getElementsByClassName('links-list-items');
const sideLinks = document.getElementsByClassName('header-side-links')

for (let i = 0; i < linksList.length; i++) {
    linksList[i].addEventListener('mouseover', function () {
        // console.log('yo');
        sideLinks[i].classList.add('onHover');
        linksList[i].classList.add('forAfter')

        linksList[i].addEventListener('mouseout', function () {
            sideLinks[i].classList.remove('onHover')
            linksList[i].classList.remove('forAfter')
        })
        // for (let b = 0; b < linksList.length; b++) {
        //     linksList[b].addEventListener('mouseout', function () {
        //         if (b != i) {
        //             linksList[b].classList.remove('onHover')
        //         }
        //     })
        // }
    })
}


const advanceClick = document.getElementsByClassName('advanceClick')
const advanceClickSo = document.getElementsByClassName('advanceClickSo')
const arrownavbar = document.getElementsByClassName('arrownavbar')

for (let i = 0; i < advanceClick.length; i++) {
    advanceClick[i].addEventListener('click', function () {
        advanceClickSo[i].classList.add('soNav')
        setTimeout(() => {
            arrownavbar[0].classList.add('opa')
        }, 300);
        arrownavbar[0].addEventListener('click', function () {
            // console.log('click')
            advanceClickSo[i].classList.remove('soNav')
            arrownavbar[0].classList.remove('opa')
        })
    })
}
// for (let b = 0; b < arrownavbar.length; b++) {
//     arrownavbar[b].addEventListener('click', function () {
//         console.log('click')
//         advanceClickSo[0].classList.remove('soNav')
//     })
// }

const header = document.getElementById('header');
const uper = document.getElementsByClassName('uper')[0]
const nonehai = document.getElementsByClassName('nonehai')[0]
header.addEventListener('mouseover', function () {
    uper.classList.add('removedActive')
    nonehai.classList.add('addedActive')
})
header.addEventListener('mouseout', function () {
    uper.classList.remove('removedActive')
    nonehai.classList.remove('addedActive')
})

{/* <script> */ }

// function changecolor() {
//     const header = document.getElementById('header');
//     if (window.pageYOffset > 150) {
//         header.classList.add('headerBg');
//         uper.classList.add('removeActive')
//         nonehai.classList.add('addActive')
//         setTimeout(() => {
//             header.classList.add('headertransition')
//         }, 2000);
//     } else {
//         header.classList.remove('headertransition')
//         header.classList.remove('headerBg');
//         uper.classList.remove('removeActive')
//         nonehai.classList.remove('addActive')
//     }
// }
// window.addEventListener('scroll', changecolor)
// </script>
