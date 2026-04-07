/**
 * Seed script — Destino Curitiba + Atrações
 *
 * Pré-requisitos:
 *   1. Strapi rodando em http://localhost:1337
 *   2. Token de API com permissão de criação em destinos e atracoes
 *      (Settings → API Tokens → Create full-access token)
 *
 * Uso:
 *   API_TOKEN=<seu_token> node scripts/seed-curitiba.mjs
 */

const BASE_URL = process.env.STRAPI_URL ?? 'http://localhost:1337';
const TOKEN    = process.env.API_TOKEN;

if (!TOKEN) {
  console.error('❌  Defina a variável de ambiente API_TOKEN antes de executar.');
  process.exit(1);
}

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${TOKEN}`,
};

async function post(path, body) {
  const res = await fetch(`${BASE_URL}${path}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ data: body }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`POST ${path} → ${res.status}: ${text}`);
  }
  return res.json();
}

// ── Dados ────────────────────────────────────────────────────────────────────

const destino = {
  nome: 'Curitiba',
  slug: 'curitiba',
  regiao: 'sul',
  estado: 'Paraná',
  slug_estado: 'parana',
  aeroporto: 'Aeroporto Internacional Afonso Pena',
  alta_temporada: 'Abril a Setembro',
  fuso_horario: 'Horário de Brasília (UTC-3)',
  voltagem: '110V',
  seo_title: 'Viagem para Curitiba - Guia de Turismo completo | Zupper',
  seo_description:
    'Planeje sua viagem para Curitiba com o guia completo da Zupper. Saiba quando ir, o que fazer, onde ficar e como chegar na capital paranaense.',
  descricao_geral:
    'Curitiba é uma cidade ótima para quem quer fazer um turismo mais urbano e calmo. O destino tem uma das melhores infraestruturas do país, ideal para seus moradores, e também muito boa para quem quer turistar. Venha conhecer mais e descubra tudo que fazer em Curitiba!',
  quando_ir:
    'A cidade de Curitiba é famosa por às vezes ter as quatro estações do ano dentro de um único dia. A variação de clima torna difícil prever se haverá chuva ou sol, por isso é importante estar sempre preparado. Com isso em mente, se você quer diminuir o risco de ficar encharcado pela chuva, os meses de abril a setembro são os menos úmidos do ano, apesar de também serem os mais frios. Se você prefere temperaturas mais altas, Curitiba não fica menos bonita no verão, o único problema é que você deve usar mais seu guarda-chuvas. Caso queira ainda mais calma ao andar pelas ruas de Curitiba, visitar durante feriados ou férias é uma das melhores estratégias, uma vez que os moradores da cidade costumam viajar para o litoral nesses dias.',
  o_que_fazer:
    'Curitiba é um ótimo destino para aqueles que procuram uma cidade bonita e calma, com várias paisagens urbanas e históricas para conhecer. É um lugar tranquilo e muito bem equipado para receber os viajantes, não vai faltar o que fazer em Curitiba!\n\nUm dos cartões postais da cidade é o Jardim Botânico, em particular a casa de vidro, um parque com muitas flores e verde por todo lado. Porém Curitiba tem vários outros parques fantásticos que oferecem experiências completamente diferentes, como o Parque Barigui, que é famoso pelo outro ícone da cidade: as capivaras.\n\nAlguns outros parques que precisam estar no seu cronograma são o Bosque Alemão, com construções lindas e várias referências ao povo germânico. O Bosque Papa João Paulo II, famoso pelo Memorial da Imigração Polonesa. E por fim, o Parque Tingui que traz homenagem aos povos indígenas originários da terra onde fica a cidade hoje e onde fica o Memorial Ucraniano.\n\nSe você quiser conhecer a parte mais tradicional da cidade, precisa visitar o Centro Histórico. Você poderá ver a história de Curitiba refletida na arquitetura dos prédios. Vale a pena reservar um domingo para visitar a Feira do Largo da Ordem, onde você vai encontrar bastante artesanato e comidas deliciosas. E falando em comida, você não pode passar por Curitiba sem visitar o Mercado Municipal. Fundado em 1958, até hoje é um dos grandes pontos de encontro dos curitibanos, com várias opções de restaurantes e quiosques.\n\nA cidade tem vários museus para quem quer mergulhar de cabeça na história e cultura do local. Um dos principais é o Museu Oscar Niemeyer, também conhecido como Museu do Olho. O espaço tem uma grande exibição de arte moderna e contemporânea, além de exposições temporárias de artistas renomados. Ainda falando de cultura, outro ponto turístico obrigatório, principalmente para quem ama arquitetura é a Ópera de Arame. Este teatro foi construído com estruturas metálicas e paredes transparentes no meio de um parque antigo. O lugar é palco de diversos eventos culturais, então procure a programação antes de programar seu passeio.\n\nSe você tem pouco tempo e quer conhecer as principais atrações da cidade, existe um passeio que vai te levar aos lugares mais famosos de Curitiba, a Linha Turismo. Este passeio é feito por um ônibus panorâmico, trazendo uma vista incrível de vários pontos turísticos.\n\nAgora, se você tiver um pouco mais de tempo, recomendamos que faça o passeio de trem de Curitiba à cidade turística de Morretes. A viagem pela locomotiva vai fazer você se sentir no século passado e você ainda pode voltar para a capital no mesmo dia.',
  onde_ficar:
    'Em Curitiba não existe uma região melhor para você se hospedar, o sistema hoteleiro e de transporte público é bem eficiente, então tudo depende mais do que você quer ao visitar a cidade. Uma das áreas mais populares são os Centros Histórico ou Cívico, essas áreas oferecem acesso mais fácil às principais atrações turísticas, além de uma ampla variedade de hotéis, restaurantes e comércio.\n\nO Batel é um dos bairros nobres de Curitiba, também um lugar muito desejado para os turistas que procuram uma noite bem agitada. A região tem vários bares, restaurantes e shoppings. É a localização ideal para quem quer ficar bem perto do entretenimento.\n\nSe você quer comer bem durante a sua visita, a Santa Felicidade vai ser a melhor escolha. O bairro é repleto da tradição italiana, trazida pelos imigrantes, e é famoso por ter vários restaurantes típicos e vinícolas.',
  como_chegar:
    'O Aeroporto Internacional Afonso Pena é a principal porta de entrada para os turistas que querem visitar Curitiba. Localizado em São José dos Pinhais, a aproximadamente 18 km do centro da cidade, recebe voos das principais capitais brasileiras e algumas internacionais.\n\nO acesso por rodovias também é bem fácil e acessível. E uma opção um pouco menos comum são as ferrovias, que ainda são de bastante importância para a região.',
};

const atracoes = [
  {
    nome: 'Jardim Botânico',
    slug: 'jardim-botanico',
    descricao:
      'Um dos cartões postais de Curitiba, famoso pela sua casa de vidro inspirada no Crystal Palace de Londres. O parque conta com jardins floridos, um museu botânico e trilhas cercadas de verde. Perfeito para um passeio tranquilo em família.',
    categoria: 'parque',
  },
  {
    nome: 'Parque Barigui',
    slug: 'parque-barigui',
    descricao:
      'Um dos maiores parques da cidade, famoso pela presença das capivaras que circulam livremente pelo local. Tem lago, pistas de caminhada, área para esportes e é muito frequentado pelos curitibanos nos fins de semana.',
    categoria: 'parque',
  },
  {
    nome: 'Ópera de Arame',
    slug: 'opera-de-arame',
    descricao:
      'Teatro único no mundo construído com estruturas metálicas e paredes transparentes, erguido no meio de um parque com lago e vegetação exuberante. É palco de diversos eventos culturais ao longo do ano.',
    categoria: 'entretenimento',
  },
  {
    nome: 'Museu Oscar Niemeyer',
    slug: 'museu-oscar-niemeyer',
    descricao:
      'Também conhecido como Museu do Olho devido ao seu formato arquitetônico marcante. Abriga uma grande coleção de arte moderna e contemporânea, além de exposições temporárias de artistas renomados nacionais e internacionais.',
    categoria: 'museu',
  },
  {
    nome: 'Centro Histórico',
    slug: 'centro-historico',
    descricao:
      'A região mais tradicional de Curitiba, onde a história da cidade está refletida na arquitetura dos prédios. Aos domingos acontece a famosa Feira do Largo da Ordem, com artesanato, gastronomia e muita cultura.',
    categoria: 'historico',
  },
  {
    nome: 'Mercado Municipal',
    slug: 'mercado-municipal',
    descricao:
      'Fundado em 1958, é um dos grandes pontos de encontro dos curitibanos. Repleto de opções gastronômicas, restaurantes e quiosques com produtos típicos da região. Imperdível para quem quer conhecer a culinária local.',
    categoria: 'gastronomia',
  },
  {
    nome: 'Bosque Alemão',
    slug: 'bosque-alemao',
    descricao:
      'Parque encantador com construções que remetem à cultura germânica trazida pelos imigrantes. Conta com a famosa trilha de Joãozinho e Maria, passando por uma torre com carrilhão e a casa da bruxa.',
    categoria: 'parque',
  },
  {
    nome: 'Parque Tingui e Memorial Ucraniano',
    slug: 'parque-tingui-memorial-ucraniano',
    descricao:
      'Parque que presta homenagem aos povos indígenas originários da região. Abriga o Memorial Ucraniano, uma bela construção em estilo típico ucraniano que celebra a imigração desse povo para o Paraná.',
    categoria: 'historico',
  },
  {
    nome: 'Linha Turismo',
    slug: 'linha-turismo',
    descricao:
      'Passeio de ônibus panorâmico que percorre os principais pontos turísticos de Curitiba. Ideal para quem tem pouco tempo e quer conhecer as principais atrações da cidade de forma prática e confortável.',
    categoria: 'entretenimento',
  },
  {
    nome: 'Passeio de Trem Curitiba-Morretes',
    slug: 'trem-curitiba-morretes',
    descricao:
      'Uma das mais belas viagens de trem do Brasil, percorrendo a Serra do Mar com paisagens deslumbrantes até chegar à histórica cidade de Morretes. É possível fazer o trajeto de ida de trem e voltar de carro no mesmo dia.',
    categoria: 'natureza',
  },
  {
    nome: 'Santa Felicidade',
    slug: 'santa-felicidade',
    descricao:
      'Bairro repleto da tradição italiana trazida pelos imigrantes. Famoso por seus restaurantes típicos e vinícolas. É o lugar ideal para quem quer se deliciar com a gastronomia italiana curitibana.',
    categoria: 'gastronomia',
  },
  {
    nome: 'Batel',
    slug: 'batel',
    descricao:
      'Um dos bairros mais nobres e agitados de Curitiba. Repleto de bares, restaurantes modernos e shoppings. É a região mais indicada para quem busca vida noturna e entretenimento na cidade.',
    categoria: 'entretenimento',
  },
];

// ── Execução ──────────────────────────────────────────────────────────────────

console.log('📍 Criando destino Curitiba...');
const { data: destinoCriado } = await post('/api/destinos', destino);
const destinoId = destinoCriado.id;
console.log(`✅ Destino criado (id=${destinoId})`);

console.log(`\n🏛️  Criando ${atracoes.length} atrações...`);
for (const atracao of atracoes) {
  const { data: atracaoCriada } = await post('/api/atracoes', {
    ...atracao,
    destino: destinoId,
  });
  console.log(`   ✅ ${atracaoCriada.attributes?.nome ?? atracao.nome} (id=${atracaoCriada.id})`);
}

console.log('\n🎉 Seed concluído com sucesso!');
