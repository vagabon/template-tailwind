export const AppConf = {
  VERSION: import.meta.env.VITE_REACT_APP_VERSION,
  TITLE: import.meta.env.VITE_WEBSITE_TITLE,
  IMAGE: import.meta.env.VITE_IMAGE,
  EMAIL_CONTACT: import.meta.env.VITE_EMAIL_CONTACT,
  API_URI: import.meta.env.VITE_API_URL,
  DISCORD_CLIENT_ID: import.meta.env.VITE_DISCORD_CLIENT_ID,
  IFRAME_URL: import.meta.env.VITE_IFRAME_URL,
  GOOGLE_CAPTCHA_ID: import.meta.env.VITE_GOOGLE_CAPTCHA_ID,
  GOOGLE_CLIENT_ID: import.meta.env.VITE_GOOGLE_CLIENT_ID,
  FACEBOOK_CLIENT_ID: import.meta.env.VITE_FACEBOOK_CLIENT_ID,
  STRIPE_API: import.meta.env.VITE_STRIPE_API,
  ANALYTICS_CLIENT_ID: import.meta.env.VITE_ANALYTICS,
  GOOGLE_ADS_CLIENT_ID: import.meta.env.VITE_GOOGLE_ADS,
  NEWSLETTER_API: 'https://assets.mailerlite.com/jsonp/938826/forms/120768376347821890/subscribe',

  VITE_FIREBASE_APIKEY: import.meta.env.VITE_FIREBASE_APIKEY,
  VITE_FIREBASE_AUTHDOMAIN: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
  VITE_FIREBASE_PROJECTID: import.meta.env.VITE_FIREBASE_PROJECTID,
  VITE_FIREBASE_STORAGEBUCKET: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
  VITE_FIREBASE_MESSAGINGSENDID: import.meta.env.VITE_FIREBASE_MESSAGINGSENDID,
  VITE_FIREBASE_APPID: import.meta.env.VITE_FIREBASE_APPID,
  VITE_FIREBASE_MEASUREMENTID: import.meta.env.VITE_FIREBASE_MEASUREMENTID,
  VITE_FIREBASE_PRIVATEKEY: import.meta.env.VITE_FIREBASE_PRIVATEKEY,

  FREE_NB_CHATBOT: 2,

  AVATARS_DEFAULT: 'bottts-neutral',
  AVATARS: [
    { id: 'bottts-neutral', libelle: 'Chatbot' },
    { id: 'adventurer-neutral', libelle: 'Aventurier' },
    { id: 'fun-emoji', libelle: 'Fun' },
    { id: 'icons', libelle: 'Icone' },
    { id: 'thumbs', libelle: 'Thumbs' },
  ],
  MODELS_DEFAULT: 'gpt-3.5-turbo',
  MODELS: [
    { id: 'gpt-3.5-turbo', libelle: 'gpt-3.5-free' },
    { id: 'gpt-3.5-turbo-16k-0613', libelle: 'gpt-3.5-premium (16k-0613)', premium: true },
    { id: 'open-mistral-7b', libelle: 'mistral-premium (7b)', premium: true },
    { id: 'open-mixtral-8x22b', libelle: 'mistral-premium (8x22b)', premium: true, hide: true },
    { id: 'mistral-small', libelle: 'mistral-small', premium: true, hide: true },
    { id: 'llama-7b-chat', libelle: 'llama-premium (2-70b)', premium: true, hide: true },
    { id: 'llama3-8b', libelle: 'llama3-8b', premium: true, hide: true },
    { id: 'llama3-70b', libelle: 'llama-3-premium (70b)', premium: true },
    { id: 'gemini-1.0-pro-vision-001', libelle: 'gemini-premium (1.0-pro-vision)', premium: true },
    { id: 'claude-3-haiku-20240307', libelle: 'clause-3-premium (haiku)', premium: true },
  ],
  LANGUAGE_DEFAULT: 'French',
  MAX_TOKENS_DEFAULT: 500,
};

export const appProps = {
  website: 'website',
  apiUrl: AppConf.API_URI,
  title: AppConf.TITLE,
  image: AppConf.IMAGE,
  email: AppConf.EMAIL_CONTACT,
};

export const footerProps = {
  links: [
    { label: 'Mentions légales', url: '/mentions' },
    { label: 'CGV', url: '/cgv' },
  ],
};

export const iframeChabotbots = [];
