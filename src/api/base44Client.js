// Stub client - base44 removed. 
// If you need a real backend later, replace this with your API client.
export const db = {
  auth: {
    isAuthenticated: async () => false,
    me: async () => null,
  },
  entities: new Proxy({}, {
    get: () => ({
      filter: async () => [],
      get: async () => null,
      create: async () => ({}),
      update: async () => ({}),
      delete: async () => ({}),
    })
  }),
  integrations: {
    Core: {
      UploadFile: async () => ({ file_url: '' })
    }
  }
};

export const base44 = db;
export default db;