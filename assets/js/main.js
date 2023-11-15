const image =  document.querySelector("img"),
    input = document.getElementById("profile-imagen");
    input = addEventListener("change", () =>{
    image.src = URL.createObjectURL(input.files[0]);
    });