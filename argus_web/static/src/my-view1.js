/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@vaadin/vaadin-grid/vaadin-grid.js';
import '@vaadin/vaadin-grid/vaadin-grid-filter-column.js';

class MyView1 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <vaadin-grid aria-label="Filtering with Data Provider Example">
          <vaadin-grid-filter-column path="task_status"></vaadin-grid-filter-column>
          <vaadin-grid-column path="task_id"></vaadin-grid-column>
        </vaadin-grid>
      </div>
      
    <script>
      customElements.whenDefined('vaadin-grid').then(function() {
        const grid = document.querySelector('vaadin-grid');
    
        grid.size = 200;
        grid.dataProvider = function(params, callback) {
          const xhr = new XMLHttpRequest();
          xhr.onload = function() {
            const response = JSON.parse(xhr.responseText);
    
            // Number of items changes after filtering. We need
            // to update the grid size based on server response.
            grid.size = response.size;
    
            callback(response.result);
          };
    
          const index = params.page * params.pageSize;
          let url = 'http://gommu/api/recon/task/d18530a2-245b-4191-b74e-a61892972948/' + index + '&count=' + params.pageSize;
    
          // params.filters format: [{path: 'lastName', direction: 'asc'}, ...];
          params.filters.forEach(function(filter) {
            url += '&filters[' + filter.path + ']=' + encodeURIComponent(filter.value);
          });
    
          xhr.open('GET', url, true);
          xhr.send();
        };
      });
    </script>
    `;
  }
}

window.customElements.define('my-view1', MyView1);
