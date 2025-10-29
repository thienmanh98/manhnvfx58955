"use script";

// GSAP timeline với ScrollTrigger và snap to labels
if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.container',
            pin: true,
            start: 'top top',
            end: '+=500',
            scrub: 1,
            snap: {
                snapTo: 'labels',
                duration: { min: 0.2, max: 3 },
                delay: 0.2,
                ease: 'power1.inOut'
            }
        }
    });
    tl.addLabel('start')
        .from('.box p', { scale: 0.3, rotation: 45, autoAlpha: 0 })
        .addLabel('color')
        .from('.box', { backgroundColor: '#28a92b' })
        .addLabel('spin')
        .to('.box', { rotation: 360 })
        .addLabel('end');
}

// Xử lý submit email
const btnSubmit = document.querySelector('.btn-submit');
if (btnSubmit) {
    btnSubmit.addEventListener('click', function (e) {
        e.preventDefault();
        const emailInput = document.getElementById('email');
        const emailValue = emailInput ? emailInput.value.toLowerCase() : '';
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const emailError = document.querySelector('.error-email');
        const sectionContent = document.querySelector('#personal-info ul.mt-40-info');
        const submitEmail = document.querySelector('.submit-email');
        if (regexEmail.test(emailValue)) {
            if (sectionContent) sectionContent.style.display = 'block';
            if (submitEmail) submitEmail.style.display = 'none';
            if (emailError) emailError.innerHTML = "";
        } else {
            if (emailError) {
                emailError.innerHTML = "Vui lòng nhập đúng định dạng email";
                emailError.style.color = 'red';
            }
        }
    });
}

// Ẩn/hiện thông tin cá nhân khi nhập đúng email 
function view_more(element) {
    const viewBtn = element.querySelector(".job-infor .view-button");
    if (viewBtn) viewBtn.style.visibility = "visible";
}
function view_out(element) {
    const viewBtn = element.querySelector(".job-infor .view-button");
    if (viewBtn) viewBtn.style.visibility = "hidden";
}
function view_click(element) {
    const viewLessBtn = element.querySelector(".view-button > button");
    if (viewLessBtn && viewLessBtn.innerHTML.includes("More")) {
        viewLessBtn.innerHTML = `<svg class="icon-view-less" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 10.586l4.95-4.95 1.414 1.414L12 13.414l-6.364-6.364 1.414-1.414z"/></svg> View Less`;
    } else if (viewLessBtn) {
        viewLessBtn.innerHTML = `View More`;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const formContainer = document.querySelector(".submit-email");
    const infoContainer = document.querySelector("#personal-info");
    const emailInput = document.getElementById("email");
    const btnSubmit = document.querySelector(".btn-submit");
    const emailError = document.querySelector(".error-email");

    // Ẩn thông tin cá nhân ban đầu
    if (infoContainer) infoContainer.classList.add("hide");

    if (btnSubmit) {
        btnSubmit.addEventListener("click", function (e) {
            e.preventDefault();
            const emailValue = emailInput ? emailInput.value.trim() : "";
            const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!regex.test(emailValue)) {
                if (emailError) {
                    emailError.textContent = "Vui lòng nhập đúng định dạng email";
                    emailError.style.color = "red";
                }
            } else {
                if (infoContainer) infoContainer.classList.remove("hide");
                if (formContainer) formContainer.classList.add("hide");
                if (emailError) emailError.textContent = "";
            }
        });
    }

    // Universal view-btn toggles for collapsible sections
    document.querySelectorAll('.view-btn').forEach(function(btn){
        btn.addEventListener('click', function(){
            const border = btn.closest('.border-1');
            if (!border) return;
            // prefer .collapsible-body, fallback to .skill-detail
            const body = border.querySelector('.collapsible-body') || border.querySelector('.skill-detail');
            if (!body) return;
            const isHidden = body.classList.contains('hide');
            if (isHidden) {
                body.classList.remove('hide');
                btn.textContent = 'View Less';
                btn.setAttribute('aria-expanded','true');
            } else {
                body.classList.add('hide');
                btn.textContent = 'View More';
                btn.setAttribute('aria-expanded','false');
            }
        });
    });
});