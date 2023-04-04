const mainPage=document.querySelector('.main-page');
const loginPage=document.querySelector('.login-page');
const mainBtn=document.querySelectorAll('.main-btn');
const btnTop=document.querySelector('.btn-top')
const newsFeedPage=document.querySelector('.feeds-page');
const loginModal=document.querySelector('.login-modal');
const modalCloseBtn=document.querySelector('.login-modal i');
const loginFormBtn=document.querySelector('.login-form-btn');
const postBtn=document.querySelector('.post-btn');
const modalWrapper=document.querySelector('.modal-wrapper');
const modal=document.querySelector('.modal');
const modalPostX=document.querySelector('.modal-header i');
const modalInput=document.querySelector('.modal-input');
const modalPostBtn=document.querySelector('.modal-header button');
const modalAdd=document.querySelector('.modal-icons span');
const user=document.querySelector('.user');
const sidebar=document.querySelector('.sidebar');
const sidebarWrapper=document.querySelector('.sidebar-wrapper');
const xSidebar=document.querySelector('.sidebar-header i');
const toggle=document.querySelector('.toggle');
const circle=document.querySelector('.circle');
const darkElement1=document.querySelectorAll('.dark-mode-1');
const darkElement2=document.querySelectorAll('.dark-mode-2');
const lightColor=document.querySelectorAll('.light-cl');
const darkBorder=document.querySelectorAll('.border');




for(let x=0;x<mainBtn.length;x++){
    mainBtn[x].addEventListener('click',()=>{
        mainPage.style.display='none';
        loginPage.style.display='grid';
    })
}

btnTop.addEventListener('click',()=>{
    const userInfo=document.querySelector('.user-info');
    const password=document.querySelector('.password');

    if(userInfo.value !=="" && password.value !==""){
        mainPage.style.display='none';
        newsFeedPage.style.display='grid';
    }else{
        mainPage.style.display='none';
        loginPage.style.display='grid'; 
        loginModal.style.display='block';
    }
})

modalCloseBtn.addEventListener('click',()=>{
    loginModal.style.display='none';
})

loginFormBtn.addEventListener('click',()=>{
    const loginUserInfo=document.querySelector('.login-user-info');
    const loginPassword=document.querySelector('.login-password');

    if(loginUserInfo.value !=="" && loginPassword.value !==""){
        loginPage.style.display='none'; 
        newsFeedPage.style.display='grid';
    }else{
        loginModal.style.display='block';
    }
})

postBtn.addEventListener('click',()=>{
    modal.style.display='block';
    modalWrapper.classList.add('modal-wrapper-applied')
})
modalPostX.addEventListener('click',()=>{
    modal.style.display='none';
    modalWrapper.classList.remove('modal-wrapper-applied')
})

const changeOpacity=y=>{
        modalPostBtn.style.opacity=y;
        modalAdd.style.opacity=y;   
}
modalInput.addEventListener('keypress',()=>{
    if(modalInput.value !==""){
        changeOpacity(1);
    }
});
modalInput.addEventListener('blur',()=>{
    if(modalInput.value ===""){
        changeOpacity(0.5);
    }
})
 
user.addEventListener('click',()=>{
    sidebar.classList.add('sidebar-display');
    sidebarWrapper.classList.add('sidebar-wrapper-display');
})

xSidebar.addEventListener('click',()=>{
    sidebar.classList.remove('sidebar-display');
    sidebarWrapper.classList.remove('sidebar-wrapper-display');
})

//dark mode
toggle.addEventListener('click',()=>{
    circle.classList.toggle('move');
    Array.from(darkElement1).map((darkEl1)=>{
        darkEl1.classList.toggle('dark-1');
    });
    Array.from(darkElement2).map((darkEl2)=>{
        darkEl2.classList.toggle('dark-2');
    });
    Array.from(lightColor).map((lightCl)=>{
        lightCl.classList.toggle('light');
    });
    Array.from(darkBorder).map((darkB)=>{
        darkB.classList.toggle('border-color');
    });
})