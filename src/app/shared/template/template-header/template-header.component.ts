import { Component, OnInit, Input } from '@angular/core';
import { formConfig } from '../../../models/formConfig/formConfig';

@Component({
  selector: 'uf-template-header',
  template: `
  <div class="row">
  <div class="col-sm-12 col-lg-12">
    <div class="card card-accent-primary" >
        <div class="card-body p-3 clearfix">
          <div class="font-weight-bold">
              <span>  </span> {{header.title}}
              <span class="float-right">
                  <div class="btn-group btn-group-sm" role="group" aria-label="Button group with nested dropdown">

                  <div class="btn-group btn-group-sm" dropdown>
                  <button dropdownToggle type="button" class="btn btn-secondary dropdown-toggle"  aria-expanded="false">
                    Configure <span class="caret"></span>
                  </button>
                  <ul *dropdownMenu class="dropdown-menu " role="menu">
                    <li role="menuitem"><a class="dropdown-item" [routerLink]="['/']">Modify</a></li>
                    <li role="menuitem"><a class="dropdown-item" href="#">Publish</a></li>
                    <li role="menuitem"><a class="dropdown-item" href="#">Delete</a></li>
                  </ul>
                  </div>
                </div>
              </span>
          </div>
        <div>
          <span>
            <small>Last modified ( )</small> {{header.lastModified}}
          </span>
          <img src="assets/img/avatars/3.jpg" class="image-avatar" alt="admin@bootstrapmaster.com"/>
          <span class="float-right"></span>
        </div>
                <i class="fa fa-eye fa-lg mt-4"></i>
        </div>
    </div>
  </div><!--/.col-->
</div>
  `,
  styleUrls: ['./template-header.component.css']
})
export class TemplateHeaderComponent implements OnInit {
  @Input() header:formConfig;

  constructor() { }

  ngOnInit(): void {
  }

}
