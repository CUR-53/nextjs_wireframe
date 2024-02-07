const pages = [
  {
    id: 1,
    title: 'Side 1',
    urlName: 'side-1',
    theme: 'theme_red',
    content: '<p>This is the content for side 1</p>',
    image: [
      {
        path: '/square_logo.png',
        alt: 'logo',
      },
      {
        path: '/square_logo.png',
        alt: 'logo',
      },
    ],
  },
  {
    id: 2,
    title: 'Side 2',
    urlName: 'side-2',
    theme: 'theme_red',
    content: '<p>This is the content for side 2</p>',
    image: [
      {
        path: '/square_logo.png',
        alt: 'Logo',
      },
      {
        path: '/square_logo.png',
        alt: 'Logo',
      },
    ],
  },
];

const qandas = [
  {
    id: 1,
    question: 'What is the capital of France?',
    answer: 'Paris',
  },
  {
    id: 2,
    question: 'What is the capital of Spain?',
    answer: 'Madrid',
  },
  {
    id: 3,
    question: 'What is the capital of Portugal?',
    answer: 'Lisbon',
  },
];

export const getPages = () => {
  return pages;
};

export const addQandas = (qanda) => {
  let newQanda = {
    id: 4,
    question: 'nyt spørsmål',
    answer: 'nyt svar',
  };
  qandas.push(newQanda);
  return qandas;
};

export const getQandas = () => {
  return qandas;
};

export const getPagesByUrlName = (urlName) => {
  return pages.filter((page) => page.urlName === urlName)[0];
};
