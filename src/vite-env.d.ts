/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly API_MAIN_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
