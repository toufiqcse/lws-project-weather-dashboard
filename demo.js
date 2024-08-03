function extractEmailFromFooter() {
  try {
    let footer = document.querySelector(".elementor-icon-box-description");
    if (!footer) {
      console.error("Footer element not found");
      return null;
    }
    let emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    let footerText = footer.innerText;
    let emails = footerText.match(emailRegex);
    return emails ? emails[0] : null;
  } catch (error) {
    console.error("An error occurred:", error);
    return null;
  }
}
let email = extractEmailFromFooter();

console.log("Extracted email from footer:", email);
