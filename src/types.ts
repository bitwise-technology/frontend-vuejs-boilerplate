export type User = {
  email: string;
  password: string;
};

export type AuthRequest = {
  email: string;
  password: string;
};

export type AuthResponse = {
  displayName: string;
  email: string;
  idToken: string;
  kind: string;
  localId: string;
  registered: boolean;
};
