import type { Schema, Attribute } from '@strapi/strapi';

export interface TextTextBlocl extends Schema.Component {
  collectionName: 'components_text_text_blocls';
  info: {
    displayName: 'text block';
    icon: 'file';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    text: Attribute.RichText & Attribute.Required;
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
    lastname: Attribute.String;
    year_of_birth: Attribute.Integer;
    is_licenced: Attribute.Boolean;
  };
}

export interface TeamOkRessort extends Schema.Component {
  collectionName: 'components_team_ok_ressorts';
  info: {
    displayName: 'OK Ressort';
    icon: 'volumeUp';
  };
  attributes: {
    ressort_name: Attribute.String & Attribute.Required;
    members: Attribute.String & Attribute.Required;
    icon: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface TeamCaptain extends Schema.Component {
  collectionName: 'components_team_captains';
  info: {
    displayName: 'captain';
    icon: 'user';
  };
  attributes: {
    firstname: Attribute.String;
    lastname: Attribute.String;
    street: Attribute.String;
    place: Attribute.String;
    phone: Attribute.String;
    email: Attribute.Email;
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

export interface RepresentationRegistration extends Schema.Component {
  collectionName: 'components_representation_registrations';
  info: {
    displayName: 'Registration';
    icon: 'cog';
    description: '';
  };
  attributes: {
    tournament_start_date: Attribute.Date & Attribute.Required;
    tournament_end_date: Attribute.Date & Attribute.Required;
    tournament_edition_nr: Attribute.Integer & Attribute.Required;
    allow_registration: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    faesslicup: Attribute.Component<'text.text-blocl'> & Attribute.Required;
    checks: Attribute.Component<'text.text-blocl', true> & Attribute.Required;
    price: Attribute.Component<'other.participating-price'> &
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

export interface RepresentationMarkdown extends Schema.Component {
  collectionName: 'components_representation_markdowns';
  info: {
    displayName: 'Markdown';
    icon: 'medium';
    description: '';
  };
  attributes: {
    markdown: Attribute.Component<'text.text-blocl'>;
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

export interface RepresentationCategories extends Schema.Component {
  collectionName: 'components_representation_categories';
  info: {
    displayName: 'Categories';
    icon: 'brush';
    description: '';
  };
  attributes: {
    lead: Attribute.Component<'text.text-blocl'> & Attribute.Required;
  };
}

export interface OtherParticipatingPrice extends Schema.Component {
  collectionName: 'components_registration_participating_prices';
  info: {
    displayName: 'Participating price';
    icon: 'seed';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    description: Attribute.RichText;
    show_on_page: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    nr_of_prices_per_team: Attribute.Integer &
      Attribute.Required &
      Attribute.DefaultTo<7>;
    cost: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<10>;
    paidCat: Attribute.Relation<
      'other.participating-price',
      'oneToMany',
      'api::category.category'
    >;
  };
}

export interface OtherNavigationExtensions extends Schema.Component {
  collectionName: 'components_pages_navigation_extensions';
  info: {
    displayName: 'navigation extensions';
    icon: 'cloud';
    description: '';
  };
  attributes: {
    uht_contact: Attribute.Email &
      Attribute.Required &
      Attribute.DefaultTo<'info@uht-herisau.ch'>;
    jwbr_logo: Attribute.Media<'images'>;
    jwbr_url: Attribute.String;
    insta_url: Attribute.String;
    facebook_url: Attribute.String;
  };
}

export interface OtherNavigationButton extends Schema.Component {
  collectionName: 'components_other_navigation_buttons';
  info: {
    displayName: 'navigation button';
    icon: 'arrowRight';
  };
  attributes: {
    show_on_page: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    label: Attribute.String & Attribute.Required;
    path: Attribute.String & Attribute.Required;
  };
}

export interface AssetPictureCollection extends Schema.Component {
  collectionName: 'components_other_picture_collections';
  info: {
    displayName: 'picture collection';
    icon: 'picture';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    pictures: Attribute.Media<'images', true> & Attribute.Required;
  };
}

export interface AssetFile extends Schema.Component {
  collectionName: 'components_asset_files';
  info: {
    displayName: 'file';
    icon: 'file';
  };
  attributes: {
    show_on_page: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    file: Attribute.Media<'files'> & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'text.text-blocl': TextTextBlocl;
      'team.teammate': TeamTeammate;
      'team.ok-ressort': TeamOkRessort;
      'team.captain': TeamCaptain;
      'representation.sponsors': RepresentationSponsors;
      'representation.registration': RepresentationRegistration;
      'representation.rankings': RepresentationRankings;
      'representation.pictures': RepresentationPictures;
      'representation.organisation': RepresentationOrganisation;
      'representation.markdown': RepresentationMarkdown;
      'representation.landing': RepresentationLanding;
      'representation.categories': RepresentationCategories;
      'other.participating-price': OtherParticipatingPrice;
      'other.navigation-extensions': OtherNavigationExtensions;
      'other.navigation-button': OtherNavigationButton;
      'asset.picture-collection': AssetPictureCollection;
      'asset.file': AssetFile;
    }
  }
}
