import type { Schema, Attribute } from '@strapi/strapi';

export interface PagesNavigationExtensions extends Schema.Component {
  collectionName: 'components_pages_navigation_extensions';
  info: {
    displayName: 'navigation_extensions';
    icon: 'cloud';
    description: '';
  };
  attributes: {
    uht_contact: Attribute.Email &
      Attribute.Required &
      Attribute.DefaultTo<'info@uht-herisau.ch'>;
    jwbr_logo: Attribute.Media;
    jwbr_url: Attribute.String;
    insta_url: Attribute.String;
    facebook_url: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'pages.navigation-extensions': PagesNavigationExtensions;
    }
  }
}
