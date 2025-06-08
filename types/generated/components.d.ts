import type { Attribute, Schema } from '@strapi/strapi';

export interface AssetFile extends Schema.Component {
  collectionName: 'components_asset_files';
  info: {
    displayName: 'file';
    icon: 'file';
  };
  attributes: {
    file: Attribute.Media<'files'> & Attribute.Required;
    show_on_page: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface AssetPictureCollection extends Schema.Component {
  collectionName: 'components_other_picture_collections';
  info: {
    description: '';
    displayName: 'picture collection';
    icon: 'picture';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    pictures: Attribute.Media<'images', true> & Attribute.Required;
  };
}

export interface OtherNavigationButton extends Schema.Component {
  collectionName: 'components_other_navigation_buttons';
  info: {
    displayName: 'navigation button';
    icon: 'arrowRight';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    path: Attribute.String & Attribute.Required;
    show_on_page: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface OtherNavigationExtensions extends Schema.Component {
  collectionName: 'components_pages_navigation_extensions';
  info: {
    description: '';
    displayName: 'navigation extensions';
    icon: 'cloud';
  };
  attributes: {
    facebook_url: Attribute.String;
    insta_url: Attribute.String;
    jwbr_logo: Attribute.Media<'images'>;
    jwbr_url: Attribute.String;
    uht_contact: Attribute.Email &
      Attribute.Required &
      Attribute.DefaultTo<'info@uht-herisau.ch'>;
  };
}

export interface OtherParticipatingPrice extends Schema.Component {
  collectionName: 'components_registration_participating_prices';
  info: {
    description: '';
    displayName: 'Participating price';
    icon: 'seed';
  };
  attributes: {
    cost: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<10>;
    description: Attribute.RichText;
    label: Attribute.String & Attribute.Required;
    nr_of_prices_per_team: Attribute.Integer &
      Attribute.Required &
      Attribute.DefaultTo<7>;
    paidCat: Attribute.Relation<
      'other.participating-price',
      'oneToMany',
      'api::category.category'
    >;
    show_on_page: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

export interface OtherSeoData extends Schema.Component {
  collectionName: 'components_other_seo_data';
  info: {
    displayName: 'SEO Data';
    icon: 'command';
  };
  attributes: {
    allow_indexing: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    keywords: Attribute.String;
    preview_image: Attribute.Media<'images'>;
    title: Attribute.String & Attribute.Required;
  };
}

export interface RepresentationCategories extends Schema.Component {
  collectionName: 'components_representation_categories';
  info: {
    description: '';
    displayName: 'Categories';
    icon: 'brush';
  };
  attributes: {
    lead: Attribute.Component<'text.text-blocl'> & Attribute.Required;
  };
}

export interface RepresentationLanding extends Schema.Component {
  collectionName: 'components_representation_landings';
  info: {
    displayName: 'Landing';
    icon: 'code';
  };
  attributes: {
    caroussel_images: Attribute.Component<'asset.picture-collection'>;
    current_news: Attribute.Component<'text.text-blocl'>;
    sign_up_button: Attribute.Component<'other.navigation-button'> &
      Attribute.Required;
  };
}

export interface RepresentationMarkdown extends Schema.Component {
  collectionName: 'components_representation_markdowns';
  info: {
    description: '';
    displayName: 'Markdown';
    icon: 'medium';
  };
  attributes: {
    markdown: Attribute.Component<'text.text-blocl'>;
  };
}

export interface RepresentationOrganisation extends Schema.Component {
  collectionName: 'components_representation_organisations';
  info: {
    displayName: 'Organisation';
    icon: 'eye';
  };
  attributes: {
    ok_ressorts: Attribute.Component<'team.ok-ressort', true> &
      Attribute.Required;
  };
}

export interface RepresentationPictures extends Schema.Component {
  collectionName: 'components_representation_pictures';
  info: {
    displayName: 'Pictures';
    icon: 'television';
  };
  attributes: {
    collections: Attribute.Component<'asset.picture-collection', true> &
      Attribute.Required;
  };
}

export interface RepresentationRankings extends Schema.Component {
  collectionName: 'components_representation_rankings';
  info: {
    displayName: 'rankings';
    icon: 'brush';
  };
  attributes: {
    pdf: Attribute.Component<'asset.file'> & Attribute.Required;
  };
}

export interface RepresentationRegistration extends Schema.Component {
  collectionName: 'components_representation_registrations';
  info: {
    description: '';
    displayName: 'Registration';
    icon: 'cog';
  };
  attributes: {
    allow_registration: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    checks: Attribute.Component<'text.text-blocl', true> & Attribute.Required;
    faesslicup: Attribute.Component<'text.text-blocl'> & Attribute.Required;
    price: Attribute.Component<'other.participating-price'> &
      Attribute.Required;
  };
}

export interface RepresentationSponsors extends Schema.Component {
  collectionName: 'components_representation_sponsors';
  info: {
    displayName: 'Sponsors';
    icon: 'bulletList';
  };
  attributes: {
    lead: Attribute.Component<'text.text-blocl'> & Attribute.Required;
  };
}

export interface TeamCaptain extends Schema.Component {
  collectionName: 'components_team_captains';
  info: {
    displayName: 'captain';
    icon: 'user';
  };
  attributes: {
    email: Attribute.Email;
    firstname: Attribute.String;
    lastname: Attribute.String;
    phone: Attribute.String;
    place: Attribute.String;
    street: Attribute.String;
  };
}

export interface TeamOkRessort extends Schema.Component {
  collectionName: 'components_team_ok_ressorts';
  info: {
    displayName: 'OK Ressort';
    icon: 'volumeUp';
  };
  attributes: {
    icon: Attribute.Media<'images'> & Attribute.Required;
    members: Attribute.String & Attribute.Required;
    ressort_name: Attribute.String & Attribute.Required;
  };
}

export interface TeamTeammate extends Schema.Component {
  collectionName: 'components_team_teammates';
  info: {
    displayName: 'teammate';
    icon: 'user';
  };
  attributes: {
    firstname: Attribute.String;
    is_licenced: Attribute.Boolean;
    lastname: Attribute.String;
    year_of_birth: Attribute.Integer;
  };
}

export interface TextTextBlocl extends Schema.Component {
  collectionName: 'components_text_text_blocls';
  info: {
    description: '';
    displayName: 'text block';
    icon: 'file';
  };
  attributes: {
    label: Attribute.String;
    text: Attribute.RichText & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'asset.file': AssetFile;
      'asset.picture-collection': AssetPictureCollection;
      'other.navigation-button': OtherNavigationButton;
      'other.navigation-extensions': OtherNavigationExtensions;
      'other.participating-price': OtherParticipatingPrice;
      'other.seo-data': OtherSeoData;
      'representation.categories': RepresentationCategories;
      'representation.landing': RepresentationLanding;
      'representation.markdown': RepresentationMarkdown;
      'representation.organisation': RepresentationOrganisation;
      'representation.pictures': RepresentationPictures;
      'representation.rankings': RepresentationRankings;
      'representation.registration': RepresentationRegistration;
      'representation.sponsors': RepresentationSponsors;
      'team.captain': TeamCaptain;
      'team.ok-ressort': TeamOkRessort;
      'team.teammate': TeamTeammate;
      'text.text-blocl': TextTextBlocl;
    }
  }
}
