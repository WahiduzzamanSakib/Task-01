const btn = document.getElementById("followBtn")

btn.addEventListener("click", function () {

    if (followBtn.innerText === "Follow") {
        followBtn.innerText = "Unfollow";
        followBtn.classList.remove("bg-blue-500");
        followBtn.classList.add("bg-gray-500");
        alert("Followed Jhon Deo")
    } else {
        followBtn.innerText = "Follow";
        followBtn.classList.remove("bg-gray-500");
        followBtn.classList.add("bg-blue-500");
        alert("Unfollow Jhon Deo")
    }
});