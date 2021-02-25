import { OnDestroy } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { formConfig } from '../../models/formConfig/formConfig';
import { Router } from '@angular/router';

@Component({
  selector: 'uf-template-list',
  template: `
  <div class="animated fadeIn">
    <div class="row">

      <div class="col-sm-12 col-lg-12">
        <div class="card"  >
            <div class="card-body p-3 clearfix">
              <div class="font-weight-bold">
                  <span>{{form.title}}</span>
                  <span class="float-right">

                  <div class="btn-group btn-group-sm" role="group" aria-label="Button group with nested dropdown">
                  <button type="button" class="btn btn-secondary">Build</button>

                  <div class="btn-group btn-group-sm" dropdown>
                  <button dropdownToggle type="button" class="btn btn-secondary dropdown-toggle"  aria-expanded="false">
                    Configure <span class="caret"></span>
                  </button>
                  <ul *dropdownMenu class="dropdown-menu " role="menu">
                    <li role="menuitem"><a class="dropdown-item" [routerLink]="['/templateDetail/detail',form.id]">View</a></li>
                    <li role="menuitem"><a class="dropdown-item" >Publish</a></li>
                    <li role="menuitem"><a class="dropdown-item" href="#">Delete</a></li>
                  </ul>
                  </div>
                </div>


                  </span>
              </div>
            <div>
              <span>
                <small>Last modified {{form.lastModified}}</small>
              </span>
              <span class="float-right">

              </span>
            </div>
            <label class="switch switch-sm switch-label switch-info">
              <input checked="" class="switch-input" type="checkbox">
                <span class="switch-slider" data-checked="On" data-unchecked="Off"></span>
            </label>
                 <!-- <div class="text-muted text-uppercase font-weight-bold font-xs">Income</div>-->
            </div>
        </div>


      </div><!--/.col-->

    </div>

  </div>


<hr>

<!--<pre><code>{{templateList | json}}</code></pre>-->

  `,
  styleUrls: ['./template-list.component.css']
})
export class TemplateListComponent implements OnInit {


  //@Input() templateList:formConfig[];
  @Input('templateList') form:formConfig[];


  constructor() {
    console.log(this.form);
  }


  ngOnInit(): void {

  }






}
