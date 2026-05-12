import $ from "jquery";

export function initJQueryLogic() {
  $(document).off("mouseenter mouseleave click input");
  $(window).off("scroll.portfolio");

  /* ========== HEADER HOVER ========== */
  $(document)
    .on("mouseenter", ".profile-img", function () {
      $(this)
        .stop(true, true)
        .css({
          animation: "none",
          "border-color": "#000000",
          "box-shadow": "0 0 20px rgba(0,0,0,0.7)",
        })
        .animate({ width: "190px", height: "190px" }, 400);
    })
    .on("mouseleave", ".profile-img", function () {
      $(this)
        .stop(true, true)
        .animate({ width: "160px", height: "160px" }, 400, function () {
          $(this).css({
            "border-color": "#e2b96f",
            "box-shadow": "none",
            animation: "float 2s ease-in-out infinite",
          });
        });
    });

  $(document)
    .on("mouseenter", ".social-link", function () {
      $(this).css({
        background: "rgba(226,185,111,0.15)",
        color: "#ffffff",
        "box-shadow": "0 0 15px rgba(226,185,111,0.4)",
        transform: "scale(1.05)",
      });
    })
    .on("mouseleave", ".social-link", function () {
      $(this).css({
        background: "transparent",
        color: "#e2b96f",
        "box-shadow": "none",
        transform: "scale(1)",
      });
    });

  /* ========== HOVER TEXTES ARABES (LE BUG EST RÉSOLU ICI) ========== */
  $(document)
    .on("mouseenter", ".slamalaykom, .salatAlaRasoul", function () {
      $(this).css({ color: "#FFD700", "text-shadow": "0 0 10px #FFD700" });
    })
    .on("mouseleave", ".slamalaykom, .salatAlaRasoul", function () {
      $(this).css({ color: "#e8e2d5", "text-shadow": "none" });
    });

  /* ========== HOVER VERSET CORANIQUE (LE BUG EST RÉSOLU ICI) ========== */
  $(document)
    .on("mouseenter", ".about-verse", function () {
      $(this).css({
        background: "rgba(226,185,111,0.12)",
        "border-color": "#e2b96f",
        "box-shadow": "0 0 30px rgba(226,185,111,0.25)",
        transform: "scale(1.03)",
      });
      $(this).find(".verse-ar").stop(true).animate({ fontSize: "1.8rem" }, 400);
      $(this).find(".verse-fr").css("color", "#ffffff");
      $(this)
        .find(".verse-ref")
        .css({ color: "#e2b96f", "letter-spacing": "3px" });
    })
    .on("mouseleave", ".about-verse", function () {
      $(this).css({
        background: "rgba(226,185,111,0.05)",
        "border-color": "rgba(226,185,111,0.2)",
        "box-shadow": "none",
        transform: "scale(1)",
      });
      $(this).find(".verse-ar").stop(true).animate({ fontSize: "1.5rem" }, 400);
      $(this).find(".verse-fr").css("color", "rgba(232,226,213,0.7)");
      $(this)
        .find(".verse-ref")
        .css({ color: "rgba(226,185,111,0.6)", "letter-spacing": "0px" });
    });

  /* ========== ACCORDÉON FORMATION ========== */
  $(document).on("click", ".acc-header", function () {
    var body = $(this).next(".acc-body");
    var arrow = $(this).find(".acc-arrow");
    var isOpen = body.is(":visible");

    $(".acc-body").slideUp(250);
    $(".acc-arrow").text("▼");

    if (!isOpen) {
      body.slideDown(250);
      arrow.text("▲");
    }
  });

  /* ========== ANIMATIONS AU SCROLL ========== */
  function isInViewport(el) {
    if (!el.length) return false;
    return el[0].getBoundingClientRect().top <= $(window).height() - 80;
  }

  function animateOnScroll() {
    $(".info-card").each(function (i) {
      if (isInViewport($(this)) && parseFloat($(this).css("opacity")) === 0) {
        var card = $(this);
        setTimeout(function () {
          card.animate({ opacity: 1 }, 400).css("transform", "translateY(0)");
        }, i * 150);
      }
    });

    $(".bio-text").each(function (i) {
      if (isInViewport($(this)) && parseFloat($(this).css("opacity")) === 0) {
        var bio = $(this);
        setTimeout(function () {
          bio.animate({ opacity: 1 }, 500).css("transform", "translateX(0)");
        }, i * 150);
      }
    });

    $(".skill-bar-wrap").each(function (i) {
      if (isInViewport($(this)) && parseFloat($(this).css("opacity")) === 0) {
        var wrap = $(this);
        var fill = wrap.find(".skill-fill");
        setTimeout(function () {
          wrap.animate({ opacity: 1 }, 300);
          fill.css("width", fill.data("width") + "%");
        }, i * 150);
      }
    });

    $(".soft-card").each(function () {
      if (isInViewport($(this)) && parseFloat($(this).css("opacity")) === 0) {
        var card = $(this);
        var n = parseInt(card.data("stars"));
        var starsHtml = "";
        for (var s = 1; s <= 5; s++) starsHtml += '<span class="star">★</span>';
        card.find(".stars-wrap").html(starsHtml);
        card.animate({ opacity: 1 }, 400);
        card.find(".star").each(function (i) {
          var star = $(this);
          setTimeout(function () {
            if (i < n) star.addClass("active");
          }, i * 120);
        });
      }
    });

    // CORRECTION DU FORMULAIRE ET DES VERSETS AU SCROLL
    $(".about-verse, .contact-card").each(function () {
      if (isInViewport($(this)) && parseFloat($(this).css("opacity")) === 0) {
        $(this).animate({ opacity: 1 }, 600);
        // On s'assure que le formulaire remonte bien à sa place
        if ($(this).hasClass("contact-card")) {
          $(this).css("transform", "translateY(0)");
        }
      }
    });
  }

  $(window).on("scroll.portfolio", animateOnScroll);
  setTimeout(animateOnScroll, 100);

  /* ========== FORMULAIRE DE CONTACT ========== */
  function validateEmail(val) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  }

  $(document).on("input", "#c-name, #c-email, #c-message", function () {
    $(this).removeClass("error-input").next(".c-error").text("");
  });

  $(document).on("click", "#contact-btn", function () {
    $(".c-error").text("");
    $(".error-input").removeClass("error-input");
    var valid = true;

    if (!$.trim($("#c-name").val())) {
      $("#c-name").addClass("error-input");
      $("#err-name").text("⚠ Requis");
      valid = false;
    }
    if (!validateEmail($.trim($("#c-email").val()))) {
      $("#c-email").addClass("error-input");
      $("#err-email").text("⚠ Email invalide");
      valid = false;
    }
    if ($.trim($("#c-message").val()).length < 10) {
      $("#c-message").addClass("error-input");
      $("#err-message").text("⚠ Min 10 car.");
      valid = false;
    }

    if (valid) {
      var btn = $(this);
      btn.prop("disabled", true).text("⏳ Envoi...");
      setTimeout(function () {
        $(".contact-field, #contact-btn").hide();
        $("#contact-success").fadeIn(400);
      }, 1000);
    }
  });

  $(document).on("click", "#contact-reset", function () {
    $("#c-name, #c-email, #c-message").val("");
    $("#contact-success").hide();
    $(".contact-field").show();
    $("#contact-btn")
      .prop("disabled", false)
      .text("✉ Envoyer le message")
      .show();
  });
}