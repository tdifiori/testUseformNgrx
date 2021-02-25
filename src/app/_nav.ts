import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },



  {
    name: 'Forms',
    title:true,
    icon: 'icon-puzzle',

  },
  {
    name: 'Templating',
    url: '/template',
    icon: 'icon-puzzle',
    variant: 'success',
    badge: {
      variant: 'info',
      text: 'NEW'
    },
    children: [
      {
        name: 'Template add',
        url: '/base/cards',
        icon: 'icon-puzzle'
      },
      {
        name: 'Template list',
        url: '/templateList',
        icon: 'icon-puzzle'
      }
    ]
  },




  {
    name: 'Disabled',
    url: '/dashboard',
    icon: 'icon-ban',
    attributes: { disabled: true },
  },

  {
    name: 'Try UserForm PRO',
    url: 'http://coreui.io/pro/angular/',
    class: 'mt-auto',
    icon: 'icon-layers',
    variant: 'danger',
    attributes: { rel: 'noopener' }
  }
];
