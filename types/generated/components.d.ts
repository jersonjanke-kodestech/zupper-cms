import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentesCards extends Struct.ComponentSchema {
  collectionName: 'components_componentes_cards';
  info: {
    displayName: 'Cards';
    icon: 'train';
  };
  attributes: {
    Descricao: Schema.Attribute.Blocks;
    Imagem: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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

export interface ComponentesDicas extends Struct.ComponentSchema {
  collectionName: 'components_componentes_dicas';
  info: {
    displayName: 'Dicas';
  };
  attributes: {
    Imagem: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Itens: Schema.Attribute.Component<'componentes.dica-item', true>;
    Titulo: Schema.Attribute.String;
  };
}

export interface ComponentesIcones extends Struct.ComponentSchema {
  collectionName: 'components_componentes_icones';
  info: {
    displayName: 'Icones';
    icon: 'write';
  };
  attributes: {
    Descricao: Schema.Attribute.Blocks;
    icone: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Titulo: Schema.Attribute.String;
  };
}

export interface ComponentesInformacoes extends Struct.ComponentSchema {
  collectionName: 'components_componentes_informacoes';
  info: {
    displayName: 'Informacoes';
    icon: 'information';
  };
  attributes: {
    Descricao: Schema.Attribute.Blocks;
    TItulo: Schema.Attribute.String;
  };
}

export interface ComponentesPrincipal extends Struct.ComponentSchema {
  collectionName: 'components_componentes_principals';
  info: {
    displayName: 'Principal';
    icon: 'code';
  };
  attributes: {
    Descricao: Schema.Attribute.Blocks;
    Titulo: Schema.Attribute.String;
    TituloAuxiliar: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'componentes.cards': ComponentesCards;
      'componentes.dica-item': ComponentesDicaItem;
      'componentes.dicas': ComponentesDicas;
      'componentes.icones': ComponentesIcones;
      'componentes.informacoes': ComponentesInformacoes;
      'componentes.principal': ComponentesPrincipal;
    }
  }
}
