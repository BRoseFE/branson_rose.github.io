
function emailObscure() {
    document.querySelectorAll(".js-email").forEach((a) => {
    const user = a.getAttribute("data-user");
    const domain = a.getAttribute("data-domain");
    const address = `${user}@${domain}`;
    a.href = `mailto:${address}`;
    });
};

document.addEventListener("DOMContentLoaded", emailObscure);