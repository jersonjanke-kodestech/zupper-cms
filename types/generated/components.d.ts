import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentesCardItem extends Struct.ComponentSchema {
  collectionName: 'components_componentes_card_items';
  info: {
    displayName: 'Card Item';
    icon: 'train';
  };
  attributes: {
    Descricao: Schema.Attribute.Blocks;
    Imagem: Schema.Attribute.Media<'images'>;
    Titulo: Schema.Attribute.String;
  };
}

export interface ComponentesDicaItem extends Struct.ComponentSchema {
  collectionName: 'components_componentes_dica_items';
  info: {
    displayName: 'Dica Item';
    icon: 'bulletList';
  };
  attributes: {
    Item: Schema.Attribute.String;
    ItemDescricao: Schema.Attribute.Blocks;
    ItemTitulo: Schema.Attribute.String;
  };
}

export interface ComponentesIconeItem extends Struct.ComponentSchema {
  collectionName: 'components_componentes_icone_items';
  info: {
    displayName: 'Icone Item';
    icon: 'star';
  };
  attributes: {
    Descricao: Schema.Attribute.Blocks;
    icone: Schema.Attribute.Media<'images'>;
    Titulo: Schema.Attribute.String;
  };
}

export interface ComponentesInformacaoItem extends Struct.ComponentSchema {
  collectionName: 'components_componentes_informacao_items';
  info: {
    displayName: 'Informacao Item';
    icon: 'information';
  };
  attributes: {
    Descricao: Schema.Attribute.Blocks;
    TItulo: Schema.Attribute.String;
  };
}

export interface SecoesSecaoCards extends Struct.ComponentSchema {
  collectionName: 'components_secoes_secao_cards';
  info: {
    displayName: 'Se\u00E7\u00E3o Cards';
    icon: 'layout';
  };
  attributes: {
    Itens: Schema.Attribute.Component<'componentes.card-item', true>;
    Titulo: Schema.Attribute.String;
  };
}

export interface SecoesSecaoDicas extends Struct.ComponentSchema {
  collectionName: 'components_secoes_secao_dicas';
  info: {
    displayName: 'Se\u00E7\u00E3o Dicas';
    icon: 'bulletList';
  };
  attributes: {
    Imagem: Schema.Attribute.Media<'images'>;
    Itens: Schema.Attribute.Component<'componentes.dica-item', true>;
    Titulo: Schema.Attribute.String;
  };
}

export interface SecoesSecaoIcones extends Struct.ComponentSchema {
  collectionName: 'components_secoes_secao_icones';
  info: {
    displayName: 'Se\u00E7\u00E3o \u00CDcones';
    icon: 'information';
  };
  attributes: {
    Itens: Schema.Attribute.Component<'componentes.icone-item', true>;
  };
}

export interface SecoesSecaoInformacoes extends Struct.ComponentSchema {
  collectionName: 'components_secoes_secao_informacoes';
  info: {
    displayName: 'Se\u00E7\u00E3o Informa\u00E7\u00F5es';
    icon: 'file';
  };
  attributes: {
    Itens: Schema.Attribute.Component<'componentes.informacao-item', true>;
    Titulo: Schema.Attribute.String;
  };
}

export interface SecoesSecaoPrincipal extends Struct.ComponentSchema {
  collectionName: 'components_secoes_secao_principal';
  info: {
    displayName: 'Se\u00E7\u00E3o Principal';
    icon: 'code';
  };
  attributes: {
    Descricao: Schema.Attribute.Blocks;
    Titulo: Schema.Attribute.String;
    TituloAuxiliar: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'SEO';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaImage: Schema.Attribute.Media<'images'>;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    noIndex: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'componentes.card-item': ComponentesCardItem;
      'componentes.dica-item': ComponentesDicaItem;
      'componentes.icone-item': ComponentesIconeItem;
      'componentes.informacao-item': ComponentesInformacaoItem;
      'secoes.secao-cards': SecoesSecaoCards;
      'secoes.secao-dicas': SecoesSecaoDicas;
      'secoes.secao-icones': SecoesSecaoIcones;
      'secoes.secao-informacoes': SecoesSecaoInformacoes;
      'secoes.secao-principal': SecoesSecaoPrincipal;
      'shared.seo': SharedSeo;
    }
  }
}
