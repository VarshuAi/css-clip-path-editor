
            const box = document.getElementById('clip-box');
            window.setClip = function(val) {
                box.style.clipPath = val;
            }
            setClip('polygon(50% 0%, 0% 100%, 100% 100%)');
        