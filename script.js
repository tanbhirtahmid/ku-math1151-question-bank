document.addEventListener("DOMContentLoaded", function () {
  var themeToggleBtn = document.getElementById('theme-toggle');
  var sunIcon = document.getElementById('theme-icon-sun');
  var moonIcon = document.getElementById('theme-icon-moon');

  function updateToggleIcons(theme) {
    if (theme === 'dark') {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    } else {
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    }
  }

  // Set default initial visual state of the button
  var currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  updateToggleIcons(currentTheme);

  // Toggle theme action
  themeToggleBtn.addEventListener('click', function () {
    var nextTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
    updateToggleIcons(nextTheme);
  });

  // Table of Contents Navigation Engine
  var tocNav = document.getElementById('toc-nav');
  var batchCountEl = document.getElementById('toc-batch-count');
  var mainContainer = document.querySelector('main');
  
  if (tocNav && mainContainer) {
    var structuralElements = mainContainer.querySelectorAll('[data-toc]');
    var currentYearContainer = null;
    var currentGroupContainer = null;
    var totalQuestions = 0;

    structuralElements.forEach(function (el) {
      var type = el.getAttribute('data-toc');
      var label = el.getAttribute('data-toc-label') || 'Item';
      var id = el.getAttribute('id');

      if (type === 'year') {
        var yearWrapper = document.createElement('div');
        yearWrapper.className = 'toc-year-group mb-2';

        var btn = document.createElement('button');
        btn.className = 'toc-year-btn';
        btn.setAttribute('aria-expanded', 'true');
        btn.innerHTML = '<span>' + label + '</span><span class="toc-arrow">&darr;</span>';

        var childrenDiv = document.createElement('div');
        childrenDiv.className = 'toc-children';
        
        var innerContainer = document.createElement('div');
        innerContainer.className = 'space-y-1 py-1';
        childrenDiv.appendChild(innerContainer);

        btn.addEventListener('click', function () {
          var expanded = btn.getAttribute('aria-expanded') === 'true';
          btn.setAttribute('aria-expanded', !expanded);
        });

        yearWrapper.appendChild(btn);
        yearWrapper.appendChild(childrenDiv);
        tocNav.appendChild(yearWrapper);

        currentYearContainer = innerContainer;
        currentGroupContainer = null;

      } else if (type === 'group' && currentYearContainer) {
        var groupLink = document.createElement('a');
        groupLink.className = 'toc-group-link';
        if (id) groupLink.setAttribute('href', '#' + id);
        groupLink.textContent = label;
        currentYearContainer.appendChild(groupLink);

        var subGroupDiv = document.createElement('div');
        subGroupDiv.className = 'space-y-0.5 ml-1';
        currentYearContainer.appendChild(subGroupDiv);
        currentGroupContainer = subGroupDiv;

      } else if (type === 'question') {
        totalQuestions++;
        var qLink = document.createElement('a');
        qLink.className = 'toc-q-link';
        if (id) qLink.setAttribute('href', '#' + id);
        qLink.textContent = label;

        if (currentGroupContainer) {
          currentGroupContainer.appendChild(qLink);
        } else if (currentYearContainer) {
          currentYearContainer.appendChild(qLink);
        }
      }
    });

    if (batchCountEl) {
      batchCountEl.textContent = totalQuestions;
    }

    // Scroll spy — highlight active question link
    var allQLinks = tocNav.querySelectorAll('.toc-q-link');
    if (allQLinks.length > 0) {
      var sections = [];
      allQLinks.forEach(function(link) {
        var href = link.getAttribute('href');
        if (href && href.charAt(0) === '#') {
          var target = document.getElementById(href.substring(1));
          if (target) {
            sections.push({ el: target, link: link });
          }
        }
      });

      function onScroll() {
        var scrollY = window.scrollY + 120;
        var active = null;
        for (var i = 0; i < sections.length; i++) {
          var sec = sections[i];
          if (sec.el.offsetTop <= scrollY) {
            active = sec;
          }
        }
        allQLinks.forEach(function(l) { l.classList.remove('active'); });
        if (active) {
          active.link.classList.add('active');
          var yearBtn = active.link.closest('.toc-children');
          if (yearBtn && yearBtn.previousElementSibling) {
            var btn = yearBtn.previousElementSibling;
            if (btn.getAttribute('aria-expanded') === 'false') {
              btn.click();
            }
          }
        }
      }

      window.addEventListener('scroll', onScroll);
      onScroll(); // Run initially to configure context positions
    }
  }
});
