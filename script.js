const wrapper=document.querySelector(".wrapper"),
qrInput=wrapper.querySelector(".form input"),
generateBtn= wrapper.querySelector(".form button"),
qrImg=wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click", ()=>{
    let Value=qrInput.value;
    if(!Value) return;
    generateBtn.innerText="Generating the Qr code...";
    // console.log(Value);
    qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${Value}`;
    qrImg.addEventListener("load", ()=>{
        wrapper.classList.add("active");
        generateBtn.innerText="Generate QR code";

    });
});

qrInput.addEventListener("keyup", ()=>{
    if(!qrInput.value){
        wrapper.classList.remove("active");
    }
});