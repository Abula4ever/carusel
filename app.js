const
    slide1 = document.querySelector('#line1'),
    slide2 = document.querySelector('#line2'),
    slide3 = document.querySelector('#line3'),
    slide4 = document.querySelector('#line4');

slide1.addEventListener('click',
    function html() {
        const slider = document.querySelector('.slider');
        slider.style.transform ='translateX(0%)'
        const activ = document.querySelector('#active');
        activ.style.transform = 'translateY(0%)'
    }
)

slide2.addEventListener('click',
    function css() {
        const slider = document.querySelector('.slider');
        slider.style.transform ='translateX(-25%)'
        const activ = document.querySelector('#active');
        activ.style.transform = 'translateY(100%)'
    }
)

slide3.addEventListener('click',
    function btstrp() {
        const slider = document.querySelector('.slider');
        slider.style.transform ='translateX(-50%)'
        const activ = document.querySelector('#active');
        activ.style.transform = 'translateY(200%)'
    }
)

slide4.addEventListener('click',
    function js() {
        const slider = document.querySelector('.slider');
        slider.style.transform ='translateX(-75%)'
        const activ = document.querySelector('#active');
        activ.style.transform = 'translateY(300%)'
    }
)