export type User = {
  displayName: string;
  email: string;
  idToken: string;
  localId: string;
};

export type AuthRequest = {
  email: string;
  password: string;
};

export type AuthResponse = {
  status: number | undefined;
  message?: string;
  data?: {
    displayName: string;
    email: string;
    idToken: string;
    kind: string;
    localId: string;
    registered: boolean;
  };
};
