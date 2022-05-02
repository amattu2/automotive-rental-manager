/*
 * Produced: Mon May 02 2022
 * Author: Alec M.
 * GitHub: https://amattu.com/links/github
 * Copyright: (C) 2022 Alec M.
 * License: License GNU Affero General Public License v3.0
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

async function setup(event) {
  /**
   * List of URIs to available pages
   *
   * @var {Array}
   */
  const PAGES = [
    "assets/html/overview.html",
    "assets/html/vehicles.html",
  ];

  const loadPage = async (uri) => {
    if (!PAGES.includes(uri)) {
      return false;
    }

    // Load page
    const page = await fetch(uri);
    const html = await page.text();

    // Update page
    document.querySelector(".content.grid").outerHTML = html;
    document.querySelectorAll(".links .link-item.active").forEach(activeLink => activeLink.classList.remove("active"));
    document.querySelector(`.links .link-item[data-href="${uri}"`).classList.add("active");
  }

  // Events
  document.querySelectorAll('.links .link-item').forEach(element => {
    element.onclick = async (event) => {
      if (!PAGES.includes(element.getAttribute("data-href"))) {
        return false;
      }

      // Load page
      loadPage(element.getAttribute("data-href"));
    };
  });
  document.querySelectorAll('.profile .profile-item').forEach(element => {
    // Events
    element.onclick = (event) => event.stopPropagation();
  });
  document.querySelectorAll('.card-actions .card-action').forEach(element => {
    element.onclick = (event) => {
      document.getElementById('rental-edit-popover').classList.add('active');
    };
  });
  document.getElementById('profile-toggle').onclick = (event) => {
    document.getElementById('profile-toggle').classList.toggle('active');
  };
  document.getElementById('profile-toggle').onmouseenter = (event) => {
    if (document.getElementById('profile-toggle').classList.contains("active")) {
      return false;
    }
    document.getElementById('profile-expand').textContent = document.getElementById('profile-expand').textContent == "expand_more" ? "expand_less" : "expand_more";
  };
  document.getElementById('profile-toggle').onmouseleave = (event) => {
    if (document.getElementById('profile-toggle').classList.contains("active")) {
      return false;
    }
    document.getElementById('profile-expand').textContent = document.getElementById('profile-expand').textContent == "expand_more" ? "expand_less" : "expand_more";
  };
}

window.onload = (e) => setup(e);
