
  if (mobileMenu) {
    mobileMenu.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      mobileMenu.classList.toggle("is-active");
    });
  }


  const serviceCards = document.querySelectorAll(".services__card");
  const messageBox = document.querySelector("#contact-message");
  const serviceSelect = document.querySelector("#service_type");
  const contactSection = document.querySelector("#contact");

  if (serviceCards && messageBox && contactSection) {
    serviceCards.forEach(card => {
      card.addEventListener("click", () => {
        const msg = card.getAttribute("data-message");
        if (msg) messageBox.value = msg;

        
        const title = card.querySelector("h2") ? card.querySelector("h2").innerText.trim() : "";
        if (serviceSelect && title) {
        
          const opt = Array.from(serviceSelect.options).find(o => o.text.toLowerCase().includes(title.toLowerCase()));
          if (opt) serviceSelect.value = opt.value;
        }

        contactSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
    });
  }

  /* ================================
     REUSABLE SCROLL FUNCTION
  ================================== */
  function scrollToSection(section) {
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    if (navMenu && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      if (mobileMenu) mobileMenu.classList.remove("is-active");
    }
  }

  /* ================================
     NAVBAR LINKS (smooth scroll)
  ================================== */
  const heroSection = document.querySelector("#hero");
  const servicesSection = document.querySelector("#services");
  const aboutSection = document.querySelector("#about");
  const contactSec = document.querySelector("#contact");

  document.querySelectorAll(".navbar__links").forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href);
        scrollToSection(target);
      }
    });
  });

  document.querySelectorAll(".navbar__btn .button, .main__btn a").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const href = btn.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href);
        scrollToSection(target);
      }
    });
  });
 /* ================================
   SMOOTH SCROLL FOR ALL NAV LINKS
================================== */
document.querySelectorAll('.navbar__menu a, .navbar__btn a').forEach(link => {
  link.addEventListener("click", (e) => {
    const targetID = link.getAttribute("href");

    if (targetID && targetID.startsWith("#")) {
      e.preventDefault();

      const targetSection = document.querySelector(targetID);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }

      // Close mobile menu after click
      if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        mobileMenu.classList.remove("is-active");
      }
    }
  });
});


  /* ================================
     HOVER EFFECTS FOR SERVICE CARDS
  ================================== */
  serviceCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.05)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
    });
  });

  /* ================================
     WHATSAPP SENDING (two buttons)
  ================================== */
  // International numbers (no +, no spaces) for wa.me
  const waNumberSiraaj = "27832842639";
  const waNumberMajid = "27829574958";

  function buildWhatsAppMessage() {
    const name = document.getElementById("user_name").value.trim();
    const email = document.getElementById("user_email").value.trim();
    const phone = document.getElementById("user_phone").value.trim();
    const address = document.getElementById("user_address").value.trim();
    const service = document.getElementById("service_type").value;
    const message = document.getElementById("contact-message").value.trim();

    let lines = [];
    if (name) lines.push(`Name: ${name}`);
    if (email) lines.push(`Email: ${email}`);
    if (phone) lines.push(`Phone: ${phone}`);
    if (address) lines.push(`Address: ${address}`);
    if (service) lines.push(`Service: ${service}`);
    if (message) lines.push(`Message: ${message}`);

    // fallback if nothing
    if (lines.length === 0) lines.push("Hello, I would like to enquire about your services.");

    return encodeURIComponent(lines.join("\n"));
  }

  function openWhatsApp(number) {
    // Validate required fields (name/email/phone/service/message)
    const name = document.getElementById("user_name").value.trim();
    const email = document.getElementById("user_email").value.trim();
    const phone = document.getElementById("user_phone").value.trim();
    const service = document.getElementById("service_type").value;
    const message = document.getElementById("contact-message").value.trim();

    if (!name || !email || !phone || !service || !message) {
      alert("Please complete the required fields: Name, Email, Phone, Service Type and Message.");
      return;
    }

              var encoded = encodeURIComponent(whatsappMessage);
              var whatsappURL = "https://wa.me/27837189668?text=" + encoded;



              // OPEN WHATSAPP
              window.open(whatsappURL, "_blank");

              // SHOW POPUP
              var popup = document.getElementById("success-popup");
              popup.style.display = "flex";

              // HIDE POPUP AFTER 3 SECONDS
              setTimeout(() => {
                popup.style.display = "none";
              }, 3000);
  }

  function whatsapp() {

              // Get form values
              var name = document.getElementById("user_name").value;
              var email = document.getElementById("user_email").value;
              var phone = document.getElementById("user_phone").value;
              var address = document.getElementById("user_address").value;
              var serviceType = document.getElementById("service_type").value;
              var message = document.getElementById("contact-message").value;

              // Build WhatsApp message
              var whatsappMessage =
                "New Roofing Inquiry:%0A%0A" +
                "*Customer Name:* " + name + "%0A" +
                "*Email:* " + email + "%0A" +
                "*Phone:* " + phone + "%0A" +
                "*Address:* " + address + "%0A" +
                "*Service Type:* " + serviceType + "%0A" +
                "*Message:* " + message;

              var encoded = encodeURIComponent(whatsappMessage);
              var whatsappURL = "https://wa.me/27837189668?text=" + encoded;
  }
          
  /* ================================
     BACK TO TOP BUTTON
  ================================== */
  const backToTop = document.createElement("button");
  backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
  backToTop.classList.add("back-to-top");
  document.body.appendChild(backToTop);

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
  });

  /* ================================
     SMALL ACCESSIBILITY: close mobile menu when clicking outside
  ================================== */
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !mobileMenu.contains(e.target)) {
      if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        if (mobileMenu) mobileMenu.classList.remove('is-active');
      }
    }
  });

